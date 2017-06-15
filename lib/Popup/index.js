import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import withStyles from 'nebo15-isomorphic-style-loader/lib/withStyles';

import { H2 } from '../Title';
import Button from '../Button';

import styles from './styles.scss';

const DEFAULT_ALERT_BTN_TEXT = 'Done';

const THEMES_COLOR = {
  error: 'red',
  success: 'blue',
};

const PopupComponent = ({
  children,
  title,
  active = false,
  theme, onClose, bgCloser = true, id,
}) => (
  <section id={id} className={classnames(styles.popup, active && styles.active, theme && styles[`theme-${theme}`])}>
    <div className={styles.content}>
      {
        title && <header className={styles.header}>
          <H2 color={THEMES_COLOR[theme]}>{title}</H2>
        </header>
      }
      {children}
    </div>
    { // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      bgCloser && <div className={styles.closer} onClick={onClose} />
    }
  </section>
);

PopupComponent.propTypes = {
  title: PropTypes.string,
  active: PropTypes.bool,
  theme: PropTypes.oneOf(['error', 'success']),
  onClose: PropTypes.func,
  bgCloser: PropTypes.bool,
  id: PropTypes.string,
};

PopupComponent.defaultProps = {
  active: false,
  bgCloser: true,
};

const AlertComponent = (props) => {
  const { children, title, ok = DEFAULT_ALERT_BTN_TEXT, theme, active, onClose } = props;

  return (
    <Popup active={active} title={title} theme={theme} bgCloser={false}>
      <article>
        {children}
      </article>
      <footer>
        <Button onClick={onClose}>{ok}</Button>
      </footer>
    </Popup>
  );
};

AlertComponent.propTypes = {
  title: PropTypes.string,
  ok: PropTypes.string,
  active: PropTypes.bool,
  theme: PropTypes.oneOf(['error', 'success']),
  onClose: PropTypes.func,
};

AlertComponent.defaultProps = {
  active: false,
  ok: DEFAULT_ALERT_BTN_TEXT,
};

const ConfirmComponent = ({
  confirm = 'Confirm',
  cancel = 'Cancel',
  title, theme, active, children,
  onCancel, onConfirm, id,
}) => (
  <Popup id={id} active={active} title={title} theme={theme} bgCloser={false}>
    <article>
      {children}
    </article>
    <footer>
      <Button name="popup-confirm-cancel" theme="border" onClick={onCancel}>{cancel}</Button>
      <Button name="popup-confirm-ok" onClick={onConfirm}>{confirm}</Button>
    </footer>
  </Popup>
);

ConfirmComponent.propTypes = {
  title: PropTypes.string,
  confirm: PropTypes.string,
  cancel: PropTypes.string,
  active: PropTypes.bool,
  theme: PropTypes.oneOf(['error', 'success']),
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func,
};

ConfirmComponent.defaultProps = {
  active: false,
};

export const Popup = withStyles(styles)(PopupComponent);
export const Alert = withStyles(styles)(AlertComponent);
export const Confirm = withStyles(styles)(ConfirmComponent);
