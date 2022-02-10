import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notification: any = new Subject();

  constructor() { }

  public notify() {
    return this.notification
  }

  public success(errorInfo: any) {
    const {title, message} = errorInfo
    this.setNotification({
      type: 'success',
      title,
      message
    })
  }

  public error(errorInfo: any) {
    const {title, message} = errorInfo
    this.setNotification({
      type: 'error',
      title,
      message
    })
  }



  private setNotification(notification: any) {
    this.notification.next(notification)
  }
}
