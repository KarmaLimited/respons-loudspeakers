import PropTypes from 'prop-types';
import React from 'react';
import ReactModal from 'react-modal';
import IconExtLink from '../IconExtLink';
import closeSvg from '../../icons/close.svg';

const propTypes = {
  setCurrentModal: PropTypes.func.isRequired,
};

let namenr = 0;
const Udemy = props => {
  const learnedList = [
    {
      junle: 'title1',
      courses: [
        {
          /* eslint-disable */
          name: `name${namenr++}`,
          url: 'https://www.udemy.com/ui-ux-web-design-using-adobe-xd',
        },
      ],
    },
    {
      junle: 'title2',
      courses: [
        {
          name: `name${namenr++}`,
          url: 'https://www.udemy.com/realtime-meanstack/',
        },
        {
          name: `name${namenr++}`,
          url: 'https://www.udemy.com/angular-2-jump-start-with-typescript/',
        },
        {
          name: `name${namenr++}`,
          url: 'https://www.udemy.com/learn-angularjs/',
        },
      ],
    },
    {
      junle: 'title3',
      courses: [
        {
          name: `name${namenr++}`,
          url: 'https://www.udemy.com/git-complete/',
        },
      ],
    },
    {
      junle: 'title4',
      courses: [
        {
          name: `name${namenr++}`,
          url: 'https://www.udemy.com/javascript-es6-tutorial/',
        },
        {
          name: `name${namenr++}`,
          url: 'https://www.udemy.com/understand-javascript/',
        },
        {
          name: `name${namenr++}`,
          url:
            'https://www.udemy.com/learning-data-structures-in-javascript-from-scratch/',
        },
        {
          name: `name${namenr++}`,
          url: 'https://www.udemy.com/projects-in-javascript-jquery/',
        },
      ],
    },
    {
      junle: 'title5',
      courses: [
        {
          name: `name${namenr++}`,
          url:
            'https://www.udemy.com/the-complete-developers-guide-to-mongodb/',
        },
      ],
    },
    {
      junle: 'title6',
      courses: [
        {
          name: `name${namenr++}`,
          url: 'https://www.udemy.com/draft/12802/',
        },
      ],
    },
    {
      junle: 'title7',
      courses: [
        {
          name: `name${namenr++}`,
          url: 'https://www.udemy.com/understand-nodejs/',
        },
      ],
    },
    {
      junle: 'title8',
      courses: [
        {
          name: `name${namenr++}`,
          url:
            'https://www.udemy.com/the-complete-web-development-course-learn-by-building-apps/',
        },
      ],
    },
    {
      junle: 'title9',
      courses: [
        {
          name: `name${namenr++}`,
          url:
            'https://www.udemy.com/progressive-web-app-pwa-the-complete-guide/',
        },
      ],
    },
    {
      junle: 'title10',
      courses: [
        {
          name: `name${namenr++}`,
          url: 'https://www.udemy.com/react-redux-tutorial/',
        },
        {
          name: `name${namenr++}`,
          url: 'https://www.udemy.com/react-redux/',
        },
        {
          name: `name${namenr++}`,
          url: 'https://www.udemy.com/learn-and-understand-reactjs/',
        },
      ],
    },
    {
      junle: 'title11',
      courses: [
        {
          name: `name${namenr++}`,
          url:
            'https://www.udemy.com/aws-serverless-a-complete-introduction/learn/v4/questions',
        },
      ],
    },
    {
      junle: 'title12',
      courses: [
        {
          name: `name${namenr++}`,
          url: 'https://www.udemy.com/typescript/',
        },
      ],
    },
    {
      junle: 'title13',
      courses: [
        {
          name: `name${namenr++}`,
          url: 'https://www.udemy.com/webpack-2-the-complete-developers-guide/',
        },
      ],
    },
  ];

  const styles = {
    modalOverlay: {
      background: 'rgba(64,64,64,0.7)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 500,
    },
    modalContent: {
      margin: '1rem',
      maxHeight: '90vh',
      maxWidth: '600px',
      padding: '2rem',
      position: 'relative',
      top: 'auto',
      left: 'auto',
      right: 'auto',
      bottom: 'auto',
    },
    closeButton: {
      background: `url(${closeSvg})`,
      border: 0,
      boxSizing: 'border-box',
      cursor: 'pointer',
      height: '18px',
      padding: 0,
      position: 'absolute',
      right: '1rem',
      top: '1rem',
      width: '18px',
    },
    courseContainer: {
      marginBottom: '2rem',
      ':last-child': {
        marginBottom: 0,
      },
    },
    courseJunle: {
      borderLeft: '10px solid gray',
      fontWeight: 'bold',
      paddingLeft: '10px',
    },
    courseName: {
      color: '#262626',
      display: 'block',
      fontSize: '0.7em',
      marginRight: '2px',
      marginTop: '0.5rem',
      textDecoration: 'none',
      '::before': {
        content: '- ',
      },
      ':hover': {
        background: '#eee',
      },
    },
  };

  return (
    <ReactModal
      isOpen
      closeTimeoutMS={100}
      onRequestClose={() => props.setCurrentModal(null)}
      style={{
        overlay: styles.modalOverlay,
        content: styles.modalContent,
      }}
      ariaHideApp={false}
    >
      <button
        css={styles.closeButton}
        onClick={() => props.setCurrentModal(null)}
      />

      {learnedList.map(list => (
        <div css={styles.courseContainer} key={list.junle}>
          <div css={styles.courseJunle}>{list.junle}</div>

          {list.courses.map(course => (
            <a
              href={course.url}
              target="_blank"
              rel="noopener noreferrer"
              css={styles.courseName}
              key={course.name}
            >
              {course.name}
              <IconExtLink />
            </a>
          ))}
        </div>
      ))}
    </ReactModal>
  );
};

Udemy.propTypes = propTypes;

export default Udemy;
