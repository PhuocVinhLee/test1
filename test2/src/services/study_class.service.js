import createApiClient from "./api.service";
class Study_classService {
constructor(baseUrl = "/api/study_class") {
this.api = createApiClient(baseUrl);
}
async getAll(period_id) {
return (await this.api.get(`/?id=${period_id}`)).data;
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
async create_arr(id_courses, data) {
    return (await this.api.post(`/arr/${id_courses}`, data)).data;
    }
}
export default new Study_classService();