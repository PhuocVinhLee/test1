
<template>
  

    <div class="tab-content">
          <div class="tab-pane fade show active" id="navs-top-home" role="tabpanel">           
                  <Exam_quizFormAdd></Exam_quizFormAdd>
          
      
          </div>
      </div>
  
      
      
  
    
  
     
  </template>
  <script setup>
  import { onMounted } from 'vue';
  import Exam_quizFormAdd from "@/components/ExamQuizFormAdd.vue";
  
  import { storeToRefs } from 'pinia';
  import { useRoute, useRouter } from 'vue-router'
  const route = useRoute();// 
  import { useExam_quizStore } from "../stores/exam_quiz.js"
  const { get_one_exam_quiz, exam_quizs, one_exam_quiz, lenght, state_exam_quiz } = storeToRefs(useExam_quizStore());
  const { action_one_exam_quiz, action_all_exam_quizs, reset_state_exam_quiz, action_delete_exam_quiz } = useExam_quizStore();
  
  
  import { useTopicStore } from "../stores/topic.js"
  const { get_one_topic, get_all_topics, topics, one_topic, state_topic, state_active } = storeToRefs(useTopicStore());
  const { action_one_topic, action_all_topics, action_add_topic, reset_state_topic } = useTopicStore();
  
  function auto_close_toast() {
      const myTimeout = setTimeout(reset_state_exam_quiz, 5000);
  }
  
  function close_toast() {
      reset_state_exam_quiz();
  }
  
  
  onMounted(() => {
      action_one_topic(route.params.id_topic)
  
  })
  </script>  
  
  