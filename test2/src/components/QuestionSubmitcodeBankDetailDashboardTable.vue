<script setup>
import { storeToRefs } from 'pinia';
import { useRoute, useRouter } from 'vue-router'
const route = useRoute();// 
const router = useRouter();
import { useQuestion_submit_code_bankStore } from "../stores/question_submit_code_bank.js"
const { get_one_question_submit_code_bank, state_question_submit_code_bank } = storeToRefs(useQuestion_submit_code_bankStore());
const { action_one_question_submit_code_bank, action_all_question_submit_code_banks, reset_state_question_submit_code_bank, action_delete_question_submit_code_bank } = useQuestion_submit_code_bankStore();
import { useQuestion_submit_codeStore } from "../stores/question_submit_code.js"
const { get_all_question_submit_codes,get_lenght_question_submit_code } = storeToRefs(useQuestion_submit_codeStore());
const { action_all_question_submit_codes_by_teacher } = useQuestion_submit_codeStore();
</script>
<template>
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
                    <!-- <th>Môn học</th> -->
                    <th>Chủ sỡ hữu</th>
                    <th>Mức độ</th>
                    <th>Hành động</th>



                </tr>
            </thead>

           
            <tbody>


                <tr v-for="(question_submit_code_bank, index) in get_all_question_submit_codes"
                    :key="question_submit_code_bank._id">
                    <td>{{ index + 1 }}</td>
                    <td> <i class="fab fa-angular fa-lg text-danger me-3"></i> <strong>{{
                        question_submit_code_bank.question_submit_code_title }} </strong></td>

                    <!-- <td>{{ question_submit_code_bank.subject_id }}</td> -->
                    <td>
                        <div class="btn-group">
                            <button type="button" class="btn btn-secondary dropdown-toggle  " data-bs-toggle="dropdown"
                                aria-expanded="false" >
                                Chi tiết
                            </button>
                            <div class="dropdown-menu p-2 " style="width: 500px;">
                                <span v-html="question_submit_code_bank.question_submit_code_describe"></span>
                            </div>
                        </div>
                    </td>

                    <td>
                        {{ question_submit_code_bank.type }} {{ question_submit_code_bank._id }}
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

                    <td>{{ question_submit_code_bank.question_submit_code_level }}</td>
                    <td>
                        <div class="dropdown">
                            <button class="btn p-0" type="button" id="cardOpt4" data-bs-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                <i class="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div class="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt4">
                                <router-link class="dropdown-item" :to="{
                                    name: '',

                                }"> Edit</router-link>
                                <router-link class="dropdown-item" :to="{
                                    name: '',

                                }"> Delete</router-link>
                                <!-- // <a class="dropdown-item" href="javascript:void(0);">View More</a>
// <a class="dropdown-item" href="javascript:void(0);">Delete</a> -->
                            </div>
                        </div>
                    </td>

                </tr>


            </tbody>

        </table>

    </div>
</template>