
<template>
  

    <div class="tab-content">
          <div class="tab-pane fade show active" id="navs-top-home" role="tabpanel">
                  
                  <Exam_quizFormEdit></Exam_quizFormEdit>
      
          </div>
      </div>
  
      
      
  
    
  
     
  </template>
  <script setup>
  import { onMounted } from 'vue';

  import Exam_quizFormEdit from "@/components/ExamQuizFormEdit.vue";
  
  
  import { storeToRefs } from 'pinia';
  import { useRoute, useRouter } from 'vue-router'
  const route = useRoute();// 
  
  import { useExam_quizStore } from "../stores/exam_quiz.js"
  const { get_one_exam_quiz, exam_quizs, one_exam_quiz, lenght, state_exam_quiz_add } = storeToRefs(useExam_quizStore());
  const { action_one_exam_quiz, action_all_exam_quizs, reset_state_exam_quiz, action_delete_exam_quiz } = useExam_quizStore();
  
  
  function emit_page(page) {
      console.log(page);
      action_all_exam_quizs(page);// click vao page o duoi 
  }
  
  function auto_close_toast() {
      const myTimeout = setTimeout(reset_state_exam_quiz, 5000);
  }
  
  function close_toast() {
      reset_state_exam_quiz();
  }
  async function delete_exam_quiz(id, event) {
      console.log(event);
      event.preventDefault()
      await action_delete_exam_quiz(id);
      await action_all_exam_quizs(route.query.page);
      auto_close_toast();// auto dong thong bao
      const myModalEl = document.getElementById('btn-close-delete');
      myModalEl.click();// close model
  
  }
  
  const props = defineProps(['id'])// url/prop
  
  
  
  //console.log(props.id)
  
  onMounted(() => {
      action_one_exam_quiz(route.params.id_exam)
  
  })
  </script>  
  
  