export interface UseGetTopPodcastsParams {
  podcastId?: string;
}

export interface UseGetTopPodcastsResponse {
  resultCount: number;
  results: Result[];
}

export interface Result {
  wrapperType: string;
  kind: string;
  artistId?: number;
  collectionId: number;
  trackId?: number;
  artistName: string;
  collectionName: string;
  trackName?: string;
  collectionCensoredName: string;
  trackCensoredName?: string;
  artistViewUrl: string;
  collectionViewUrl: string;
  feedUrl?: string;
  trackViewUrl?: string;
  artworkUrl30?: string;
  artworkUrl60?: string;
  artworkUrl100?: string;
  artworkUrl160?: string;
  artworkUrl600: string;
  previewUrl?: string;
  description?: string;
  collectionPrice: number;
  trackPrice: number;
  collectionHdPrice?: number;
  releaseDate: string;
  collectionExplicitness: string;
  trackExplicitness?: string;
  trackCount?: number;
  trackTimeMillis: number;
  country: string;
  currency: string;
  primaryGenreName: string;
  episodeUrl?: string;
  artistIds?: number[];
  episodeFileExtension?: string;
  episodeContentType?: string;
  closedCaptioning?: string;
  genreIds?: string[];
  genres?: Genre[];
  episodeGuid?: string;
  shortDescription?: string;
}

export interface Genre {
  name: string;
  id: string;
}
