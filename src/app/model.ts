export interface Purpose {
  id: Number;
  title: String;
  description: String;
  version: Number;
}

export interface Service {
  name: string;
  id: string;
  courses: Course[];
}

interface Course {
  name: string;
  id: string;
}

export interface Student {
  email: string;
  name: string;
}

export interface Manager {
  email: string;
  name: string;
}

