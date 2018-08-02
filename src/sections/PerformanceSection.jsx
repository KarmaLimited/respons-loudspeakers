import Link from 'gatsby-link';
import React from 'react';
import ReactTooltip from 'react-tooltip';
import IconExtLink from '../components/IconExtLink';
import SectionContainer from '../components/SectionContainer';
import SectionHeader from '../components/SectionHeader';
import WhiteBox from '../components/WhiteBox';
import speakerImage1 from '../images/Rityta 1.png';
import speakerImage2 from '../images/Grand1.png';
import speakerImage3 from '../images/grand-post-p2.png';
import { rhythm } from '../utils/typography';

let indexkeeper = 0;

const PerformanceSection = () => {
  const performances = [
    {
      name: 'grand 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper, velit et condimentum consequat, nibh tellus luctus lorem, at efficitur massa arcu sit amet quam.',
      speakerSpecs: [
        {
          /* eslint-disable */
          name: `Componentname${indexkeeper++}`,
          description: 'brand and useful for',
        },
        {
          name: `Componentname${indexkeeper++}`,
          description: 'brand and useful for',
        },
        {
          name: `Componentname${indexkeeper++}`,
          description: 'brand and useful for',
        },
        {
          name: `Componentname${indexkeeper++}`,
          description: 'brand and useful for',
        },
        {
          name: `Componentname${indexkeeper++}`,
          description: 'brand and useful for',
        },
        {
          name: `Componentname${indexkeeper++}`,
          description: 'brand and useful for',
        },
        {
          name: `Componentname${indexkeeper++}`,
          description: 'brand and useful for',
        },
        {
          name: `Componentname${indexkeeper++}`,
          description: 'brand and useful for',
        },
      ],
      webpageURL: 'http://www.responsloudspeaker.com',
      githubURL: 'https://github.com/junkboy0315/yuuni-web',
      newsPath: '/news/2018-04-09-JAMStackなWebサイトの作成/',
      imgPath: speakerImage3,
    },
    {
      name: 'grand 2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper, velit et condimentum consequat, nibh tellus luctus lorem, at efficitur massa arcu sit amet quam.',
      speakerSpecs: [
        {
          name: `Componentname${indexkeeper++}`,
          description: 'brand and useful for',
        },
        {
          name: `Componentname${indexkeeper++}`,
          description: 'brand and useful for',
        },
        {
          name: `Componentname${indexkeeper++}`,
          description: 'brand and useful for',
        },
        {
          name: `Componentname${indexkeeper++}`,
          description: 'brand and useful for',
        },
        {
          name: `Componentname${indexkeeper++}`,
          description: 'brand and useful for',
        },
        {
          name: `Componentname${indexkeeper++}`,
          description: 'brand and useful for',
        },
      ],
      webpageURL: 'http://split.responsloudspeaker.com',
      githubURL: 'https://github.com/junkboy0315/splitbills',
      imgPath: speakerImage2,
    },
    {
      name: 'grand 3',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper, velit et condimentum consequat, nibh tellus luctus lorem, at efficitur massa arcu sit amet quam.',
      speakerSpecs: [
        {
          name: `Componentname${indexkeeper++}`,
          description: 'brand and useful for',
        },
        {
          name: `Componentname${indexkeeper++}`,
          description: 'brand and useful for',
        },
      ],
      imgPath: speakerImage1,
    },
  ];

  const styles = {
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 350px))',
      gridGap: rhythm(2),
      justifyContent: 'center',
    },
    whiteBox: {
      padding: rhythm(1),
    },
    itemImage: {
      border: '1px solid #aaa',
      objectFit: 'cover',
      height: '160px',
      width: '100%',
    },
    itemTitle: {
      color: '#262626',
      display: 'block',
      fontWeight: 'bold',
      margin: '1rem 0',
      textDecoration: 'none',
    },
    description: {
      fontSize: '0.8rem',
      marginBottom: '0.8rem',
    },
    externalLink: {
      color: '#999',
      fontSize: '0.8rem',
      textDecoration: 'none',
      marginRight: '1rem',
      ':hover': {
        background: '#eee',
      },
    },
    speakerSpecsGrid: {
      borderTop: '1px dotted #999',
      display: 'grid',
      fontSize: '0.8rem',
      gridGap: '0.4rem',
      gridTemplateColumns: '1fr 1fr',
      marginTop: '0.8rem',
      paddingTop: '1rem',
      ' > span': {
        cursor: 'default',
      },
      ' > span::before': {
        content: '- ',
      },
    },
  };

  return (
    <SectionContainer id="performance">
      <SectionHeader text="Speakers" colorNumber="1" />
      <div css={styles.grid}>
        {performances.map(performance => (
          <WhiteBox key={performance.name} css={styles.whiteBox}>
            <a
              href={performance.webpageURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={performance.imgPath}
                css={styles.itemImage}
                alt={performance.name}
              />
            </a>

            <a
              href={performance.webpageURL}
              target="_blank"
              rel="noopener noreferrer"
              css={styles.itemTitle}
            >
              {performance.name}
              <IconExtLink />
            </a>

            <p css={styles.description}>{performance.description}</p>

            {performance.githubURL ? (
              <a
                href={performance.githubURL}
                target="_blank"
                rel="noopener noreferrer"
                css={styles.externalLink}
              >
                text
              </a>
            ) : (
              <div style={{ color: 'transparent' }}>_</div>
            )}

            {performance.newsPath && (
              <Link
                to={performance.newsPath}
                target="_blank"
                css={styles.externalLink}
              >
                News
              </Link>
            )}

            <ul css={styles.speakerSpecsGrid}>
              {performance.speakerSpecs.map(tech => (
                <span data-for={tech.name} data-tip key={tech.name}>
                  {tech.name}
                  <ReactTooltip id={tech.name} effect="solid">
                    {tech.description}
                  </ReactTooltip>
                </span>
              ))}
            </ul>
          </WhiteBox>
        ))}
      </div>
    </SectionContainer>
  );
};

export default PerformanceSection;
