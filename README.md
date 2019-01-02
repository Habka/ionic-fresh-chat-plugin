# ionic-fresh-chat-plugin

Test of the Freshchat cordova/Ionic plugin 
https://github.com/techaffinity/freshchat-phonegap

To use this project you need to:  

1 - Install Ionic, currently CLI 4.6.0

2 - Create a Freshchat account https://www.freshworks.com/live-chat-software/


Then clone this project and add **your** Freshchat app id and app key in `src/app/app.component.ts` 

```
(window as any).Freshchat.init({
        appId: 'your-id',
        appKey: 'your-key',
        gallerySelectionEnabled: true,
        cameraCaptureEnabled: true,
        teamMemberInfoVisible: true
      }, function(success) {
        console.log('This is called form the Freshchat init callback');
      });
```
