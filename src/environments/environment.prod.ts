const ROOT_URL = "http://localhost:32009/pieces/";

export const environment = {
  production: true,
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
  urlGetL2PServices: ROOT_URL + "get-l2p-services",
};
