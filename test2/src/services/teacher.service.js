// import createApiClient from "./api.service";

import axios from "axios";
const commonConfig = {
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    // onUploadProgress: progressEvent => {
    //     var progress = parseInt(Math.round((progressEvent.loaded / progressEvent.total) * 100));
    //     if (config.onProgress)
    //         config.onProgress(progress);
    // }
};
const commonConfig2 = {
    headers: {
        "Content-Type": "application/json",
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
class TeacherService {
    constructor(baseUrl = "/api/teacher") {
        this.api = createApiClient(baseUrl);
    }
    async getAll() {
        return (await this.api.get("/")).data;
    }
    async findTeacher(search) {
        return (await this.api.get(`/teacher?data=${search}`)).data;
    }
    async login(data) {
        return (await this.api.post("/login", data)).data;
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
    async update(data) {
        console.log(data)
        return (await this.api.put(`/account_teacher`, data, {
            headers: {
                "Content-Type": "multipart/form-data",
                Accept: "application/json",
            },
        })).data;
    }
    async get_one_account() {
        return (await this.api.get(`/account_teacher`)).data;
    }
    async delete(id) {
        return (await this.api.delete(`/${id}`)).data;
    }
}
export default new TeacherService();