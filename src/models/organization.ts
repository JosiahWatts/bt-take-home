export class Organization {
  id: number;
  name: string;
  htmlUrl: string;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;

  constructor(
    id: number,
    name: string,
    htmlUrl: string,
    isVerified: boolean,
    createdAt: Date,
    updatedAt: Date
  ) {
    this.id = id;
    this.name = name;
    this.htmlUrl = htmlUrl;
    this.isVerified = isVerified;
    this.createdAt = new Date(createdAt);
    this.updatedAt = new Date(updatedAt);
  }

  static fromRaw(raw: OrganizationRaw): Organization {
    return new Organization(
      raw.id,
      raw.name,
      raw.html_url,
      raw.is_verified,
      raw.created_at,
      raw.updated_at
    );
  }
}

export type OrganizationRaw = {
  id: number;
  name: string;
  html_url: string;
  is_verified: boolean;
  created_at: Date;
  updated_at: Date;
};
