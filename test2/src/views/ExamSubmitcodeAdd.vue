
<template>
  

  <div class="tab-content">
        <div class="tab-pane fade show active" id="navs-top-home" role="tabpanel">           
                <Exam_submit_codeFormAdd></Exam_submit_codeFormAdd>
        
    
        </div>
    </div>

    
    

  

   
</template>
<script setup>
import { onMounted } from 'vue';
import Exam_submit_codeFormAdd from "@/components/Exam_submit_codeFormAdd.vue";

import { storeToRefs } from 'pinia';
import { useRoute, useRouter } from 'vue-router'
const route = useRoute();// 
import { useExam_submit_codeStore } from "../stores/exam_submit_code.js"
const { get_one_exam_submit_code, exam_submit_codes, one_exam_submit_code, lenght, state_exam_submit_code } = storeToRefs(useExam_submit_codeStore());
const { action_one_exam_submit_code, action_all_exam_submit_codes, reset_state_exam_submit_code, action_delete_exam_submit_code } = useExam_submit_codeStore();


import { useTopicStore } from "../stores/topic.js"
const { get_one_topic, get_all_topics, topics, one_topic, state_topic, state_active } = storeToRefs(useTopicStore());
const { action_one_topic, action_all_topics, action_add_topic, reset_state_topic } = useTopicStore();

function auto_close_toast() {
    const myTimeout = setTimeout(reset_state_exam_submit_code, 5000);
}

function close_toast() {
    reset_state_exam_submit_code();
}


onMounted(() => {
    action_one_topic(route.params.id_topic)

})
</script>  

