export type PostAuthor = {
  id?: string;
  name?: string;
  avatarUrl?: string;
}

export type PostType = {
  id?: string;
  title?: string;
  thumbnailUrl?: string;
  author?: PostAuthor;
}