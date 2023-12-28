 
<template>
    <div>
        <Form @submit="submit()" class="row " id="exam_add" :validation-schema="productFormSchema" v-slot="{ errors }">
            <!-- <div class="col-md-12">
                               <span v-html="question_submit_code_bank.question_submit_code_bank_describe"></span>
                            </div> -->
            <div class="col-md-12 mb-3">
                <label for="validationServer" class="form-label">Tên ngân hàng câu hỏi</label>
                <Field type="text" class="form-control"
                    :class="{ ' is-valid': !errors.question_submit_code_bank_title && question_submit_code_bank.question_submit_code_bank_title }"
                    v-bind:class="{ 'is-invalid': errors.question_submit_code_bank_title }"
                    name="question_submit_code_bank_title"
                    v-model="question_submit_code_bank.question_submit_code_bank_title" />
                <ErrorMessage name="question_submit_code_bank_title" class="error-feedback" />
                <span> {{ errors.question_submit_code_bank_title }} </span>

            </div>

            <!-- <div class="col-md-6 mb-3">
                <label for="validationServer" class="form-label">Loại </label>
                <Field class="form-select "
                    :class="{ ' is-valid': !errors.question_submit_code_bank_type && question_submit_code_bank.question_submit_code_bank_type }"
                    v-bind:class="{ 'is-invalid': errors.question_submit_code_bank_type }" as="select"
                    name="question_submit_code_bank_type" required aria-label="select example"
                    v-model="question_submit_code_bank.question_submit_code_bank_type">

                    <option value="private">Private</option>
                    <option value="public">Public</option>

                </Field>
                <ErrorMessage name="question_submit_code_bank_type" class="error-feedback" />
            </div> -->
            <div class="col-md-6"></div>
            <!-- <div class="col-md-6 mb-3">
                <label for="validationServer" class="form-label">Quyền người dùng</label>
                <Field class="form-select "
                    :class="{ ' is-valid': !errors.question_submit_code_bank_authorization && question_submit_code_bank.question_submit_code_bank_authorization }"
                    v-bind:class="{ 'is-invalid': errors.question_submit_code_bank_authorization }" as="select"
                    name="question_submit_code_bank_authorization" required aria-label="select example"
                    v-model="question_submit_code_bank.question_submit_code_bank_authorization">

                    <option value="use">Use</option>
                    <option value="write">Write</option>

                </Field>
                <ErrorMessage name="question_submit_code_bank_authorization" class="error-feedback" />
            </div> -->



            <!-- <div class="col-md-6 ">
                <ul class="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                    <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top"
                        class="avatar avatar-xs pull-up" title="" data-bs-original-title="Lilian Fuller">
                        <img src="../assets/img/avatars/5.png" alt="Avatar" class="rounded-circle">
                    </li>
                    <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top"
                        class="avatar avatar-xs pull-up" title="" data-bs-original-title="Sophia Wilkerson">
                        <img src="../assets/img/avatars/6.png" alt="Avatar" class="rounded-circle">
                    </li>
                    <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top"
                        class="avatar avatar-xs pull-up" title="" data-bs-original-title="Christina Parker">
                        <img src="../assets/img/avatars/7.png" alt="Avatar" class="rounded-circle">
                    </li>
                </ul>
            </div> -->

            <div class="mb-3">
                <!-- Button trigger modal -->
              
                <!-- Modal -->
                <div class="modal fade" id="modalCenter" tabindex="-1" style="display: none;" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">

                                <span>Đã chọn {{ list_teacher_local.length }} thành viên</span>

                                <!-- <ul class="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                    <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top"
                                        class="avatar avatar-xs pull-up" title="" data-bs-original-title="Lilian Fuller">
                                        <img src="../assets/img/avatars/5.png" alt="Avatar" class="rounded-circle">
                                    </li>
                                    <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top"
                                        class="avatar avatar-xs pull-up" title="" data-bs-original-title="Sophia Wilkerson">
                                        <img src="../assets/img/avatars/6.png" alt="Avatar" class="rounded-circle">
                                    </li>
                                    <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top"
                                        class="avatar avatar-xs pull-up" title="" data-bs-original-title="Christina Parker">
                                        <img src="../assets/img/avatars/7.png" alt="Avatar" class="rounded-circle">
                                    </li>
                                </ul> -->
                            </div>
                            <div class="modal-body">

                                <ul class="list-group">
                                    <li class="list-group-item d-flex justify-content-between align-items-center"
                                        v-for="teacher in list_teacher_local">
                                        <span>
                                            <ul class="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                                <li data-bs-toggle="tooltip" data-popup="tooltip-custom"
                                                    data-bs-placement="top" class="avatar avatar-xs pull-up" title=""
                                                    data-bs-original-title="Lilian Fuller">
                                                    <img src="../assets/img/avatars/5.png" alt="Avatar"
                                                        class="rounded-circle">
                                                </li>
                                                <span> {{ teacher.teacher_id }}</span>
                                            </ul>
                                        </span>

                                        <span @click="delete_teacher_id(teacher.teacher_id)" class="badge bg-danger"><i class='bx bx-x'></i></span>
                                    </li>


                                </ul>


                                <div class="mt-3" @click.self="list_teacher = true">
                                    <label for="validationServer" class="form-label">Mã số hoặc tên giáo viên</label>
                                    <Field type="text" class="form-control" v-on:keyup.self="search_teacher()"
                                        :class="{ ' is-valid': !errors.list_teacher_id && question_submit_code_bank.list_teacher_id }"
                                        v-bind:class="{ 'is-invalid': errors.list_teacher_id }" name="list_teacher_id"
                                        v-model="list_teacher2.data" />
                                    <!-- <ErrorMessage name="list_teacher_id" class="error-feedback" />
                <span> {{ errors.list_teacher_id }} </span> -->

                                    <ul v-show="list_teacher" class="list-group w-100 p-0 "
                                        style="background-color: #e8eaed; width: 47.1%;">
                                        <li class="list-group-item d-flex align-items-center"
                                            v-for="teacher in get_all_teachers">
                                            <span @click="add_teacher_id(teacher.teacher_id)">
                                                <ul
                                                    class="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                                    <li data-bs-toggle="tooltip" data-popup="tooltip-custom"
                                                        data-bs-placement="top" class="avatar avatar-xs pull-up" title=""
                                                        data-bs-original-title="Lilian Fuller">
                                                        <img src="../assets/img/avatars/5.png" alt="Avatar"
                                                            class="rounded-circle">
                                                    </li>
                                                    <span> {{ teacher.name }}</span> <span> </span> | <span> {{
                                                        teacher.teacher_id }}</span>
                                                </ul>
                                            </span>
                                        </li>


                                    </ul>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                                    Close
                                </button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="col-md-6">


            </div>

            <div class="mb-3">
                <button type="button" class="btn btn-secondary me-3" data-bs-dismiss="modal">Đóng</button>
                <button class="btn btn-primary" id="closemodal" type="submit">Lưu thay đổi</button>

            </div>

        </Form>

    </div>
