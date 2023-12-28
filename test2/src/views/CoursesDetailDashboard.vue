






<template>
    <div class="tab-content">
        <div class="tab-pane fade show active" id="navs-top-home" role="tabpanel">
            <div class="">
                <router-link :to="{

                    name: 'TopicAdd',
                    // query: { id: route.query.id }
                }">
                    <h5 class=""><button type="button" class="btn btn-primary">
                            <i class='bx bxs-plus-circle'></i> Thêm chủ đề
                        </button></h5>
                </router-link>
                <div class="card mb-4 " style=" background-color: rgb(252, 248, 244);" v-for=" topic in get_all_topics">
                    <div class="card-body">
                        <div class="d-flex flex-row justify-content-between  align-items-center mb-3">
                            <h3 class="card-title m-0">{{ topic.topic_title }}</h3>
                            <span>
                                <div class="dropdown">
                                    <button type="button" class="btn p-0 dropdown-toggle hide-arrow"
                                        data-bs-toggle="dropdown">
                                        <i class="bx bx-dots-vertical-rounded"></i>
                                    </button>
                                    <div class="dropdown-menu">

                                        <router-link class="dropdown-item" :to="{
                                            name: 'TopicEdit',
                                            params: { id_topic: topic._id },
                                            // query: {id_course: route.query.id}

                                        }"><i class="bx bx-edit-alt me-1"></i>
                                            Edit </router-link>
                                        <a class="dropdown-item"><i class="bx bx-edit-alt me-1"></i>
                                            Hide</a>
                                        <a class="dropdown-item"><i class="bx bx-edit-alt me-1"></i>
                                            Nhân đôi</a>


                                        <a class="dropdown-item "><i class="bx bx-trash me-1"></i>
                                            Delete</a>
                                    </div>
                                </div>
                            </span>
                        </div>
                        <!-- <h4>{{ topic }}</h4> -->
                        <p class="card-text">
                            {{ topic.topic_describe }}
                        </p>
                       
                    </div>
                    <!-- <div class="text-center mb-4"><img class="card-img-bottom w-25 " style="height: 200px;"
                src="../assets/img/elements/1.jpg" alt="Card image cap"></div> -->
                    <div class="card mx-4 mb-4 px-3 bg-label-primary " v-for="active in topic.list_active">

                        <span class="d-flex flex-row justify-content-between  align-items-center">
                            <router-link :to="{
                                name: 'ExamSubmitcodeDashboard',
                                params: { id_exam: active.id, id_courses: route.params.id_courses }

                            }" class="d-flex flex-row align-items-center" v-if="active.type == 'exam_submit_code'">
                                <!-- <i class='bx bxs-file-pdf' style="font-size: 50px;"></i> -->
                                <i class='bx bx-edit' style="font-size: 40px;"></i>
                                <h5 class="card-title mb-0" v-if="active.type == 'exam_submit_code'">{{
                                    active.exam_title
                                }}</h5>

                            </router-link>
                            <router-link :to="{
                                name: 'ExamQuizDashboard',
                                params: { id_exam: active.id, id_courses: route.params.id_courses }

                            }" v-else-if="active.type == 'exam_quiz'" class="d-flex flex-row align-items-center">
                                <!-- <i class='bx bxs-file-pdf' style="font-size: 50px;"></i> -->
                                <i class='bx bx-edit' style="font-size: 40px;"></i>
                                <h5 class="card-title mb-0" v-if="active.type == 'exam_quiz'">{{
                                    active.exam_title
                                }}</h5>

                                <h5 class="card-title mb-0" v-else-if="active.type == 'notification'">
                                    notificationtest1</h5>
                                <h5 class="card-title mb-0" v-else-if="active.type == 'document'">{{
                                    active
                                }}</h5>
                                <h5 class="card-title mb-0" v-else-if="active.type == 'exercise'">exercise
                                </h5>

                            </router-link>
                            <a  :href="`http://localhost:3000/files/`+active.document_title"  v-else-if="active.type == 'document'" class="d-flex flex-row align-items-center">
                                <!-- <i class='bx bxs-file-pdf' style="font-size: 50px;"></i> -->
                                
                                <i class='bx bxs-file-doc' style="font-size: 40px;"></i>
                                <h5 class="card-title mb-0" v-if="active.type == 'exam_quiz'">{{
                                    active.exam_title
                                }}</h5>

                                <h5 class="card-title mb-0" v-else-if="active.type == 'notification'">
                                    notificationtest1</h5>
                                <h5 class="card-title mb-0" v-else-if="active.type == 'document'">{{
                                    active.document_title
                                }}</h5>
                                <h5 class="card-title mb-0" v-else-if="active.type == 'exercise'">exercise
                                </h5>

                            </a>

                            <span>
                                <div class="dropdown">
                                    <button type="button" class="btn p-0 dropdown-toggle hide-arrow"
                                        data-bs-toggle="dropdown">
                                        <i class="bx bx-dots-vertical-rounded"></i>
                                    </button>
                                    <div class="dropdown-menu">

                                        <router-link class="dropdown-item" :to="{
                                            name: 'ExamSubmitCodeDetail',
                                            params: { id_exam: active.id, id_courses: route.params.id_courses },
                                            // query: { id_course: route.query.id }

                                        }"><i class="bx bx-edit-alt me-1"></i>
                                            Edit </router-link>
                                        <a class="dropdown-item"><i class="bx bx-edit-alt me-1"></i>
                                            Hide</a>
                                        <a class="dropdown-item"><i class="bx bx-edit-alt me-1"></i>
                                            Nhân đôi</a>


                                        <a class="dropdown-item "><i class="bx bx-trash me-1"></i>
                                            Delete</a>
                                    </div>
                                </div>
                            </span>
                        </span>
                        <!-- <p class="card-text">
                Các em xem slide này trước để ngày mai cô vào sẽ giải thích sau nhé.
            </p> -->
                        <p class="card-text"><small class="text-muted">Lần cuối cùng cập nhật {{ active.create_at }}</small>
                        </p>
                    </div>
                    <!-- <div class="card mx-4 mb-4 px-3 bg-label-primary ">
                                        <span class="d-flex flex-row justify-content-between  align-items-center">
                                            <span class="d-flex flex-row align-items-center">
                                                <i class='bx bx-edit' style="font-size: 50px;"></i>
                                                <h5 class="card-title mb-0">Kiểm tra giữa kỳ</h5>

                                            </span>

                                            <span>
                                                <div class="dropdown">
                                                    <button type="button" class="btn p-0 dropdown-toggle hide-arrow"
                                                        data-bs-toggle="dropdown">
                                                        <i class="bx bx-dots-vertical-rounded"></i>
                                                    </button>
                                                    <div class="dropdown-menu">

                                                        <a class="dropdown-item"><i class="bx bx-edit-alt me-1"></i>
                                                            Edit</a>
                                                        <a class="dropdown-item"><i class="bx bx-edit-alt me-1"></i>
                                                            Hide</a>
                                                        <a class="dropdown-item"><i class="bx bx-edit-alt me-1"></i>
                                                            Nhân đôi</a>


                                                        <a class="dropdown-item "><i class="bx bx-trash me-1"></i>
                                                            Delete</a>
                                                    </div>
                                                </div>
                                            </span>
                                        </span>
                                        <p class="card-text">
                Các em xem slide này trước để ngày mai cô vào sẽ giải thích sau nhé.
            </p>
                                        <p class="card-text"><small class="text-muted">Lần cuối cùng cập nhật 3 phút
                                                trước</small></p>
                                    </div> -->
                    <!-- <div class="card mx-4 mb-4 px-3 bg-label-primary ">
                                        <span class="d-flex flex-row justify-content-between  align-items-center">
                                            <span class="d-flex flex-row align-items-center">
                                                <i class='bx bxs-book-open' style="font-size: 50px;"></i>

                                                <h5 class="card-title mb-0">Bài tập danh sách liên kết</h5>
                                            </span>

                                            <span>
                                                <div class="dropdown">
                                                    <button type="button" class="btn p-0 dropdown-toggle hide-arrow"
                                                        data-bs-toggle="dropdown">
                                                        <i class="bx bx-dots-vertical-rounded"></i>
                                                    </button>
                                                    <div class="dropdown-menu">

                                                        <a class="dropdown-item"><i class="bx bx-edit-alt me-1"></i>
                                                            Edit</a>
                                                        <a class="dropdown-item"><i class="bx bx-edit-alt me-1"></i>
                                                            Hide</a>
                                                        <a class="dropdown-item"><i class="bx bx-edit-alt me-1"></i>
                                                            Nhân đôi</a>


                                                        <a class="dropdown-item "><i class="bx bx-trash me-1"></i>
                                                            Delete</a>
                                                    </div>
                                                </div>
                                            </span>
                                        </span>
                                        <p class="card-text">
                Các em xem slide này trước để ngày mai cô vào sẽ giải thích sau nhé.
            </p>
                                        <p class="card-text"><small class="text-muted">Lần cuối cùng cập nhật 3 phút
                                                trước</small></p>
                                    </div> -->

                    <div class="card mx-4 mb-4 px-3 ">
                        <span class="d-flex flex-row justify-content-between  align-items-center"
                            @click="get_topic_id(topic._id)">
                            <span class="d-flex flex-row align-items-center" data-bs-toggle="modal"
                                data-bs-target="#modalToggle">
                                <!-- <i class="menu-icon tf-icons bx bx-layout" style="font-size: 70px;"></i> -->
                                <!-- <i class='bx bx-message-square-add' style="font-size: 70px;"></i> -->
                                <i class='bx bx-plus' style="font-size: 50px;"></i>
                                <!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalToggle">
                          Launch modal
                        </button> -->
                                <h5 class="card-title mb-0">Thêm một tài nguyên hoặc hành động</h5>
                            </span>


                        </span>

                    </div>




                </div>


            </div>


            <div class="toast-container position-fixed bottom-0 end-0 me-4" v-show="state_topic">
                <div id="liveToast" class="bs-toast toast fade show bg-primary" role="alert" aria-live="assertive"
                    aria-atomic="true">
                    <div class="toast-header">
                        <i class="bx bx-bell me-2"></i>
                        <div class="me-auto fw-semibold">Bootstrap</div>
                        <small>11 mins ago</small>
                        <button type="button" class="btn-close" @click="close_toast()" aria-label="Close"></button>
                    </div>
                    <div class="toast-body">
                        Bạn đã cập nhật dữ liệu thành công
                    </div>
                </div>
            </div>

            <div class="toast-container position-fixed bottom-0 end-0 me-4" v-show="state_active">
                <div id="liveToast" class="bs-toast toast fade show bg-primary" role="alert" aria-live="assertive"
                    aria-atomic="true">
                    <div class="toast-header">
                        <i class="bx bx-bell me-2"></i>
                        <div class="me-auto fw-semibold">Bootstrap</div>
                        <small>11 mins ago</small>
                        <button type="button" class="btn-close" @click="close_toast()" aria-label="Close"></button>
                    </div>
                    <div class="toast-body">
                        Bạn đã thêm thành công HD
                    </div>
                </div>
            </div>

        </div>





    </div>




    <!-- <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Exam/</span> Exam_submit_code</h4> -->
    <!-- list exam_submit_code -->


    <div class="mt-3">
        <!-- Button trigger modal -->
        <!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalTop">
            Launch modal
        </button> -->

        <!-- Modal -->
        <!-- <div class="modal modal-top fade" id="modalTop" tabindex="-1">
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
}} </span>? </p>
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
                                    @click="delete_exam_submit_code(get_one_exam_submit_code._id, $event)">Save</button>
                            </div>
                        </form>
                    </div>
                </div> -->
    </div>
    <div class="mt-3">


        <!-- Modal 1-->
        <div class="modal fade" id="modalToggle" aria-labelledby="modalToggleLabel" tabindex="-1" style="display: none;"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="modalToggleLabel">Một hành động hoặc tài nguyên</h5>
                        <button type="button" class="btn-close" id="close-btn-1" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row mb-5">
                            <div class="col-md-6 col-lg-4 mb-3" @click="push_document_add()">
                                <div class="card p-2" style="height: 120px;">
                                    <div class="text-center"><button type="button"
                                            class="btn btn-icon btn-outline-primary p-4">
                                            <span class="bx bxs-file-pdf" style="font-size: 40px;"></span>
                                        </button>
                                    </div>
                                    <div class="card-body text-center">
                                        <h5 class="card-title">Tài liệu</h5>


                                    </div>
                                </div>
                            </div>
                            <!-- <div class="col-md-6 col-lg-4 mb-3">
                                <div class="card  p-2" style="height: 120px;">
                                    <div class="text-center"><button type="button"
                                            class="btn btn-icon btn-outline-primary p-4">
                                            <span class='bx bxs-book-open' style="font-size: 40px;"></span>
                                        </button>
                                    </div>
                                    <div class="card-body text-center">
                                        <h5 class="card-title">Bài tập</h5>


                                    </div>
                                </div>
                            </div> -->
                            <div class="col-md-6 col-lg-4 mb-3">
                                <div class="card  p-2" style="height: 120px;" data-bs-target="#modalToggle2"
                                    data-bs-toggle="modal" data-bs-dismiss="modal">
                                    <div class="text-center"><button type="button"
                                            class="btn btn-icon btn-outline-primary p-4">
                                            <span class='bx bx-edit' style="font-size: 40px;"></span>
                                        </button>
                                    </div>
                                    <div class="card-body text-center">
                                        <h5 class="card-title">Bài thi</h5>


                                    </div>
                                </div>
                            </div>


                            <div class="col-md-6 col-lg-4 mb-3" @click="push_page_notification()">
                                <div class="card  p-2" style="height: 120px;">
                                    <div class="text-center"><button type="button"
                                            class="btn btn-icon btn-outline-primary p-4">

                                            <span class='bx bx-bell-plus' style="font-size: 40px;"></span>
                                        </button>
                                    </div>
                                    <div class="card-body text-center">
                                        <h5 class="card-title">Thông báo</h5>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="modal-footer">
                <button class="btn btn-primary" data-bs-target="#modalToggle2" data-bs-toggle="modal"
                    data-bs-dismiss="modal">
                    Open second modal
                </button>
            </div> -->
                </div>
            </div>
        </div>
        <!-- Modal 2-->
        <div class="modal fade" id="modalToggle2" aria-labelledby="modalToggleLabel2" tabindex="-1" style="display: none;"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="modalToggleLabel2">Chọn một thể loại thi</h5>
                        <button type="button" id="btn-close" class="btn-close" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="demo-inline-spacing">

                            <button @click=" push_examsubmitcode_add()" type="button" class="btn btn-outline-primary">
                                Lập trình </button>

                            <button @click="push_examquiz_add()" type="button" class="btn btn-outline-secondary">Trắc
                                nghiệm</button>

                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-primary" data-bs-target="#modalToggle" data-bs-toggle="modal"
                            data-bs-dismiss="modal">
                            Back to first
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { onMounted, watchEffect, ref } from 'vue';
// import Exam_submit_codeFormAdd from "@/components/Exam_submit_codeFormAdd.vue";
// import Exam_submit_codeFormEdit from "@/components/Exam_submit_codeFormEdit.vue";
//import CoursesCardDetail from "@/components/CoursesCardDetail.vue";

