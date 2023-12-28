import { defineStore } from "pinia"
import Exam_quizService from "@/services/exam_quiz.service";
import { useQuestion_quizStore } from "./question_quiz.js"
//import SubjectService from "@/services/subject.service";
import { useSubjectStore } from "./subject.js"
import { useStudy_classStore } from "./study_class.js"//useIndexStore
import { useIndexStore } from "./index.js"//useIndexStore
export const useExam_quizStore = defineStore("exam_quizs", {
    state: () => ({
        exam_quizs: [],
        isLoading: false,
        one_exam_quiz: {},
        lenght: null,
        state_exam_quiz: false,
        //state_exam_quiz
        //state_exam_quiz: false,
        error: {}

    }),
    getters: {
        get_all_exam_quizs: (state) => {
            const subjects = useSubjectStore();
            const study_class = useStudy_classStore()
            //  state.isLoading = true;
            return state.exam_quizs.map((exam_quiz) => {
                for (const key in subjects.get_all_subjects) {
                    if (subjects.get_all_subjects[key]._id == exam_quiz.subject_id) {
                        exam_quiz.subject_id = subjects.get_all_subjects[key].subject_title
                    }
                }
                for (const key in study_class.get_all_study_class) {
                    if (study_class.get_all_study_class[key]._id == exam_quiz.study_class_id) {
                        exam_quiz.study_class_id = study_class.get_all_study_class[key].study_class_name
                    }
                }
                return exam_quiz;
            })
        },
        get_one_exam_quiz: (state) => {
            return state.one_exam_quiz;

        }
    },

    actions: {

        async action_add_id_question_exam_submitcode(exam_id, data) {// data = {}
            this.isLoading = true;
            const result = await Exam_quizService.create_arr(exam_id, data)
            this.state_exam_quiz = result;
            this.isLoading = false;
        },
        async reset_state_exam_quiz() {
            this.state_exam_quiz = false;
        },
        async action_add_exam_quiz(exam_quiz) {
            this.state_exam_quiz = false;
            const result = await Exam_quizService.create(exam_quiz);

            if (result) {
                this.state_exam_quiz = result;
                //console.log(result.length_clt);
                this.lenght = result.length_clt;
            }
            else {

            }

        },
        async action_update_exam_quiz(id, exam_quiz) {

            const result = await Exam_quizService.update(id, exam_quiz);

            if (result) {
                this.state_exam_quiz = result;
            }
            else {

            }

        },
        async action_delete_exam_quiz(id) {

            const result = await Exam_quizService.delete(id);
            console.log(result)
            if (result) {
                this.state_exam_quiz = result;
            }
            else {

            }

        },
        async action_all_exam_quizs(id, page) {
            this.isLoading = true;
            const subjects = useSubjectStore();
            await subjects.action_all_subjects();
            const study_class = useStudy_classStore()
            await study_class.action_all_study_class()
            const result = await Exam_quizService.getAll(id, page);
            this.exam_quizs = result.data;
            this.lenght = result.length_clt;
            this.isLoading = false;
        },

        async action_one_exam_quiz(id) {
            const indexStore = useIndexStore();
            try {
                this.one_exam_quiz = {};
                const result = await Exam_quizService.get(id)
                this.one_exam_quiz = result;
            } catch (error) {
                console.log(error.response.status);
                if (error.response.status == 403 || error.response.status == 401) {
                    indexStore.state_error = error.response.data;
                    console.log(indexStore.state_error)
                }
            }



        },

        // const result = await Question_quiz_bankService.get(id)
        //     var result_question = await Promise.all(result.list_question.map(async (question_id) => {
        //         const use_question = useQuestion_quizStore();
        //         try {
        //             await use_question.action_one_question_quiz(question_id);// get question
        //             var question = use_question.get_one_question_quiz;
        //             return question;
        //         } catch (error) {
        //         }

        //     }));
        //     result.list_question = result_question;
        //     this.one_question_quiz_bank = result;

        async action_question_from_one_exam_quiz(id) {
            // const indexStore = useIndexStore();
            try {
                this.one_exam_quiz = {};
                const result = await Exam_quizService.get(id);
                if(result.list_question){
                    var result_question = await Promise.all(result.list_question.map(async (question_id) => {
                        const use_question = useQuestion_quizStore();
                        try {
                            await use_question.action_one_question_quiz(question_id);// get question
                            var question = use_question.get_one_question_quiz;
                            return question;
                        } catch (error) {
    
                        }
                    }));
                }
                result.list_question = result_question;
                this.one_exam_quiz = result;

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