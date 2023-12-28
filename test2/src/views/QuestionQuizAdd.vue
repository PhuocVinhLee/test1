
<template>
    <div class="content-wrapper">
        <div class="container-xxl flex-grow-1 container-p-y">

            <h4 class="fw-bold mb-3 " >
        <routerLink :to="{
            name: 'QuestionQuizBankDetailDashboard',
            params: { id_subject: route.params.id_subject, id_question_bank: route.params.id_question_bank },
            query: { page: 1 }
        }" class="text-black"><div class="">
{{ get_one_question_quiz_bank.question_quiz_bank_title }}
        </div>
        </routerLink>
    </h4>
        <div class="card">

            <div class="card-body ">

                <QuestionQuizFormAdd></QuestionQuizFormAdd>



            </div>

            <!-- </div> -->

        </div>
    </div>
    </div>
</template>
<script setup>
import { onMounted } from 'vue';
import QuestionQuizFormAdd from "@/components/QuestionQuizFormAdd.vue";
import { useExam_submit_codeStore } from "../stores/exam_submit_code.js"
import { storeToRefs } from 'pinia';
import { useRoute, useRouter } from 'vue-router'
const route = useRoute();// 

const { get_one_exam_submit_code, exam_submit_codes, one_exam_submit_code, lenght, state_exam_submit_code } = storeToRefs(useExam_submit_codeStore());
const { action_one_exam_submit_code, action_all_exam_submit_codes, reset_state_exam_submit_code, action_delete_exam_submit_code } = useExam_submit_codeStore();



import { useQuestion_quiz_bankStore } from "../stores/question_quiz_bank.js"
const { get_one_question_quiz_bank,get_one_question_quiz_bank2, state_question_quiz_bank,get_all_question_quiz_banks } = storeToRefs(useQuestion_quiz_bankStore());
const { action_one_question_quiz_bank, action_add_id_question_quiz_bank,action_all_question_quiz_banks, reset_state_question_quiz_bank, action_delete_question_quiz_bank } = useQuestion_quiz_bankStore();


function auto_close_toast() {
    const myTimeout = setTimeout(reset_state_exam_submit_code, 5000);
}

function close_toast() {
    reset_state_exam_submit_code();
}


onMounted( () => {
    action_one_question_quiz_bank(route.params.id_question_bank);


})
</script>  