import { useExam_submit_codeStore } from "../stores/exam_submit_code.js"
import { storeToRefs } from 'pinia';
import { useRoute, useRouter } from 'vue-router'
const route = useRoute();// 
const router = useRouter();
import { useTopicStore } from "../stores/topic.js"
const { get_one_topic, get_all_topics, topics, one_topic, lenght, state_topic, state_active } = storeToRefs(useTopicStore());
const { action_one_topic, action_all_topics, action_add_topic, reset_state_topic , reset_state_active} = useTopicStore();




function auto_close_toast() {
    const myTimeout = setTimeout(reset_state_exam_submit_code, 5000);
}

function close_toast() {
    reset_state_exam_submit_code();
}
async function delete_exam_submit_code(id, event) {
    event.preventDefault()
    await action_delete_exam_submit_code(id);
    await action_all_exam_submit_codes(route.query.id, route.query.page);
    auto_close_toast();// auto dong thong bao
    const myModalEl = document.getElementById('btn-close-delete');
    myModalEl.click();// close model

}

const topic_id = ref();
function get_topic_id(id) {
    topic_id.value = id;
    console.log(topic_id.value);
}
function push_page_notification() {
    console.log("pusu gae")
    console.log(topic_id.value);
}
function push_page_exam() {
    console.log("pusu gae")
    console.log(topic_id.value);
}

