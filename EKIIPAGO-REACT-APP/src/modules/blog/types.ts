export interface BlogPost {
  id: number;
  title: {
    rendered: string;
  };
  link: string;
  excerpt: {
    rendered: string;
  };
  _embedded: {
    'wp:featuredmedia': {
      source_url: string;
    }[];
  };
}
