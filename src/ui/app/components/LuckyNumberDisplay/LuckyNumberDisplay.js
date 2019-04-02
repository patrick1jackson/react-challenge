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
    // const { } = this.props;

    return (
      <div className="mt5 pa4 center w-25 bg-light-gray">
        {/* TODO: Display the user's full name and their lucky number */}
      </div>
    );
  }
}

// TODO: Add PropTypes
LuckyNumberDisplay.propTypes = {
  //dispatch: PropTypes.func.isRequired
};

export default LuckyNumberDisplay;
