
<template>
    <!-- <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Tables /</span> Basic Tables</h4> -->

    <!-- add exam_submit_code-->

    <!-- <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">{{ get_one_courese.courese_name }} /</span> Topic</h4> -->
    <!-- list exam_submit_code -->
    <!-- <div class="card">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h5 class="mb-0">Basic Layout</h5>
            <small class="text-muted float-end">Default label</small>
        </div>
        <div class="card-body"> -->
            <div class="tab-content">
        <div class="tab-pane fade show active" id="navs-top-home" role="tabpanel">

            <CoursesFormEdit></CoursesFormEdit>



        </div>

    </div>
</template>
<script setup>
import { onMounted } from 'vue';
import CoursesFormEdit from "@/components/CoursesFormEdit.vue";

import { storeToRefs } from 'pinia';
import { useRoute, useRouter } from 'vue-router'
const route = useRoute();// 
import { useStudy_classStore } from "../stores/study_class.js"
const { get_one_courses, coursess, one_courses, lenght, state_courses } = storeToRefs(useStudy_classStore());
const { action_one_courses, action_all_coursess, reset_state_courses, action_delete_courses } = useStudy_classStore();




// action_one_courese(route.params.id_courses);
onMounted(() => {

})
</script>  

