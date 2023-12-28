import createApiClient from "./api.service";
class Exam_quizService {
    constructor(baseUrl = "/api/exam_quizs") {
        this.api = createApiClient(baseUrl);
    }
    async getAll(period_id, params) {
        console.log(period_id)
        return (await this.api.get(`/?id=${period_id}&page=${params}`)).data;
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

export default new Exam_quizService();