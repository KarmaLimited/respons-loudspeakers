import PropTypes from 'prop-types';
import React from 'react';
import SectionContainer from '../components/SectionContainer';
import SectionHeader from '../components/SectionHeader';
import svgFacebook from '../icons/footer-facebook.svg';
import svgForm from '../icons/footer-form.svg';
import svgGithub from '../icons/footer-github.svg';
import svgMail from '../icons/footer-mail.svg';
import svgPhone from '../icons/footer-phone.svg';
import svgPin from '../icons/footer-pin.svg';
// import svgLogo from '../icons/logo.svg';
import { rhythm } from '../utils/typography';
import siteConfig from '../../data/SiteConfig';

const FooterSection = props => {
  const footerInfo = [
    {
      imgPath: svgForm,
      description: 'Contact form',
      onClick: () => props.setCurrentModal('CONTACT'),
    },
    {
      imgPath: svgMail,
      description: 'email@email.com',
      link: 'mailto:email@email.com',
    },
    {
      imgPath: svgFacebook,
      description: 'facebook',
      link: 'https://www.facebook.com/',
    },
    {
      imgPath: svgGithub,
      description: 'Code',
      link: 'https://github.com/2lach/respons-loudspeakers',
    },
    {
      imgPath: svgPhone,
      description: '070 123 123',
      link: 'tel:070123123123',
    },
    {
      imgPath: svgPin,
      description: 'Here are we',
      link: 'https://goo.gl/maps/V5G3DJSYy8u',
    },
  ];

  const styles = {
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      margin: 'auto',
      maxWidth: '850px',
    },
    link: {
      color: '#fff',
      textDecoration: 'none',
    },
    ItemContainer: {
      alignItems: 'center',
      cursor: 'pointer',
      display: 'flex',
      height: rhythm(5 / 2),
    },
    image: {
      width: '30px',
      height: '30px',
      marginLeft: '40px',
    },
    description: {
      color: '#fff',
      marginBottom: 0,
      marginLeft: rhythm(1 / 2),
      width: '15rem',
      textTransform: 'capitalize',
    },
  };

  return (
    <SectionContainer id="contact" colorNumber="2" skew skewFillBottom>
      <SectionHeader text="Contact Us" colorNumber="2" />

      <div css={styles.container}>
        {footerInfo.map(info => (
          <a
            href={info.link || null}
            onClick={info.onClick || null}
            css={styles.link}
            target="_blank"
            rel="noopener noreferrer"
            key={info.description}
          >
            <div css={styles.ItemContainer}>
              <img src={info.imgPath} css={styles.image} alt="" />
              <p css={styles.description}>{info.description}</p>
            </div>
          </a>
        ))}
        <div className="copyright" css={styles.container}>
          <p>{siteConfig.copyright}</p>
        </div>
      </div>
    </SectionContainer>
  );
};

FooterSection.propTypes = {
  setCurrentModal: PropTypes.func.isRequired,
};

export default FooterSection;
