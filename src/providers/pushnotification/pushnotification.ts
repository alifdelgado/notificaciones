import { Platform } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal';

@Injectable()
export class PushnotificationProvider {

  constructor(private oneSignal: OneSignal, private platform: Platform) {
    console.log('Hello PushnotificationProvider Provider');
  }

  init_notifications() {
    if(this.platform.is('cordova')) {
      this.oneSignal.startInit('99728d22-fcb7-4763-adaf-fae7afabfec0', '334542514579');

      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

      this.oneSignal.handleNotificationReceived().subscribe(() => {
      // do something when notification is received
      console.log('notificacion recibida');
      });

      this.oneSignal.handleNotificationOpened().subscribe(() => {
        // do something when a notification is opened
        console.log('notirifacion abierta');
      });

      this.oneSignal.endInit();
    }else{
      console.log('One signal no funciona en Chrome');
    }
  }
}
