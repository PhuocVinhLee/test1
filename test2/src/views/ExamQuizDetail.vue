
<template>
    <div class="content-wrapper">
        <div class="container-xxl flex-grow-1 container-p-y">

            <div class="">
                <h4 v-if="1" class="fw-bold py-3 ">
                    <router-link :to="{
                        name: 'CoursesDetailDashboard',
                        params: { id_courses: route.params.id_courses }
                    }" class="fw-bold py-3"> {{ get_one_study_class.study_class_title }}
                    </router-link> / {{
                        exam_quiz.exam_quiz_title }}
                    <!-- <span v-show="route.name == 'ExamSubmitcodeEdit'">/ Thêm chủ đề</span>
                    <span v-show="route.name == 'TopicEdit'">/ {{ get_one_topic.topic_title }} </span> -->
                </h4>

                <div class="nav-align-top mb-4">
                    <ul class="nav nav-tabs" role="tablist">
                        <li class="nav-item ">
                            <router-link type="button" class="nav-link " :class="{
                                active: route.name == '' || route.name == 'ExamQuizDashboard'

                            }" :to="{ name: 'ExamQuizDashboard' }">

                                Tổng quát
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link type="button" class="nav-link "
                                :class="{ active: route.name == 'ExamQuizEdit' }" :to="{
                                    name: 'ExamQuizEdit',
                                    //  params: { id_courses: '65014d42b91ceb293644a6b2'}//

                                }">
                                Cài đặt
                            </router-link>
                        </li>
                         <li class="nav-item">
                            <router-link type="button" class="nav-link "
                                :class="{ active: route.name == 'ExamQuizQuestion' }" :to="{
                                    name: 'ExamQuizQuestion',
                                    //  params: { id_courses: '65014d42b91ceb293644a6b2'}//

                                }">
                                Câu hỏi
                            </router-link>
                        </li>
                        <!-- <li class="nav-item">
                            <router-link type="button" class="nav-link "
                                :class="{ active: route.name == 'ExamSubmitcodeEdit1' }" :to="{
                                    name: 'ExamSubmitcodeEdit',
                                    //  params: { id_courses: '65014d42b91ceb293644a6b2'}//

                                }">
                                Đề thi
                            </router-link>
                        </li> -->
                        <!-- <li class="nav-item">
                            <router-link type="button" class="nav-link " :class="{ active: route.name == 'ExamQuiz' }" :to="{
                                name: '',
                                query: { id: route.query.id, page: '1' },
                            }">
                                Ngân hành câu hỏi
                            </router-link>
                        </li> -->
                        <li class="nav-item">
                            <router-link type="button" class="nav-link " :class="{ active: route.name == 'ExamQuizResult' }" :to="{
                                name: 'ExamQuizResult',
                                
                            }">
                                Kết quả
                            </router-link>
                        </li>
                    </ul>
                    <!-- knclkac -->
                    <router-view>

                    </router-view>


                </div>
            </div>


        </div>
    </div>
</template>
<script setup>
import { onMounted, watchEffect, ref } from 'vue';

import { storeToRefs } from 'pinia';
import { useRoute, useRouter } from 'vue-router'
const route = useRoute();// 
const router = useRouter();
import { useStudy_classStore } from "../stores/study_class"
const { get_one_study_class } = storeToRefs(useStudy_classStore());
const { action_one_study_class } = useStudy_classStore();
import { useExam_quizStore } from "../stores/exam_quiz.js"
const { get_one_exam_quiz } = storeToRefs(useExam_quizStore());
const {action_one_exam_quiz } = useExam_quizStore();


import { useTopicStore } from "../stores/topic.js"
const { get_one_topic, topics, one_topic, lenght, state_topic, } = storeToRefs(useTopicStore());

const exam_quiz = ref({});
onMounted(async () => {
    action_one_study_class(route.params.id_courses);
   await action_one_exam_quiz(route.params.id_exam);
    exam_quiz.value = get_one_exam_quiz.value;

    
})
</script>  
