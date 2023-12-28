import { defineStore } from "pinia"
import TopicService from "@/services/topic.service";
//import SubjectService from "@/services/subject.service";
import { useExam_submit_codeStore } from "./exam_submit_code.js"
import { useExam_quizStore } from "./exam_quiz.js"
import { usedocumentStore } from "./document.js"
import { useStudy_classStore } from "./study_class.js"
export const useTopicStore = defineStore("topics", {
    state: () => ({
        topics: [],
        isLoading: false,
        one_topic: {},
        state_active: false,
        lenght: null,
        state_topic: false,
        //state_topic
        //state_topic: false

    }),
    getters: {
        get_all_topics: (state) => {
            return state.topics;
            // return await state.topics.map(async (topic) => {
            //     const exams = useExam_submit_codeStore();

            //     for (const key in topic.list_active) {// arr

            //         if (topic.list_active[key].type == 'exam') {// obj
            //          await exams.action_one_exam_submit_code(topic.list_active[key].id);// get title exam
            //           //  var exam_title = exams.get_one_exam_submit_code.exam_submit_code_title;

            //            // topic.list_active[key].exam_title = exam_title;
            //         }
            //     }


            //     return topic;
            // })

        },
        get_one_topic: (state) => {
            return state.one_topic;

        }
    },

    actions: {
        async reset_state_topic() {
            this.state_topic = false;
        },
        async reset_state_active() {
            this.state_active = false;
        },
        async action_add_one_active(topic_id, data) {
            this.state_active = false;


            const result = await TopicService.create_active(topic_id, data);

            if (result) {
                this.state_active = result;
            
            }
            else {

            }

        },
        async action_add_topic(topic) {

            const result = await TopicService.create(topic);

            if (result) {
                this.state_topic = result;
                //console.log(result.length_clt);
                this.lenght = result.length_clt;
            }
            else {

            }

        },
        async action_update_topic(id, topic) {

            const result = await TopicService.update(id, topic);
            console.log(result)
            if (result) {
                this.state_topic = result;
            }
            else {

            }

        },
        async action_delete_topic(id) {

            const result = await TopicService.delete(id);

            console.log(result)
            if (result) {
                this.state_topic = result;
            }
            else {

            }

        },

        // state.exam_quizs.map((exam_quiz) => {
        //     for (const key in subjects.get_all_subjects) {
        //         if (subjects.get_all_subjects[key]._id == exam_quiz.subject_id) {
        //             exam_quiz.subject_id = subjects.get_all_subjects[key].subject_title
        //         }
        //     }
        //     for (const key in study_class.get_all_study_class) {
        //         if (study_class.get_all_study_class[key]._id == exam_quiz.study_class_id) {
        //             exam_quiz.study_class_id = study_class.get_all_study_class[key].study_class_name
        //         }
        //     }
        //     return exam_quiz;
        // })
        async action_all_topics(id) {// id khoa hoc

            this.isLoading = true;
            const result = await TopicService.getAll(id);
            var result_topics = await Promise.all(result.map(async (topic) => {
                const exams = useExam_submit_codeStore();
                const exam_quizs= useExam_quizStore();
                const document = usedocumentStore();
                for (const key in topic.list_active) {// arr
                    if (topic.list_active[key].type == 'exam_submit_code') {// obj
                        console.log(topic.list_active[key])
                        try {
                            await exams.action_one_exam_submit_code(topic.list_active[key].id);// get title exam
                        if(exams.get_one_exam_submit_code){
                            var exam_title1 = exams.get_one_exam_submit_code.exam_submit_code_title;
                            topic.list_active[key].exam_title = exam_title1;
                        }
                        } catch (error) {
                            console.log(error.responser)
                            topic.list_active[key].exam_title = "something went wrong!";
                        }
                       
                    }else if(topic.list_active[key].type == 'exam_quiz'){
                        try {
                            await exam_quizs.action_one_exam_quiz(topic.list_active[key].id);// get title exam
                        if(exam_quizs.get_one_exam_quiz){
                            var exam_title1 = exam_quizs.get_one_exam_quiz.exam_quiz_title;
                            topic.list_active[key].exam_title = exam_title1;
                        }
                        } catch (error) {
                            console.log(error.responser)
                            topic.list_active[key].exam_title = "something went wrong!";
                        }
                    }else if(topic.list_active[key].type == 'document'){
                        console.log("Oeee")
                        try {
                            await document.action_one_documents(topic.list_active[key].id);// get title exam
                        if(document.get_documents){
                            var document1 = document.get_documents.filename;
                            topic.list_active[key].document_title = document1;
                        }
                        } catch (error) {
                            console.log(error.responser)
                            topic.list_active[key].document = "something went wrong!";
                        }
                    }
                }     
                return topic;
            }));

            console.log(result_topics)
            this.topics = result_topics;
            this.isLoading = false;
        },

        async action_one_topic(id) {
           try {
            this.one_topic = await TopicService.get(id)
           } catch (error) {
            
            console.log(error.response);
           }
        }

    },

})