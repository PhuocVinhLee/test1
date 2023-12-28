
<template>
    <div class="content-wrapper">
        <div class="container-xxl flex-grow-1 container-p-y">
            <h4 v-if="1" class="fw-bold py-3 ">
                <router-link :to="{
                    name: 'ExamSubmitcodeQuestion',
                    params: { id_exam: route.params.id_exam, id_courses: route.params.id_courses }
                }" class="fw-bold py-3">
                    {{ get_one_exam_submit_code.exam_submit_code_title }}
                </router-link>

            </h4>

            <div class="nav-align-top ">
                <Form @submit="submit()" class="row  " id="courses_add" :validation-schema="study_classFormSchema"
                    v-slot="{ errors }">

                    <div class="col-md-5 mb-3">
                        <!-- <label for="validationServer" class="form-label">Ngan hang cau hoi</label> -->
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
                </Form>
                <div class="tab-content">
                    <h5 class="">
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#basicModal">
                            <i class='bx bxs-plus-circle'></i> Random
                        </button>

                    </h5>
                    <div class="tab-pane fade show active" id="navs-top-home" role="tabpanel">


                        <div class="table-responsive text-nowrap">

                            <!-- <div v-else-if="get_lenght_question_submit_code <= 0"> Khong co cau hoi</div> -->
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


                                    <tr v-for="(question_submit_code_bank, index) in list_question_local"
                                        :key="question_submit_code_bank._id">
                                        <td>{{ index + 1 }}</td>
                                        <td> <i class="fab fa-angular fa-lg text-danger me-3"></i> <strong>{{
                                            question_submit_code_bank.question_submit_code_title }} </strong>
                                            {{ question_submit_code_bank._id }}
                                        </td>

                                        <!-- <td>{{ question_submit_code_bank.subject_id }}</td> -->
                                        <td>
                                            <div class="btn-group">
                                                <span class="badge bg-label-primary  dropdown-toggle"
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    xem
                                                </span>
                                                <div class="dropdown-menu p-2 " style="width: 500px;">
                                                    <span
                                                        v-html="question_submit_code_bank.question_submit_code_describe"></span>
                                                </div>
                                            </div>
                                        </td>

                                        <td>
                                            <ul class="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                                <li data-bs-toggle="tooltip" data-popup="tooltip-custom"
                                                    data-bs-placement="top" class="avatar avatar-xs pull-up" title=""
                                                    data-bs-original-title="Lilian Fuller">
                                                    <img src="../assets/img/avatars/5.png" alt="Avatar"
                                                        class="rounded-circle">
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
                                            <span class="badge " :class="{
                                                'bg-danger': question_submit_code_bank.question_submit_code_level == 'Hard',
                                                'bg-warning': question_submit_code_bank.question_submit_code_level == 'Medium',
                                                'bg-success': question_submit_code_bank.question_submit_code_level == 'Easy'
                                            }">{{ question_submit_code_bank.question_submit_code_level }}</span>
                                        </td>
                                        <td>

                                            <button @click="add_one_question(question_submit_code_bank._id)" type="button"
                                                :class="{ 'btn-primary': question_submit_code_bank.check, 'btn-outline-primary': !question_submit_code_bank.check }"
                                                class="btn btn-icon">
                                                <i class='bx bx-plus-circle'></i>
                                            </button>

                                        </td>

                                    </tr>


                                </tbody>
                            </table>
                            <Pagination :lenght="lengt_list_question" @page="emit_page"></Pagination>
                            <!-- chan trang -->
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
                                    Bạn đã thêm thành công HD.
                                </div>
                            </div>
                        </div>



                    </div>





                </div>
            </div>
        </div>
    </div>

    <div class="mt-3">
        <!-- Button trigger modal -->

        <!-- Modal -->
        <div class="modal fade" id="basicModal" tabindex="-1" aria-hidden="true" style="display: none;">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel1"></h5>
                        <button type="button" id="close_random" class="btn-close" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <Form @submit="submit_random()" class="row  " id="" :validation-schema="productFormSchema"
                            v-slot="{ errors }">


                            <div class="col-md-12 mb-3">
                                <label for="validationServer" class="form-label">Tổng số lượng câu hỏi </label>
                                <Field name="total_question" type="text"
                                    :class="{ ' is-valid': !errors.total_question && exam_quiz_local.total_question, 'is-invalid': errors.total_question }"
                                    class="form-control" v-model="exam_quiz_local.total_question" />
                                <ErrorMessage name="total_question" class="error-feedback" />

                            </div>
                            <div class="col-md-12 mb-3">
                                <label for="validationServer" class="form-label">Số lượng câu hỏi khó</label>
                                <Field name="hard_question" type="text"
                                    :class="{ ' is-valid': !errors.hard_question && exam_quiz_local.hard_question, 'is-invalid': errors.hard_question }"
                                    class="form-control" v-model="exam_quiz_local.hard_question" />
                                <ErrorMessage name="hard_question" class="error-feedback" />

                            </div>
                            <div class="col-md-12 mb-3">
                                <label for="validationServer" class="form-label">Số lượng câu hỏi trung bình</label>
                                <Field name="medium_question" type="text"
                                    :class="{ ' is-valid': !errors.medium_question && exam_quiz_local.medium_question, 'is-invalid': errors.medium_question }"
                                    class="form-control" v-model="exam_quiz_local.medium_question" />
                                <ErrorMessage name="medium_question" class="error-feedback" />

                            </div>
                            <div class="col-md-12 mb-3">
                                <label for="validationServer" class="form-label">Số lượng câu hỏi dễ</label>
                                <Field name="easy_question" type="text"
                                    :class="{ ' is-valid': !errors.easy_question && exam_quiz_local.easy_question, 'is-invalid': errors.easy_question }"
                                    class="form-control" v-model="exam_quiz_local.easy_question" />
                                <ErrorMessage name="easy_question" class="error-feedback" />

                            </div>




                            <div class="">
                                <button class="btn btn-primary" type="submit">Lưu thay đổi</button>

                            </div>

                        </Form>
                    </div>
                    <!-- <div class="modal-footer">
                        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                            Close
                        </button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { onMounted, watchEffect, watch, ref, reactive } from 'vue';
