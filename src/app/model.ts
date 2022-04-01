export interface Purpose {
  id: Number;
  title: String;
  description: String;
  version: Number;
}

export interface Service {
  name: string;
  id: string;
  courses: Courses[];
}

interface Courses {
  name: string;
  id: string;
}