</template>
  
<script setup>
import { useRoute, useRouter } from 'vue-router'
import { onMounted, ref, watchEffect, watch, reactive, onUpdated, computed } from 'vue';
import { storeToRefs } from 'pinia';


import * as yup from "yup";
import { Form, Field, ErrorMessage, } from "vee-validate";



const route = useRoute();// 
const router = useRouter();
// const props = defineProps({
//     id: { type: String, required: true },
// })

import { useQuestion_submit_code_bankStore } from "../stores/question_submit_code_bank.js"
import { useList_exam_questionStore } from "../stores/list_exam_question.js"
// import { useExamStore } from "../stores/exam.js"
import { useCompilerStore } from "../stores/compiler.js"
import { useSubjectStore } from "../stores/subject.js"
import { useStudy_classStore } from "../stores/study_class.js"

const subjects = useSubjectStore();
const study_class = useStudy_classStore();
import { useTeacherStore } from "../stores/teacher.js"
const { get_all_teachers } = storeToRefs(useTeacherStore());
const { action_search_teacher } = useTeacherStore();

const { list_exam_question, get_one_list_exam_question, one_list_exam_question } = storeToRefs(useList_exam_questionStore());
const { action_one_list_exam_question } = useList_exam_questionStore();

//const { question_submit_code_bank } = storeToRefs(useQuestion_submit_code_bankStore);
const { one_question_submit_code_bank, get_one_question_submit_code_bank, list_question_submit_code_banks, lenght, get_list_question_submit_code_bank } = storeToRefs(useQuestion_submit_code_bankStore());
const { action_one_question_submit_code_bank, action_list_question_submit_code_bank, action_add_question_submit_code_bank, reset_state_question_submit_code_bank } = useQuestion_submit_code_bankStore();




