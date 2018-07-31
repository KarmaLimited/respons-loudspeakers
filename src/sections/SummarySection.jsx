import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import SectionContainer from '../components/SectionContainer';
import SectionHeader from '../components/SectionHeader';
import WhiteBox from '../components/WhiteBox';
import { rhythm } from '../utils/typography';

const summarySection = props => {
  const articles = [
    [
      'artiklar/test 1',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus tristique lacus mollis pretium. Nunc lacinia nunc eu nulla accumsan, a dignissim lacus elementum.',
    ],
    [
      'artiklar/test 2',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus tristique lacus mollis pretium. Nunc lacinia nunc eu nulla accumsan, a dignissim lacus elementum.',
    ],
    [
      'artiklar/test 3',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus tristique lacus mollis pretium. Nunc lacinia nunc eu nulla accumsan, a dignissim lacus elementum.',
    ],
    [
      'artiklar/test 4',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus tristique lacus mollis pretium. Nunc lacinia nunc eu nulla accumsan, a dignissim lacus elementum.',
    ],
    [
      'artiklar/test 5',
      'Cras volutpat diam ac nibh fringilla, vitae facilisis diam sollicitudin. Pellentesque eleifend odio neque, nec finibus eros pellentesque id',
    ],
    [
      'artiklar/test 6',
      'estibulum quam augue, feugiat a tortor in, efficitur rhoncus diam. Suspendisse id aliquam nulla. Nulla sapien sem, fermentum eget ultrices eu, pulvinar ac lacus. Etiam at leo elementum, blandit mauris id, mollis sem. Quisque maximus, nisi ut laoreet pharetra, ante libero scelerisque justo, at blandit nunc nulla vitae ante. Duis eu vulputate lorem. Integer quis malesuada mauris. Mauris eget lorem eros.',
    ],
  ];

  const styles = {
    container: {
      display: 'grid',
      gridGap: rhythm(1.5),
      gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
      margin: 'auto',
      maxWidth: '700px',
      padding: rhythm(1.5),
    },
    caret: {
      color: '#6292F1',
      marginRight: rhythm(1 / 8),
    },
    title: {
      fontWeight: 'bold',
      borderBottom: '1px dotted rgba(0,0,0,0.3)',
      marginBottom: rhythm(0.5),
    },
    button: {
      background: '#fff',
      border: '5px solid #6292F1',
      borderRadius: '7px',
      boxShadow:
        '0 1px 3px 0 rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 2px 1px -1px rgba(0,0,0,.12)',
      color: '#6292F1',
      display: 'block',
      margin: '60px auto 0',
      maxWidth: '100%',
      outline: 'none',
      padding: '15px 0',
      width: '300px',
      ':hover': {
        background: '#6292F1',
        color: '#fff',
        cursor: 'pointer',
      },
    },
  };

  return (
    <SectionContainer id="summary">
      <SectionHeader text="About" colorNumber="1" />

      <WhiteBox css={styles.container}>
        {articles.map(article => (
          <li key={article[0]}>
            <div css={styles.title}>
              <FontAwesomeIcon icon="caret-square-right" style={styles.caret} />
              {article[0]}
            </div>
            <div>{article[1]}</div>
          </li>
        ))}
      </WhiteBox>

      <button
        css={styles.button}
        onClick={() => props.setCurrentModal('CONTACT')}
      >
        Contact
      </button>
    </SectionContainer>
  );
};

summarySection.propTypes = {
  setCurrentModal: PropTypes.func.isRequired,
};

export default summarySection;
