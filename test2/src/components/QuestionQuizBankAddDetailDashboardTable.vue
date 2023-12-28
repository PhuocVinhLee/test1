<script setup>
import { onMounted, watchEffect, watch, ref, computed, onBeforeMount } from 'vue';
import { storeToRefs } from 'pinia';
import { useRoute, useRouter } from 'vue-router'
const route = useRoute();// 
const router = useRouter();
import { useQuestion_quiz_bankStore } from "../stores/question_quiz_bank.js"
const { get_one_question_quiz_bank, get_one_question_quiz_bank2, state_question_quiz_bank } = storeToRefs(useQuestion_quiz_bankStore());
const { action_one_question_quiz_bank2, action_one_question_quiz_bank, action_add_id_question_quiz_bank, action_all_question_quiz_banks, reset_state_question_quiz_bank, action_delete_question_quiz_bank } = useQuestion_quiz_bankStore();
import { useQuestion_quizStore } from "../stores/question_quiz.js"
const { get_all_question_quizs, get_lenght_question_quiz } = storeToRefs(useQuestion_quizStore());
const { action_all_question_quizs_by_teacher } = useQuestion_quizStore();
function auto_close_toast() {
    const myTimeout = setTimeout(reset_state_question_quiz_bank, 5000);
}
//await action_one_question_quiz_bank2(route.params.id_question_bank2);
onBeforeMount( async()=>{
    await action_one_question_quiz_bank2(route.params.id_question_bank2);
    console.log(get_one_question_quiz_bank2.value);
})
  function check_question(id_question) {
    // console.log(get_one_question_quiz_bank2.value);
    if (get_one_question_quiz_bank2.value.list_question) {
        for (const question of get_one_question_quiz_bank2.value.list_question) {
            if(question == id_question ){
                return true;

            }
           
        }
        return false;
    }



}

watchEffect(() => {

})
async function add_id_question_in_bank(id) {
    await action_add_id_question_quiz_bank(route.params.id_question_bank2, { question_id: id })
    await action_one_question_quiz_bank2(route.params.id_question_bank2);
    auto_close_toast();
    // console.log(state_question_quiz_bank.value);
}
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
                    <!-- <th>Môn học</th> -->
                    <th>Chủ sỡ hữu</th>
                    <th>Mức độ</th>
                    <th>Hành động</th>



                </tr>
            </thead>


            <tbody>


                <tr v-for="(question_quiz_bank, index) in get_all_question_quizs"
                    :key="question_quiz_bank._id">
                    <td>{{ index + 1 }}</td>
                    <td> <i class="fab fa-angular fa-lg text-danger me-3"></i> <strong>{{
                        question_quiz_bank.question_quiz_title }} </strong></td>

                    <!-- <td>{{ question_quiz_bank.subject_id }}</td> -->
                    <td>
                        <div class="btn-group">
                            <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Chi tiết
                            </button>
                            <div class="dropdown-menu p-2 " style="width: 500px;">
                                <span v-html="question_quiz_bank.question_quiz_describe"></span>
                            </div>
                        </div>
                    </td>

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

                    <td>{{ question_quiz_bank.question_quiz_level }}</td>
                    <td>
                        <button @click="add_id_question_in_bank(question_quiz_bank._id)"  type="button"
                            class="btn btn-icon" 
                             :class="{' btn-primary' : check_question(question_quiz_bank._id) ,'btn-outline-primary': !check_question(question_quiz_bank._id)}">
                          
                            <i class='bx bx-plus-circle'></i> 
                            
                        </button>

                        <!-- <button type="button" class="btn btn-primary">Primary</button> -->
                    </td>

                </tr>


            </tbody>

        </table>

    </div>
</template>