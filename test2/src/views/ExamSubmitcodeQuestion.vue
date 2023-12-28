
<template>
    <div class="tab-content">
        <div class="tab-pane fade show active" id="navs-top-home" role="tabpanel">


            <h5 class="">
                <button type="button" class="btn btn-primary" @click="add_question()">
                    <i class='bx bxs-plus-circle'></i> Thêm Câu hỏi
                </button>
            </h5>

            <div class="table-responsive text-nowrap">
                <div v-if="!list_question_submit_code_local" class="d-flex justify-content-center">
                    Không tìm thấy câu hỏi nào.
                </div>
                <table v-else class="table table-bordered " style="">

                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Nội dung</th>
                            <!-- <th>Môn học</th> -->
                            <th>Chủ sỡ hữu</th>
                            <th>Mức độ</th>
                            <th>Hành động</th>



                        </tr>
                    </thead>

                    <tbody>


                        <tr v-for="(one_exam_submit_code, index) in list_question_submit_code_local"
                            :key="one_exam_submit_code._id">

                            <td>{{ index + 1 }}</td>
                            <td> <i class="fab fa-angular fa-lg text-danger me-3"></i> <strong>{{
                                one_exam_submit_code.question_submit_code_title }} </strong></td>

                            <!-- <td>{{ question_submit_code_bank.subject_id }}</td> -->
                            <td>
                                <div class="btn-group">
                                    <span class="badge bg-label-primary  dropdown-toggle" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        xem
                                    </span>
                                    <div class="dropdown-menu p-2 " style="width: 500px;">
                                        <span v-html="one_exam_submit_code.question_submit_code_describe"></span>
                                    </div>
                                </div>

                            </td>

                            <td>
                                <ul v-if="one_exam_submit_code.teacher"
                                    class="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                    <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top"
                                        class="avatar avatar-xs pull-up" title="" data-bs-original-title="Lilian Fuller">
                                        <img :src="`http://localhost:3000/files/` + one_exam_submit_code.teacher.avatar"
                                            alt="Avatar" class="rounded-circle">
                                    </li>
                                    {{ one_exam_submit_code.teacher.teacher_id }}
                                    <!-- <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top"
                                        class="avatar avatar-xs pull-up" title="" data-bs-original-title="Sophia Wilkerson">
                                        <img src="../assets/img/avatars/6.png" alt="Avatar" class="rounded-circle">
                                    </li>
                                    <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top"
                                        class="avatar avatar-xs pull-up" title="" data-bs-original-title="Christina Parker">
                                        <img src="../assets/img/avatars/7.png" alt="Avatar" class="rounded-circle">
                                    </li> -->
                                </ul>
                            </td>
                            <!-- <td>  <span class="badge bg-label-primary me-1">{{question_submit_code_bank.question_submit_code_bank_authorization}}</span> <span class="badge bg-label-warning me-1">write</span>
                       
                        </td> -->

                            <!-- <td>{{ question_submit_code_bank.question_submit_code_bank_type }} </td> -->

                            <td> <span class="badge " :class="{
                                'bg-danger': one_exam_submit_code.question_submit_code_level == 'Hard',
                                'bg-warning': one_exam_submit_code.question_submit_code_level == 'Medium',
                                'bg-success': one_exam_submit_code.question_submit_code_level == 'Easy'
                            }">{{ one_exam_submit_code.question_submit_code_level }}</span>
                            </td>
                            <td>
                                <button @click="delete_question(one_exam_submit_code._id)"
                                    class="btn btn-primary">Delete</button>
                            </td>

                        </tr>


                    </tbody>
                </table>


            </div>

        </div>
        <div class="toast-container position-fixed bottom-0 end-0 me-4" v-show="state_exam_submit_code">
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
    

</template>
<script setup>
import { onMounted, onBeforeMount, ref } from 'vue';

import Pagination from "@/components/Pagination.vue";

import { storeToRefs } from 'pinia';
import { useRoute, useRouter } from 'vue-router'
const route = useRoute();// 
const router = useRouter();// 
import { useExam_submit_codeStore } from "../stores/exam_submit_code.js"
const { get_one_exam_submit_code, exam_submit_codes, one_exam_submit_code, lenght,state_exam_submit_code, state_exam_submit_code_add } = storeToRefs(useExam_submit_codeStore());
const { action_question_from_one_exam_submit_code, action_all_exam_submit_codes, action_update_exam_submit_code, action_one_exam_submit_code, reset_state_exam_submit_code, action_delete_exam_submit_code } = useExam_submit_codeStore();

import { useStudy_classStore } from "../stores/study_class"
const { get_one_study_class } = storeToRefs(useStudy_classStore());
const { action_one_study_class } = useStudy_classStore();

import { useTeacherStore } from "../stores/teacher.js"
const { get_all_teachers, get_list_teachers, state_teacher, get_one_teacher } = storeToRefs(useTeacherStore());
const { action_search_teacher, action_one_teacher, action_list_teacher_by_question_bank, action_update_teacher, action_one_acccout_teacher } = useTeacherStore();

import { useQuestion_submit_code_bankStore } from "../stores/question_submit_code_bank.js"
const { get_one_question_submit_code_bank, get_all_question_submit_code_banks, state_question_submit_code_bank } = storeToRefs(useQuestion_submit_code_bankStore());
const { action_one_question_submit_code_bank, action_add_id_question_submit_code_bank, action_all_question_submit_code_banks, reset_state_question_submit_code_bank, action_delete_question_submit_code_bank } = useQuestion_submit_code_bankStore();


function emit_page(page) {
    console.log(page);
    action_all_exam_submit_codes(page);// click vao page o duoi 
}

function auto_close_toast() {
    const myTimeout = setTimeout(reset_state_exam_submit_code, 5000);
}

function close_toast() {
    reset_state_exam_submit_code();
}
async function delete_exam_submit_code(id, event) {
    console.log(event);
    event.preventDefault()
    await action_delete_exam_submit_code(id);
    await action_all_exam_submit_codes(route.query.page);
    auto_close_toast();// auto dong thong bao
    const myModalEl = document.getElementById('btn-close-delete');
    myModalEl.click();// close model

}

const props = defineProps(['id'])// url/prop


function add_question() {
    console.log("oke")
    router.push({
        name: 'ListQuestionSubmitcode',
        query: { page: 1 },
        params: { id_exam: route.params.id_exam, id_courses: route.params.id_courses, id_subject: get_one_study_class.value.subject_id, id_question_bank: get_all_question_submit_code_banks.value[0]._id }
    }
    );
}

const list_question_submit_code_local = ref([]);
async function get_list_question_submit_code_banks() {
    list_question_submit_code_local.value = get_one_exam_submit_code.value.list_question
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

async function delete_question(id_question) {
console.log(id_question)
    await action_one_exam_submit_code(route.params.id_exam)
    console.log(get_one_exam_submit_code.value);
    let list_question = get_one_exam_submit_code.value.list_question.filter((question) => {
        return question != id_question;
    })

   await  action_update_exam_submit_code(route.params.id_exam, { list_question: list_question });
    auto_close_toast();
    await action_question_from_one_exam_submit_code(route.params.id_exam)
    get_list_question_submit_code_banks()
}

onBeforeMount(async () => {
    await action_one_study_class(route.params.id_courses);
})

onMounted(async () => {
    await action_question_from_one_exam_submit_code(route.params.id_exam)
    get_list_question_submit_code_banks()
    await action_all_question_submit_code_banks(get_one_study_class.value.subject_id)


})
</script>  
  
  