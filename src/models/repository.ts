export class Repository {
  id: number;
  name: string;
  htmlUrl: string;
  description: string;
  language: string;
  createdAt: Date;
  updatedAt: Date;
  stargazersCount: number;
  pushedAt: Date;

  constructor(
    id: number,
    name: string,
    htmlUrl: string,
    description: string,
    language: string,
    createdAt: Date,
    updatedAt: Date,
    stargazersCount: number,
    pushedAt: Date
  ) {
    this.id = id;
    this.name = name;
    this.htmlUrl = htmlUrl;
    this.description = description;
    this.language = language;
    this.createdAt = new Date(createdAt);
    this.updatedAt = new Date(updatedAt);
    this.stargazersCount = stargazersCount;
    this.pushedAt = new Date(pushedAt);
  }

  static fromRaw(raw: RepositoryRaw): Repository {
    return new Repository(
      raw.id,
      raw.name,
      raw.html_url,
      raw.description,
      raw.language,
      raw.created_at,
      raw.updated_at,
      raw.stargazers_count,
      raw.pushed_at
    );
  }
}

export type RepositoryRaw = {
  id: number;
  name: string;
  html_url: string;
  description: string;
  language: string;
  created_at: Date;
  updated_at: Date;
  pushed_at: Date;
  stargazers_count: number;
};
