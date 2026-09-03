export interface Course {
  id: number;
  title: string;
  category: string;
  className: string;
  instructor: string;
  image: string;
  rating: number;
  reviews: number;
  price: number;
  oldPrice?: number;
  lessons: number;
}

export interface Assignment {
  id: string;
  title: string;
  course: string;
  result: string;
  time: string;
  status: "Passed" | "Failed" | "Pending";
}

export interface BlogCard {
  id: number;
  title: string;
  image: string;
  date: string;
  month: string;
  author: string;
  views: string;
  comments: number;
  subject: string;
  href: string;
}