// import Exam_submit_codeFormAdd from "@/components/Exam_submit_codeFormAdd.vue";
// import Exam_submit_codeFormEdit from "@/components/Exam_submit_codeFormEdit.vue";
//import CoursesCardDetail from "@/components/CoursesCardDetail.vue";
import Pagination from "@/components/Pagination.vue";
import * as yup from "yup";
import { Form, Field, ErrorMessage, } from "vee-validate";

import { storeToRefs } from 'pinia';
import { useRoute, useRouter } from 'vue-router'
const route = useRoute();// 
const router = useRouter();

import { useQuestion_submit_code_bankStore } from "../stores/question_submit_code_bank.js"
const { get_one_question_submit_code_bank, get_all_question_submit_code_banks, state_question_submit_code_bank } = storeToRefs(useQuestion_submit_code_bankStore());
const { action_one_question_submit_code_bank, action_add_id_question_submit_code_bank, action_all_question_submit_code_banks, reset_state_question_submit_code_bank, action_delete_question_submit_code_bank } = useQuestion_submit_code_bankStore();


import { useExam_submit_codeStore } from "../stores/exam_submit_code.js"
const { get_one_exam_submit_code, exam_submit_codes, one_exam_submit_code, state_exam_submit_code } = storeToRefs(useExam_submit_codeStore());
const { action_add_id_question_exam_submitcode, action_update_exam_submit_code, action_one_exam_submit_code, action_all_exam_submit_codes, reset_state_exam_submit_code, action_delete_exam_submit_code } = useExam_submit_codeStore();

import { useQuestion_submit_codeStore } from "../stores/question_submit_code.js"
const { get_all_question_submit_codes, get_lenght_question_submit_code } = storeToRefs(useQuestion_submit_codeStore());
const { action_all_question_submit_codes_by_teacher, action_list_question_submit_code_by_question_bank } = useQuestion_submit_codeStore();


const exam_quiz_local = reactive({

    total_question: 0,
    hard_question: 0,
    easy_question: 0,
    medium_question: 0,



});




//     total_question: yup
//         .number().typeError("Vui lòng điền vào số")
//         .required("Vui lòng điền trường này")
//         .min(0, "Số lượng câu hỏi không âm.")
//         .max(180, "Số lượng câu hỏi không quá 180"),
//     hard_question: yup
//         .number().typeError("Vui lòng điền vào số..")
//         .required("Vui lòng điền trường này")

