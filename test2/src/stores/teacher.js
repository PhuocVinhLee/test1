import { defineStore } from "pinia"
import TeacherService from "@/services/teacher.service";
//import SubjectService from "@/services/subject.service";
export const useTeacherStore = defineStore("teachers", {
    state: () => ({
        teachers: [],
        list_teachter: [],
        isLoading: false,
        one_teacher: {},
        lenght: null,
        state_login: false,
        //state_teacher
        state_teacher: false,
        search_teacher: []

    }),
    getters: {
        get_all_teachers: (state) => {
            
            
          return state.teachers;
        },
        get_list_teachers: (state) => {
            console.log(state.list_teachter)
            return state.list_teachter;
          },
        get_one_teacher: (state) => {
            return state.one_teacher;

        }
    },

    actions: {

        async action_list_teacher_by_question_bank(list_teachter){
            this.isLoading = true;
            let list_teachter_local = [];
           console.log("lanclncnas;cnsa;nc")
            if(list_teachter[0]){
                console.log("okeoe")
                for (const id of list_teachter) {
                    const result = await TeacherService.get(id);
                    list_teachter_local.push(result);
                }
            }
            this.list_teachter = list_teachter_local;
            this.isLoading = false;
        },
        async action_login(data){
            this.isLoading = true;
            const result = await TeacherService.login(data);
            this.state_login = result;
           console.log(result);
            this.isLoading = false

        },
        async action_search_teacher(data) {
           this.isLoading = true
           console.log(data)
            const result = await TeacherService.findTeacher(data);
            this.teachers = result;
            this.isLoading = false
        },

        async reset_state_teacher() {
            this.state_teacher = false;
        },
        async action_add_teacher(teacher) {

            const result = await TeacherService.create(teacher);

            if (result) {
                this.state_teacher = result;
                //console.log(result.length_clt);
                this.lenght = result.length_clt;
            }
            else {

            }

        },
        async action_update_teacher( teacher) {

            const result = await TeacherService.update( teacher);

            if (result) {
                this.state_teacher = result;
            }
            else {

            }

        },
        async action_delete_teacher(id) {

            const result = await TeacherService.delete(id);
            console.log(result)
            if (result) {
                this.state_teacher = result;
            }
            else {

            }

        },
        async action_all_teachers(id, page) {
            this.isLoading = true;
            const subjects = useSubjectStore();
            await subjects.action_all_subjects();
            const study_class = useStudy_classStore()
            await study_class.action_all_study_class()
            const result = await TeacherService.getAll(id, page);
            this.teachers = result.data;
            this.lenght = result.length_clt;
            this.isLoading = false;
        },

        async action_one_teacher(id) {
            this.one_teacher = await TeacherService.get(id)
            console.log(this.one_teacher);
        },
        async action_one_acccout_teacher() {
            this.one_teacher = await TeacherService.get_one_account()
            console.log(this.one_teacher);
        }

    },

})