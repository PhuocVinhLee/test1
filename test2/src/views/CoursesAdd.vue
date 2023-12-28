
<template>
  

    <div class="content-wrapper">
        <div class="container-xxl flex-grow-1 container-p-y">

            <!-- <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Tables /</span> Basic Tables</h4> -->

            <!-- add courses-->

            <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Courses /</span> Courses submit code_add</h4>
            <!-- list courses -->
            <div class="card">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h5 class="mb-0">Basic Layout</h5>
            <small class="text-muted float-end">Default label</small>
        </div>
        <div class="card-body">
                
                <CoursesFormAdd></CoursesFormAdd>
        
         
      
          </div>
           
          </div>

        </div>
    </div>

    
    

  

   
</template>
<script setup>
import { onMounted } from 'vue';
import CoursesFormAdd from "@/components/CoursesFormAdd.vue";

import { storeToRefs } from 'pinia';    
import { useRoute, useRouter } from 'vue-router'
const route = useRoute();// 
import { useStudy_classStore } from "../stores/study_class.js"
const { get_one_courses, coursess, one_courses, lenght, state_courses } = storeToRefs(useStudy_classStore());
const { action_one_courses, action_all_coursess, reset_state_courses, action_delete_courses } = useStudy_classStore();


function auto_close_toast() {
    const myTimeout = setTimeout(reset_state_courses, 5000);
}

function close_toast() {
    reset_state_courses();
}


// onMounted(() => {
//     action_all_coursess(1);// chu yeu de lay leght cua courses

// })
</script>  

