import React from 'react';
import { connect } from 'react-redux';
import NotificationSystem from '../../..';
import {
  updateMessage,
  updateLevel,
  updateAutoClose,
  updateAutoCloseDelay,
  updateDangerouslyAllowHTML,
  showNotification
} from '../actions';
import PropTypes from 'prop-types';

function App(props) {
  const { message, level, autoClose, autoCloseDelay, dangerouslyAllowHTML } = props;
  const {
    onUpdateMessage,
    onUpdateLevel,
    onUpdateAutoClose,
    onUpdateAutoCloseDelay,
    onShowNotification,
    onUpdateDangerouslyAllowHTML
  } = props;
  return (
    <div>
      <NotificationSystem dangerouslyAllowHTML={dangerouslyAllowHTML} />
      <div className="example-container">
        <h1 className="example-title">Re-alert</h1>
        <div className="example-description">A light-weight notification framework for React and Redux.</div>
        <div className="example-settings">
          <div className="setting-line">
            <label className="setting-label" htmlFor="content">Message</label>
            <textarea
              type="text"
              id="content"
              className="control"
              value={message}
              rows="1"
              onChange={e => onUpdateMessage(e.target.value)}
            />
          </div>
          <div className="setting-line">
            <label className="setting-label" htmlFor="level">Level</label>
            <select id="level" value={level} className="control" onChange={e => onUpdateLevel(e.target.value)}>
              <option value="info">Information</option>
              <option value="success">Success</option>
              <option value="warn">Warning</option>
              <option value="error">Error</option>
            </select>
          </div>
          <div className="setting-line">
            <div className="setting-label">&nbsp;</div>
            <div className="control">
              <input
                type="checkbox"
                id="auto-close"
                checked={autoClose}
                onChange={e => onUpdateAutoClose(e.target.checked)}
              />
              <label htmlFor="auto-close">Automatically close after</label>
              <input
                type="number"
                min="1"
                value={autoCloseDelay}
                className="auto-close-number"
                disabled={!autoClose}
                onChange={e => onUpdateAutoCloseDelay(parseInt(e.target.value, 10))}
              />
              <label htmlFor="auto-close">seconds</label>
            </div>
          </div>
          <div className="setting-line">
            <div className="setting-label">&nbsp;</div>
            <div className="control">
              <input
                type="checkbox"
                id="dangerously-allow-html"
                checked={dangerouslyAllowHTML}
                onChange={e => onUpdateDangerouslyAllowHTML(e.target.checked)}
              />
              <label htmlFor="dangerously-allow-html">Dangerously allow HTML in all messages</label>
            </div>
          </div>
          <div className="settings-submit">
            <input
              type="button"
              className="btn"
              value="Show Notification"
              onClick={() => onShowNotification(message, level, autoClose, autoCloseDelay)}
            />
          </div>
        </div>
        <div className="example-footer">
          Licensed under MIT
        </div>
      </div>
    </div>
  );
}

App.propTypes = {
  message: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  autoClose: PropTypes.bool.isRequired,
  autoCloseDelay: PropTypes.number.isRequired,
  dangerouslyAllowHTML: PropTypes.bool.isRequired,
  onUpdateMessage: PropTypes.func.isRequired,
  onUpdateLevel: PropTypes.func.isRequired,
  onUpdateAutoClose: PropTypes.func.isRequired,
  onUpdateAutoCloseDelay: PropTypes.func.isRequired,
  onUpdateDangerouslyAllowHTML: PropTypes.func.isRequired,
  onShowNotification: PropTypes.func.isRequired
};

const mapStateToProps = state => state.example;

const mapDispatchToProps = dispatch => ({
  onUpdateMessage: message => {
    dispatch(updateMessage(message));
  },
  onUpdateLevel: level => {
    dispatch(updateLevel(level));
  },
  onUpdateAutoClose: autoClose => {
    dispatch(updateAutoClose(autoClose));
  },
  onUpdateAutoCloseDelay: autoCloseDelay => {
    dispatch(updateAutoCloseDelay(autoCloseDelay));
  },
  onUpdateDangerouslyAllowHTML: dangerouslyAllowHTML => {
    dispatch(updateDangerouslyAllowHTML(dangerouslyAllowHTML));
  },
  onShowNotification: (message, level, autoClose, autoCloseDelay) => {
    dispatch(showNotification(message, level, autoClose, autoCloseDelay));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
