<script setup>
import { onMounted, reactive, watchEffect,watch, ref } from "vue";
import { useRoute, useRouter } from 'vue-router'
const route = useRoute();// 
const router = useRouter();
import { storeToRefs } from 'pinia'

import { useSubjectStore } from "../stores/subject.js"
import { RouterLink } from "vue-router";


import { useQuestion_submit_code_bankStore } from "../stores/question_submit_code_bank.js"
const { get_one_question_submit_code_bank, isLoading, get_all_question_submit_code_banks, question_submit_code_banks, one_question_submit_code_bank, lenght, state_question_submit_code_bank } = storeToRefs(useQuestion_submit_code_bankStore());
const { action_one_question_submit_code_bank, action_all_question_submit_code_banks, reset_state_question_submit_code_bank, action_delete_question_submit_code_bank } = useQuestion_submit_code_bankStore();


const subjectStore = useSubjectStore();

function get_delete_question_submit_code_bank(id) {
    question_submit_code_bankStore.action_one_question_submit_code_bank(id);// lay du lieu cho model delete
}
import { useTeacherStore } from "../stores/teacher.js"
const { get_all_teachers, get_list_teachers, state_teacher, get_one_teacher } = storeToRefs(useTeacherStore());
const { action_search_teacher, action_one_teacher, action_list_teacher_by_question_bank, action_update_teacher, action_one_acccout_teacher } = useTeacherStore();

const list_question_submit_code_banks = ref([]);
async function get_list_question_submit_code_banks() {
    list_question_submit_code_banks.value = get_all_question_submit_code_banks.value
    if (get_all_question_submit_code_banks.value) {

        for (const [index,question] of get_all_question_submit_code_banks.value.entries()) {
            await action_one_teacher(question.teacher_id);
            let teacher = get_one_teacher.value;
            list_question_submit_code_banks.value[index].teacher = teacher
        }
    }
}
//list_teacher.value = action_list_teacher_by_question_bank(get_all_question_submit_code_banks.)


watch(route,async () => {
    await action_all_question_submit_code_banks(route.params.id_subject);
   await get_list_question_submit_code_banks();
})
onMounted(async () => {
    await action_all_question_submit_code_banks(route.params.id_subject);
   await get_list_question_submit_code_banks();
})

</script>
<template>
    <div v-if="! get_all_question_submit_code_banks[0]" class="text-center">Không tìm thấy dữ liệu
    </div>
    <div v-else class="table-responsive text-nowrap">
        <div v-if="isLoading" class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
                <span class="sr-only"></span>
            </div>
        </div>
        <table v-else class="table table-bordered">

            <thead>
                <tr>
                    <th>STT</th>
                    <th>Tên</th>
                    <!-- <th>Môn học</th> -->
                    <th>Chủ sỡ hữu</th>
                    <th>Hành động</th>

                </tr>
            </thead>

            <tbody>

                <tr v-for="(question_submit_code_bank, index) in get_all_question_submit_code_banks"
                    :key="question_submit_code_bank._id">

                    <td>{{ index + 1 }}</td>
                    <td> <i class="fab fa-angular fa-lg text-danger me-3"></i> <strong>{{
                        question_submit_code_bank.question_submit_code_bank_title }} </strong></td>

                    <!-- <td>{{ question_submit_code_bank.subject_id }}</td> -->

                    <td>

                        <ul v-if="question_submit_code_bank.teacher  " class="list-unstyled users-list m-0 avatar-group d-flex align-items-center"
                            >
                            
                            <li  data-bs-toggle="tooltip"
                                data-popup="tooltip-custom" data-bs-placement="top" class="avatar avatar-xs pull-up"
                                title="" data-bs-original-title="Lilian Fuller">
                                <img :src="`http://localhost:3000/files/`+question_submit_code_bank.teacher.avatar"  alt="Avatar" class="rounded-circle">
                            </li> 
                            <span class="ms-2"> {{ question_submit_code_bank.teacher.teacher_id  }}</span>
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
                        <routerLink :to="{
                            name: 'QuestionSubmitcodeBankDetailDashboard',
                            params: { id_subject: route.params.id_subject, id_question_bank: question_submit_code_bank._id },
                            query: { page: 1 }
                        }" type="button" class="btn btn-primary">

                            <span>View</span>
                        </routerLink>
                    </td>
                    <!-- <td>
                        <button :to="{
                            name: 'QuestionSubmitcodeBankDetailDashboard',
                            params: { id_question_bank: question_submit_code_bank._id }
                        }" type="button" class="btn rounded-pill btn-icon btn-outline-secondary">
                            <span class="tf-icons bx bx-bell"></span>
                        </button>
                    </td> -->
                </tr>


            </tbody>
        </table>
    </div>
</template>
<style scoped></style>