import FontAwesomeIcon from '@fortawesome/react-fontawesome';
// import PropTypes from 'prop-types';
import React from 'react';
import SectionContainer from '../components/SectionContainer';
import SectionHeader from '../components/SectionHeader';
import WhiteBox from '../components/WhiteBox';
import { rhythm } from '../utils/typography';

const summarySection = () => {
  const articles = [
    [
      'History',
      'Respons Loudspeakers founder Reidar Persson developed his passion for music when he started visiting Gothenburg Concert hall regularly in the 70s while he studied Chemistry In Gothenburg. This became such a frequent pleasure that he visited Gothenburg Concert hall up to two times a week and had a private seat there until 1980. He also enjoyed concerts frequently at: Snape Maltings Concert Hall - Aldeburgh, Royal Albert Hall-London, St. Johns Smith Square-London, Berwaldhallen-Stockholm, to name a few. During this period he also made recordings with an extremely modified Revox A77 tape recorder using different microphones. It was at this point that Reidar created a reference for true, natural sound and his knowledge of room acoustics.',
    ],
    [
      'Philosophy',
      `It's all about music
      We design loudspeakers to satisfy our own hunger for the most realistic reproduced sound possible. If we can make a living out of it, that's just a bonus Our sound philosophy is to reproduce the warmth, body and excitement of a live music performance. A loudspeaker should only mirror the recorded sound from the recording microphone and neither add nor subtract any sounds.`,
    ],
    [
      'Speakers',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus tristique lacus mollis pretium. Nunc lacinia nunc eu nulla accumsan, a dignissim lacus elementum.',
    ],
    [
      'Experience',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus tristique lacus mollis pretium. Nunc lacinia nunc eu nulla accumsan, a dignissim lacus elementum.',
    ],
    [
      'Extra paragraph 1',
      'Cras volutpat diam ac nibh fringilla, vitae facilisis diam sollicitudin. Pellentesque eleifend odio neque, nec finibus eros pellentesque id',
    ],
    [
      'Extra paragraph 2',
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
      color: 'rgba(56,59,64,0.54)',
      marginRight: rhythm(1 / 8),
    },
    title: {
      fontWeight: 'bold',
      borderBottom: '1px dotted rgba(0,0,0,0.3)',
      marginBottom: rhythm(0.5),
    },
    button: {
      background: '#fff',
      border: '5px solid rgba(56,59,64,0.54)',
      borderRadius: '7px',
      boxShadow:
        '0 1px 3px 0 rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 2px 1px -1px rgba(0,0,0,.12)',
      color: 'rgba(56,59,64)',
      display: 'block',
      margin: '60px auto 0',
      maxWidth: '100%',
      outline: 'none',
      padding: '15px 0',
      width: '300px',
      ':hover': {
        background: 'rgba(56,59,64,0.54)',
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

      {/* <button
        css={styles.button}
        onClick={() => props.setCurrentModal('CONTACT')}
      >
        Contact
      </button> */}
    </SectionContainer>
  );
};

/* summarySection.propTypes = {
  setCurrentModal: PropTypes.func.isRequired,
}; */

export default summarySection;
