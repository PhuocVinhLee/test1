<script setup>
import { onMounted, reactive, ref } from "vue";
import { storeToRefs } from 'pinia'
import { useQuestion_submit_codeStore } from "../stores/question_submit_code.js"
import { useSubjectStore } from "../stores/subject.js"
const question_submit_codeStore = useQuestion_submit_codeStore();
const subjectStore = useSubjectStore();
const { get_one_question_submit_code, question_submit_codes, one_question_submit_code, lenght, get_all_question_submit_codes } = storeToRefs(useQuestion_submit_codeStore());

function get_delete_question_submit_code(id) {
    question_submit_codeStore.action_one_question_submit_code(id);// lay du lieu cho model delete
}




</script>
<template>
 <div class="table-responsive text-nowrap">
        <div v-if="question_submit_codeStore.isLoading" class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        <table v-else class="table ">

            <thead>
                <tr>
                    <th>STT</th>
                    <th>Tên</th>
                    <th>Mô tả</th>
                    <th>Mức độ câu hỏi</th>
                    <th>Môn học</th>
                    <th>Loại câu hỏi</th>
                    <th colspan="3">Test case</th>
                    <th>Hiệu chỉnh</th>

                </tr>
            </thead>

            <tbody>


                <tr v-for="(question_submit_code, index) in get_all_question_submit_codes" :key="question_submit_code._id">
                    <td>{{ index + 1 }}</td>
                    <td>{{ question_submit_code.question_submit_code_title }}</td>
                    <td>
                        <div class="btn-group">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Chi tiết
  </button>
  <div class="dropdown-menu p-2 " style="width: 500px;" >
    <span v-html="question_submit_code.question_submit_code_describe"></span>
  </div>
</div></td>


                    <td>
                        {{ question_submit_code.question_submit_code_level }}
                    </td>
                    <td>{{ question_submit_code.subject_id }}</td>
                    <td>{{ question_submit_code.question_submit_code_type }} </td>

                    <td class="text-start" v-for="answer in question_submit_code.answer">                     
                                <h6>Output: <span class="badge bg-secondary">{{ answer.output }}</span></h6>
                                       
                                <h6>Input: <span class="badge bg-secondary">{{ answer.output }}</span></h6>
                           
                    </td>
                   
                    <td>
                        <div class="dropdown">
                            <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                <i class="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div class="dropdown-menu">
                                <!-- <router-link :to="{ name: 'ExamQuizEdit', params: { id: question_submit_code._id } }">
                                    <a class="dropdown-item" href="javascript:void(0);"><i class="bx bx-edit-alt me-1"></i>
                                        Edit</a>
                                </router-link> -->


                                <a @click="get_delete_question_submit_code(question_submit_code._id)" class="dropdown-item " href="javascript:void(0); " data-bs-toggle="modal"
                                    data-bs-target="#modalTop"><i class="bx bx-trash me-1"></i> Delete</a>
                            </div>
                        </div>
                    </td>
            </tr>


        </tbody>
    </table>
</div></template>
<style scoped></style>