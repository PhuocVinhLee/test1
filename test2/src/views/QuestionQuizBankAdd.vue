
<template>
    <div class="content-wrapper">
        <div class="container-xxl flex-grow-1 container-p-y">

        <!-- <div class="container-xxl flex-grow-1 container-p-y"> -->

        <!-- <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Tables /</span> Basic Tables</h4> -->

        <!-- add exam_submit_code-->

        <!-- <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Exam_submit_code /</span> Exam_submit_code submit code_add</h4> -->
        <!-- list exam_submit_code -->
        <div class="card">

            <div class="card-body ">

                <QuestionQuizBankFormAdd></QuestionQuizBankFormAdd>



            </div>

            <!-- </div> -->

        </div>
    </div>
    </div>
</template>
<script setup>
import { onMounted } from 'vue';
import QuestionQuizBankFormAdd from "@/components/QuestionQuizBankFormAdd.vue";
import { useExam_submit_codeStore } from "../stores/exam_submit_code.js"
import { storeToRefs } from 'pinia';
import { useRoute, useRouter } from 'vue-router'
const route = useRoute();// 

const { get_one_exam_submit_code, exam_submit_codes, one_exam_submit_code, lenght, state_exam_submit_code } = storeToRefs(useExam_submit_codeStore());
const { action_one_exam_submit_code, action_all_exam_submit_codes, reset_state_exam_submit_code, action_delete_exam_submit_code } = useExam_submit_codeStore();




function auto_close_toast() {
    const myTimeout = setTimeout(reset_state_exam_submit_code, 5000);
}

function close_toast() {
    reset_state_exam_submit_code();
}


// onMounted(() => {
//     action_all_exam_submit_codes(1);// chu yeu de lay leght cua exam_submit_code

// })
</script>  

