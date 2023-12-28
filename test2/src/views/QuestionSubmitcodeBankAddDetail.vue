
<template>
    <div class="content-wrapper">
        <div class="container-xxl flex-grow-1 container-p-y">
            <h4 v-if="1" class="fw-bold py-3 ">
                    <router-link :to="{
                     name: 'QuestionSubmitcodeBankDetailDashboard',
                       params: { id_subject: route.params.id_subject, id_question_bank: route.params.id_question_bank2 },
                       query:{page: 1}
                    }" class="fw-bold py-3"> {{ get_one_question_submit_code_bank2.question_submit_code_bank_title }}
                    </router-link> 
                    <!-- <span v-show="route.name == 'ExamSubmitcodeEdit'">/ Thêm chủ đề</span>
                    <span v-show="route.name == 'TopicEdit'">/ {{ get_one_topic.topic_title }} </span> -->
                </h4>
            <div class="">
                <Form @submit="" class="row  " id="courses_add" :validation-schema="QuestionBankFormSchema"
                    v-slot="{ errors }">

                    <div class="col-md-4 mb-3">
                        <label for="validationServer" class="form-label mb-0">
                            <h6>Ngân hàng câu hỏi</h6>
                        </label>
                        <Field class="form-select" as="select" name="subject_id" aria-label="select coursesple"
                            v-model="question_bank_local._id">
                            <!-- <option v-show="false" value="" disabled>Vui lòng chọn ng</option> -->
                           
                            <option v-for="question_bank in get_all_question_submit_code_banks" :key="question_bank._id"
                                :value="question_bank._id"> {{
                                    question_bank.question_submit_code_bank_title }}</option>

                        </Field>
                        <ErrorMessage name="subject_id" class="error-feedback" />
                    </div>
                    <div class="col-md-3 mb-3">
                        <label for="validationServer" class="form-label mb-0">
                            <h6>Chủ sỡ hữu</h6>
                        </label>
                        <Field class="form-select" as="select" name="subject_id" aria-label="select coursesple"
                            v-model="question_bank_local._id">
                            <!-- <option v-show="false" value="" disabled>Vui lòng chọn ng</option> -->
                            <option value="all">Chung</option>
                            <!-- <option value="all">Người khác</option> -->
                            <option value="all">Người khác</option>
                            <option value="all">Tôi</option>
                            <!-- <option v-for="question_bank in get_all_question_submit_code_banks" :key="question_bank._id"
                                :value="question_bank._id"> {{
                                    question_bank.question_submit_code_bank_title }}</option> -->

                        </Field>
                        <ErrorMessage name="subject_id" class="error-feedback" />
                    </div>
                </Form>


                <!-- <h4 v-if="1" class="fw-bold py-3 "><span>{{  }}</span> {{ get_one_question_submit_code_bank.question_submit_code_bank_title }}
                    <span v-show="route.name == 'TopicAdd'">/ Thêm chủ đề</span>
                    <span v-show="route.name == 'TopicEdit'">/ {{  }} </span>
                </h4> -->

                <div class="nav-align-top mb-4">
                 
                
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

                            
                            <div class="table-responsive text-nowrap">
                                <QuestionSubmitcodeBankDetailDashboardTable></QuestionSubmitcodeBankDetailDashboardTable>
                                <Pagination :lenght="get_lenght_question_submit_code" @page="emit_page"></Pagination>
                                <!-- chan trang -->
                            </div>

                            <div class="toast-container position-fixed bottom-0 end-0 me-4"
                                v-show="state_question_submit_code_bank">
                                <div v-if="state_question_submit_code_bank.modifiedCount == 1" id="liveToast"
                                    class="bs-toast toast fade show bg-primary" role="alert" aria-live="assertive"
                                    aria-atomic="true">
                                    <div class="toast-header">
                                        <i class="bx bx-bell me-2"></i>
                                        <div class="me-auto fw-semibold">Bootstrap</div>
                                        <small>11 mins ago</small>
                                        <button type="button" class="btn-close" @click="close_toast()"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="toast-body">
                                        Bạn đã thêm câu hỏi thành công thành công
                                    </div>
                                </div>
                                <div v-else id="liveToast" class="bs-toast toast fade show bg-warning" role="alert"
                                    aria-live="assertive" aria-atomic="true">
                                    <div class="toast-header">
                                        <i class="bx bx-bell me-2"></i>
                                        <div class="me-auto fw-semibold">Bootstrap</div>
                                        <small>11 mins ago</small>
                                        <button type="button" class="btn-close" @click="close_toast()"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="toast-body">
                                        Câu hỏi này đã tồn tại
                                    </div>
                                </div>
                            </div>

                            <div class="toast-container position-fixed bottom-0 end-0 me-4" v-show="state_active">
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
                                        Bạn đã thêm thành công HD
                                    </div>
                                </div>
                            </div>



                        </div>





                    </div>


                </div>
            </div>


        </div>
    </div>
