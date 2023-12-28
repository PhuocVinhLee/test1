import { defineStore } from "pinia"
import Submit_codeService from "@/services/exam.service";
//import SubjectService from "@/services/subject.service";
import { useSubjectStore } from "./subject.js"
import { useStudy_classStore } from "./study_class.js"
export const useSubmit_codeStore = defineStore("submit_codes", {
    state: () => ({
        submit_codes: [],
        isLoading: false,
        one_submit_code: {}
    }),
    getters: {
        get_all_submit_codes: (state) => {
            const subjects = useSubjectStore();
            const study_class = useStudy_classStore()
            //  state.isLoading = true;
            return state.submit_codes.map((submit_code) => {
                for (const key in subjects.get_all_subjects) {
                    if (subjects.get_all_subjects[key]._id == submit_code.subject_id) {
                        exam.subject_id = subjects.get_all_subjects[key].subject_title
                    }
                }
                for (const key in study_class.get_all_study_class) {
                    if (study_class.get_all_study_class[key]._id == exam.study_class_id) {
                        exam.study_class_id = study_class.get_all_study_class[key].study_class_name
                    }
                }
                return exam;
            })
        },
        get_one_exam: (state) => {
          // state.one_exam.exam_datetime = new Date();
            return state.one_exam;

        }
    },
    actions: {
        async action_all_exams() {
            this.isLoading = true;
            const subjects = useSubjectStore();
            await subjects.action_all_subjects();
            const study_class = useStudy_classStore()
            await study_class.action_all_study_class()
            console.log(study_class.get_all_study_class)
            this.exams = await Submit_codeService.getAll()
            this.isLoading = false;
            // console.log(this.exams);
        },
  
        async action_one_exam(id) {
            this.isLoading = true;
            const subjects = useSubjectStore();
            await subjects.action_all_subjects();
            
            //    console.log(subjects.get_all_subjects)
            this.one_exam = await Submit_codeService.get(id)
            this.isLoading = false;
            console.log(this.one_exam);
        }

    },

})