//        . when("total_question", (val, schema) => {
//             if (val > 0) {  //if exam_submit_code_type exist then apply required else not
//                 return yup.number().typeError("Vui lòng điền vào số").min(0, "Số lượng câu hỏi không âm.") 
//                 .max((exam_quiz_local.total_question - (exam_quiz_local.easy_question + exam_quiz_local.medium_question)), `Số lượng câu hỏi không hợp lệ ${val - (exam_quiz_local.easy_question_question + exam_quiz_local.medium_question)}.`).required("Vui lòng điền trường này");
//             } else {
//                 return yup.string().notRequired();
//             }
//         }),  


//     easy_question: yup
//         .number().typeError("Vui lòng điền vào số")
//         .required("Vui lòng điền trường này")
//         .min(0, "Số lượng câu hỏi không âm.")
//         . when("total_question", (val, schema) => {
//             if (val > 0) {  //if exam_submit_code_type exist then apply required else not
//                 return yup.number().typeError("Vui lòng điền vào số").min(0, "Số lượng câu hỏi không âm.") 
//                 .max((exam_quiz_local.total_question - (exam_quiz_local.hard_question + exam_quiz_local.medium_question)), `Số lượng câu hỏi không hợp lệ ${val - (exam_quiz_local.hard_question + exam_quiz_local.medium_question)}.`).required("Vui lòng điền trường này");
//             } else {
//                 return yup.string().notRequired();
//             }
//         }), 
//     medium_question: yup
//         .number().typeError("Vui lòng điền vào số")
//         .required("Vui lòng điền trường này")
//         .min(0, "Số lượng câu hỏi không âm.")
//         . when("total_question", (val, schema) => {
//             if (val > 0) {  //if exam_submit_code_type exist then apply required else not
//                 return yup.number().typeError("Vui lòng điền vào số").min(0, "Số lượng câu hỏi không âm.")
//                 .max((exam_quiz_local.total_question - (exam_quiz_local.easy_question_question + exam_quiz_local.hard_question_question)), `Số lượng câu hỏi không hợp lệ ${val - (exam_quiz_local.easy_question_question + exam_quiz_local.hard_question_question)}.`).required("Vui lòng điền trường này");
//             } else {
//                 return yup.string().notRequired();
//             }
//         }),  
//     // total_question: yup
//     //     .string()
//     //     .nullable()
//     //     .notRequired()
//     //     .when('total_question', {
//     //         is: (value) => value?.length,
//     //         then: (rule) => rule.min(1).required('Vui lòng điền trường này')
//     //     }),
//     // hard_question: yup
//     //     .string()
//     //     .nullable()
//     //     .notRequired()
//     //     .when('hard_question', {
//     //         is: (value) => value?.length,
//     //         then: (rule) => rule.min(1).required('Vui lòng điền trường này')
//     //     }),
//     // easy_question: yup
//     //     .string()
//     //     .nullable()
//     //     .notRequired()
//     //     .when('easy_question', {
//     //         is: (value) => value?.length,
//     //         then: (rule) => rule.min(1).required('Vui lòng điền trường này')
//     //     }),
//     // medium_question: yup
//     //     .string()
//     //     .nullable()
//     //     .notRequired()
//     //     .when('medium_question', {
//     //         is: (value) => value?.length,
//     //         then: (rule) => rule.min(1).required('Vui lòng điền trường này')
//     //     }),

