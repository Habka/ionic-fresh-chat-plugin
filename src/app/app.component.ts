import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      (window as any).Freshchat.init({
            appId: "522a7b9e-807c-4779-8ae9-27866f881c4b",
            appKey: "7d213d8e-5e57-42ef-9eb6-36cca0d09635",
        gallerySelectionEnabled: true,
        cameraCaptureEnabled: true,
        teamMemberInfoVisible: true
      }, function(success) {
        console.log('This is called form the Freshchat init callback');
      });

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