async function push_document_add() {
    console.log(topic_id.value);
    const modal_close = document.getElementById('close-btn-1');
    modal_close.click();
    router.push({
        name: "DocumentAdd",
        params: { id_topic: topic_id.value }
    }
    );
}

async function push_examsubmitcode_add() {
    console.log(topic_id.value);
    const modal_close = document.getElementById('btn-close');
    modal_close.click();
    router.push({
        name: "ExamSubmitcodeAdd",
        params: { id_topic: topic_id.value }
        // query: { id_course: route.query.id, id_topic: topic_id.value }
    }
    );
}
async function push_examquiz_add() {
    console.log(topic_id.value);
    const modal_close = document.getElementById('btn-close');
    modal_close.click();
    router.push({
        name: "ExamQuizAdd",
        params: { id_topic: topic_id.value }
        // query: { id_course: route.query.id, id_topic: topic_id.value }
    }
    );
}

watchEffect(() => {
    // action_all_exam_submit_codes(route.query.id, route.query.page);// no khong tai template lai
    // khoa hoc
    /// console.log(route.params.id_courses)
})
onMounted(() => {
    action_all_topics(route.params.id_courses)
    // action_all_exam_submit_codes(props.id,route.query.page);// chu yeu de lay leght cua exam_submit_code
    //action_all_exam_submit_codes(route.query.id,route.query.page);


})
</script>  

