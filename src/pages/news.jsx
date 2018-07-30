import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import SEO from '../components/SEO';
import SectionContainer from '../components/SectionContainer';
import SectionHeader from '../components/SectionHeader';
import WhiteBox from '../components/WhiteBox';
import rssSvg from '../icons/rss.svg';
import { rhythm } from '../utils/typography';

const propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.object,
  }).isRequired,
};

const newsPage = ({ data }) => {
  const styles = {
    container: {
      maxWidth: '600px',
      margin: 'auto',
      position: 'relative',
    },
    rssLink: {
      display: 'block',
      position: 'absolute',
      right: 0,
      top: '-2rem',
      ' img': {
        width: '1.5rem',
      },
    },
    boxInner: {
      display: 'flex',
      padding: rhythm(1),
      '@media (max-width: 450px)': {
        flexDirection: 'column',
      },
    },
    link: {
      display: 'block',
      textDecoration: 'none',
      marginBottom: '2rem',
    },
    title: {
      fontSize: '1.3rem',
      margin: 0,
      marginBottom: '1rem',
      textAlign: 'left',
    },
    summary: {
      color: '#262626',
      marginBottom: rhythm(2 / 3),
    },
    datetime: {
      color: '#999',
      display: 'block',
      fontSize: '0.8rem',
    },
  };

  const rssPath = '/rss.xml';

  return (
    <SectionContainer colorNumber="1" isTop>
      <SectionHeader colorNumber="1" text="responsloudspeaker news" />
      <div css={styles.container}>
        <a href={rssPath} css={styles.rssLink}>
          <img src={rssSvg} alt="rss" />
        </a>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Link
            to={`/news${node.fields.slug}`}
            css={styles.link}
            key={node.frontmatter.title}
          >
            <WhiteBox hover>
              <article css={styles.boxInner}>
                <div
                  css={{
                    background: `url("${
                      node.frontmatter.thumbnail
                    }") no-repeat center center`,
                    backgroundSize: 'cover',
                    flex: '0 0 100px',
                    border: '1px solid rgba(0,0,0,0.2)',
                    marginRight: '1rem',
                    '@media (max-width: 450px)': {
                      marginRight: 0,
                      marginBottom: '1rem',
                      flex: '0 0 150px',
                    },
                  }}
                />

                <div>
                  <h1 css={styles.title}>{node.frontmatter.title}</h1>
                  <div css={styles.summary}>{node.frontmatter.summary}</div>
                  <time css={styles.datetime} dateTime={node.frontmatter.date}>
                    {node.frontmatter.date.slice(0, 10)}
                  </time>
                </div>
              </article>
            </WhiteBox>
          </Link>
        ))}
      </div>

      <SEO
        metaData={{
          title: 'Respons loudspeaker news',
          description: 'rl news',
        }}
      />

      <Helmet
        link={[
          {
            rel: 'alternate',
            type: 'application/atom+xml',
            href: rssPath,
            title: 'RSS for Respons loudspeaker',
          },
        ]}
      />
    </SectionContainer>
  );
};

newsPage.propTypes = propTypes;

export default newsPage;

export const query = graphql`
  query newsPageQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            summary
            date
            thumbnail
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
