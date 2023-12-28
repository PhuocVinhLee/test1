import { defineStore } from "pinia"
import List_exam_questionService from "@/services/list_exam_question.service";
//import SubjectService from "@/services/subject.service";
import { useSubjectStore } from "./subject.js"
import { useStudy_classStore } from "./study_class.js"
export const useList_exam_questionStore = defineStore("list_exam_questions", {
    state: () => ({
        list_exam_questions: [],
        isLoading: false,
        one_list_exam_question: {}
    }),
    getters: {
        get_all_list_exam_questions: (state) => {
            const subjects = useSubjectStore();
            const study_class = useStudy_classStore()
            //  state.isLoading = true;
            return state.list_exam_questions.map((list_exam_question) => {
                for (const key in subjects.get_all_subjects) {
                    if (subjects.get_all_subjects[key]._id == list_exam_question.subject_id) {
                        list_exam_question.subject_id = subjects.get_all_subjects[key].subject_title
                    }
                }
                for (const key in study_class.get_all_study_class) {
                    if (study_class.get_all_study_class[key]._id == list_exam_question.study_class_id) {
                        list_exam_question.study_class_id = study_class.get_all_study_class[key].study_class_name
                    }
                }
                return list_exam_question;
            })
        },
        get_one_list_exam_question: (state) => {
          // state.one_list_exam_question.list_exam_question_datetime = new Date();
            return state.one_list_exam_question;

        }
    },
    actions: {
        async action_all_list_exam_questions() {
            this.isLoading = true;
            const subjects = useSubjectStore();
            await subjects.action_all_subjects();
            const study_class = useStudy_classStore()
            await study_class.action_all_study_class()
            console.log(study_class.get_all_study_class)
            this.list_exam_questions = await List_exam_questionService.getAll()
            this.isLoading = false;
            // console.log(this.list_exam_questions);
        },
  
        async action_one_list_exam_question(id) {
            this.isLoading = true;
            this.one_list_exam_question = await List_exam_questionService.get(id)
            this.isLoading = false;
        }

    },

})