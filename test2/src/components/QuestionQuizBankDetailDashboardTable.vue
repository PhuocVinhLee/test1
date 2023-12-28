<script setup>
import { storeToRefs } from 'pinia';
import { useRoute, useRouter } from 'vue-router'
const route = useRoute();// 
const router = useRouter();
import { useQuestion_quiz_bankStore } from "../stores/question_quiz_bank.js"
const { get_one_question_quiz_bank, state_question_quiz_bank } = storeToRefs(useQuestion_quiz_bankStore());
const { action_one_question_quiz_bank, action_all_question_quiz_banks, reset_state_question_quiz_bank, action_delete_question_quiz_bank } = useQuestion_quiz_bankStore();
import { useQuestion_quizStore } from "../stores/question_quiz.js"
const { get_all_question_quizs, get_lenght_question_quiz } = storeToRefs(useQuestion_quizStore());
const { action_all_question_quizs_by_teacher } = useQuestion_quizStore();
</script>
<template>
    <div v-if="isLoading" class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    </div>
    <div v-else-if="get_lenght_question_quiz <= 0"> Không tìm thấy câu hỏi!</div>

    <div v-else>
        <table class="table table-bordered">

            <thead>
                <tr>
                    <th>STT</th>
                    <th>Tên</th>
                    <th>Nội dung</th>
                    <th>Đáp án</th>
                    <th>Đán án đúng</th>
                    <!-- <th>Môn học</th> -->
                    <th>Chủ sỡ hữu</th>
                    <th>Mức độ</th>
                    <th>Hành động</th>



                </tr>
            </thead>


            <tbody>


                <tr v-for="(question_quiz_bank, index) in get_all_question_quizs" :key="question_quiz_bank._id">
                    <td>{{ index + 1 }}</td>
                    <td> <i class="fab fa-angular fa-lg text-danger me-3"></i> <strong>{{
                        question_quiz_bank.question_quiz_title }} </strong></td>

                    <!-- <td>{{ question_quiz_bank.subject_id }}</td> -->
                    <td>
                        <div class="btn-group">
                            <span  class="badge bg-label-primary dropdown-toggle  " data-bs-toggle="dropdown"
                                aria-expanded="false">
                              <span class="fs-7"> xem</span>
                            </span>
                            <div class="dropdown-menu p-2 " style="width: 500px;">
                                <span v-html="question_quiz_bank.question_quiz_describe"></span>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="btn-group">
                            <span class="badge bg-label-primary dropdown-toggle  " data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <span class="fs-7"> xem</span>
                            </span>
                            <div class="dropdown-menu p-2 " style="width: 500px;">
                                <div class="p-2" v-for="answer, index in question_quiz_bank.answer" :key="index">
                                    <div class="border-bottom">
                                          <span :class="{'bg-success': index==question_quiz_bank.right_answer, 'bg-primary': index!=question_quiz_bank.right_answer}" class="badge" >Đáp án: {{ index + 1 }}</span> 
                                        <div class="mt-2" ><span v-html="answer.input"></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </td>
                    <td><span class="badge bg-label-success"> Đáp án {{ parseInt(question_quiz_bank.right_answer) + 1 }}</span></td>
                    <td>
                        {{ question_quiz_bank.type }} {{ question_quiz_bank._id }}
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
                    <!-- <td>  <span class="badge bg-label-primary me-1">{{question_quiz_bank.question_quiz_bank_authorization}}</span> <span class="badge bg-label-warning me-1">write</span>

</td> -->

                    <!-- <td>{{ question_quiz_bank.question_quiz_bank_type }} </td> -->

                    <td> <span class="badge " :class="{'bg-danger': question_quiz_bank.question_quiz_level=='Hard',
                        'bg-warning': question_quiz_bank.question_quiz_level=='Medium',
                        'bg-success': question_quiz_bank.question_quiz_level=='Easy' }">{{ question_quiz_bank.question_quiz_level }}</span></td>
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