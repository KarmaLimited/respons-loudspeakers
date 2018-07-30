const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;

  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: '_posts/news' });

    createNodeField({
      node,
      name: 'slug',
      value: slug.toLowerCase(),
    });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                dateModified # rss用
              }
            }
          }
        }
      }
    `)
      .then(result => {
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          createPage({
            path: `/news${node.fields.slug}`,
            component: path.resolve('./src/templates/news-post.jsx'),
            context: {
              // Data passed to context is available in page queries as GraphQL variables.
              slug: node.fields.slug,
              modifiedDate: node.frontmatter.dateModified, // rssflow
            },
          });
        });

        resolve();
      })
      .catch(() => reject());
  });
};

module.exports = exports;
