import { defineStore } from "pinia"
import Study_classService from "@/services/study_class.service";

export const useStudy_classStore = defineStore("study_class", {
    state: () => ({
        study_class: [],
        one_study_class: {},
        isLoading: false,
        state_study_class : false
    }),
    getters: {
        get_all_study_class: (state) => {
            return state.study_class
        },
        get_isLoading:(state)=>{
            return state.isLoading;
        },
        get_one_study_class:(state)=>{
            return state.one_study_class;
        }

    },
    actions: {
        async action_add_topic_from_study_class(id_courses,study_class) {

            const result = await Study_classService.create_arr(id_courses,study_class);
            
            if (result) {
                this.state_study_class = result;
                
            }
            else {

            }

        },
        async reset_state_study_class() {
            this.state_study_class = false;
        },
        async action_add_study_class(study_class) {

            const result = await Study_classService.create(study_class);
            
            if (result) {
                this.state_study_class = result;
                
            }
            else {

            }

        },
        async action_update_study_class(id,study_class) {

            const result = await Study_classService.update(id,study_class);
            
            if (result) {
                this.state_study_class = result;
                
            }
            else {

            }

        },
        async action_all_study_class(id) {// id hoc kỳ
            this.isLoading = true;
            this.study_class = await Study_classService.getAll(id)
            this.isLoading = false;
           console.log(this.study_class);
        },

        async action_one_study_class(id) {
            console.log("kzncb")
            this.one_study_class = await Study_classService.get(id)
           
        }
        
    },

})