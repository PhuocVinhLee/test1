<script setup>
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { onMounted, ref, watchEffect, watch, reactive, onUpdated, computed } from 'vue';
import { storeToRefs } from 'pinia';
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
import {
    DragCol,
    DragRow,
    ResizeCol,
    ResizeRow,
    Resize,
} from "vue-resizer";
import { VCodeMirror } from 'vue3-code-mirror'
import 'codemirror/mode/python/python.js'
import 'codemirror/lib/codemirror.js'
import 'codemirror/mode/clike/clike.js'
import 'codemirror/addon/edit/closebrackets.js'
import "codemirror/theme/dracula.css";
import "codemirror/theme/duotone-light.css";
import "codemirror/theme/paraiso-light.css";
import 'codemirror/addon/display/placeholder.js'


import * as yup from "yup";
import { Form, Field, ErrorMessage, } from "vee-validate";



const route = useRoute();// 
const router = useRouter();
// const props = defineProps({
//     id: { type: String, required: true },
// })

import { useQuestion_submit_codeStore } from "../stores/question_submit_code.js"
import { useList_exam_questionStore } from "../stores/list_exam_question.js"
// import { useExamStore } from "../stores/exam.js"
import { useCompilerStore } from "../stores/compiler.js"
import { useSubjectStore } from "../stores/subject.js"
import { useStudy_classStore } from "../stores/study_class.js"
import Countdown from 'vue3-countdown';//useResult_exam_quizStore
const subjects = useSubjectStore();
const study_class = useStudy_classStore();


import { useQuestion_submit_code_bankStore } from "../stores/question_submit_code_bank.js"
const { get_one_question_submit_code_bank, state_question_submit_code_bank } = storeToRefs(useQuestion_submit_code_bankStore());
const { action_add_id_question_submit_code_bank, action_one_question_submit_code_bank, action_all_question_submit_code_banks, reset_state_question_submit_code_bank, action_delete_question_submit_code_bank } = useQuestion_submit_code_bankStore();

import { useExam_submit_codeStore } from "../stores/exam_submit_code.js"
const { get_one_exam, exams, one_exam, get_one_exam_submit_code } = storeToRefs(useExam_submit_codeStore());// no da thanh ref nen khi dung phai co value
const { action_one_exam_submit_code } = useExam_submit_codeStore();

import { useResult_exam_submitcodeStore } from "../stores/result_exam_submitcode.js"
const { get_all_result_exam_submitcodes, state_result_exam_submitcodes } = storeToRefs(useResult_exam_submitcodeStore());
const { action_all_result_exam_submitcodes, action_update_result_exam_submitcodes, action_one_result_exam_submitcodes, action_add_result_exam_submitcodes } = useResult_exam_submitcodeStore();


const { list_exam_question, get_one_list_exam_question, one_list_exam_question } = storeToRefs(useList_exam_questionStore());
const { action_one_list_exam_question } = useList_exam_questionStore();

const { state_question_submit_code, one_question_submit_code, get_one_question_submit_code, list_question_submit_codes, lenght, get_list_question_submit_code } = storeToRefs(useQuestion_submit_codeStore());
const { action_one_question_submit_code, action_list_question_submit_code, action_add_question_submit_code, reset_state_question_submit_code } = useQuestion_submit_codeStore();


const { get_compiler, get_isLoanding, compiler, get_answers, answers, error_code, get_errors } = storeToRefs(useCompilerStore());// no da thanh ref nen khi dung phai co value
const { action_compiler, action_answers, action_answers_width_program } = useCompilerStore();

import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const editor = ref(ClassicEditor);
const editorData = ref('<p>Content of the editor.</p>');
const editorConfig = ref({
    // The configuration of the editor.
});




const question_submit_code = reactive({
    question_submit_code_title: " thi cong nghe web",
    question_submit_code_describe: "<p><strong>Thông tin Hàm:</strong></p><ul><li>Tên hàm (function name):&nbsp;</li><li>Tham số (parameters):</li><li>Kiểu trả về:</li></ul><p><strong>Thân hàm (Body):</strong></p><p><strong>Chú ý</strong></p><ul><li>Giá trị của các tham số luôn hợp lệ, không cần kiểm tra.</li><li>Chỉ viết hàm, KHÔNG VIẾT TOÀN BỘ CHƯƠNG TRÌNH</li><li>Xem thêm chi tiết trong phần <strong>Test</strong>.</li></ul><p><strong>Gợi ý</strong>:</p>",
    question_submit_code_level: 'Medium',
    question_submit_code_type: 'function',
    lang: "C/C++",
    subject_id: route.query.id
});

