import { Component, OnInit, HostListener } from '@angular/core';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  public title = ''
  public message = ''
  public notificationType = ''
  public showNotification = false
  
  constructor(private notification: NotificationService) {}

  ngOnInit(): void {
    this.notification.notify().subscribe((value:any) => {
      if (this.showNotification) return
      this.showNotification = true

      const {title, message, type} = value;
      this.title = title
      this.message = message
      this.notificationType = type
      this.showNotification = true

      setTimeout(()=> {
        this.showNotification = false
      }, 5000)
    })
  }
}