// //, ['hard_question', 'hard_question'], ['easy_question', 'easy_question'], ['medium_question', 'medium_question']
// //, ['total_question', 'hard_question' ,'easy_question', 'medium_question']
// } );
const productFormSchema = yup.object().shape({


    total_question: yup
        .number().typeError("Vui lòng điền vào số")
        .required("Vui lòng điền trường này")
        .min(0, "Số lượng câu hỏi không âm.")
        .max(180, "Số lượng câu hỏi không quá 180"),
    hard_question: yup
        .number().typeError("Vui lòng điền vào số..")
        .required("Vui lòng điền trường này")

        .when("total_question", (val, schema) => {
            if (val > 0) {  //if exam_submit_code_type exist then apply required else not
                return yup.number().typeError("Vui lòng điền vào số").min(0, "Số lượng câu hỏi không âm.")
                    .test({
                        name: 'max',
                        exclusive: false,
                        params: {},
                        message: 'Số lượng câu hỏi không hôp lệ',
                        test: function (value) {
                            // You can access the price field with `this.parent`.
                            return value <= parseFloat(this.parent.total_question - (this.parent.easy_question + this.parent.medium_question))
                        },
                    })
            } else {
                return yup.string().notRequired();
            }
        }),

    medium_question: yup
        .number().typeError("Vui lòng điền vào số")
        .required("Vui lòng điền trường này")
        .min(0, "Số lượng câu hỏi không âm.")
        .when("total_question", (val, schema) => {
            if (val > 0) {  //if exam_submit_code_type exist then apply required else not
                return yup.number().typeError("Vui lòng điền vào số").min(0, "Số lượng câu hỏi không âm.")
                    .test({
                        name: 'max',
                        exclusive: false,
                        params: {},
                        message: 'Số lượng câu hỏi không hôp lệ',
                        test: function (value) {
                            // You can access the price field with `this.parent`.
                            return value <= parseFloat(this.parent.total_question - (this.parent.hard_question + this.parent.easy_question))
                        },
                    })
            } else {
                return yup.string().notRequired();
            }
        }),
    easy_question: yup
        .number().typeError("Vui lòng điền vào số")
        .required("Vui lòng điền trường này")
        .min(0, "Số lượng câu hỏi không âm.")
        .when("total_question", (val, schema) => {
            if (val > 0) {  //if exam_submit_code_type exist then apply required else not
                return yup.number().typeError("Vui lòng điền vào số").min(0, "Số lượng câu hỏi không âm.")
                    .test({
                        name: 'max',
                        exclusive: false,
                        params: {},
                        message: 'Số lượng câu hỏi không hôp lệ',
                        test: function (value) {
                            // You can access the price field with `this.parent`.
                            return value <= parseFloat(this.parent.total_question - (this.parent.hard_question + this.parent.medium_question))
                        },
                    })
            } else {
                return yup.string().notRequired();
            }
        }),


});


const question_bank_local = reactive({
    _id: route.params.id_question_bank
});
const study_classFormSchema = yup.object().shape({
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



function auto_close_toast() {
    const myTimeout = setTimeout(reset_state_exam_submit_code, 5000);
}

function close_toast() {
    reset_state_exam_submit_code();
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
        name: "",
        params: { id_topic: topic_id.value }
        // query: { id_course: route.query.id, id_topic: topic_id.value }
    }
    );
}

async function add_one_question(question_id) {
    action_add_id_question_exam_submitcode(route.params.id_exam, { question_id: question_id });
    auto_close_toast();
    get_All();
}
function emit_page(page) {
    router.push({
        params: { id_question_bank: route.params.id_question_bank },
        query: { page: page }
    }
    );
}

watch(question_bank_local, () => {
    router.push({
        params: { id_question_bank: question_bank_local._id },
        query: { page: 1 }
    }
    );
})
const list_question = ref([]);//12
const list_question_local = ref([]);

watch(route, () => {


    get_All();


})
async function get_All() {
    await action_all_question_submit_code_banks(route.params.id_subject);
    await action_one_exam_submit_code(route.params.id_exam)


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

    await action_list_question_submit_code_by_question_bank(list_question.value, get_one_question_submit_code_bank.value.list_question);// get detail a question in arr question

    list_question_local.value = get_all_question_submit_codes.value.map((question) => {
        let check = false;
       if(get_one_exam_submit_code.value.list_question){
        check = get_one_exam_submit_code.value.list_question.find((id_question) => {
            return id_question == question._id;
        });
       }
        if (check) {
            question.check = true;
        }
        return question;
    })

    culater_total_question();

}

function uniq(a) {
    return a.sort().filter(function (item, pos, ary) {
        return !pos || item != ary[pos - 1];
    });
}

