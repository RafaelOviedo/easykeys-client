import { BaseProvider } from './base.provider.js'

export class KeyboardsProvider extends BaseProvider {
  static instance;

  constructor() {
    super();
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new KeyboardsProvider();
    }
    return this.instance;
  }

  async getKeyboards() {
    return await this.fetchInstance('keyboards');
  }

  async getKeyboardById(id) {
    return await this.fetchInstance(`keyboards/${id}`);
  }

  async createKeyboard(body) {
    return await this.fetchInstance('keyboards', { method: 'POST', body: JSON.stringify(body) })
  }
}
