import { defineStore } from "pinia"
import Result_exam_submitcodeService from "@/services/result_exam_submitcode.service";
export const useResult_exam_submitcodeStore = defineStore("result_exam_submitcodes", {
    state: () => ({
        result_exam_submitcodes: [],
        one_result_exam_submitcodes:{},
        state_result_exam_submitcodes: false,
        isLoading: false,
    }),
    getters: {
        get_all_result_exam_submitcodes: (state) => {
            return state.result_exam_submitcodes;
        }
    },
    actions: {
        async action_all_result_exam_submitcodes(exam_id) {
            try {
                this.isLoading = true;
                this.result_exam_submitcodes = await Result_exam_submitcodeService.getAll(exam_id)
                this.isLoading = false;

            } catch (error) {
                
            }
        
        },
        async action_all_result_exam_submitcodes_by_teacher(exam_id) {
            try {
                this.isLoading = true;
                this.result_exam_submitcodes = await Result_exam_submitcodeService.getAllByTeacher(exam_id)
                this.isLoading = false;

            } catch (error) {
                
            }
        
        },
        async action_add_result_exam_submitcodes(data) {

            const result = await Result_exam_submitcodeService.create(data);
            if (result) {
                this.state_result_exam_submitcodes = result;
                
            }
            else {

            }

        },
        async action_update_result_exam_submitcodes(id, data) {

            const result = await Result_exam_submitcodeService.update(id, data);

            if (result) {
                this.state_result_exam_submitcodes = result;
            }
            else {

            }

        },
         async action_one_result_exam_submitcodes(id) {
            this.one_result_exam_submitcodes = await Result_exam_submitcodeService.get(id)
        }
    },

})