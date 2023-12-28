<script setup>
import { onMounted, reactive, ref } from "vue";
import { storeToRefs } from 'pinia'
import { useQuestion_submit_code_bankStore } from "../stores/question_submit_code_bank.js"
import { useSubjectStore } from "../stores/subject.js"
const question_submit_code_bankStore = useQuestion_submit_code_bankStore();
const subjectStore = useSubjectStore();
const { get_one_question_submit_code_bank, question_submit_code_banks, one_question_submit_code_bank, lenght, get_all_question_submit_code_banks } = storeToRefs(useQuestion_submit_code_bankStore());

function get_delete_question_submit_code_bank(id) {
    question_submit_code_bankStore.action_one_question_submit_code_bank(id);// lay du lieu cho model delete
}




</script>
<template>
  
    <div class="table-responsive text-nowrap">
        <div v-if="question_submit_code_bankStore.isLoading" class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        <table v-else class="table table-bordered">

            <thead>
                <tr>
                    <th>STT</th>
                    <th>Tên</th>
                    <!-- <th>Môn học</th> -->
                    <th>Chủ sở hữu</th>
                    <!-- <th>Quyền người dùng khác</th> -->
                    <th>Hiệu chỉnh</th>
                    <th>Hành động</th>
                    <th>Thông báo</th>

                </tr>
            </thead>

            <tbody>


                <tr v-for="(question_submit_code_bank, index) in get_all_question_submit_code_banks"
                    :key="question_submit_code_bank._id">
                    <td>{{ index + 1 }}</td>
                    <td>  <i class="fab fa-angular fa-lg text-danger me-3"></i> <strong>{{ question_submit_code_bank.question_submit_code_bank_title }} </strong></td>
                    
                    <!-- <td>{{ question_submit_code_bank.subject_id }}</td> -->

                    <td>
                        <ul class="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                            <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top"
                                class="avatar avatar-xs pull-up" title="" data-bs-original-title="Lilian Fuller">
                                <img src="../assets/img/avatars/5.png" alt="Avatar" class="rounded-circle">
                            </li>
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

                    

                <td>
                    <div class="dropdown">
                        <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                            <i class="bx bx-dots-vertical-rounded"></i>
                        </button>
                        <div class="dropdown-menu">
                            <!-- <router-link :to="{ name: 'ExamQuizEdit', params: { id: question_submit_code_bank._id } }">
                                    <a class="dropdown-item" href="javascript:void(0);"><i class="bx bx-edit-alt me-1"></i>
                                        Edit</a>
                                </router-link> -->


                            <a @click="get_delete_question_submit_code_bank(question_submit_code_bank._id)"
                                class="dropdown-item " href="javascript:void(0); " data-bs-toggle="modal"
                                data-bs-target="#modalTop"><i class="bx bx-trash me-1"></i> Delete</a>
                        </div>
                    </div>
                </td>
                <td> 
                          
                    <td>
                        <routerLink :to="{
                            name: 'QuestionSubmitcodeBankDetailDashboard',
                            params: { id_question_bank: question_submit_code_bank._id }
                        }" type="button" class="btn btn-primary">
                            <span >View</span> 
                           
                        </routerLink>
                    </td>
                           
                           </td>

                           <td>
                        <button :to="{
                            name: 'QuestionSubmitcodeBankDetailDashboard',
                            params: { id_question_bank: question_submit_code_bank._id }
                        }" type="button" class="btn rounded-pill btn-icon btn-outline-secondary">
                            <span class="tf-icons bx bx-bell"></span>
                        </button>
                    </td>
            </tr>


        </tbody>
    </table>
</div></template>
<style scoped></style>