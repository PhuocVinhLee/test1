
<template>
    <!-- <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Tables /</span> Basic Tables</h4> -->

    <!-- add exam_submit_code-->

    <!-- <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">{{ get_one_study_class.study_class_name }} /</span> Topic</h4> -->
    <!-- list exam_submit_code -->
    <!-- <div class="card">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h5 class="mb-0">Basic Layout</h5>
            <small class="text-muted float-end">Default label</small>
        </div>
        <div class="card-body"> -->
            <div class="tab-content">
        <div class="tab-pane fade show active" id="navs-top-home" role="tabpanel">

            <TopicFormEdit></TopicFormEdit>



        </div>

    </div>
</template>
<script setup>
import { onMounted } from 'vue';
import TopicFormEdit from "@/components/TopicFormEdit.vue";

import { storeToRefs } from 'pinia';
import { useRoute, useRouter } from 'vue-router'
const route = useRoute();// 
import { useTopicStore } from "../stores/topic.js"
const { get_one_topic, topics, one_topic, lenght, state_topic, } = storeToRefs(useTopicStore());
const { action_one_topic, action_all_topics, action_add_topic, reset_state_topic } = useTopicStore();


import { useStudy_classStore } from "../stores/study_class.js"
const { get_one_study_class } = storeToRefs(useStudy_classStore());
const { action_all_study_class, action_one_study_class } = useStudy_classStore();




action_one_study_class(route.params.id_courses);
onMounted(() => {

})
</script>  

