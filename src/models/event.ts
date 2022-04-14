export class Event {
  id: number;
  type: string;
  repo: {
    name: string;
    url: string;
  };
  createdAt: Date;

  constructor(
    id: number,
    type: string,
    repo: { name: string; url: string },
    createdAt: Date
  ) {
    this.id = id;
    this.type = type;
    this.repo = repo;
    this.createdAt = new Date(createdAt);
  }

  static fromRaw(raw: EventRaw): Event {
    return new Event(
      raw.id,
      raw.type,
      {
        name: raw.repo.name,
        url: `https://github.com/${raw.repo.name}`,
      },
      new Date(raw.created_at)
    );
  }
}

export type EventRaw = {
  id: number;
  type: string;
  repo: {
    name: string;
    url: string;
  };
  created_at: string;
};
