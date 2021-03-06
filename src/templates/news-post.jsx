/* eslint-disable react/no-danger */

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import Link from 'gatsby-link';
import 'prismjs/themes/prism-tomorrow.css';
import PropTypes from 'prop-types';
import React from 'react';
// import Helmet from 'react-helmet';
import SEO from '../components/SEO';
import SectionContainer from '../components/SectionContainer';
import SectionHeader from '../components/SectionHeader';
import WhiteBox from '../components/WhiteBox';
import profileJpg from '../images/profile.jpg';
import { rhythm } from '../utils/typography';

const propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }).isRequired,
};

export default function newsPost(props) {
  const styles = {
    container: {
      maxWidth: '800px',
      margin: 'auto',
      animation: 'bottomToTop 0.15s ease-out',
    },
    boxInner: {
      padding: rhythm(1),
      paddingBottom: rhythm(2),
      lineHeight: '2rem',
      ' h2': {
        borderLeft: '10px solid #5883D9',
        margin: '4rem auto 1rem',
        paddingLeft: '10px',
        textAlign: 'left',
      },
      ' h3': {
        borderBottom: '1px dotted rgba(0,0,0,0.5)',
        fontSize: '1.2rem',
        margin: '3rem auto 1rem',
        paddingBottom: '5px',
        textAlign: 'left',
      },
      ' h4': {
        marginBottom: '0.5rem',
        marginTop: '2rem',
      },
      ' ul > li': {
        listStyleType: 'initial',
      },
      ' ol > li': {
        listStyleType: 'decimal',
      },
      ' ul': {
        paddingLeft: '25px',
      },
      ' table': {
        width: 'auto',
      },
      ' a': {
        color: '#262626',
      },
      ' p': {
        marginBottom: '1rem',
        marginTop: '1rem',
      },
      ' pre': {
        margin: '1rem auto !important',
        ' a': {
          color: '#7ec699', // prevent a link color to be browser's default
        },
      },
    },
    backButton: {
      background: '#fff',
      border: '2px solid rgba(56,59,64,0.54)',
      borderRadius: '7px',
      boxShadow:
        '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)',
      color: 'rgba(56,59,64,0.54)',
      display: 'inline-block',
      padding: '5px 1rem',
      textDecoration: 'none',
      ':hover': {
        background: 'rgba(56,59,64,0.54)',
        color: '#fff',
        cursor: 'pointer',
      },
      ':first-child': {
        marginBottom: '2rem',
      },
      ':last-child': {
        marginTop: '2rem',
      },
      arrow: {
        width: '0.875em',
      },
    },
    link: {
      display: 'block',
      textDecoration: 'none',
      marginBottom: '2rem',
    },
    datetime: {
      color: '#999',
      display: 'block',
      marginBottom: '1rem',
    },
    title: {
      borderBottom: '1px dotted rgba(0,0,0,0.5)',
      marginBottom: '2rem',
      textAlign: 'left',
    },
    comments: {
      padding: rhythm(1),
      paddingBottom: 0,
      marginTop: '2rem',
      ' hr': {
        marginBottom: '2rem',
        marginTop: '2rem',
      },
    },
    footer: {
      display: 'flex',
      marginTop: '2rem',
      padding: '2rem',
      ' a': {
        color: '#262626',
      },
      '@media (max-width: 499px)': {
        flexDirection: 'column',
        ' img': {
          width: '100px',
          margin: '0 auto 2rem',
          borderRadius: '50%',
        },
        ' div p': {
          fontWeight: 'bold',
          marginBottom: '1rem',
          textAlign: 'center',
          textDecoration: 'none',
        },
        ' div p:last-child': {
          fontSize: '0.8rem',
        },
        ' p': {
          marginBottom: 0,
        },
      },
      '@media (min-width: 500px)': {
        display: 'flex',
        ' img': {
          height: '100px',
          marginRight: '2rem',
          borderRadius: '50%',
        },
        ' div p:first-child': {
          fontWeight: 'bold',
          marginBottom: '1rem',
        },
        ' div p:last-child': {
          fontSize: '0.8rem',
        },
        ' p': {
          marginBottom: 0,
        },
      },
    },
  };

  const post = props.data.markdownRemark;

  /* const disqusConfig = {
    url: `http://www.responsloudspeaker.com/news${post.fields.slug}`,
    identifier: `http://www.responsloudspeaker.com/news${post.fields.slug}`,
    title: post.frontmatter.title,
  }; */

  return (
    <SectionContainer colorNumber="1" isTop>
      <SectionHeader
        colorNumber="1"
        text="responsloudspeaker news"
        link="/news/"
      />

      <div css={styles.container}>
        <Link to="/news/" css={styles.backButton}>
          <FontAwesomeIcon icon="arrow-left" style={styles.backButton.arrow} />{' '}
          Back to Newspage
        </Link>

        <WhiteBox>
          <article css={styles.boxInner}>
            <time css={styles.datetime} dateTime={post.frontmatter.date}>
              {post.frontmatter.date.slice(0, 10)}
            </time>
            <h1 css={styles.title}>{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </article>
        </WhiteBox>

        <Link to="/">
          <WhiteBox>
            <footer css={styles.footer}>
              <img src={profileJpg} alt="profile" />
              <div>
                <p>Newspage</p>
                <p>Click here to go back</p>
              </div>
            </footer>
          </WhiteBox>
        </Link>

        <Link to="/news/" css={styles.backButton}>
          <FontAwesomeIcon icon="arrow-left" style={styles.backButton.arrow} />{' '}
          Back to Newspage
        </Link>
      </div>

      <SEO postNode={post} />

      {/* <Helmet
        script={[
          {
            innerHTML: `
              (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s); js.id = id;
                js.src = 'https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v2.12&appId=1597425033686344&autoLogAppEvents=1';
                fjs.parentNode.insertBefore(js, fjs);
              }(document, 'script', 'facebook-jssdk'));
            `,
          },
        ]}
      /> */}
    </SectionContainer>
  );
}

newsPost.propTypes = propTypes;

export const query = graphql`
  query newsPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      excerpt
      html
      fields {
        slug
      }
      frontmatter {
        title
        summary
        date
        dateModified
        thumbnail
      }
    }
  }
`;
