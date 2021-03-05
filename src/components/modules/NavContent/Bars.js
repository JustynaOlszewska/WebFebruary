import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setOpen } from '../../../actions/navActions';
import {
  StyledIconBars,
  StyledIconTimes,
} from '../../../styles/styleComponents/StyleNav/StyledBars';

const Bars = ({ nav: { open }, setOpen }) => {

  const handleClick = () => {
    setOpen();
  };

  return (
    <>
      <StyledIconBars
        onClick={handleClick}
        open={open}
        className="fas fa-bars"
      ></StyledIconBars>
      <StyledIconTimes
        onClick={handleClick}
        open={open}
        className="fas fa-times"
      ></StyledIconTimes>
    </>
  );
};

Bars.propTypes = {
  setOpen: PropTypes.func,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.navReducer
});

export default connect(mapStateToProps, { setOpen })(Bars);
