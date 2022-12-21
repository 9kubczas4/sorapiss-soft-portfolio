import { ApiAlbum } from './../api/api-album';

export type Album = Omit<ApiAlbum, 'userId'>;
