
export class BaseProvider {
  static instance;

  constructor() {
    this.fetchInstance = async (endpoint, options = {}) => {
      const response = await fetch(`${import.meta.env.VITE_BASE_API_URL}/${endpoint}`, {
        headers: {
          "Authorization": `Bearer ${import.meta.env.VITE_API_TOKEN}`,
          "Content-Type": "application/json",
        },
        ...options
      })

      return response.json();
    }
  }
}