const list_question2 = ref([]);
async function culater_total_question() {
    await action_all_question_submit_code_banks(route.params.id_subject);
    // let list_question = [];
    let list_question_bank = get_all_question_submit_code_banks.value;// arr ques tion bank
    list_question_bank.forEach((question_bank) => {
        list_question2.value = list_question2.value.concat(question_bank.list_question);

    })

    list_question2.value = uniq(list_question2.value);
    console.log(list_question2.value)

    // await action_one_exam_submit_code(route.params.id_exam)
    await action_one_question_submit_code_bank(route.params.id_question_bank);// get arr question
    await action_list_question_submit_code_by_question_bank(list_question2.value, get_one_question_submit_code_bank.value.list_question);// get detail a question in arr question
    let hard_question = 0;
    let easy_question = 0;
    let medium_question = 0;
    get_all_question_submit_codes.value.forEach((question) => {
        let check = false;
       if(get_one_exam_submit_code.value.list_question){
        check = get_one_exam_submit_code.value.list_question.find((id_question) => {
            return id_question == question._id;
        });
       }
        if (check) {
            if (question.question_submit_code_level == "Hard") {
                hard_question++;
            }
            if (question.question_submit_code_level == "Medium") {
                medium_question++;
            }
            if (question.question_submit_code_level == "Easy") {
                easy_question++;
            }

        }

    })
    exam_quiz_local.hard_question = hard_question;
    exam_quiz_local.medium_question = medium_question;
    exam_quiz_local.easy_question = easy_question;
    exam_quiz_local.total_question = get_one_exam_submit_code.value.list_question.length;
}

async function submit_random() {
    let list_id_question_miss_part = [];
    let list_id_question_hard = [];
    let list_id_question_medium = [];
    let list_id_question_easy = [];

    for (let i = 1; i <= exam_quiz_local.hard_question; i++) {// form_data..
        var rand = await get_all_question_submit_codes.value[(Math.random() * get_all_question_submit_codes.value.length) | 0];
        let j = 0;
        while ( (rand.question_submit_code_level != 'Hard' || await list_id_question_hard.find((question_id) => {// tim co la lap hoai
            return question_id == rand._id;
        }) != undefined)) {
            console.log(list_id_question_hard);
           
            rand = await get_all_question_submit_codes.value[(Math.random() * get_all_question_submit_codes.value.length) | 0];
        }
        if (1) {
            list_id_question_hard.push(rand._id);
        }
    }

    for (let i = 1; i <= exam_quiz_local.medium_question; i++) {// form_data..

        var rand = await get_all_question_submit_codes.value[(Math.random() * get_all_question_submit_codes.value.length) | 0];
        let j = 0;
        while ((rand.question_submit_code_level != 'Medium' || await list_id_question_hard.find((question_id) => {// tim co la lap hoai
            return question_id == rand._id;
        }) != undefined)) {
            console.log(list_id_question_hard);
            j++;
            rand = await get_all_question_submit_codes.value[(Math.random() * get_all_question_submit_codes.value.length) | 0];
        }
        if (1) {
            list_id_question_medium.push(rand._id);
        }
    }
    for (let i = 1; i <= exam_quiz_local.easy_question; i++) {// form_data..

        var rand = await get_all_question_submit_codes.value[(Math.random() * get_all_question_submit_codes.value.length) | 0];
        let j = 0;
        while (  (rand.question_submit_code_level != 'Easy' || await list_id_question_hard.find((question_id) => {// tim co la lap hoai
            return question_id == rand._id;
        }) != undefined)) {
            console.log(list_id_question_hard);
            j++;
            rand = await get_all_question_submit_codes.value[(Math.random() * get_all_question_submit_codes.value.length) | 0];
        }
        if (1) {
            list_id_question_easy.push(rand._id);
        }

    }

    let list_question_total = [...list_id_question_easy, ...list_id_question_medium, ...list_id_question_hard]
    // console.log(exam_quiz_local.total_question - list_question_total.length)
    // let length_du = exam_quiz_local.total_question - list_question_total.length;
    // if ((exam_quiz_local.total_question - list_question_total.length) > 0) {//list_id_question_miss_part
    //     for (let a = 1; a <= length_du; a++) {// form_data..
    //         var rand = await get_all_question_submit_codes.value[(Math.random() * get_all_question_submit_codes.value.length) | 0];

    //         while ((await list_question_total.find((question_id) => {// tim co la lap hoai
    //             return question_id == rand._id;
    //         }) != undefined)) {


    //             rand = await get_all_question_submit_codes.value[(Math.random() * get_all_question_submit_codes.value.length) | 0];
    //         }

    //         list_question_total.push(rand._id);

    //     }

    // }


    await action_update_exam_submit_code(route.params.id_exam, { list_question: list_question_total });
    auto_close_toast();
    var close_random = document.getElementById('close_random');
    close_random.click();
    get_All();
    // exam_quiz_local;
    // action_add_id_question_exam_submitcode(route.params.id_exam, { question_id: question_id });
}

const lengt_list_question = ref(1);

onMounted(async () => {
    await get_All();

    lengt_list_question.value = get_lenght_question_submit_code.value;


})




</script>  

