import axios, { AxiosResponse } from "axios";
import { AccountType } from "../models/enums";
import { Event, EventRaw } from "../models/event";
import { Member, MemberRaw } from "../models/member";
import { Organization, OrganizationRaw } from "../models/organization";
import { Repository, RepositoryRaw } from "../models/repository";

const getUrlTypeParam = (type: AccountType) => {
  if (type === AccountType.ORG) {
    return "orgs";
  } else {
    return "users";
  }
};

export class GithubApi {
  static BASE_URL = "https://api.github.com";

  static async getOrganization(
    name: string,
    type: AccountType = AccountType.ORG
  ): Promise<Organization> {
    const res: AxiosResponse<OrganizationRaw> = await axios.get(
      `${GithubApi.BASE_URL}/${getUrlTypeParam(
        type
      )}/${name.toLocaleLowerCase()}`
    );

    const data = Organization.fromRaw(res.data);
    return data;
  }

  static async getRepositories(
    name: string,
    type: AccountType = AccountType.ORG
  ): Promise<Repository[]> {
    const res: AxiosResponse<RepositoryRaw[]> = await axios.get(
      `${GithubApi.BASE_URL}/${getUrlTypeParam(
        type
      )}/${name.toLocaleLowerCase()}/repos`
    );

    const data = res.data
      .map(Repository.fromRaw)
      .sort((x, y) => y.pushedAt.getTime() - x.pushedAt.getTime());

    return data;
  }

  static async getEvents(
    name: string,
    type: AccountType = AccountType.ORG
  ): Promise<Event[]> {
    const res: AxiosResponse<EventRaw[]> = await axios.get(
      `${GithubApi.BASE_URL}/${getUrlTypeParam(
        type
      )}/${name.toLocaleLowerCase()}/events`
    );

    const data = res.data.map(Event.fromRaw).sort((x, y) => {
      return y.createdAt.getTime() - x.createdAt.getTime();
    });

    return data;
  }

  static async getMembers(
    name: string,
    type: AccountType = AccountType.ORG
  ): Promise<Member[]> {
    const res: AxiosResponse<MemberRaw[]> = await axios.get(
      `${GithubApi.BASE_URL}/${getUrlTypeParam(
        type
      )}/${name.toLocaleLowerCase()}/public_members`
    );

    const data = res.data.map(Member.fromRaw);

    return data;
  }

  static async getHooks(
    name: string,
    type: AccountType = AccountType.ORG
  ): Promise<any> {
    const res: AxiosResponse<any> = await axios.get(
      `${GithubApi.BASE_URL}/${getUrlTypeParam(
        type
      )}/${name.toLocaleLowerCase()}/hooks`
    );

    return res.data;
  }

  static async getIssues(
    name: string,
    type: AccountType = AccountType.ORG
  ): Promise<any> {
    const res: AxiosResponse<any> = await axios.get(
      `${GithubApi.BASE_URL}/${getUrlTypeParam(
        type
      )}/${name.toLocaleLowerCase()}/issues`
    );

    return res.data;
  }
}
