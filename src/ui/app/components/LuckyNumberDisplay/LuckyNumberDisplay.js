/**
 * LuckyNumberDisplay.js
 *
 * This component displays the user's full name and their lucky number!
 * Its props are passed down from the LuckyNumber container.
 */

import React from 'react';
import PropTypes from 'prop-types';

class LuckyNumberDisplay extends React.PureComponent {
  

  render() {
    // TODO: Receive props passed down from LuckyNumber container
    const { luckyNumber, username } = this.props;

    return (
      <div className="mt5 pa4 center w-25 bg-light-gray">
      <h1>Welcome, {username}</h1>
      <p>Your lucky number is:</p>
        {luckyNumber}
      </div>
    );
  }
}

// TODO: Add PropTypes
LuckyNumberDisplay.propTypes = {
  luckyNumber: PropTypes.any.isRequired,
  username: PropTypes.string.isRequired,
};

export default LuckyNumberDisplay;
