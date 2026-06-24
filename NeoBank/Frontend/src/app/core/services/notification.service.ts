import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Notification {
  id: number;
  message: string;
  type: 'success' | 'warning' | 'danger' | 'info';
  title?: string;
  duration?: number;
  removing?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private notifications: Notification[] = [];
  private subject = new BehaviorSubject<Notification[]>([]);
  notifications$ = this.subject.asObservable();

  private id = 0;

  show(message: string, type: Notification['type'] = 'info', title?: string, duration = 4000) {
    const notification: Notification = {
      id: ++this.id,
      message,
      type,
      title,
      duration,
      removing: false
    };

    this.notifications.unshift(notification);
    // this.notifications.push(notification);
    this.subject.next([...this.notifications]);

    setTimeout(() => this.remove(notification.id), duration);
  }

  remove(id: number) {
    // mark as removing first so the CSS exit animation plays
    this.notifications = this.notifications.map(n =>
      n.id === id ? { ...n, removing: true } : n
    );
    this.subject.next([...this.notifications]);

    // remove from array after animation (~240 ms)
    setTimeout(() => {
      this.notifications = this.notifications.filter(n => n.id !== id);
      this.subject.next([...this.notifications]);
    }, 240);
  }

  success(message: string, title?: string, duration?: number): void { this.show(message, 'success', title, duration); }
  warning(message: string, title?: string, duration?: number): void { this.show(message, 'warning', title, duration); }
  danger(message: string,  title?: string, duration?: number): void { this.show(message, 'danger',  title, duration); }
  info(message: string,    title?: string, duration?: number): void { this.show(message, 'info',    title, duration); }
}