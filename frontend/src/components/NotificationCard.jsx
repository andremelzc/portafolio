import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import "../styles/NotificationCard.css";

const NotificationCard = ({ message, type }) => {
  return (
    <div className="notification-wrapper">
      <div className={`notification-card `}>
        <div className="notification-icon-wrapper">
          {type === "success" ? (
            <FaCheckCircle className="notification-icon success" />
          ) : (
            <FaTimesCircle className="notification-icon error" />
          )}
        </div>
        <div className="notification-message-wrapper">
          <div className="notification-message">{message}</div>
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;
