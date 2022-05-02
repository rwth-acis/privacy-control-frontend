// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  urlRoot: "http://localhost:8080/pieces/",
  urlPurposeList: "http://localhost:8080/pieces/purpose-list/",
  urlConsentOverview: "http://localhost:8080/pieces/consent/",
  urlManagerOverview: "http://localhost:8080/pieces/manager/",
  urlCourseCreate: "http://localhost:8080/pieces/register/course",
  urlPurposeInCourseCreate: "http://localhost:8080/pieces/register/purpose-in-course/",
  urlPurposesInCourseGet: "http://localhost:8080/pieces/purpose-in-course/",
  urlStudentsInCourseGet: "http://localhost:8080/pieces/student-in-course/",
  urlStudentsInCourseCreate: "http://localhost:8080/pieces/register/student-in-course/",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
