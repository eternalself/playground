export class Link {
  constructor(
    public title: string,
    public url: string,
    public tags: Tag[]) {

  }
}

export class Tag {
  constructor(public name: string) {

  }
}