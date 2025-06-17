import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';

interface Notification {
  type:    "error" | "success";
  message: string;
}

@Injectable()
export class NotificationsService {
  private notificationsSource = new Subject<Notification>();

  notifications = this.notificationsSource.asObservable();

  constructor() { }

  notifyError(message: string) {
    const notif: Notification = {
      type:    "error",
      message: message
    };

    this.notificationsSource.next(notif);
  }

  notifySuccess(message: string) {
    const notif: Notification = {
      type: 'success',
      message: message
    };
    this.notificationsSource.next(notif);
  }
}
