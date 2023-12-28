import { defineStore } from "pinia"
import Question_submit_code_bankService from "@/services/question_submit_code_bank.service";
//import SubjectService from "@/services/subject.service";
import { useSubjectStore } from "./subject.js"
import { useStudy_classStore } from "./study_class.js"
import { useList_exam_questionStore } from "./list_exam_question.js"
import { useQuestion_submit_codeStore } from "./question_submit_code.js"
export const useQuestion_submit_code_bankStore = defineStore("question_submit_code_banks", {
    state: () => ({
        question_submit_code_banks: [],
        isLoading: false,
        one_question_submit_code_bank: {},
        one_question_submit_code_bank2: {},
        list_question_submit_code_banks: [],
        state_question_submit_code_bank: false,

        lenght: null,
    }),
    getters: {
        get_all_question_submit_code_banks: (state) => {
            // const subjects = useSubjectStore();
            // const study_class = useStudy_classStore()
            // //  state.isLoading = true;
            return state.question_submit_code_banks
        },
        get_one_question_submit_code_bank: (state) => {
            // state.one_question_submit_code_bank.question_submit_code_bank_datetime = new Date();
            //   console.log(state.one_question_submit_code_bank.answer.sort());
            return state.one_question_submit_code_bank;

        },
        get_one_question_submit_code_bank2: (state) => {
           
            return state.one_question_submit_code_bank2;

        },
        get_list_question_submit_code_bank: (state) => {
            // state.one_question_submit_code_bank.question_submit_code_bank_datetime = new Date();
            return state.list_question_submit_code_banks;

        }
    },
    actions: {
        async action_update_uestion_submit_code_bank(id_question_bank, data) {
            this.isLoading = true;
            const result = await Question_submit_code_bankService.update(id_question_bank, data)
            this.state_question_submit_code_bank = result;
            this.isLoading = false;
        },
        async reset_state_question_submit_code_bank() {
            this.state_question_submit_code_bank = false;
        },
        async action_add_id_question_submit_code_bank(id_question_bank, data) {
            this.isLoading = true;
            const result = await Question_submit_code_bankService.create_arr(id_question_bank, data)
            this.state_question_submit_code_bank = result;
            this.isLoading = false;
        },
        async action_add_id_teacher_submit_code_bank(id_question_bank, data) {
            this.isLoading = true;
            const result = await Question_submit_code_bankService.create_arr_teacher(id_question_bank, data)
            this.state_question_submit_code_bank = result;
            this.isLoading = false;
        },
        async action_all_question_submit_code_banks(subject_id) {
            this.isLoading = true;
            const subjects = useSubjectStore();
            await subjects.action_all_subjects();
            const study_class = useStudy_classStore()
            // await study_class.action_all_study_class()
            // console.log(study_class.get_all_study_class)
            const result = await Question_submit_code_bankService.getAllByTeacherId(subject_id)
            this.question_submit_code_banks = result
            this.isLoading = false;
            // console.log(this.question_submit_code_banks);
        },

        async action_one_question_submit_code_bank2(id) {
            this.isLoading = true;
            this.one_question_submit_code_bank2 = {}
            const result = await Question_submit_code_bankService.get(id)
            
            this.one_question_submit_code_bank2= result;
            this.isLoading = false;
        },
        async action_one_question_submit_code_bank(id) {
            this.isLoading = true;
            this.one_question_submit_code_bank = {}
            const result = await Question_submit_code_bankService.get(id)
            // console.log(result);
            // var result_question = [];
            // if (result.list_question) {

            //     result_question = await Promise.all(result.list_question.map(async (question_id) => {
            //         const use_question = useQuestion_submit_codeStore();
            //         try {
            //             await use_question.action_one_question_submit_code(question_id);// get question
            //             var question = use_question.get_one_question_submit_code;

            //             return question;

            //         } catch (error) {
            //             // console.log(error.responser)
            //             // topic.list_active[key].exam_title = "something went wrong!";
            //         }

            //     }));

            //     result.list_question = result_question;
            // }
           
            this.one_question_submit_code_bank = result;
            this.isLoading = false;
        },

        async action_list_question_submit_code_bank(list_exam_question_id) {//
            this.isLoading = true;
            const list_exam_question = useList_exam_questionStore();
            await list_exam_question.action_one_list_exam_question(list_exam_question_id);// list
            this.list_question_submit_code_banks = [];
            await list_exam_question.get_one_list_exam_question.list_question.forEach(async id => {
                const question = await Question_submit_code_bankService.get(id);
                this.list_question_submit_code_banks.push(question);


            });
            this.isLoading = false;;
        },
        async action_add_question_submit_code_bank(data) {
            this.isLoading = true;
            const result = await Question_submit_code_bankService.create(data)
            this.state_question_submit_code_bank = result.data;
            this.lenght = result.length_clt
            this.isLoading = false;
            console.log(this.lenght)
        },
        async action_delete_question_submit_code_bank(id) {
            const result = await Question_submit_code_bankService.delete(id);
            console.log(result)
            if (result) {
                this.state_question_submit_code_bank = result;
            }
            else {

            }
        }



    },

})