</template>

<script setup>
import { onMounted, watchEffect, watch, ref, computed , reactive} from 'vue';
// import Exam_submit_codeFormAdd from "@/components/Exam_submit_codeFormAdd.vue";
// import Exam_submit_codeFormEdit from "@/components/Exam_submit_codeFormEdit.vue";
//import CoursesCardDetail from "@/components/CoursesCardDetail.vue";

import * as yup from "yup";
import { Form, Field, ErrorMessage, } from "vee-validate";
import Pagination from "@/components/Pagination.vue";
import QuestionSubmitcodeBankDetailDashboardTable from "@/components/QuestionSubmitcodeBankAddDetailDashboardTable.vue";
import { useExam_submit_codeStore } from "../stores/exam_submit_code.js"
import { storeToRefs } from 'pinia';
import { useRoute, useRouter } from 'vue-router'
const route = useRoute();// 
const router = useRouter();

import { useQuestion_submit_code_bankStore } from "../stores/question_submit_code_bank.js"
const { get_one_question_submit_code_bank,get_one_question_submit_code_bank2, state_question_submit_code_bank,get_all_question_submit_code_banks } = storeToRefs(useQuestion_submit_code_bankStore());
const { action_one_question_submit_code_bank, action_add_id_question_submit_code_bank,action_all_question_submit_code_banks, reset_state_question_submit_code_bank, action_delete_question_submit_code_bank } = useQuestion_submit_code_bankStore();
import { useQuestion_submit_codeStore } from "../stores/question_submit_code.js"
const { get_all_question_submit_codes,get_lenght_question_submit_code } = storeToRefs(useQuestion_submit_codeStore());
const { action_all_question_submit_codes_by_teacher, action_list_question_submit_code_by_question_bank } = useQuestion_submit_codeStore();


const question_bank_local = reactive({
    _id: route.params.id_question_bank
});
const QuestionBankFormSchema = yup.object().shape({
    study_class_title: yup
        .string()
        .required("Vui lòng điền trường này")
        .min(5, "Tên phải ít nhất 5 ký tự.")
        .max(100, "Tên có nhiều nhất 100 ký tự."),
    study_class_describe: yup
        .string()
        .required("Vui lòng điền trường này")
        .min(1, "Tên phải ít nhất 5 ký tự.")
        .max(100, "Tên có nhiều nhất 100 ký tự."),

});

watch(question_bank_local, () => {
    router.push({
        params: { id_question_bank: question_bank_local._id },
        query: { page: 1 }
    }
    );
})


onMounted(() => {
    action_all_question_submit_code_banks(route.params.id_subject);
})


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
function emit_page(page) {
    router.push({
        params: { id_question_bank: route.params.id_question_bank },
        query: { page: page }
    }
    );
}
const list_question = ref([]);//12

watch(route, async () => {


    
        await action_one_question_submit_code_bank(route.params.id_question_bank);
        
        if (get_one_question_submit_code_bank.value.list_question) {
    
            list_question.value = await get_one_question_submit_code_bank.value.list_question.filter((question_id, index) => {
                if (index + 1 <= route.query.page * 9 && index + 1 > (route.query.page - 1) * 9) {// 28 // 7 .7.7.7 14.. 21
                    return question_id;
                }// sai cho map
            });
        }
        else {
            list_question.value = []
        }
    
        await action_list_question_submit_code_by_question_bank(list_question.value,get_one_question_submit_code_bank.value.list_question);
  

})



onMounted(async () => {

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
        await action_list_question_submit_code_by_question_bank(list_question.value,get_one_question_submit_code_bank.value.list_question);// get detail a question in arr question
    
})
</script>  

