
<template>
    <div class="tab-content">
        <div class="tab-pane fade show active" id="navs-top-home" role="tabpanel">
            <!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalToggle">
                          Launch modal
                        </button> -->

            <!-- <Form @submit="submit()" class="row  " id="courses_add" :validation-schema="study_classFormSchema"
                    v-slot="{ errors }">

                    <div class="col-md-5 mb-3">
                        <label for="validationServer" class="form-label">Ngan hang cau hoi</label>
                        <Field class="form-select" as="select" name="subject_id" aria-label="select coursesple"
                            v-model="question_bank_local._id">
                            <option v-show="false" value="" disabled>Vui lòng chọn môn thi</option>
                            <option value="all">Ngân hàng hệ thống</option>
                            <option v-for="question_bank in get_all_question_submit_code_banks" :key="question_bank._id"
                                :value="question_bank._id"> {{
                                    question_bank.question_submit_code_bank_title }}</option>

                        </Field>
                        <ErrorMessage name="subject_id" class="error-feedback" />
                    </div>
                </Form> -->

            <h5 class=""><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalToggle">
                    <i class='bx bxs-plus-circle'></i> Thêm Câu hỏi
                </button></h5>

            <div class="table-responsive text-nowrap">
                <div v-if="isLoading" class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
                <div v-else-if="get_lenght_question_submit_code <= 0"> Không tìm thấy câu hỏi!</div>

                <div v-else>
                    <table class="table table-bordered">

                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Tên</th>
                                <th>Nội dung</th>
                                <!-- <th>Đáp án</th> -->
                                <!-- <th>Môn học</th> -->
                                <th>Chủ sỡ hữu</th>
                                <th>Mức độ</th>
                                <th>Hành động</th>



                            </tr>
                        </thead>


                        <tbody>


                            <tr v-for="(question_submit_code_bank, index) in list_question_submit_code_local"
                                :key="question_submit_code_bank._id">
                                <td>{{ index + 1 }}</td>
                                <td> <i class="fab fa-angular fa-lg text-danger me-3"></i> <strong>{{
                                    question_submit_code_bank.question_submit_code_title }} </strong></td>

                                <!-- <td>{{ question_submit_code_bank.subject_id }}</td> -->
                                <td>
                                    <div class="btn-group">
                                        <span class="badge bg-label-primary  dropdown-toggle" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            xem
                                        </span>
                                        <div class="dropdown-menu p-2 " style="width: 500px;">
                                            <span v-html="question_submit_code_bank.question_submit_code_describe"></span>
                                        </div>
                                    </div>
                                </td>

                                <!-- <td>{{ question_submit_code_bank.answer }}</td> -->
                                <td>

                                    <ul v-if="question_submit_code_bank.teacher"
                                        class="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top"
                                            class="avatar avatar-xs pull-up" title=""
                                            data-bs-original-title="Lilian Fuller">
                                            <img :src="`http://localhost:3000/files/` + question_submit_code_bank.teacher.avatar"
                                                alt="Avatar" class="rounded-circle">
                                        </li>
                                        {{ question_submit_code_bank.teacher.teacher_id }}

                                    </ul>
                                </td>
                                <!-- <td>  <span class="badge bg-label-primary me-1">{{question_submit_code_bank.question_submit_code_bank_authorization}}</span> <span class="badge bg-label-warning me-1">write</span>

