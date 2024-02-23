import React from 'react';
import {NotificationManager} from 'react-notifications';

class Notification extends React.Component {
    createNotification = (type) => {
        return () => {
            switch (type) {
                case 'info':
                    NotificationManager.info('Info message');
                    break;
                case 'success':
                    NotificationManager.success('Success message', 'Title here');
                    break;
                case 'warning':
                    NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
                    break;
                case 'error':
                    NotificationManager.error('Error message', 'Teilnahmer ist schon vohandeln', 5000, () => {
                        alert('callback');
                    });
                    break;
            }
        };
    }
} 



export default new Notification();
