import { Comment } from "./comment.interface"

export interface Article {
  _id: number;
  title: string;
  content: string;
  id: string;
  likes: number;
  date_written: Date;
  comments: Comment[];
  shares?: number;
  imagePath: string;
  url: string;
}