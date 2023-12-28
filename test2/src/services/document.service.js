// import createApiClient from "./api.service";

import axios from "axios";
const commonConfig = {
    headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
    },
    // onUploadProgress: progressEvent => {
    //     var progress = parseInt(Math.round((progressEvent.loaded / progressEvent.total) * 100));
    //     if (config.onProgress)
    //         config.onProgress(progress);
    // }
};
function createApiClient(baseURL) {
    return axios.create({
        baseURL,
        ...commonConfig,
    });
};

class documentService {
    constructor(baseUrl = "/api/file") {
        this.api = createApiClient(baseUrl);
    }
    async getAll() {
        return (await this.api.get("/")).data;
    }
    async create_arr(id, data, progress1 ) {
        return (await this.api.post(`/arr/${id}`, data, progress1)).data;
    }

    async create(data) {
        return (await this.api.post("/", data)).data;
    }

    async deleteAll() {
        return (await this.api.delete("/")).data;
    }
    async get(id) {
        return (await this.api.get(`/${id}`)).data;
    }
    async update(id, data) {
        return (await this.api.put(`/${id}`, data)).data;
    }
    async delete(id) {
        return (await this.api.delete(`/${id}`)).data;
    }
}
export default new documentService();