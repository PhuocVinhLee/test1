import { defineStore } from "pinia"

import studentService from "../services/student.service";
//import SubjectService from "@/services/subject.service";
export const useStudentStore = defineStore("students", {
    state: () => ({
        students: [],
        isLoading: false,
        one_student: {},
        lenght: null,
        state_student: false,
        //state_student
        //state_student: false,
        search_student: [],
        state_login:false

    }),
    getters: {
       // login
        get_all_students: (state) => {
            
          return state.students;
        },
        get_one_student: (state) => {
            return state.one_student;

        }
    },

    actions: {
        async action_login(data){
            this.isLoading = true;
            const result = await studentService.login(data);
            this.state_login = result;
           console.log(result);
            this.isLoading = false

        },
        async action_search_student(data) {
           this.isLoading = true
           console.log(data)
            const result = await studentService.findStudent(data);
            this.students = result;
            this.isLoading = false
        },

        async reset_state_student() {
            this.state_student = false;
        },
        async action_add_student(student) {

            const result = await studentService.create(student);

            if (result) {
                this.state_student = result;
                //console.log(result.length_clt);
                this.lenght = result.length_clt;
            }
            else {

            }

        },
        async action_update_student(id, student) {

            const result = await studentService.update(id, student);

            if (result) {
                this.state_student = result;
            }
            else {

            }

        },
        async action_delete_student(id) {

            const result = await studentService.delete(id);
            console.log(result)
            if (result) {
                this.state_student = result;
            }
            else {

            }

        },
        async action_all_students(id, page) {
            this.isLoading = true;
            const subjects = useSubjectStore();
            await subjects.action_all_subjects();
            const study_class = useStudy_classStore()
            await study_class.action_all_study_class()
            const result = await studentService.getAll(id, page);
            this.students = result.data;
            this.lenght = result.length_clt;
            this.isLoading = false;
        },

        async action_one_student(id) {
            this.one_student = await studentService.get(id)
            console.log(this.one_student);
        }

    },

})