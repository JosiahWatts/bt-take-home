import { AccountType } from "./enums";

export class Organization {
  id: number;
  name: string;
  htmlUrl: string;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
  avatarUrl: string;
  type: AccountType;

  constructor(
    id: number,
    name: string,
    htmlUrl: string,
    isVerified: boolean,
    createdAt: Date,
    updatedAt: Date,
    avatarUrl: string,
    type: string
  ) {
    this.id = id;
    this.name = name;
    this.htmlUrl = htmlUrl;
    this.isVerified = isVerified;
    this.createdAt = new Date(createdAt);
    this.updatedAt = new Date(updatedAt);
    this.avatarUrl = avatarUrl;
    this.type = type as AccountType;
  }

  static fromRaw(raw: OrganizationRaw): Organization {
    return new Organization(
      raw.id,
      raw.name,
      raw.html_url,
      raw.is_verified,
      raw.created_at,
      raw.updated_at,
      raw.avatar_url,
      raw.type
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
  avatar_url: string;
  type: string;
};