</td> -->

                                <!-- <td>{{ question_submit_code_bank.question_submit_code_bank_type }} </td> -->

                                <td>
                                    <span class="badge " :class="{
                                        'bg-danger': question_submit_code_bank.question_submit_code_level == 'Hard',
                                        'bg-warning': question_submit_code_bank.question_submit_code_level == 'Medium',
                                        'bg-success': question_submit_code_bank.question_submit_code_level == 'Easy'
                                    }">{{ question_submit_code_bank.question_submit_code_level }}</span>
                                </td>
                                <td>
                                    <div class="dropdown">
                                        <button class="btn p-0" type="button" id="cardOpt4" data-bs-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false">
                                            <i class="bx bx-dots-vertical-rounded"></i>
                                        </button>
                                        <div class="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt4">
                                            <router-link class="dropdown-item" :to="{
                                                name: 'QuestionSubmitCodeEdit',
                                                params: { id_question: question_submit_code_bank._id, id_subject: route.params.id_subject, id_question_bank: route.params.id_question_bank }

                                            }"> Chỉnh sửa</router-link>
                                            <span @click="delete_question(question_submit_code_bank._id)"
                                                class="dropdown-item"> Xóa khỏi ngân hàng này</span>

                                            <span class="dropdown-item" @click="duplicate(question_submit_code_bank._id)">
                                                Nhân đôi</span>
                                            <!-- // <a class="dropdown-item" href="javascript:void(0);">View More</a>
// <a class="dropdown-item" href="javascript:void(0);">Delete</a> -->
                                        </div>
                                    </div>
                                </td>

                            </tr>


                        </tbody>

                    </table>

                </div>
                <Pagination :lenght="get_lenght_question_submit_code" @page="emit_page"></Pagination> <!-- chan trang -->
            </div>

            <div class="toast-container position-fixed bottom-0 end-0 me-4" v-show="state_question_submit_code_bank">
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
                        <h5 class="modal-title" id="modalToggleLabel">Chọn một hình thức thêm câu hỏi</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <router-link :to="{
                            name: 'QuestionSubmitcodeBankAddDetail',
                            params: { id_subject: route.params.id_subject, id_question_bank: route.params.id_question_bank, id_question_bank2: route.params.id_question_bank },
                            query: { page: 1 }
                        }">
                            <h5 class=""><button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                    data-bs-target="#modalToggle">
                                    <i class='bx bxs-plus-circle'></i> Ngân hàng câu hỏi
                                </button></h5>
                        </router-link>
                        <router-link :to="{

                            name: 'QuestionSubmitCodeAdd',
                            // query: { id: route.query.id }
                            params: { id_subject: route.params.id_subject, id_question_bank: route.params.id_question_bank }
                        }">
                            <h5 class=""><button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                    data-bs-target="#modalToggle">
                                    <i class='bx bxs-plus-circle'></i> Thêm một câu hỏi mới
                                </button></h5>
                        </router-link>
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
                                Submit code </button>

                            <button type="button" class="btn btn-outline-secondary">Trắc nghiệm</button>

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
import { onMounted, watchEffect, watch, ref, computed, onBeforeMount } from 'vue';
// import Exam_submit_codeFormAdd from "@/components/Exam_submit_codeFormAdd.vue";
// import Exam_submit_codeFormEdit from "@/components/Exam_submit_codeFormEdit.vue";
//import CoursesCardDetail from "@/components/CoursesCardDetail.vue";
import Pagination from "@/components/Pagination.vue";
//import QuestionSubmitcodeBankDetailDashboardTable from "@/components/QuestionSubmitcodeBankDetailDashboardTable.vue";
import { useExam_submit_codeStore } from "../stores/exam_submit_code.js"
import { storeToRefs } from 'pinia';
import { useRoute, useRouter } from 'vue-router'
const route = useRoute();// 
const router = useRouter();

import { useQuestion_submit_code_bankStore } from "../stores/question_submit_code_bank.js"
const { get_one_question_submit_code_bank, get_all_question_submit_code_banks, state_question_submit_code_bank } = storeToRefs(useQuestion_submit_code_bankStore());
const { action_one_question_submit_code_bank, action_update_uestion_submit_code_bank, action_add_id_question_submit_code_bank, action_all_question_submit_code_banks, reset_state_question_submit_code_bank, action_delete_question_submit_code_bank } = useQuestion_submit_code_bankStore();
import { useQuestion_submit_codeStore } from "../stores/question_submit_code.js"
const { get_all_question_submit_codes, get_one_question_submit_code, get_lenght_question_submit_code, state_question_submit_code } = storeToRefs(useQuestion_submit_codeStore());
const { action_one_question_submit_code, action_all_question_submit_codes_by_teacher, action_add_question_submit_code, action_list_question_submit_code_by_question_bank } = useQuestion_submit_codeStore();

