import { ApiPost } from '../api/api-post';

export type Post = Omit<ApiPost, 'userId'>;
