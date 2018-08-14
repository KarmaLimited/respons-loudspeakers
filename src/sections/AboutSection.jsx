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
      "The RESPONS LOUDSPEAKERS's founder Reidar Persson developed his passion for music when he started visiting Gothenburg Concert hall regularly in the 70's while he studied Chemistry In Gothenburg. This became such a frequent pleasure that he visited Gothenburg Concert hall up to two times a week and had a private seat there until 1980. He also enjoyed concerts frequently at: Snape Maltings Concert Hall - Aldeburgh, Royal Albert Hall-London, St. John's Smith Square-London, Berwaldhallen-Stockholm, to name a few. During this period he also made recordings with an extremely modified Revox A77 tape recorder using different microphones. It was at this point that Reidar created a reference for true, natural sound and his knowledge of room acoustics .",
    ],
    [
      'Philosophy',
      `It's all about music
      We design loudspeakers to satisfy our own hunger for the most realistic reproduced sound possible. If we can make a living out of it, that's just a bonus.`,
    ],
    [
      'Sound Philosophy',
      'Our sound philosophy is to reproduce the warmth, body and excitement of a live music performance. A loudspeaker should only mirror the recorded sound from the recording microphone and neither add nor subtract any sounds. All frequencies down to the bass have to be reproduced at the correct level. Loudspeakers today usually exaggerate the treble and midrange, which results in a false tonal balance and poor dynamics. At first this can sound impressive in the hi-fi store, but listening to this type of exaggerated midrange and treble will in the end result in listening fatigue. Without a correct bass reproduction, any type of loudspeaker will lack the warmth and body of natural sounds because something fundamental is missing. Every model we manufacture down to our 2- way designs, has to have the same natural character and bass response.',
    ],
    [
      'Design Philosophy',
      `It takes many years of listening and testing to acquire the knowledge of how to get a perfect, naturally balanced sound from loudspeakers. The crossover design is without a doubt the hardest one to master. But perfection can't be achieved without the best sounding components. This is why we only use hand-built, point-to-point wired crossovers with 1% tolerance propylene capacitors, temperature stable resistors, custom internal wires and air cored inductors. 
      The baffles on our loudspeakers are as small as possible and covered with an absorbing felt to minimize baffle reflections. The cabinets are made to be as quiet as possible because if the cabinet resonates it adds extra sound to the music. We only use speaker units with soft suspension, which are able to recreate every little detail from the recordings. This is not possible with a stiff suspension. We also have the ambition to offer upgrade options on older loudspeaker models as new developments are made - if it's physically possible.`,
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
