import { DefaultApi } from "../api";

class ApiController {
  private api: DefaultApi;

  constructor() {
    this.api = new DefaultApi();
  }

  async callEndpoint<T>(endpoint: (api: DefaultApi) => Promise<T>): Promise<T | null> {
    try {
      return await endpoint(this.api);
    } catch (error) {
      console.error("API request failed:", error);
      return null;
    }
  }
}

export const apiController = new ApiController();
