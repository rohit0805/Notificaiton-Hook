import { useEffect, useState } from "react";
import { NotificationPositionType } from "./NotificationPosition";
import Notification from "../components/notification/Notification";
import { v4 as uuid } from "uuid";

const useNotification = ({ position }) => {
  const [notificationList, setNotificationList] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("testing");
      if (notificationList.length > 0)
        deleteNotification(notificationList[notificationList.length - 1].id);
      else {
        clearInterval(interval);
      }
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [notificationList]);

  const deleteNotification = (id) => {
    const newNotificationList = notificationList.filter((notification) => {
      return notification.id != id;
    });
    setNotificationList([...newNotificationList]);
  };

  const triggerNotification = ({ type, message }) => {
    const newNotification = {
      type,
      message,
      id: uuid(),
    };
    setNotificationList([newNotification, ...notificationList]);
  };

  const NotificationComponent = (
    <div className={NotificationPositionType[position]}>
      {notificationList.map((notification, index) => {
        return (
          <Notification
            deleteNotification={deleteNotification}
            {...notification}
            key={index}
          />
        );
      })}
    </div>
  );

  return { NotificationComponent, triggerNotification };
};

export default useNotification;
