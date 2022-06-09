// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const ROOT_URL = "http://localhost:32009/pieces/";

export const environment = {
  production: false,
  urlRoot: ROOT_URL,
  urlInit: ROOT_URL + "init/",
  urlRoles: ROOT_URL + "user-roles",
  urlPurposeList: ROOT_URL + "purpose-list/",
  urlConsentOverview: ROOT_URL + "consent/",
  urlCollectedData: ROOT_URL + "collected-data/",
  urlManagerOverview: ROOT_URL + "manager/",
  urlAllManagers: ROOT_URL + "managers",
  urlManagerCreate: ROOT_URL + "register/manager",
  urlServiceCreate: ROOT_URL + "register/service",
  urlCourseCreate: ROOT_URL + "register/course",
  urlPurposeInCourseCreate: ROOT_URL + "register/purpose-in-course/",
  urlPurposesInCourseGet: ROOT_URL + "purpose-in-course/",
  urlStudentsInCourseGet: ROOT_URL + "student-in-course/",
  urlStudentsInCourseCreate: ROOT_URL + "register/student-in-course/",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
