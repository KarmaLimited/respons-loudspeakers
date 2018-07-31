import React from 'react';
import AgeCalculator from '../components/AgeCalculator';
import Hr from '../components/Hr';
// import IconExtLink from '../components/IconExtLink';
import SectionContainer from '../components/SectionContainer';
import SectionHeader from '../components/SectionHeader';
import WhiteBox from '../components/WhiteBox';
import profileJpg from '../images/profile.jpg';
import { rhythm } from '../utils/typography';

const ProfileSection = () => {
  const styles = {
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 350px))',
      gridGap: rhythm(2),
      justifyContent: 'center',
    },
    link: {
      color: '#262626',
    },
    whiteBox: {
      height: 'min-content',
      padding: rhythm(1),
      paddingTop: 0,
    },
    whiteBoxKeireki: {
      gridRowStart: 'span 2',
    },
    h3: {
      marginTop: rhythm(2),
      marginBottom: rhythm(1.5),
    },
    summaryPictureContainer: {
      marginBottom: rhythm(1.5),
      textAlign: 'center',
    },
    summaryPicture: {
      width: '150px',
      borderRadius: '50%',
    },
    summaryListItem: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: rhythm(1),
    },
    summaryItemName: {
      flex: 2,
      textAlign: 'right',
      marginRight: '1rem',
    },
    summaryItemContent: {
      flex: 3,
    },
    keirekiGray: {
      color: '#999999',
    },
  };

  return (
    <SectionContainer id="profile" colorNumber="2" skew skewReverse>
      <SectionHeader text="FAQ" colorNumber="2" />

      <div css={styles.container}>
        <WhiteBox css={styles.whiteBox}>
          <h3 css={styles.h3}>FAQ</h3>
          <div css={styles.summaryPictureContainer}>
            <img
              src={profileJpg}
              css={styles.summaryPicture}
              alt="profile-logo"
            />
          </div>

          <div css={styles.summaryListItem}>
            <div css={styles.summaryItemName}>
              <b>FAQ 1</b>
            </div>
            <div css={styles.summaryItemContent}>Answer 1</div>
          </div>

          <div css={styles.summaryListItem}>
            <div css={styles.summaryItemName}>
              <b>FAQ 2 (Been making speakers since)</b>
            </div>
            <div css={styles.summaryItemContent}>
              <AgeCalculator birthday="1985-03-15T15:00+09:00" />
            </div>
          </div>

          <div css={styles.summaryListItem}>
            <div css={styles.summaryItemName}>
              <b>FAQ 3</b>
            </div>
            <div css={styles.summaryItemContent}>Answer 3</div>
          </div>

          <div css={styles.summaryListItem}>
            <div css={styles.summaryItemName}>
              <b>FAQ 4</b>
            </div>
            <div css={styles.summaryItemContent}>Answer 4</div>
          </div>

          <div css={styles.summaryListItem}>
            <div css={styles.summaryItemName}>
              <b>FAQ 5</b>
            </div>
            <div css={styles.summaryItemContent}>Answer 5</div>
          </div>
        </WhiteBox>

        <WhiteBox css={{ ...styles.whiteBox, ...styles.whiteBoxKeireki }}>
          <h3 css={styles.h3}>Intersting projects</h3>

          <Hr />

          <p>
            <b>job 1</b>
            <br />
            <span css={styles.keirekiGray}>(2018.4 - )</span>
          </p>
          <p>some details</p>

          <Hr />

          <p>
            <b>job 2</b>
            <br />
            <span css={styles.keirekiGray}>(2008.4 - 2018.3)</span>
          </p>
          <p>some details</p>

          <Hr text="(Bonus thingy)" />

          <p>
            <b>Bonus faq/job</b>
            <br />
            <span css={styles.keirekiGray}>(1993)</span>
          </p>
          <p>some details about that</p>
        </WhiteBox>

        <WhiteBox css={styles.whiteBox}>
          <h3 css={styles.h3}>Q & A / something else</h3>
          <p>
            <b>paragraph 1:</b>
            <br />
            Aenean hendrerit sodales nulla eget pellentesque. Donec commodo
            augue odio, non interdum justo facilisis ut. Curabitur tincidunt
            imperdiet odio ut varius. Vivamus convallis egestas arcu, ac
            bibendum nulla vehicula non.
          </p>
          <p>
            <b>paragraph 2:</b>
            <br />
            Aenean hendrerit sodales nulla eget pellentesque. Donec commodo
            augue odio, non interdum justo facilisis ut. Curabitur tincidunt
            imperdiet odio ut varius. Vivamus convallis egestas arcu, ac
            bibendum nulla vehicula non.
          </p>
          <p>
            <b>paragraph 3:</b>
            <br />
            Aenean hendrerit sodales nulla eget pellentesque. Donec commodo
            augue odio, non interdum justo facilisis ut. Curabitur tincidunt
            imperdiet odio ut varius. Vivamus convallis egestas arcu, ac
            bibendum nulla vehicula non.
          </p>
        </WhiteBox>
      </div>
    </SectionContainer>
  );
};

export default ProfileSection;
