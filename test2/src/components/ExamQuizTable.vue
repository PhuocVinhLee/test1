<script setup>
import { onMounted, reactive, ref } from "vue";
import { storeToRefs } from 'pinia'
import { useExam_quizStore } from "../stores/exam_quiz.js"
import { useSubjectStore } from "../stores/subject.js"
const exam_quizStore = useExam_quizStore();
const subjectStore = useSubjectStore();
const { get_one_exam_quiz, exam_quizs, one_exam_quiz, lenght, get_all_exam_quizs } = storeToRefs(useExam_quizStore());
function get_edit_exam_quiz(id) {
    console.log(id)
    exam_quizStore.action_one_exam_quiz(id);// lay du lieu cho model edit
}

function get_delete_exam_quiz(id) {
    exam_quizStore.action_one_exam_quiz(id);// lay du lieu cho model delete
}

function submit(id){
    action_delete_exam_quiz(id);
}


onMounted(() => {

})



</script>
<template>
    <div class="table-responsive text-nowrap">
        <div v-if="exam_quizStore.isLoading" class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        <table v-else class="table ">

            <thead>
                <tr>
                    <th>STT</th>
                    <th>Tên</th>
                    <th>Thời gian thi</th>
                    <th>Thời gian làm bài</th>
                    <th>Thời gian chờ</th>
                    <th>Số câu hỏi</th>
                    <th>Điểm tối đa</th>
                    <th>Trạng thái</th>
                    <th>Mật khẩu</th>
                    <th>Lớp học</th>
                    <th>Hiệu chỉnh</th>
                    <th>Hành động</th>

                </tr>
            </thead>

            <tbody>


                <tr v-for="(exam_quiz, index) in get_all_exam_quizs" :key="exam_quiz._id">
                    <td>{{ index + 1 }}</td>
                    <td>{{ exam_quiz.exam_quiz_title }}</td>
                    <td><span class="badge bg-primary"> {{ exam_quiz.exam_quiz_duration }} phút</span></td>
                    <!-- <td>
                            <button id="btn_status" type="button" class="btn fs-6  btn-primary">
                                {{ exam_quiz.exam_quiz_duration }} phút
                            </button>
                        </td> -->
                    <td>{{ exam_quiz.exam_quiz_datetime }}</td>
                    <td>{{ exam_quiz.exam_quiz_wait }}</td>
                    <td>{{ exam_quiz.total_question }}</td>
                    <td>{{ exam_quiz.max_marks }}</td>
                    <td> {{ exam_quiz.exam_quiz_status }}</td>
                    <td>
                        <div class="input-group input-group-merge">
                            <input type="text" id="" class="form-control " :value="exam_quiz.password"
                                name="password">
                            <span class="input-group-text cursor-pointer"><i class="bx bx-hide"></i></span>
                        </div>
                    </td>

                    <!-- <td>{{ exam_quiz.subject_id }}</td> -->
                    <td>{{ exam_quiz.study_class_id }}</td>
                    <!-- <td>
                            <button @click="get_edit_exam_quiz(exam_quiz._id)" class="btn btn-xs btn-warning fs-6 "
                                data-bs-toggle="modal" data-bs-target="#exam_quiz_edit"> <i alt="Edit" class="fa fa-pencil"></i>
                            </button>
                            <button @click="get_delete_exam_quiz(exam_quiz._id)" type="button" class="btn btn-xs btn-danger fs-6"
                                data-bs-toggle="modal" data-bs-target="#exam_quiz_delete" id="btn-exam_quiz_delete"> <i alt="Delete"
                                    class="fa fa-trash">
                                </i>
                            </button>

                        </td> -->
                    <td>
                        <div class="dropdown">
                            <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                <i class="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div class="dropdown-menu">
                                <router-link :to="{ name: 'ExamQuizEdit', params: { id: exam_quiz._id } }">
                                    <a class="dropdown-item" href="javascript:void(0);"><i class="bx bx-edit-alt me-1"></i>
                                        Edit</a>
                                </router-link>


                                <a @click="get_delete_exam_quiz(exam_quiz._id)" class="dropdown-item " href="javascript:void(0); " data-bs-toggle="modal"
                                    data-bs-target="#modalTop"><i class="bx bx-trash me-1"></i> Delete</a>
                            </div>
                        </div>
                    </td>
                    <td>
                        <button type="button" class="btn btn-icon btn-outline-primary me-2">
                            <i class="menu-icon tf-icons bx bx-layout"></i>
                        </button>


                    </td>
                </tr>


            </tbody>
        </table>
    </div>


   
</template>
<style scoped></style>