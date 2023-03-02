export interface IStories {
  id: number;
  author: string;
  title: string;
  genre: string;
  cover_location: string;
}

export type storiesContextType = {
  stories: IStories[];
};

export type LibraryContextType = {
  library: any[];
  getLibrary: () => void;
};