// watchEffect(async () => {
//     question_submit_code.subject_id = route.query.id;
//     console.log(question_submit_code.subject_id)

// })


const Form_submitcode = reactive({
    question_submit_code_title: yup
        .string()
        .required("Vui lòng điền trường này")
        .min(5, "Tên phải ít nhất 5 ký tự.")
        .max(100, "Tên có nhiều nhất 100 ký tự."),
    question_submit_code_describe: yup
        .string()
        .required("Vui lòng điền trường này")
        .min(5, "Tên phải ít nhất 5 ký tự.")
        .max(1200, "Tên có nhiều nhất 100 ký tự."),
    // subject_id: yup
    //     .string()
    //     .optional()
    //     .required("Vui lòng điền trường này")
    //     .min(1, "Tên phải ít nhất 5 ký tự.")
    //     .max(100, "Tên có nhiều nhất 100 ký tự."),
    question_submit_code_level: yup
        .string()
        .optional()
        .required("Vui lòng điền trường này")
        .min(1, "Tên phải ít nhất 5 ký tự.")
        .max(100, "Tên có nhiều nhất 100 ký tự."),



    lang: yup
        .string().
        when("exam_type", (val, schema) => {
            if (val == "submitcode") {  //if exam_type exist then apply required else not
                return yup.string().required("Vui lòng chọn ngôn ngữ");
            } else {
                return yup.string().notRequired();
            }
        }),

    list_input: yup.array(
        yup.object({
            input: yup.string().required("Vui lòng điền trường này")
        })
    ),


})



var productFormSchema = ref(yup.object().shape(Form_submitcode));

function auto_close_toast() {
    const myTimeout = setTimeout(reset_state_question_submit_code_bank, 5000);// thong bao se tu tat sau 5s khi submit
}
async function submit() {

    question_submit_code.answer = list_input_local.value;
    await action_answers(list_input_local.value, code.value);
    // console.log(get_answers);
    var check_answer = false;

    for (const [index, answer] of get_answers.value.entries()) {
        if (answer.output != list_input_local.value[index].output) {
            // console.log(answer.output == list_input_local.value[index].output);
            return check_answer = false;
        }
        else {
            check_answer = true;
        }

    }


    if (check_answer) {
        await action_add_question_submit_code(question_submit_code);
        console.log(state_question_submit_code.value.insertedId);
        if (state_question_submit_code.value.insertedId) {
            await action_add_id_question_submit_code_bank(route.params.id_question_bank, { question_id: state_question_submit_code.value.insertedId })
            console.log(state_question_submit_code_bank.value);
            auto_close_toast();
        }
        router.push({
            name: "QuestionSubmitcodeBankDetailDashboard",
            params: { id_subject: route.params.id_subject, id_question_bank: route.params.id_question_bank },
            query: { page: 1 }
        }
        );
    }
    // await action_add_question_submit_code(question_submit_code); // them exam vao csdl
    // await  action_all_exams(route.query.page);//  get du lieu tai trang hien co
    // const myModalEl = document.getElementById('btn-close');
    // myModalEl.click();// dong model
    auto_close_toast();// tu tat thong bao



}
function hanleUpdate(value) {
    code.value = value;



}



const mode = ref({ name: '', json: true })

const cmOptions = ref({ tabSize: 1, theme: "dracula", lineNumbers: true, mode: 'text/x-c++src' })

const cmOptions_input = ref({ tabSize: 2, scrollbarStyle: null, lineNumbers: true, theme: 'paraiso-light', lineWrapping: true, spellcheck: false, mode: 'text/x-c++src', placeholder: 'Vui lòng nhập kiểu, tên và giá trị biến' })

const code = ref("int c;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");// codemirorr bi loi magrin
const answer_local = ref();


