import { defineStore } from "pinia"
import Question_quizService from "@/services/question_quiz.service";
//import SubjectService from "@/services/subject.service";
import { useSubjectStore } from "./subject.js"
import { useStudy_classStore } from "./study_class.js"
import { useList_exam_questionStore } from "./list_exam_question.js"
export const useQuestion_quizStore = defineStore("question_quizs", {
    state: () => ({
        question_quizs: [],
        isLoading: false,
        one_question_quiz: {},
        list_question_quizs: [],
        state_question_quiz: false,
        lenght: 0,
    }),
    getters: {

        get_lenght_question_quiz: (state) =>{
            return state.lenght;
        },
        get_all_question_quizs: (state) => {
            // const subjects = useSubjectStore();
            // const study_class = useStudy_classStore()
            // //  state.isLoading = true;
            return state.question_quizs
        },
        get_one_question_quiz: (state) => {
            // state.one_question_quiz.question_quiz_datetime = new Date();
            //   console.log(state.one_question_quiz.answer.sort());
            return state.one_question_quiz;

        },
        get_list_question_quiz: (state) => {
            // state.one_question_quiz.question_quiz_datetime = new Date();
            return state.list_question_quizs;

        }
    },
    actions: {
        async reset_state_question_quiz() {
            this.state_question_quiz = false;
        },
        async action_all_question_quizs_by_teacher(subject_id, page) {
            this.isLoading = true;

            const result = await Question_quizService.getAllByTeacher(subject_id, page)
            this.question_quizs = result.data
            this.lenght = result.length_clt;
            this.isLoading = false;

            console.log(result);
        },
        async action_all_question_quizs(subject_id, page) {
            this.isLoading = true;
            const subjects = useSubjectStore();
            await subjects.action_all_subjects();
            const study_class = useStudy_classStore()
            await study_class.action_all_study_class()
            console.log(study_class.get_all_study_class)
            const result = await Question_quizService.getAll(subject_id, page)
            this.question_quizs = result.data
            this.lenght = result.length_clt;
            this.isLoading = false;

            console.log(result);
        },
        async action_list_question_quiz_by_question_bank(list_id_question, list_all_id_question) {
            this.isLoading = true;
            let list_question = [];
            this.lenght = 0;

            if(list_id_question){
                for (const id of list_id_question) {
                    const result = await Question_quizService.get(id);
                    list_question.push(result);
                }
            }
            this.question_quizs = list_question;
            if(list_all_id_question){
                this.lenght = list_all_id_question.length;
            }
            this.isLoading = false;
        },

        async action_one_question_quiz(id) {
            this.isLoading = true;
            this.one_question_quiz = await Question_quizService.get(id)
            this.isLoading = false;
        },

        async action_list_question_quiz(list_exam_question_id) {//
            this.isLoading = true;
            const list_exam_question = useList_exam_questionStore();
            await list_exam_question.action_one_list_exam_question(list_exam_question_id);// list
            this.list_question_quizs = [];
            await list_exam_question.get_one_list_exam_question.list_question.forEach(async id => {
                const question = await Question_quizService.get(id);
                this.list_question_quizs.push(question);
            });
            this.isLoading = false;;
        },
        async action_add_question_quiz(data) {
            this.isLoading = true;
            const result = await Question_quizService.create(data)
            this.state_question_quiz = result.data;
            this.lenght = result.length_clt
            this.isLoading = false;
            console.log(this.lenght)
        },
        async action_update_question_quiz(id,data) {
            this.isLoading = true;
            const result = await Question_quizService.update(id,data)
            this.state_question_quiz = result;
            this.lenght = result.length_clt
            this.isLoading = false;
            console.log(this.lenght)
        },
        async action_delete_question_quiz(id) {
            const result = await Question_quizService.delete(id);
            console.log(result)
            if (result) {
                this.state_question_quiz = result;
            }
            else {

            }
        }



    },

})