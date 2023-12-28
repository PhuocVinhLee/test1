import { defineStore } from "pinia"
//import IndexService from "@/services/index.service";
//import SubjectService from "@/services/subject.service";

export const useIndexStore = defineStore("indexs", {
    state: () => ({
    
        state_error: false,
        

    }),
    getters: {
      
        get_state_error: (state) => {
            return state.state_error;

        }
    },

    actions: {
       

    },

})