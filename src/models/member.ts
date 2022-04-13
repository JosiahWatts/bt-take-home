export class Member {
  id: number;
  login: string;
  avatarUrl: string;
  htmlUrl: string;
  siteAdmin: boolean;

  constructor(
    id: number,
    login: string,
    avatarUrl: string,
    htmlUrl: string,
    siteAdmin: boolean
  ) {
    this.id = id;
    this.login = login;
    this.avatarUrl = avatarUrl;
    this.htmlUrl = htmlUrl;
    this.siteAdmin = siteAdmin;
  }

  static fromRaw(raw: MemberRaw): Member {
    return new Member(
      raw.id,
      raw.login,
      raw.avatar_url,
      raw.html_url,
      raw.site_admin
    );
  }
}

export class MemberRaw {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  site_admin: boolean;
}
