import createApiClient from "./api.service";
class Question_submit_code_bankService {
    constructor(baseUrl = "/api/question_submit_code_bank") {
        this.api = createApiClient(baseUrl);
    }

    async getAllByTeacherId(subject_id) {
        console.log(subject_id)

        return (await this.api.get(`/teacher?subject_id=${subject_id}`)).data;
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
    async create_arr(id_question_bank, data) {
        return (await this.api.post(`/arr/${id_question_bank}`, data)).data;
    }
    async create_arr_teacher(id_question_bank, data) {
        return (await this.api.post(`/arr_teacher/${id_question_bank}`, data)).data;
    }


}
export default new Question_submit_code_bankService();