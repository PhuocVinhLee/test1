
<template>
    <div class="content-wrapper">
        <div class="container-xxl flex-grow-1 container-p-y">


            <div class="">

                <div class="nav-align-top mb-4">
                    <ul class="nav nav-tabs" role="tablist">
                        <li class="nav-item">
                            <router-link type="button" class="nav-link" :class="{ active: route.name == 'ExamSubmitcode' }"
                                :to="{
                                    name: 'ExamSubmitcode',
                                    query: { id: route.query.id, page: '1' },
                                    //params: { id: '65014d42b91ceb293644a6b2'}
                                }">
                                Submitcode
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link type="button" class="nav-link " :class="{ active: route.name == 'ExamQuiz' }" :to="{
                                name: 'ExamQuiz',
                                query: { id: route.query.id, page: '1' },
                            }">

                                Trắc nghiệm
                            </router-link>
                        </li>
                    </ul>
                    <div class="tab-content">
                        <div class="tab-pane fade show active" id="navs-top-home" role="tabpanel">
                            <!-- <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Exam /</span> Exam_quiz</h4> -->
                            <!-- list exam_quiz -->
                            <div class="">
                                <router-link :to="{
                                    name: 'ExamQuizAdd',
                                    // params: { idquestion: '64bcf15465db8d20d94bd6db'}
                                }">
                                    <h5 class="card-header"><button type="button" class="btn btn-primary">
                                            <i class='bx bxs-plus-circle'></i> Thêm kỳ thi
                                        </button></h5>
                                </router-link>

                                <ListExam_quiz style="min-height: 450px;"></ListExam_quiz>
                                <!-- edit exam_quiz-->
                            </div>





                            <Pagination :lenght="lenght" @page="emit_page"></Pagination> <!-- chan trang -->
                            <div class="toast-container position-fixed bottom-0 end-0 me-4" v-show="state_exam_quiz">
                                <div id="liveToast" class="bs-toast toast fade show bg-primary" role="alert"
                                    aria-live="assertive" aria-atomic="true">
                                    <div class="toast-header">
                                        <i class="bx bx-bell me-2"></i>
                                        <div class="me-auto fw-semibold">Bootstrap</div>
                                        <small>11 mins ago</small>
                                        <button type="button" class="btn-close" @click="close_toast()"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="toast-body">
                                        Bạn đã cập nhật dữ liệu thành công
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>



            <div class="mt-3">
                <!-- Button trigger modal -->
                <!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalTop">
            Launch modal
        </button> -->

                <!-- Modal -->
                <div class="modal modal-top fade" id="modalTop" tabindex="-1">
                    <div class="modal-dialog">
                        <form class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="modalTopTitle">Modal title</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row">
                                    <div class="col mb-3">
                                        <p>Bạn có chắc chắn nuốn xóa <span class="badge bg-label-dark">{{
                                            get_one_exam_quiz.exam_quiz_title }} </span>? </p>
                                    </div>
                                </div>
                                <div class="row g-2">

                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-outline-secondary" id="btn-close-delete"
                                    data-bs-dismiss="modal">
                                    Close
                                </button>
                                <button type="button" class="btn btn-primary"
                                    @click="delete_exam_quiz(get_one_exam_quiz._id, $event)">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>




        </div>
    </div>
</template>
<script setup>
import { onMounted, watchEffect } from 'vue';
// import Exam_quizFormAdd from "@/components/Exam_quizFormAdd.vue";
// import Exam_quizFormEdit from "@/components/Exam_quizFormEdit.vue";
import ListExam_quiz from "@/components/ExamQuizTable.vue";
import Pagination from "@/components/Pagination.vue";
import { useExam_quizStore } from "../stores/exam_quiz.js"
import { storeToRefs } from 'pinia';
import { useRoute, useRouter } from 'vue-router'
const route = useRoute();// 
const router = useRouter();
const { get_one_exam_quiz, exam_quizs, one_exam_quiz, lenght, state_exam_quiz } = storeToRefs(useExam_quizStore());
const { action_one_exam_quiz, action_all_exam_quizs, reset_state_exam_quiz, action_delete_exam_quiz } = useExam_quizStore();


function emit_page(page) {

    router.push({
        name: "ExamQuiz", query: { id: route.query.id, page: page }
    }
    );
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
    await action_all_exam_quizs(route.query.id, route.query.page);
    auto_close_toast();// auto dong thong bao
    const myModalEl = document.getElementById('btn-close-delete');
    myModalEl.click();// close model

}
watchEffect(() => {
    action_all_exam_quizs(route.query.id, route.query.page);
})

</script>  

