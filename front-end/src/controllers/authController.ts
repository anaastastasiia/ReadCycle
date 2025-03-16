import { AuthenticationApi } from "../api";

class AuthController {
  private api: AuthenticationApi;

  constructor() {
    this.api = new AuthenticationApi();
  }

  async callEndpoint<T>(endpoint: (api: AuthenticationApi) => Promise<T>): Promise<T | null> {
    try {
      return await endpoint(this.api);
    } catch (error) {
      console.error("API request failed:", error);
      return null;
    }
  }
}

export const authController = new AuthController();