import { useTeacherStore } from "../stores/teacher.js"
const { get_all_teachers, get_list_teachers, state_teacher, get_one_teacher } = storeToRefs(useTeacherStore());
const { action_search_teacher, action_one_teacher, action_list_teacher_by_question_bank, action_update_teacher, action_one_acccout_teacher } = useTeacherStore();




function auto_close_toast() {
    const myTimeout = setTimeout(reset_state_question_submit_code_bank, 5000);
}

function close_toast() {
    reset_state_question_submit_code_bank();
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



function emit_page(page) {
    router.push({
        params: { id_question_bank: route.params.id_question_bank },
        query: { page: page }
    }
    );
}

async function duplicate(id_question) {
    await action_one_question_submit_code(id_question);
    const one_question = get_one_question_submit_code.value;
    await action_add_question_submit_code(one_question);
    if (state_question_submit_code.value.insertedId) {
        await action_add_id_question_submit_code_bank(route.params.id_question_bank, { question_id: state_question_submit_code.value.insertedId })
        console.log(state_question_submit_code_bank.value);
        auto_close_toast();
        get_All();
    }
    

}
async function delete_question(id_question) {
  
    console.log(get_one_question_submit_code_bank.value);
    let list_question_update = get_one_question_submit_code_bank.value.list_question.filter((id) => {
        return id_question != id;
    })
   
     await action_update_uestion_submit_code_bank(route.params.id_question_bank, {list_question: list_question_update});

    
       auto_close_toast();
        // router.push({
        //     name: "QuestionSubmitcodeBankDetailDashboard",
        //     params: { id_subject: route.params.id_subject, id_question_bank: route.params.id_question_bank },
        //     query: { page: route.query.page }// sai lenght
        // }
        // );
        get_All();
    

}

const list_question = ref([]);//12

const list_question_submit_code_local = ref([]);
async function get_list_question_submit_code_banks() {
    list_question_submit_code_local.value = get_all_question_submit_codes.value
    if (list_question_submit_code_local.value) {

        for (const [index, question] of list_question_submit_code_local.value.entries()) {

            if (question.teacher_id) {
                await action_one_teacher(question.teacher_id);
                let teacher = get_one_teacher.value;
                if (teacher._id) {
                    list_question_submit_code_local.value[index].teacher = teacher;
                }
            }
            // list_question_submit_code_local.value[index].teacher = teacher;
        }
    }
}
async function get_All() {
    await action_one_question_submit_code_bank(route.params.id_question_bank);// get arr question

    if (get_one_question_submit_code_bank.value.list_question) {
        //   lenght_list_question.value = get_one_question_submit_code_bank.value.list_question.length;// lenght arr question
        list_question.value = await get_one_question_submit_code_bank.value.list_question.filter((question_id, index) => {// get arr question on a page
            if (index + 1 <= route.query.page * 9 && index + 1 > (route.query.page - 1) * 9) {// 28 // 7 .7.7.7 14.. 21
                return question_id;
            }
        });
    }
    else {

        list_question.value = []
    }
    await action_list_question_submit_code_by_question_bank(list_question.value, get_one_question_submit_code_bank.value.list_question);// get detail a question in arr question
    await get_list_question_submit_code_banks();

}
watch(route, () => {

    get_All();
})

onBeforeMount(() => {
    action_all_question_submit_code_banks(route.params.id_subject);
})

onMounted(() => {

    get_All();

})
</script>  

