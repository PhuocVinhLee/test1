import { defineStore } from "pinia"
import Question_submit_codeService from "@/services/question_submit_code.service";
//import SubjectService from "@/services/subject.service";
import { useSubjectStore } from "./subject.js"
import { useStudy_classStore } from "./study_class.js"
import { useList_exam_questionStore } from "./list_exam_question.js"
export const useQuestion_submit_codeStore = defineStore("question_submit_codes", {
    state: () => ({
        question_submit_codes: [],
        isLoading: false,
        one_question_submit_code: {},
        list_question_submit_codes: [],
        state_question_submit_code: false,
        lenght: 0,
    }),
    getters: {

        get_lenght_question_submit_code: (state) => {
            return state.lenght;
        },
        get_all_question_submit_codes: (state) => {
            // const subjects = useSubjectStore();
            // const study_class = useStudy_classStore()
            // //  state.isLoading = true;
            return state.question_submit_codes
        },
        get_one_question_submit_code: (state) => {
            // state.one_question_submit_code.question_submit_code_datetime = new Date();
            //   console.log(state.one_question_submit_code.answer.sort());
            return state.one_question_submit_code;

        },
        get_list_question_submit_code: (state) => {
            // state.one_question_submit_code.question_submit_code_datetime = new Date();
            return state.list_question_submit_codes;

        }
    },
    actions: {
        async reset_state_question_submit_code() {
            this.state_question_submit_code = false;
        },
        async action_all_question_submit_codes_by_teacher(subject_id, page) {
            this.isLoading = true;

            const result = await Question_submit_codeService.getAllByTeacher(subject_id, page)
            this.question_submit_codes = result.data
            this.lenght = result.length_clt;
            this.isLoading = false;

            console.log(result);
        },
        async action_all_question_submit_codes(subject_id, page) {
            this.isLoading = true;
            const subjects = useSubjectStore();
            await subjects.action_all_subjects();
            const study_class = useStudy_classStore()
            await study_class.action_all_study_class()
            console.log(study_class.get_all_study_class)
            const result = await Question_submit_codeService.getAll(subject_id, page)
            this.question_submit_codes = result.data
            this.lenght = result.length_clt;
            this.isLoading = false;

            console.log(result);
        },
        async action_list_question_submit_code_by_question_bank(list_id_question, list_all_id_question) {
            this.isLoading = true;
            let list_question = [];
            this.lenght = 0;
            console.log("opjddasnd")
            if (list_id_question) {
                for (const id of list_id_question) {
                    try {
                        const result = await Question_submit_codeService.get(id);
                        if (result._id) {
                            list_question.push(result);
                        }
                    } catch (error) {
                        console.log(error)
                    }

                }
            }
            this.question_submit_codes = list_question;
            if (list_all_id_question) {
                this.lenght = list_all_id_question.length;
            }
            this.isLoading = false;
        },

        async action_one_question_submit_code(id) {
            this.isLoading = true;
            this.one_question_submit_code = await Question_submit_codeService.get(id)
            this.isLoading = false;
        },

        async action_list_question_submit_code(list_exam_question_id) {//
            this.isLoading = true;
            const list_exam_question = useList_exam_questionStore();
            await list_exam_question.action_one_list_exam_question(list_exam_question_id);// list
            this.list_question_submit_codes = [];
            await list_exam_question.get_one_list_exam_question.list_question.forEach(async id => {
                const question = await Question_submit_codeService.get(id);
                this.list_question_submit_codes.push(question);
            });
            this.isLoading = false;;
        },
        async action_add_question_submit_code(data) {
            this.isLoading = true;
            const result = await Question_submit_codeService.create(data)
            this.state_question_submit_code = result.data;
           // this.lenght = result.length_clt
            this.isLoading = false;
          
        },
        async action_update_question_submit_code(id,data) {
            this.isLoading = true;
            const result = await Question_submit_codeService.update(id,data)
            this.state_question_submit_code = result.data;
           // this.lenght = result.length_clt
            this.isLoading = false;
            console.log(this.lenght)
        },
        async action_delete_question_submit_code(id) {
            const result = await Question_submit_codeService.delete(id);
            console.log(result)
            if (result) {
                this.state_question_submit_code = result;
            }
            else {

            }
        }



    },

})