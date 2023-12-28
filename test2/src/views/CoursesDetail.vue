
<template>
    <div class="content-wrapper">
        <div class="container-xxl flex-grow-1 container-p-y">

            <div class="">
                <h4 v-if="1" class="fw-bold py-3 ">{{ get_one_study_class.study_class_title }}
                    <span v-show="route.name == 'TopicAdd'">/ Thêm chủ đề</span>
                    <span v-show="route.name == 'ExamSubmitcodeAdd'">/ {{get_one_topic.topic_title }}</span>
                    <span v-show="route.name == 'TopicEdit'">/ {{ get_one_topic.topic_title }} </span>
                </h4>

                <div class="nav-align-top mb-4">
                    <ul class="nav nav-tabs" role="tablist">
                        <li class="nav-item ">
                            <router-link type="button" class="nav-link " :class="{
                                active: route.name == 'CoursesDetailDashboard' || route.name == 'TopicAdd'
                                    || route.name == 'TopicEdit'
                            }" :to="{
    name: 'CoursesDetailDashboard',
    // query: { id: route.query.id },
    //  params: { id: '65014d42b91ceb293644a6b2'}
}">

                                Tổng quát
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link type="button" class="nav-link " :class="{ active: route.name == 'CoursesEdit' }" :to="{
                                name: 'CoursesEdit',
                                   //params: { id_courses: '65014d42b91ceb293644a6b2'}
                               
                            }">
                                Cài đặt
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link type="button" class="nav-link " :class="{ active: route.name == 'CoursesMember' }" :to="{
                                name: 'CoursesMember',
                               
                            }">
                                Thành viên
                            </router-link>
                        </li>
                        <!-- <li class="nav-item">
                            <router-link type="button" class="nav-link " :class="{ active: route.name == 'ExamQuiz' }" :to="{
                                name: 'ExamQuiz',
                                query: { id: route.query.id, page: '1' },
                            }">
                                Điểm số
                            </router-link>
                        </li> -->
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

import { useTopicStore } from "../stores/topic.js"
const { get_one_topic, topics, one_topic, lenght, state_topic, } = storeToRefs(useTopicStore());


onMounted(() => {
    action_one_study_class(route.params.id_courses);
})
</script>  
