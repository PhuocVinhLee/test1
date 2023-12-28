import { defineStore } from "pinia"
import documentService from "@/services/document.service";
export const usedocumentStore = defineStore("documents", {
    state: () => ({
        documents: {},
        isLoading: false,
        state_document: []
    }),
    getters: {
        get_documents: (state) => {
            return state.documents;
        },
        get_state_documents: (state) => {
            return state.state_document;
        },
    },
    actions: {
        async action_add_documents(data) {
           try {
            this.documents = await documentService.create(data)
           } catch (error) {
            this.documents = error.response.data;
           }

            console.log(this.documents);
        },
        async action_add_arr_documents(id,data, progress) {
            try {
             this.state_document = await documentService.create_arr(id,data, progress)
             console.log(progress);
            } catch (error) {
             this.state_document = error.response.data;
            }
 
             console.log(this.documents);
         }
         ,
         async action_one_documents(id) {
            try {
             this.documents = await documentService.get(id)
            
            } catch (error) {
             this.documents = error.response.data;
            }
         }
    },

})