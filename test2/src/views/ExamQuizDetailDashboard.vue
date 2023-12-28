
<template>
    <div class="tab-content">
        <div class="tab-pane fade show active" id="navs-top-home" role="tabpanel">
            <div class="mb-2"> <span>Bắt đầu:</span> <span class="badge bg-label-primary fs-6">{{ exam_quiz_datetime_start
            }}</span></div>
            <div class="mb-2"> <span>Kêt thúc:</span> <span class="badge bg-label-primary fs-6">{{ exam_quiz_datetime_end
            }}</span></div>
            <div class="mb-2"> <span>Số lần làm tối đa :</span> <span class="badge bg-label-primary fs-6">{{
                get_one_exam_quiz.number_attempts }}</span></div>
            <div class="mb-2"> <span>Thời gian làm bài:</span> <span class="badge bg-label-primary fs-6">{{
                get_one_exam_quiz.exam_quiz_duration }} phút</span></div>
            <!-- <div>{{ get_one_exam_quiz.exam_quiz_datetime_end }}</div>
            <div>{{ get_one_exam_quiz.exam_quiz_duration }}</div>
            <div>{{ get_one_exam_quiz.number_attempts }}</div> -->

            <button @click="push_exam()" type="button" class="btn btn-primary">
                Thi
            </button>
           


        </div>

    </div>
    <div class="toast-container position-fixed bottom-0 end-0 me-4" v-show="!check_exam_login">
        <div id="liveToast" class="bs-toast toast fade show bg-primary" role="alert" aria-live="assertive"
            aria-atomic="true">
            <div class="toast-header">
                <i class="bx bx-bell me-2"></i>
                <div class="me-auto fw-semibold">Bootstrap</div>
                <small>11 mins ago</small>
                <button type="button" class="btn-close" @click="close_toast_check_exam()" aria-label="Close"></button>
            </div>
            <div class="toast-body">
                {{ err_check_exam }}
            </div>
        </div>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
// import Exam_quizFormAdd from "@/components/Exam_quizFormAdd.vue";
// import Exam_quizFormEdit from "@/components/Exam_quizFormEdit.vue";
// import ListExam_quiz from "@/components/Exam_quizTable.vue";
// import Pagination from "@/components/Pagination.vue";

import { storeToRefs } from 'pinia';
import { useRoute, useRouter } from 'vue-router'
const route = useRoute();// 
const router = useRouter();

import { useExam_quizStore } from "../stores/exam_quiz.js"
const { get_one_exam_quiz, exam_quizs, one_exam_quiz, lenght, state_exam_quiz_add } = storeToRefs(useExam_quizStore());
const { action_one_exam_quiz, action_all_exam_quizs, reset_state_exam_quiz, action_delete_exam_quiz } = useExam_quizStore();

import { useResult_exam_quizStore } from "../stores/result_exam_quiz.js"
const { get_all_result_exam_quizs, state_result_exam_quizs } = storeToRefs(useResult_exam_quizStore());
const { action_all_result_exam_quizs, action_update_result_exam_quizs, action_one_result_exam_quizs, action_add_result_exam_quizs } = useResult_exam_quizStore();

const result_exam_quiz_local = ref([]);

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
function currentDate(date_time) {
    const current = new Date(date_time);
    const date = `${current.getHours()}:${current.getMinutes()}:${current.getSeconds()} - ${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    return date;
}

async function get_result_exam_quiz_local() {
    await action_all_result_exam_quizs(route.params.id_exam);// get list result-exam
  //  result_exam_quiz_local.value = get_all_result_exam_quizs.value[get_all_result_exam_quizs.value.length - 1];

}

// now.toISOString().slice(0, 19)
function time_distance(end_time, start_time) {// end > start
    console.log(start_time)
    console.log(end_time)
    let s = new Date(start_time);
    let e = new Date(end_time);

    console.log((e - s) / 1000 / 60);
    return ((e - s) / 1000 / 60);// minue

}
//result_exam_quiz_local.value.length > get_one_exam_quiz.value.number_attempts || 
const check_exam_login = ref(true);
const err_check_exam = ref("");
function auto_close_toast_check_exam() {
    const myTimeout = setTimeout(() => { check_exam_login.value = true }, 5000);
}

function close_toast_check_exam() {
    check_exam_login.value = true;
}
function check_exam() {
    let now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    if (time_distance(now.toISOString().slice(0, 19), get_one_exam_quiz.value.exam_quiz_datetime_start) < 0) {
        err_check_exam.value = "Thời gian thi chưa bắt đầu"
        check_exam_login.value = false;
        auto_close_toast_check_exam()
        return 0;
    } else if (time_distance(now.toISOString().slice(0, 19), get_one_exam_quiz.value.exam_quiz_datetime_end ) >= 0 ) {
        err_check_exam.value = "Thời gian thi đã kết thúc"
        check_exam_login.value = false;
        auto_close_toast_check_exam()
        return 0;
    } else if (result_exam_quiz_local.value.length >= get_one_exam_quiz.value.number_attempts 
      && result_exam_quiz_local.value[result_exam_quiz_local.value.length -1].completed == true ) {
        err_check_exam.value = "Số lần thi đã đạt đến giới hạn"
        check_exam_login.value = false;
        auto_close_toast_check_exam()
        return 0;
    } 
    else {
        return 1;
    }
}
function push_exam() {
    if (check_exam() && get_one_exam_quiz.value.list_question ) {
        router.push(
            {
                name: 'TestQuestionQuiz',
                params: { id: route.params.id_exam, id_courses: route.params.id_courses }
            })
    }
    else {
        console.log("cuoc thi co loi")
    }

}

const props = defineProps(['id'])// url/prop
const exam_quiz_datetime_end = ref({});
const exam_quiz_datetime_start = ref({});


//console.log(props.id)

onMounted(async () => {
    await action_one_exam_quiz(route.params.id_exam);
    console.log(get_one_exam_quiz.value)
    exam_quiz_datetime_end.value = currentDate(get_one_exam_quiz.value.exam_quiz_datetime_end);
    exam_quiz_datetime_start.value = currentDate(get_one_exam_quiz.value.exam_quiz_datetime_start)
    await get_result_exam_quiz_local(route.params.id_exam)
    result_exam_quiz_local.value = get_all_result_exam_quizs.value;
})
</script>  
  
  