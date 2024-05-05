import { Comment } from "./comment.interface"

export interface Article {
  _id: number;
  title: string;
  content: string;
  id: string;
  likes: number;
  comments: Comment[];
  shares?: number;
  imagePath: string;
}