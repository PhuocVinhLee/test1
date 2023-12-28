import { defineStore } from "pinia"
import Result_exam_quizService from "@/services/result_exam_quiz.service";
export const useResult_exam_quizStore = defineStore("result_exam_quizs", {
    state: () => ({
        result_exam_quizs: [],
        one_result_exam_quizs:{},
        state_result_exam_quizs: false,
        isLoading: false,
    }),
    getters: {
        get_all_result_exam_quizs: (state) => {
            return state.result_exam_quizs;
        }
    },
    actions: {
        async action_all_result_exam_quizs(exam_id) {
            try {
                this.isLoading = true;
                this.result_exam_quizs = await Result_exam_quizService.getAll(exam_id)
                this.isLoading = false;

            } catch (error) {
                
            }
        
        },
        async action_all_result_exam_quizs_by_teacher(exam_id) {
            try {
                this.isLoading = true;
                this.result_exam_quizs = await Result_exam_quizService.getAllByTeacher(exam_id)
                this.isLoading = false;

            } catch (error) {
                
            }
        
        },
        async action_add_result_exam_quizs(data) {

            const result = await Result_exam_quizService.create(data);
            if (result) {
                this.state_result_exam_quizs = result;
                
            }
            else {

            }

        },
        async action_update_result_exam_quizs(id, data) {

            const result = await Result_exam_quizService.update(id, data);

            if (result) {
                this.state_result_exam_quizs = result;
            }
            else {

            }

        },
         async action_one_result_exam_quizs(id) {
            this.one_result_exam_quizs = await Result_exam_quizService.get(id)
        }
    },

})