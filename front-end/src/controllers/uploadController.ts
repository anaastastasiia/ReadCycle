import { UploadApi } from "../api";

class UploadController {
  private api: UploadApi;

  constructor() {
    this.api = new UploadApi();
  }

  async callEndpoint<T>(endpoint: (api: UploadApi) => Promise<T>): Promise<T | null> {
    try {
      return await endpoint(this.api);
    } catch (error) {
      console.error("API request failed:", error);
      return null;
    }
  }
}

export const uploadController = new UploadController();
