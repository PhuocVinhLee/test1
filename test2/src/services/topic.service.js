import createApiClient from "./api.service";
class TopicService {
constructor(baseUrl = "/api/topics") {
this.api = createApiClient(baseUrl);
}
async getAll(id) {
return (await this.api.get(`/?id=${id}`)).data;
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

async create_active(topic_id,data) {
    return (await this.api.post(`/arr/?id=${topic_id}`, data)).data;// id topic
    }
}


export default new TopicService();