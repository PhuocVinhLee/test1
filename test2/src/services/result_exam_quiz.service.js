import createApiClient from "./api.service";
class Result_exam_quizService {
constructor(baseUrl = "/api/result_exam_quizs") {
this.api = createApiClient(baseUrl);
}
async getAll(exam_id) {
return (await this.api.get(`/?exam_id=${exam_id}`)).data;
}async getAllByTeacher(exam_id) {
    return (await this.api.get(`/teacher?exam_id=${exam_id}`)).data;
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
export default new Result_exam_quizService();