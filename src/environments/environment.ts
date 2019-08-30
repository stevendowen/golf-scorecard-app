// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  courseUrl: 'https://golf-courses-api.herokuapp.com/courses',
  firebase: {
    apiKey: 'AIzaSyDdKr88t67AHihaekaVLddHXLVcFCdZMp8',
    authDomain: 'golf-scorecard-app-733da.firebaseapp.com',
    databaseURL: 'https://golf-scorecard-app-733da.firebaseio.com',
    projectId: 'golf-scorecard-app-733da',
    storageBucket: 'golf-scorecard-app-733da.appspot.com',
    messagingSenderId: '439616814226',
    appId: '1:439616814226:web:49db369c1ee0eb05',
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
