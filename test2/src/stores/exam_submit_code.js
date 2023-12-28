import { defineStore } from "pinia"
import Exam_submit_codeService from "@/services/exam_submit_code.service";
import { useQuestion_submit_codeStore } from "./question_submit_code.js"
//import SubjectService from "@/services/subject.service";
import { useSubjectStore } from "./subject.js"
import { useStudy_classStore } from "./study_class.js"//useIndexStore
import { useIndexStore } from "./index.js"//useIndexStore
export const useExam_submit_codeStore = defineStore("exam_submit_codes", {
    state: () => ({
        exam_submit_codes: [],
        isLoading: false,
        one_exam_submit_code: {},
        lenght: null,
        state_exam_submit_code: false,
        //state_exam_submit_code
        //state_exam_submit_code: false,
        error: {}

    }),
    getters: {
        get_all_exam_submit_codes: (state) => {
            const subjects = useSubjectStore();
            const study_class = useStudy_classStore()
            //  state.isLoading = true;
            return state.exam_submit_codes.map((exam_submit_code) => {
                for (const key in subjects.get_all_subjects) {
                    if (subjects.get_all_subjects[key]._id == exam_submit_code.subject_id) {
                        exam_submit_code.subject_id = subjects.get_all_subjects[key].subject_title
                    }
                }
                for (const key in study_class.get_all_study_class) {
                    if (study_class.get_all_study_class[key]._id == exam_submit_code.study_class_id) {
                        exam_submit_code.study_class_id = study_class.get_all_study_class[key].study_class_name
                    }
                }
                return exam_submit_code;
            })
        },
        get_one_exam_submit_code: (state) => {
            return state.one_exam_submit_code;

        }
    },

    actions: {

        async action_add_id_question_exam_submitcode(exam_id, data) {// data = {}
            this.isLoading = true;
            const result = await Exam_submit_codeService.create_arr(exam_id, data)
            this.state_exam_submit_code = result;
            this.isLoading = false;
        },
        async reset_state_exam_submit_code() {
            this.state_exam_submit_code = false;
        },
        async action_add_exam_submit_code(exam_submit_code) {
            this.state_exam_submit_code = false;
            const result = await Exam_submit_codeService.create(exam_submit_code);

            if (result) {
                this.state_exam_submit_code = result;
                //console.log(result.length_clt);
                this.lenght = result.length_clt;
            }
            else {

            }

        },
        async action_update_exam_submit_code(id, exam_submit_code) {

            const result = await Exam_submit_codeService.update(id, exam_submit_code);

            if (result) {
                this.state_exam_submit_code = result;
            }
            else {

            }

        },
        async action_delete_exam_submit_code(id) {

            const result = await Exam_submit_codeService.delete(id);
            console.log(result)
            if (result) {
                this.state_exam_submit_code = result;
            }
            else {

            }

        },
        async action_all_exam_submit_codes(id, page) {
            this.isLoading = true;
            const subjects = useSubjectStore();
            await subjects.action_all_subjects();
            const study_class = useStudy_classStore()
            await study_class.action_all_study_class()
            const result = await Exam_submit_codeService.getAll(id, page);
            this.exam_submit_codes = result.data;
            this.lenght = result.length_clt;
            this.isLoading = false;
        },

        async action_one_exam_submit_code(id) {
            const indexStore = useIndexStore();
            try {
                this.one_exam_submit_code = {};
                const result = await Exam_submit_codeService.get(id)
                this.one_exam_submit_code = result;
            } catch (error) {
                console.log(error.response.status);
                if (error.response.status == 403 || error.response.status == 401) {
                    indexStore.state_error = error.response.data;
                    console.log(indexStore.state_error)
                }
            }



        },

        // const result = await Question_submit_code_bankService.get(id)
        //     var result_question = await Promise.all(result.list_question.map(async (question_id) => {
        //         const use_question = useQuestion_submit_codeStore();
        //         try {
        //             await use_question.action_one_question_submit_code(question_id);// get question
        //             var question = use_question.get_one_question_submit_code;
        //             return question;
        //         } catch (error) {
        //         }

        //     }));
        //     result.list_question = result_question;
        //     this.one_question_submit_code_bank = result;

        async action_question_from_one_exam_submit_code(id) {
            // const indexStore = useIndexStore();
            try {
                this.one_exam_submit_code = {};
                const result = await Exam_submit_codeService.get(id);
                if(result.list_question){
                    var result_question = await Promise.all(result.list_question.map(async (question_id) => {
                        const use_question = useQuestion_submit_codeStore();
                        try {
                            await use_question.action_one_question_submit_code(question_id);// get question
                            var question = use_question.get_one_question_submit_code;
                            return question;
                        } catch (error) {
    
                        }
                    }));
                }
                result.list_question = result_question;
                this.one_exam_submit_code = result;

            } catch (error) {
                console.log(error);
                if (error.response.status == 403 || error.response.status == 401) {
                    indexStore.state_error = error.response.data;
                    console.log(indexStore.state_error)
                }
            }



        }

    },

})