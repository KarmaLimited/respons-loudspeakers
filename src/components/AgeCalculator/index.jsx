import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  birthday: PropTypes.string.isRequired,
};

class AgeCalculator extends React.Component {
  static calcAge(birthday) {
    const datetimeFrom = new Date(birthday);
    const datetimeTo = new Date();

    const diffYear = datetimeTo.getFullYear() - datetimeFrom.getFullYear();

    const YEAR_AS_MILLISEC = 1000 * 60 * 60 * 24 * 365;
    datetimeFrom.setFullYear(1970);
    datetimeTo.setFullYear(1970);
    const diffTime =
      (datetimeTo.getTime() - datetimeFrom.getTime()) / YEAR_AS_MILLISEC;

    const result = diffYear + diffTime;

    return result;
  }

  constructor(props) {
    super(props);

    this.birthday = new Date(props.birthday);

    this.state = {
      age: AgeCalculator.calcAge(this.birthday),
    };
  }

  componentDidMount = () => {
    this.updateAge();
  };

  componentWillUnmount = () => {
    window.cancelAnimationFrame(this.animationRequestId);
  };

  updateAge = () => {
    this.setState({
      age: AgeCalculator.calcAge(this.birthday),
    });
    this.animationRequestId = window.requestAnimationFrame(this.updateAge);
  };

  render = () => {
    const { age } = this.state;

    const [integerPart, fractionPart] = age.toFixed(9).split('.');
    return (
      <div>
        {integerPart}.<span css={{ fontSize: '0.8rem' }}>{fractionPart}</span>
      </div>
    );
  };
}

AgeCalculator.propTypes = propTypes;

export default AgeCalculator;
