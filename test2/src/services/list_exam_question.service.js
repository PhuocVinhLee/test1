import createApiClient from "./api.service";
class List_exam_questionService {
constructor(baseUrl = "/api/list_exam_question") {
this.api = createApiClient(baseUrl);
}
async getAll() {
return (await this.api.get("/")).data;
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
export default new List_exam_questionService();