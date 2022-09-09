export type PostAuthor = {
  id?: string;
  name?: string;
  avatarUrl?: string;
}

export type Post = {
  id?: string;
  title?: string;
  thumbnailUrl?: string;
  author?: PostAuthor;
}