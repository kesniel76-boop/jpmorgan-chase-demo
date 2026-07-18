import {
  getNotifications,
  markAsRead,
  deleteNotification,
} from "../../../services/notificationService";

import { useState } from "react";

import {
  FaBell,
  FaTrash,
  FaCheckCircle,
} from "react-icons/fa";

function NotificationList() {

  const [, refresh] = useState(0);

  const notifications = getNotifications();

  const handleRead = (id) => {

    markAsRead(id);

    refresh((value) => value + 1);

  };

  const handleDelete = (id) => {

    deleteNotification(id);

    refresh((value) => value + 1);

  };

  return (

    <div className="mt-10 space-y-5">

      {notifications.length === 0 && (

        <div className="bg-slate-900 rounded-2xl p-12 border border-slate-800 text-center">

          <FaBell className="text-5xl text-gray-600 mx-auto" />

          <h2 className="text-white text-2xl mt-6">

            No Notifications

          </h2>

          <p className="text-gray-500 mt-2">

            You're all caught up.

          </p>

        </div>

      )}

      {notifications.map((notification) => (

        <div
          key={notification.id}
          className={`rounded-2xl border p-6 ${
            notification.read
              ? "bg-slate-900 border-slate-800"
              : "bg-blue-900/20 border-blue-500"
          }`}
        >

          <div className="flex justify-between items-start">

            <div>

              <h3 className="text-white text-xl font-bold">

                {notification.title}

              </h3>

              <p className="text-gray-300 mt-3">

                {notification.message}

              </p>

              <p className="text-gray-500 mt-4 text-sm">

                {notification.date}

              </p>

            </div>

            <div className="flex gap-3">

              {!notification.read && (

                <button
                  onClick={() => handleRead(notification.id)}
                  className="bg-green-500 hover:bg-green-600 p-3 rounded-lg"
                  title="Mark as Read"
                >

                  <FaCheckCircle className="text-white" />

                </button>

              )}

              <button
                onClick={() => handleDelete(notification.id)}
                className="bg-red-500 hover:bg-red-600 p-3 rounded-lg"
                title="Delete Notification"
              >

                <FaTrash className="text-white" />

              </button>

            </div>

          </div>

        </div>

      ))}

    </div>

  );

}

export default NotificationList;