const list_input_local = ref([reactive({ input: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", name: "input", output: "" })]);








const testcase_result = ref(true)
const cases_logic = ref(0)

function a(logic) {
    if (logic === testcase_result.value) return testcase_result.value;
    return testcase_result.value = !testcase_result.value;

}

function cases(logic) {
    if (logic === testcase_result.value) return testcase_result.value;
    return testcase_result.value = !testcase_result.value;

}

const codemirorr = reactive(
    { topPercent: 100 }
)
function run_consle_top() {
    console.log("landland")
    codemirorr.topPercent = 60
}

function run_consle_down() {
    console.log("down")
    codemirorr.topPercent = 100



}


const document_width = ref(window.innerWidth - 10);
const document_height = ref(window.innerHeight - 30);


onMounted(() => {
    window.addEventListener('resize', () => {
        document_height.value = (window.innerHeight)
        document_width.value = (window.innerWidth);
    })
})


const minute = ref(20000)
const time_format = ref("mm:ss")
const count_down = ref();

async function handleMounted() {
    console.log("Count down onMounted");
}

function handleFinish() {
    console.log("Oke")
}
function handleChange({ currentTime, resolved, formatted }) {
    //  console.log(currentTime, resolved, formatted)
}



function time_distance(end_time, start_time) {// end > start
    console.log(start_time)
    console.log(end_time)
    let s = new Date(start_time);
    let e = new Date(end_time);

    console.log((e - s) / 1000 / 60);
    return ((e - s) / 1000 / 60);// minue

}


const list_question = ref([]);
const one_result = ref([]);
const one_question_submit_code_local = ref({});
const max_mark = ref(1);
const max_local = ref(-1);
async function get_list_and_one_question() {
    await action_one_exam_submit_code(route.params.id_exam);
    for (const element of get_one_exam_submit_code.value.list_question) {
        await action_one_question_submit_code(element);
        await list_question.value.push(one_question_submit_code.value);
    }
    get_one_question();
}
async function get_one_question() {
    await action_one_question_submit_code(list_question.value[route.params.question - 1]._id);
    one_question_submit_code_local.value = one_question_submit_code.value;
    let check_answer = false;
    if (one_result.value.list_answer) {
        for (const result of one_result.value.list_answer) {

            if (result.question_id == one_question_submit_code_local.value._id) {
                check_answer = true
                code.value = result.code;
                if (result.mark) {
                    console.log("Okekekekekekeek")
                    console.log(result.mark)
                    max_local.value = result.mark;
                } else {
                    max_local.value = -1;
                }
                var minus_mark = one_question_submit_code_local.value.minus_percent_points * result.submit_number;
                if (minus_mark > one_question_submit_code_local.value.max_minus_percent) {
                    max_mark.value = (100 - one_question_submit_code_local.value.max_minus_percent) / 100
                } else {
                    max_mark.value = (100 - (minus_mark)) / 100
                }




                break;
            }
            code.value = " int khong co 1;"
            max_mark.value = 1;
            max_local.value = -1;

        }
    } else {
        code.value = " int khong co;"/// int add(int a, int b){ return a+b;}
        max_mark.value = 1;
        max_local.value = -1;
    }
    answers.value = [];
    error_code.value = [];
    compiler.value = {};
    list_input_local.value = one_question_submit_code_local.value.answer

    if (check_answer) {
        if (one_question_submit_code_local.value.question_submit_code_type == 'function') {
            await action_answers(list_input_local.value, code.value);
        } else {
            await action_answers_width_program(list_input_local.value, code.value);
        }

    }

}

async function run() {

    run_consle_top();
    if (one_question_submit_code_local.value.question_submit_code_type == 'function') {
        await action_answers(list_input_local.value, code.value);
    } else {
        await action_answers_width_program(list_input_local.value, code.value);
    }
    let check_answer1 = true;

    for (const [index, answer] of get_answers.value.entries()) {
        if (answer.output != list_input_local.value[index].output) {
            // console.log(answer.output == list_input_local.value[index].output);
            check_answer1 = false;
            break;
        }
    }
    await action_all_result_exam_submitcodes(route.params.id_exam);
    one_result.value = get_all_result_exam_submitcodes.value[get_all_result_exam_submitcodes.value.length - 1];
    let list_answer = one_result.value.list_answer;
    const answer = {
        question_id: one_question_submit_code_local.value._id,
        submit_number: 0,
        code: code.value,
        question_title: one_question_submit_code_local.value.question_submit_code_title
    }
    if (list_answer) {
        var check_answer2 = true;
        for (const [index, answer] of list_answer.entries()) {
            if (answer.question_id == one_question_submit_code_local.value._id) {

                if (answer.mark != 0 && !answer.mark) {
                    if (check_answer1) {
                        list_answer[index].submit_number = parseInt(list_answer[index].submit_number);
                        list_answer[index].mark = max_mark.value
                    } else {
                        list_answer[index].submit_number = 1 + parseInt(list_answer[index].submit_number);
                    }
                }

                list_answer[index].code = code.value;
                check_answer2 = false;
                break;
            }

        }
        if (check_answer2) {
            if (check_answer1) {
                answer.submit_number = 0;
                answer.mark = max_mark.value;

            } else {
                answer.submit_number = 1// so lan submit sai
            }

            list_answer.push(answer);
        }

    } else {
        if (check_answer1) {
            answer.submit_number = 0;
            answer.mark = max_mark.value;
        } else {
            answer.submit_number = 1// so lan submit sai
        }
        list_answer = [
            answer
        ]
    }
    console.log(list_answer);
    await action_update_result_exam_submitcodes(one_result.value._id, { list_answer: list_answer })

    await action_all_result_exam_submitcodes(route.params.id_exam);
    one_result.value = get_all_result_exam_submitcodes.value[get_all_result_exam_submitcodes.value.length - 1];
    if (one_result.value.list_answer) {
        for (const result of one_result.value.list_answer) {

            if (result.question_id == one_question_submit_code_local.value._id) {


                code.value = result.code;
                if (result.mark) {
                    max_local.value = result.mark;
                } else {
                    max_local.value = -1;
                }
                var minus_mark = one_question_submit_code_local.value.minus_percent_points * result.submit_number;
                if (minus_mark > one_question_submit_code_local.value.max_minus_percent) {
                    max_mark.value = (100 - one_question_submit_code_local.value.max_minus_percent) / 100;
                } else {
                    max_mark.value = (100 - (minus_mark)) / 100;
                }

                break;
            }
            code.value = " int khong co 1;"
            max_mark.value = 1;

        }
    }
}

async function submit_and_end() {
    let now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    one_result.value.completed = true;
    one_result.value.datetime_completed = now.toISOString().slice(0, 19);
    await action_update_result_exam_submitcodes(one_result.value._id, one_result.value)
    router.push(
        {
            name: 'ExamSubmitcodeResult',
            params: { id: route.params.id_exam, id_courses: route.params.id_courses }
        })
}
watch(route, async () => {// refresh state
    get_one_question();
})
onMounted(async () => {


    await action_one_exam_submit_code(route.params.id_exam);
    await action_all_result_exam_submitcodes(route.params.id_exam);
    one_result.value = get_all_result_exam_submitcodes.value[get_all_result_exam_submitcodes.value.length - 1];

    let now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    //console.log(time_distance(now.toISOString().slice(0, 19), one_result.value.datetime_attempts) >= get_one_exam_submit_code.value.exam_submit_code_duration)
    if (!one_result.value || one_result.value.completed == true
        || time_distance(now.toISOString().slice(0, 19), one_result.value.datetime_attempts) >= get_one_exam_submit_code.value.exam_submit_code_duration
    ) {


        await action_add_result_exam_submitcodes({
            exam_id: route.params.id_exam,
            datetime_attempts: now.toISOString().slice(0, 19),
            completed: false,
            list_question: []
        });
        await action_all_result_exam_submitcodes(route.params.id_exam);// cap nhat ket qua ky thi hien tai
        one_result.value = get_all_result_exam_submitcodes.value[get_all_result_exam_submitcodes.value.length - 1];

        minute.value = get_one_exam_submit_code.value.exam_submit_code_duration;
    } else {

        one_result.value = await get_all_result_exam_submitcodes.value[get_all_result_exam_submitcodes.value.length - 1];
        minute.value = get_one_exam_submit_code.value.exam_submit_code_duration - time_distance(now.toISOString().slice(0, 19), one_result.value.datetime_attempts);

    }

    await get_list_and_one_question();
    //minute.value = 39;
    await handleMounted();
    count_down.value.reset();// update time Countdown
    count_down.value.start();



})
async function next_page() {
    if (route.params.question < list_question.value.length && !get_isLoanding.value) {
        list_question.value.forEach((element, index) => {
            if (parseInt(route.params.question) === parseInt(index + 1)) {
                router.push({ params: { question: parseInt(route.params.question) + 1 } })
            }
        });
    }


}
async function pre_page() {
    if (route.params.question > 1 && !get_isLoanding.value) {
        list_question.value.forEach((element, index) => {
            if (parseInt(route.params.question) === parseInt(index + 1)) {

                router.push({ params: { question: parseInt(route.params.question) - 1 } })
            }
        });

    }

}

</script>

<template>
    <header class="p-1 bg-dark " style="height: 6%">
        <div class="">
            <div class=" d-flex justify-content-between rounded-1  align-items-center ">
                <div class="navbar navbar-dark bg-dark   text-white me-2">
                    <div class="  ">
                        <button class="navbar-toggler " type="button" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                            <span class="navbar-toggler-icon"></span>
                            <span class="text-white"> List questions</span>
                        </button>

                    </div>
                </div>

                <nav aria-label="..." class="me-2">
                    <ul class="pagination pagination-sm m-0">

                        <li class="page-item" @click="pre_page()">
                            <a href="#" class="page-link bg-dark text-white border border-dark-subtle"> Previous
                            </a>
                        </li>

                        <li class="page-item "><a class="page-link bg-dark text-white  border border-dark-subtle"
                                href="#">{{ route.params.question }}</a>
                        </li>

                        <li class="page-item" @click="next_page()"> <a href="#"
                                class="page-link bg-dark text-white border border-dark-subtle ">
                                Next
                            </a>
                        </li>
                        <li>

                        </li>
                    </ul>
                </nav>

                <div>
                    <button type="button" class="btn btn-secondary btn-sm bg-dark  px-2"><span class="">
                            <i class='bx bx-flag'></i> </span></button>
                </div>
                <div class="ms-2"> <button @click="submit_and_end()" type="button" class=" btn btn-primary px-2 py-0"><span
                            class="">Submit and
                            End</span></button></div>


                <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 text-white justify-content-center mb-md-0">

                </ul>

                <button type="button" class="btn btn-secondary btn-lg text-brand-orange me-4 p-1">{{
                    get_one_exam_submit_code.exam_submit_code_title }}</button>
                <div class="text-white me-4"> Thời gian còn lại: <span class="badge bg-secondary p-2">
                        <countdown @vue:mounted="handleMounted" @change="handleChange" ref="count_down"
                            :time="minute * 1000 * 60" :format="time_format" @finish="handleFinish">
                            <template #="{ resolved }">
                                <!-- <span class="countdown-item">{{ resolved.HH }}</span> : -->
                                <span class="countdown-item">{{ resolved.mm }}</span> :
                                <span class="countdown-item">{{ resolved.ss }}</span>
                            </template>
                        </countdown>
                    </span></div>
                <div class="me-2">
                    <img src="https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-Viet-Nam.jpg"
                        class="rounded-circle" alt="..." width="24" height="24">

                </div>


            </div>
        </div>

    </header>


    <!-- model list question-->

    <div class="offcanvas offcanvas-start bg-dark text-white " tabindex="-1" id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header  border-bottom">
            <h6 class="offcanvas-title" @click="testt()" id="offcanvasExampleLabel">Total <span
                    class="badge bg-secondary fs-6 ">{{ list_question.length }}</span>
                questions</h6>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <div>
                <div class="btn-group-vertical  d-flex" role="group" aria-label="Vertical button group">
                    <router-link :to="{

                        params: { question: parseInt(index) + 1 }
                    }" type="button"
                        class="btn btn-outline-secondary text-white text-start p-3 d-flex justify-content-between w-100"
                        :class="{ active: parseInt(route.params.question) == index + 1 }"
                        v-for="(question, index) in list_question" :key="index">
                        <span class="me-3"><i class="fa-sharp fa-regular fa-flag"></i></span>

                        <span class=""> <span>{{ index + 1 }}. </span> {{
                            question.question_submit_code_title }} </span>
                        <span v-if="question.question_submit_code_level == 'Hard'" class="text-danger ms-3">Khó</span>
                        <span v-else-if="question.question_submit_code_level == 'Medium'" class="text-warning">Trung
                            bình</span>
                        <span v-else class="text-success">Dễ</span>
                    </router-link>




                    end
                </div>
            </div>

        </div>
    </div>
    <!-- <h4 class="fw-bold m-0 " style="height: 3%;">
        <routerLink :to="{
            name: 'QuestionSubmitcodeBankDetailDashboard',
            params: { id_subject: route.params.id_subject, id_question_bank: route.params.id_question_bank },
            query: { page: 1 }
        }" class="text-muted fw-light">{{ get_one_question_submit_code_bank.question_submit_code_bank_title
}} /
        </routerLink>
    </h4> -->
    <splitpanes class="default-theme p-2" horizontal :push-other-panes="false" style="height: 94%;">
        <pane>
            <splitpanes :push-other-panes="false">
                <pane>
                    <span>
                        <div class=" rounded-1 bg-codemiroor text-white p-2 overflow-scroll-y "
                            style="height: 100%; width: 100%;" id="form_add_question">




                            <h5 class="text-white">Câu {{ route.params.question }}. {{
                                one_question_submit_code_local.question_submit_code_title
                            }}</h5>

                            <div class="d-flex mb-3"> <span
                                    v-if="one_question_submit_code_local.question_submit_code_level == 'Hard'"
                                    class="badge rounded-pill bg-danger px-2">Khó</span>
                                <span v-else-if="one_question_submit_code_local.question_submit_code_level == 'Medium'"
                                    class="badge rounded-pill bg-warning px-2">Trung bình</span>
                                <span v-else class="badge rounded-pill bg-success px-2">Dễ</span>



                                <span class="ms-2">Bạn sẽ bị trừ <span class="text-danger">{{
                                    one_question_submit_code_local.minus_percent_points }}%</span>
                                    điểm cho mỗi lần thử nếu kết quả sai, tối đa trừ <span class="text-warning">{{
                                        one_question_submit_code_local.max_minus_percent }}%</span>
                                </span>
                            </div>


                            <span v-html="one_question_submit_code_local.question_submit_code_describe"></span>
                            <div class="mb-2 "> Bạn được cho hai danh sách liên kết không rỗng đại diện cho hai số
                                nguyên không
                                âm. Các
                                chữ số được
                                lưu trữ theo thứ tự đảo ngược và mỗi nút của chúng chứa một chữ số. Cộng hai số và trả
                                về tổng
                                dưới dạng
                                danh sách liên kết.

                                Bạn có thể cho rằng hai số không chứa bất kỳ số 0 nào đứng đầu, ngoại trừ chính số 0.
                            </div>




                            <div v-for="(answer, index) in one_question_submit_code_local.answer">
                                <div>Ví dụ {{ index + 1 }}:</div>

                                <div class="table-responsive text-nowrap">
                                    <table class="table table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Test</th>
                                                <th>Result</th>

                                            </tr>
                                        </thead>
                                        <tbody class="table-border-bottom-0">


                                            <tr class="table-success">
                                                <td> <span>{{ answer.input }}</span></td>
                                                <td> <span>{{ answer.output }}</span></td>

                                            </tr>

                                        </tbody>
                                    </table>
                                </div>

                            </div>

                        </div>



                    </span>
                </pane>
                <pane>
                    <span>
                        <splitpanes class="default-theme" horizontal style="height: 95%  ;"
                            @resize="codemirorr.topPercent = $event[0].size">

                            <pane :size="codemirorr.topPercent">
                                <span class="me-3">
                                    <VCodeMirror class="CodeMirror " id="codemiroor" :value="code" :options="cmOptions"
                                        :readonly="false" @update:value='hanleUpdate' style="height: 100%; width: 100%;" />
                                </span>
                            </pane>
                            <pane :size="100 - codemirorr.topPercent">
                                <span>
                                    <div class="panel border bg-codemiroor  border-dark  rounded-1  text-white"
                                        style="height: 100%;">

                                        <div class="bg-codemiroor border  border-dark text-white  p-1">
                                            <div v-if="!list_input_local" class="mt-1 ms-1" role="group"
                                                aria-label="Basic radio toggle button group ">

                                                <input type="radio" class="btn-check" name="btnradio" autocomplete="off"
                                                    checked>

                                                <label class="btn p-1 text-white">Null
                                                </label>


                                                <!---  <div :class=" [(get_compiler.output == answer.output ) ? 'text-success ' :  (get_compiler.output != answer.output) ? 'text-danger'  ] "></div> --->
                                            </div>
                                            <div v-else class="m-1 ms-1" role="group"
                                                aria-label="Basic radio toggle button group ">
                                                <span v-for="(answer, index) in list_input_local">



                                                    <input type="radio" class="btn-check" name="btnradio1" :id="index"
                                                        autocomplete="off" :checked="index == cases_logic"
                                                        @click="cases_logic = index">

                                                    <label v-if="!get_answers[index]"
                                                        class="btn p-1 me-1 text-white btn btn-outline-secondary"
                                                        :for="index">
                                                        <span class="">Case {{ index + 1 }}</span> </label>
                                                    <label v-else class="btn p-1 me-1 btn btn-outline-secondary" :class="{
                                                        'text-danger': get_answers[index].output != answer.output && get_answers[index].output, 'text-success': get_answers[index].output == answer.output
                                                        , 'text-white': !get_answers
                                                    }" :for="index">Case
                                                        {{ index + 1 }}
                                                    </label>
                                                </span>
                                                <!---  <div :class=" [(get_compiler.output == answer.output ) ? 'text-success ' :  (get_compiler.output != answer.output) ? 'text-danger'  ] "></div> --->
                                            </div>
                                        </div>

                                        <div id="testcase" v-show="testcase_result"
                                            class=" bg-codemiroor console  overflow-scroll-y text-white" role="alert">
                                            <span>
                                                <!-- <div class="mt-2 ms-2" role="group" aria-label="Basic radio toggle button group ">
            <span v-for="(answer, index) in one_question_submit_code.answer">

                <input type="radio" class="btn-check" name="btnradio1" :id="index"
                    autocomplete="off" :checked="index == cases_logic"
                    @click="cases_logic = index">

                    <label v-if="!get_answers[index]" class="btn p-1 text-white" 
                 :for="index">Case
                    {{ index + 1 }} </label>
                <label v-else class="btn p-1" :class="{
                    'text-success': get_answers[index].output === answer.output, 'text-danger': get_answers[index].output != answer.output && get_answers[index].output
                    , 'text-white': !get_answers 
                }" :for="index">Case
                    {{ index + 1 }}</label>
                </span>
             <div :class=" [(get_compiler.output == answer.output ) ? 'text-success ' :  (get_compiler.output != answer.output) ? 'text-danger'  ] "></div> 
        </div> -->
                                                <div v-for="(answer, index) in list_input_local"
                                                    v-show="index == cases_logic">
                                                    <splitpanes class="default-theme" style="height: 100%">
                                                        <pane min-size="5">
                                                            <span>

                                                                <div class=" overflow-scroll-y  bg-dark"
                                                                    style="height: 97%;">
                                                                    <table class="table table-dark ">
                                                                        <thead>
                                                                            <tr>
                                                                                <th> Test</th>

                                                                            </tr>
                                                                        </thead>
                                                                        <tbody class="table-border-bottom-0 ">
                                                                            <tr>
                                                                                <td><i
                                                                                        class="fab fa-angular fa-lg text-danger "></i>
                                                                                    <span>{{ answer.input }}</span>


                                                                                </td>
                                                                            </tr>


                                                                        </tbody>
                                                                    </table>

                                                                </div>
                                                            </span>
                                                        </pane>
                                                        <pane min-size="5">
                                                            <span>
                                                                <div class=" overflow-scroll-y  bg-dark"
                                                                    style="height: 97%;">
                                                                    <table class="table table-dark ">
                                                                        <thead>
                                                                            <tr>
                                                                                <th> Result</th>

                                                                            </tr>
                                                                        </thead>
                                                                        <tbody class="table-border-bottom-0 ">
                                                                            <tr>
                                                                                <td><i
                                                                                        class="fab fa-angular fa-lg text-danger "></i>
                                                                                    <span>{{ answer.output }}</span>


                                                                                </td>
                                                                            </tr>


                                                                        </tbody>
                                                                    </table>

                                                                </div>

                                                            </span>
                                                        </pane>
                                                        <pane min-size="5">
                                                            <span>
                                                                <div class=" overflow-scroll-y  bg-dark"
                                                                    style="height: 97%;">
                                                                    <table class="table table-dark ">
                                                                        <thead>
                                                                            <tr>
                                                                                <th>Your Result</th>

                                                                            </tr>
                                                                        </thead>
                                                                        <tbody class="table-border-bottom-0 ">
                                                                            <tr>
                                                                                <td><i
                                                                                        class="fab fa-angular fa-lg text-danger"></i>
                                                                                    <div v-if="get_answers[index]"> <span>{{
                                                                                        get_answers[index].output
                                                                                    }}</span></div>
                                                                                    <!-- <h6 v-else-if="get_errors[index]"> <span> {{ get_errors[index] }}</span></h6> -->
                                                                                    <span v-else> </span>


                                                                                </td>
                                                                            </tr>


                                                                        </tbody>
                                                                    </table>

                                                                </div>

                                                            </span>
                                                        </pane>
                                                        <pane min-size="2" size="5">
                                                            <span>
                                                                <div class=" overflow-scroll-y  bg-dark"
                                                                    style="height: 97%;">
                                                                    <table class="table table-dark ">
                                                                        <thead>
                                                                            <tr>
                                                                                <th> Time</th>

                                                                            </tr>
                                                                        </thead>
                                                                        <tbody class="table-border-bottom-0 ">
                                                                            <tr>
                                                                                <td><i
                                                                                        class="fab fa-angular fa-lg text-danger"></i>
                                                                                    <div v-if="get_answers[index]"> <span>{{
                                                                                        get_answers[index].output
                                                                                    }}</span>s</div>
                                                                                    <!-- <h6 v-else-if="get_errors[index]"> <span> {{ get_errors[index] }}</span></h6> -->
                                                                                    <span v-else> </span>


                                                                                </td>
                                                                            </tr>


                                                                        </tbody>
                                                                    </table>

                                                                </div>

                                                            </span>
                                                        </pane>
                                                    </splitpanes>


                                                </div>
                                            </span>

                                        </div>
                                        <!-- <div id="result" v-show="!testcase_result"
    class=" bg-codemiroor console  overflow-scroll-y text-danger p-2 " role="alert">


    <span class="fs-1">
        <p> {{ error_code[0] }}
        </p>

    </span>csaca
