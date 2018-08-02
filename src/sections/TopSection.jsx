import React from 'react';
import { Link as LinkForScroll } from 'react-scroll';
import arrowSvg from '../icons/arrow.svg';
import logoWhite from '../icons/logo-white.svg';
import logoWhiteGrey from '../icons/logo-grey-and-white.png';
import topImageSmall from '../images/violinist.png';
import topImageLarge from '../images/arindam-mahanta-217437-unsplash.jpg';

const TopSection = () => {
  const width =
    document.documentElement.clientWidth || document.body.clientWidth;

  let coverImage;
  let logoSvg;

  if (width <= 420) {
    coverImage = topImageSmall;
    logoSvg = logoWhiteGrey;
  } else {
    coverImage = topImageLarge;
    logoSvg = logoWhite;
  }
  const styles = {
    container: {
      alignItems: 'center',
      background: `url("${coverImage}") no-repeat center center`,
      backgroundSize: 'cover',
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      justifyContent: 'center',
      paddingTop: '40px',
    },
    logo: {
      width: '450px',
      maxWidth: '80%',
    },
    description: {
      color: '#fff',
      textAlign: 'center',
    },
    arrow: {
      bottom: 0,
      cursor: 'pointer',
      marginBottom: '54px',
      position: 'absolute',
      width: '45px',
      animation: 'downArrow 0.8s ease-out infinite',
    },
  };

  return (
    <section id="top" css={styles.container}>
      <h1 css={styles.logo}>
        <img src={logoSvg} alt="responsloudspeaker" />
      </h1>
      <div css={styles.description}>
        {/*   <a
          href="https://goo.gl/maps/HjyoY7NJ9j92"
          css={{ color: 'white' }}
          target="_blank"
          rel="noopener noreferrer"
  >
          <IconExtLink color="#fff" />
        </a> */}

        <br />
        <br />
      </div>
      <LinkForScroll
        to="summary"
        smooth
        duration={150}
        offset={-50}
        css={styles.arrow}
      >
        <img src={arrowSvg} alt="alt" />
      </LinkForScroll>
    </section>
  );
};

export default TopSection;
