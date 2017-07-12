import React from 'react';
import PropTypes from 'prop-types';
import MaskedInputComponent from 'react-nebo15-mask';
import Input from '../Input';

/**
 * ## Usage
 *
 * ```javascript
 * import MaskedInput from 'components/MaskedInput';
 *
 * export default class {
 *   render() {
 *     return (
 *       <MaskedInput name="test" onChange={() => {}} />
 *     );
 *   }
 * }
 * ```
 */
export default class MaskedInput extends React.Component {
  static displayName = 'MaskedInput';

  static propTypes = {
    mask: PropTypes.string,
    /**
     * Placeholder for mask characters
     */
    withPlaceholder: PropTypes.string,
    /**
     * Show mask on focus input
     */
    showOnFocus: PropTypes.bool,
    /**
     * Hide mask on blur input
     */
    hideOnBlur: PropTypes.bool,
    /**
     * Always show mask
     */
    showAlways: PropTypes.bool,

    onChange: PropTypes.func,
  };

  static defaultProps = {
    mask: '1111 1111 1111 1111',
    showOnFocus: true,
    hideOnBlur: true,
    onChange: () => {},
  };

  render() {
    return <Input component={MaskedInputComponent} {...this.props} />;
  }
}