</div> -->

                                    </div>

                                </span>
                            </pane>
                        </splitpanes>
                        <button @click="test" style="height: 5%;"
                            class="   accordion bg-codemiroor  d-flex justify-content-between rounded-1  align-items-center ">
                            <span class="">
                                <span @click="run_consle_top()" v-if="codemirorr.topPercent == 100"><i
                                        class='bx bxs-chevron-down bx-rotate-180'></i></span>
                                <span @click="run_consle_down()" v-else><i class='bx bxs-chevron-down'></i></span>
                                <!-- <span>show difference</span>
                                <button type="button" class="btn btn-outline-primary py-0">
                              show difference
                            </button> -->
                            </span>

                            <div>
                                <span v-if="max_local != -1" class="me-3">Câu hỏi này đã đạt được <span
                                        class="text-success">{{ max_local }}</span>
                                    điểm</span>
                                <span v-else class="me-3">Bạn sẽ nhận được tối đa <span class="text-warning">{{ max_mark
                                }}</span>
                                    số điểm cho lần thử này</span>
                                <span v-show="!get_isLoanding" @click="run()" type="button" id="run"
                                    class=" btn btn-primary px-3 py-0"> Run</span>

                                <button v-show="get_isLoanding" class="btn btn-primary px-3 py-0" type="button" disabled>
                                    <span class="spinner-border spinner-border-sm " aria-hidden="true"></span>
                                    <span role="status">Runing...</span>
                                </button>
                            </div>
                        </button>
                    </span>
                </pane>

            </splitpanes>
        </pane>

    </splitpanes>
</template>

<style scoped>
:root {
    --ck-z-default: 100;
    --ck-z-modal: calc(var(--ck-z-default) + 999);
}

.text-brand-orange {
    --tw-text-opacity: 1;
    color: rgb(255 161 22/var(--tw-text-opacity));
}

/* #testcase {
    max-height: 500px;
    min-height: 500px;
}

#result {
    max-height: 130px;
    min-height: 130px;
} */

.console {}

.pading-0 {
    padding: 0px;
}

.vitri {
    position: relative;
}

#console {
    position: absolute;
    bottom: 0px;
}

.CodeMirror {

    /* height: 610px; */
    width: 100%;
    border-radius: 3px;

}

.CodeMirror_input {
    height: 29px;
    /* border: 1px solid rgb(151, 132, 150); */
    width: 100%;

}

.accordion {

    color: white;
    cursor: pointer;
    padding: 15px;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    /* font-size: px; */
    transition: 0.4s;
}




.botton {
    position: absolute;
    bottom: 0px;
    width: 100%;


}

.bg-codemiroor {
    background-color: #282a36 !important;
}

.error-feedback {
    color: red;
}

.overflow-scroll-y {
    overflow: auto;


}
</style>