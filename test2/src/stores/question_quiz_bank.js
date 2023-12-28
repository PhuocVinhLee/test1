import { defineStore } from "pinia"
import Question_quiz_bankService from "@/services/question_quiz_bank.service";
//import SubjectService from "@/services/subject.service";
import { useSubjectStore } from "./subject.js"
import { useStudy_classStore } from "./study_class.js"
import { useList_exam_questionStore } from "./list_exam_question.js"

export const useQuestion_quiz_bankStore = defineStore("question_quiz_banks", {
    state: () => ({
        question_quiz_banks: [],
        isLoading: false,
        one_question_quiz_bank: {},
        one_question_quiz_bank2: {},
        list_question_quiz_banks: [],
        state_question_quiz_bank: false,

        lenght: null,
    }),
    getters: {
        get_all_question_quiz_banks: (state) => {
            // const subjects = useSubjectStore();
            // const study_class = useStudy_classStore()
            // //  state.isLoading = true;
            return state.question_quiz_banks
        },
        get_one_question_quiz_bank: (state) => {
            // state.one_question_quiz_bank.question_quiz_bank_datetime = new Date();
            //   console.log(state.one_question_quiz_bank.answer.sort());
            return state.one_question_quiz_bank;

        },
        get_one_question_quiz_bank2: (state) => {
           
            return state.one_question_quiz_bank2;

        },
        get_list_question_quiz_bank: (state) => {
            // state.one_question_quiz_bank.question_quiz_bank_datetime = new Date();
            return state.list_question_quiz_banks;

        }
    },
    actions: {
        async reset_state_question_quiz_bank() {
            this.state_question_quiz_bank = false;
        },
        async action_add_id_question_quiz_bank(id_question_bank, data) {
            this.isLoading = true;
            const result = await Question_quiz_bankService.create_arr(id_question_bank, data)
            this.state_question_quiz_bank = result;
            this.isLoading = false;
        },
        async action_add_id_teacher_submit_code_bank(id_question_bank, data) {
            this.isLoading = true;
            const result = await Question_quiz_bankService.create_arr_teacher(id_question_bank, data)
            this.state_question_quiz_bank = result;
            this.isLoading = false;
        },
        async action_all_question_quiz_banks(subject_id) {
            this.isLoading = true;
            const subjects = useSubjectStore();
            await subjects.action_all_subjects();
            const study_class = useStudy_classStore()
            // await study_class.action_all_study_class()
            // console.log(study_class.get_all_study_class)
            const result = await Question_quiz_bankService.getAllByTeacherId(subject_id)
            this.question_quiz_banks = result
            this.isLoading = false;
            // console.log(this.question_quiz_banks);
        },

        async action_one_question_quiz_bank2(id) {
            this.isLoading = true;
            this.one_question_quiz_bank2 = {}
            const result = await Question_quiz_bankService.get(id)
            
            this.one_question_quiz_bank2= result;
            this.isLoading = false;
        },
        async action_one_question_quiz_bank(id) {
            this.isLoading = true;
            this.one_question_quiz_bank = {}
            const result = await Question_quiz_bankService.get(id)
            // console.log(result);
            // var result_question = [];
            // if (result.list_question) {

            //     result_question = await Promise.all(result.list_question.map(async (question_id) => {
            //         const use_question = useQuestion_quizStore();
            //         try {
            //             await use_question.action_one_question_quiz(question_id);// get question
            //             var question = use_question.get_one_question_quiz;

            //             return question;

            //         } catch (error) {
            //             // console.log(error.responser)
            //             // topic.list_active[key].exam_title = "something went wrong!";
            //         }

            //     }));

            //     result.list_question = result_question;
            // }
           
            this.one_question_quiz_bank = result;
            this.isLoading = false;
        },

        async action_list_question_quiz_bank(list_exam_question_id) {//
            this.isLoading = true;
            const list_exam_question = useList_exam_questionStore();
            await list_exam_question.action_one_list_exam_question(list_exam_question_id);// list
            this.list_question_quiz_banks = [];
            await list_exam_question.get_one_list_exam_question.list_question.forEach(async id => {
                const question = await Question_quiz_bankService.get(id);
                this.list_question_quiz_banks.push(question);


            });
            this.isLoading = false;;
        },
        async action_add_question_quiz_bank(data) {
            this.isLoading = true;
            const result = await Question_quiz_bankService.create(data)
            this.state_question_quiz_bank = result.data;
            this.lenght = result.length_clt
            this.isLoading = false;
            console.log(this.lenght)
        },
        async action_update_question_quiz_bank(id,data) {
            this.isLoading = true;
            const result = await Question_quiz_bankService.update(id,data)
            console.log(result);
            this.state_question_quiz_bank = result;
            this.lenght = result.length_clt
            this.isLoading = false;
  
        },
        async action_delete_question_quiz_bank(id) {
            const result = await Question_quiz_bankService.delete(id);
            console.log(result)
            if (result) {
                this.state_question_quiz_bank = result;
            }
            else {

            }
        }



    },

})