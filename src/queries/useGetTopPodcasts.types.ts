export interface UseGetTopPodcastsResponse {
  author: {
    name: {
      label: string;
    };
    uri: {
      label: string;
    };
  };
  entry: Entry[];
  updated: {
    label: string;
  };
  rights: {
    label: string;
  };
  title: {
    label: string;
  };
  icon: {
    label: string;
  };
  link: Link[];
  id: {
    label: string;
  };
}

interface Entry {
  "im:name": {
    label: string;
  };
  "im:image": {
    label: string;
    attributes: {
      height: string;
    };
  }[];
  summary: {
    label: string;
  };
  "im:price": {
    label: string;
    attributes: {
      amount: string;
      currency: string;
    };
  };
  "im:contentType": {
    attributes: {
      term: string;
      label: string;
    };
  };
  rights: {
    label: string;
  };
  title: {
    label: string;
  };
  link: Link;
  id: {
    label: string;
    attributes: {
      "im:id": string;
    };
  };
  "im:artist": {
    label: string;
    attributes?: {
      href: string;
    };
  };
  category: {
    attributes: {
      "im:id": string;
      term: string;
      scheme: string;
      label: string;
    };
  };
  "im:releaseDate": {
    label: string;
    attributes: {
      label: string;
    };
  };
}

interface Link {
  attributes: {
    rel: string;
    type: string;
    href: string;
  };
}
