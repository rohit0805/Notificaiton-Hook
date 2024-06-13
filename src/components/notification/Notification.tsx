import React from "react";
import "./notification.css";
import { ButtonType } from "../Button";
import { AiOutlineClose } from "react-icons/ai";

const Notification = ({ type, message, id, deleteNotification }) => {
  return (
    <div className={`notificationContainer ${ButtonType[type]}`}>
      {message}
      <AiOutlineClose
        className="closeBtn"
        onClick={() => {
          deleteNotification(id);
        }}
      />
    </div>
  );
};

export default Notification;
