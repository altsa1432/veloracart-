import React from 'react';
import { useApp } from '../contexts/AppContext';

const Notifications = () => {
  const { notifications } = useApp();
    return (
        <div className="notifications-stack">
              {notifications.map(n => (
                      <div key={n.id} className={`notification notification-${n.type}`}>
                                <span>{n.message}</span>
                                        </div>
                                              ))}
                                                  </div>
                                                    );
                                                    };

                                                    export default Notifications;