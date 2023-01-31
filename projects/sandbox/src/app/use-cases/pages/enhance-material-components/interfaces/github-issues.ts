export interface ApiGithubIssueResponse {
  items: GithubIssue[];
  total_count: number;
}

export interface GithubIssue {
  created_at: string;
  // eslint-disable-next-line id-blacklist, id-denylist
  number: string;
  state: string;
  title: string;
}
