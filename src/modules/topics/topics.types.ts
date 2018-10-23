export interface Topic extends Post {
  name: string;
  comments: Comment[];
}

export interface Post {
  description: string;
  createdAt: Date;
  createdBy: string;
  upCount: number;
}

export interface Comment extends Post {

}
