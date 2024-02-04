export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface ExtendedPost extends Post {
  like: number;
  dislike: number;
  likeBool?: boolean;
  disBool?: boolean
}