const question_submit_code_bank = reactive({
    question_submit_code_bank_title: " Môn công nghệ web AA 1",
    // question_submit_code_bank_authorization: 'use',
    // question_submit_code_bank_type: 'private',
    subject_id: route.query.id,
    // list_teacher_id: "",
});





const Form_submitcode = reactive({
    question_submit_code_bank_title: yup
        .string()
        .required("Vui lòng điền trường này")
        .min(5, "Tên phải ít nhất 5 ký tự.")
        .max(100, "Tên có nhiều nhất 100 ký tự."),
    // question_submit_code_bank_authorization: yup
    //     .string()
    //     .required("Vui lòng điền trường này")
    //     .min(1, "Tên phải ít nhất 5 ký tự.")
    //     .max(1200, "Tên có nhiều nhất 100 ký tự."),
    // question_submit_code_bank_type: yup
    //     .string()
    //     .required("Vui lòng điền trường này")
    //     .min(1, "Tên phải ít nhất 5 ký tự.")
    //     .max(100, "Tên có nhiều nhất 100 ký tự."),






})



var productFormSchema = ref(yup.object().shape(Form_submitcode));

function auto_close_toast() {
    const myTimeout = setTimeout(reset_state_question_submit_code_bank, 5000);// thong bao se tu tat sau 5s khi submit
}
async function submit() {

    await action_add_question_submit_code_bank(question_submit_code_bank);
    auto_close_toast();// tu tat thong bao

    router.push({
        name: "QuestionSubmitCodeBankAll", params:{id_subject: route.query.id}
    }
    );

}


onMounted(() => {
    subjects.action_all_subjects();
    study_class.action_all_study_class();

})

const list_teacher = ref(false);

const list_teacher_local = ref([]);
const list_teacher2 = reactive(
    { data: null }
)
async function search_teacher() {
    list_teacher.value = true;
    console.log(list_teacher2);
    await action_search_teacher(list_teacher2.data);
    console.log(get_all_teachers.value);

}
async function delete_teacher_id(teacher_id){
    console.log(teacher_id)

    list_teacher_local.value = list_teacher_local.value.filter((elem)=>{
        return teacher_id != elem.teacher_id;
    })
    alert("Ban da xoa thanh cong")
}

async function add_teacher_id(teacher_id) {
    console.log(list_teacher_local.value)
    if (list_teacher_local.value.length != 0) {
       var check_same= false;
        list_teacher_local.value.forEach((elem) => {
            if (elem.teacher_id == teacher_id) {
                alert("Nguoi nay da ton tai")
                check_same = true;
                return 
            }
        });
       if(!check_same){
        list_teacher_local.value.push({ teacher_id: teacher_id });
       }
    }
    else {
        console.log("c2222")
        list_teacher_local.value.push({ teacher_id: teacher_id });
        console.log(list_teacher_local.value)
    }

}








</script>
  

