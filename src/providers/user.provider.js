
export class UserProvider {
  static instance;

  constructor() {
    super();
  }

  static getInstance() {
    if (this.instance) {
      return this.instance
    }

    this.instance = new UserProvider();
  }
}
