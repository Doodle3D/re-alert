import React from 'react';
import { NOTIFICATION_INFORMATION, NOTIFICATION_SUCCESS, NOTIFICATION_WARNING, NOTIFICATION_ERROR } from '../constants';
import PropTypes from 'prop-types';

function NotificationItem(props) {
  let classes = '';
  switch (props.level) {
    case NOTIFICATION_INFORMATION:
      classes = 'notification-item notification-information';
      break;
    case NOTIFICATION_SUCCESS:
      classes = 'notification-item notification-success';
      break;
    case NOTIFICATION_WARNING:
      classes = 'notification-item notification-warning';
      break;
    case NOTIFICATION_ERROR:
      classes = 'notification-item notification-error';
      break;
    default:
      classes = 'notification-item';
      break;
  }
  return (
    <div className={classes}>
      <button className="notification-close" onClick={() => props.onClose(props.id)} />
      {
        props.dangerouslyAllowHTML ?
          <div className="notification-content" dangerouslySetInnerHTML={{ __html: props.message }} /> :
          <div className="notification-content">{props.message}</div>
      }
    </div>
  );
}

NotificationItem.propTypes = {
  id: PropTypes.number.isRequired,
  level: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  dangerouslyAllowHTML: PropTypes.bool,
  onClose: PropTypes.func.isRequired
};

export default NotificationItem;
