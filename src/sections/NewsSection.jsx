import Link from 'gatsby-link';
import React from 'react';
import SectionContainer from '../components/SectionContainer';
import SectionHeader from '../components/SectionHeader';

const newsSection = () => {
  const styles = {
    link: {
      background: '#fff',
      border: '5px solid rgba(56,59,64,0.54)',
      borderRadius: '7px',
      boxShadow:
        '0 1px 3px 0 rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 2px 1px -1px rgba(0,0,0,.12)',
      color: 'rgba(56,59,64,0.54)',
      display: 'block',
      margin: 'auto',
      maxWidth: '100%',
      outline: 'none',
      padding: '15px 0',
      textAlign: 'center',
      textDecoration: 'none',
      width: '300px',
      ':hover': {
        background: 'rgba(56,59,64,0.54)',
        color: '#fff',
        cursor: 'pointer',
      },
    },
  };

  return (
    <SectionContainer id="news">
      <SectionHeader text="To Newspage" colorNumber="1" />
      <Link to="/news/" css={styles.link}>
        Respons Loudspeaker News
      </Link>
    </SectionContainer>
  );
};

export default newsSection;
