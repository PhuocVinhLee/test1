 
<template>
    <div>

        <aside class=" w-100 container-fluid " style="width: 100% ;">

            <div class=" mt-3">
                <h4 class="fw-bold m-0 ">
                    <routerLink :to="{
                        name: 'QuestionSubmitcodeBankDetailDashboard',
                        params: { id_subject: route.params.id_subject, id_question_bank: route.params.id_question_bank },
                        query: { page: 1 }
                    }" class="text-muted fw-light">{{ get_one_question_submit_code_bank.question_submit_code_bank_title
}} /
                    </routerLink> Thêm câu hỏi {{ height_screen }}
                </h4>
                <div class="row mt-3">


                    <div class="col rounded-1 py-2 bg-codemiroor text-white  overflow-scroll-y me-2 " id="form_add_question"
                        :style="`height: ${height_screen}`">


                        <Form @submit="submit()" class="row g-3 " id="exam_add" :validation-schema="productFormSchema"
                            v-slot="{ errors }">
                            <!-- <div class="col-md-12">
                               <span v-html="question_submit_code.question_submit_code_describe"></span>
                            </div> -->
                            <div class="col-md-12">
                                <label for="validationServer" class="form-label">Tên câu hỏi</label>
                                <Field type="text" class="form-control"
                                    :class="{ ' is-valid': !errors.question_submit_code_title && question_submit_code.question_submit_code_title }"
                                    v-bind:class="{ 'is-invalid': errors.question_submit_code_title }"
                                    name="question_submit_code_title"
                                    v-model="question_submit_code.question_submit_code_title" />
                                <ErrorMessage name="question_submit_code_title" class="error-feedback" />
                                <span> {{ errors.question_submit_code_title }} </span>





                            </div>
                            <div class="col-md-12 text-black ">
                                <label for="validationServer" class="form-label text-white">Mô tả</label>
                                <Field type="text" class="form-control " v-slot="{ field, errors }"
                                    :class="{ ' is-valid': !errors.question_submit_code_describe && question_submit_code.question_submit_code_describe }"
                                    v-bind:class="{ 'is-invalid': errors.question_submit_code_title }"
                                    name="question_submit_code_describe"
                                    v-model="question_submit_code.question_submit_code_describe">
                                    <!-- <textarea v-bind="field" name="question_submit_code_describe"
                                        :class="{ 'is-valid': !errors.question_submit_code_describe && question_submit_code_submit_code.question_submit_code_describe, ' is-invalid': errors[0] }"
                                        class="form-control " id="exampleFormControlTextarea1" rows="3">

                                    </textarea> -->
                                    <ckeditor v-bind="field" name="question_submit_code_describe" :editor="editor"
                                        v-model="question_submit_code.question_submit_code_describe" :config="editorConfig">
                                    </ckeditor>
                                    <ErrorMessage v-if="errors[0]" name="question_submit_code_describe"
                                        class="error-feedback" />
                                    <!-- <div >{{ errors[0] }}/jkjk</div> -->
                                </Field>
                                <!-- <ErrorMessage name="question_submit_code_title" class="error-feedback" /> -->

                                <!-- <span> {{ errors.question_submit_code_title }} kkhk </span> -->

                            </div>
                            <!-- <div class="col-md-6">
                                <label for="validationServer" class="form-label">Môn học </label>
                                <Field class="form-select" as="select"
                                    :class="{ ' is-valid': !errors.subject_id && question_submit_code.subject_id }"
                                    v-bind:class="{ 'is-invalid': errors.subject_id }" name="subject_id"
                                    aria-label="select example" v-model="question_submit_code.subject_id">
                                    <option v-show="false" value="" disabled>Vui lòng chọn môn thi</option>
                                    <option v-for="subject in subjects.get_all_subjects" :key="subject._id"
                                        :value="subject._id"> {{
                                            subject.subject_title }}</option>

                                </Field>
                                <ErrorMessage name="subject_id" class="error-feedbax`ck" />
                            </div> -->
                            <div class="col-md-6">
                                <label for="validationServer" class="form-label">Mức độ </label>
                                <Field class="form-select "
                                    :class="{ ' is-valid': !errors.question_submit_code_level && question_submit_code.question_submit_code_level }"
                                    v-bind:class="{ 'is-invalid': errors.question_submit_code_level }" as="select"
                                    name="question_submit_code_level" required aria-label="select example"
                                    v-model="question_submit_code.question_submit_code_level">

                                    <option value="Medium">Medium</option>
                                    <option value="Easy">Easy</option>
                                    <option value="Hard">Hard</option>

                                </Field>
                                <ErrorMessage name="question_submit_code_level" class="error-feedback" />
                            </div>

                            <div class="col-md-6">
                                <label for="validationServer" class="form-label">Loại câu hỏi</label>
                                <Field class="form-select "
                                    :class="{ ' is-valid': !errors.question_submit_code_type && question_submit_code.question_submit_code_type }"
                                    v-bind:class="{ 'is-invalid': errors.question_submit_code_type }" as="select"
                                    name="question_submit_code_type" required aria-label="select example"
                                    v-model="question_submit_code.question_submit_code_type">

                                    <option value="function">Hàm (function)</option>
                                    <option value="program">Chương trình (program)</option>

                                </Field>
                                <ErrorMessage name="question_submit_code_type" class="error-feedback" />
                            </div>

                            <div class="col-md-6 ">
                                <label for="validationServer" class="form-label">Ngôn ngữ </label>

                                <div class="mt-2">
                                    <div class="form-check form-check-inline">
                                        <Field class="form-check-input" type="radio" name="lang" id="inlineRadio1"
                                            value="Java" />
                                        <label class="form-check-label mt-0" for="inlineRadio1">Java</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <Field class="form-check-input" type="radio" name="lang" id="inlineRadio2"
                                            value="Python" />
                                        <label class="form-check-label mt-0" for="inlineRadio2">Python</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <Field class="form-check-input" v-model="question_submit_code.lang" type="radio"
                                            name="lang" id="inlineRadio4" value="C/C++" />
                                        <label class="form-check-label mt-0" for="inlineRadio4">C/C++</label>
                                    </div>
                                    <div></div>
                                    <ErrorMessage name="lang" class="error-feedback" />
                                </div>

                            </div>

                            <div class="row" v-for="(list_input, index) in list_input_local" :key="index">
                                <div class="col-md-6">
                                    <label for="validationServer" class="form-label">Result {{ index + 1 }}</label>
                                    <Field type="text" class="form-control"
                                        :class="{ ' is-valid': !errors.input0 && list_input.output }"
                                        v-bind:class="{ 'is-invalid': errors['input' + index] }"
                                        :name="`list_input[${index}].input`" v-model="list_input.output" />

                                    <ErrorMessage :name="`list_input[${index}].input`" class="error-feedback" />
                                </div>

                                <div class="col-md-6">
                                    <label for="validationServer" class="form-label">Test {{ index + 1 }}</label>
                                    <div class="input-group ">
                                        <span class="p-0 form-control">
                                            <VCodeMirror class="CodeMirror_input " :value="list_input.input"
                                                :options="cmOptions_input" :readonly="false"
                                                @update:value="(value) => { list_input.input = value; console.log(value) }" />
                                        </span>
                                        <span v-if="(index == list_input_local.length - 1)"
                                            class="input-group-text btn btn-primary " @click="add_input(index)"
                                            type="button" id="basic-addon2"><span>+</span></span>
                                        <span v-else class="input-group-text btn btn-danger" @click="delete_input(index)"
                                            type="button" id="basic-addon2"><span>X</span></span>
                                    </div>
                                </div>
                            </div>



                            <div class="col-md-6">


                            </div>

                            <div class="mb-3">
                                <!-- <button type="button" class="btn btn-secondary me-3" data-bs-dismiss="modal">Đóng</button> -->
                                <button class="btn btn-primary" id="closemodal" type="submit">Lưu thay đổi</button>

                            </div>

                        </Form>


                    </div>

                    <div class="col-6 vitri  pading-0  " id="section_right" :style="`height: ${section_right}`">
                        <div class="">
                            <VCodeMirror class="CodeMirror" id="codemiroor" :value="code" :options="cmOptions"
                                :readonly="false" @update:value='hanleUpdate' :style="`height: ${codemiroor}`" />

                        </div>
                        <!-- <div id="change_height" class="border  btn-outline-dark border-dark rounded-1 "
                            style="height: 0px; margin-top: 0px;">
                        </div> -->

                        <div class="botton  border border-primary" id="befor_panel"
                            :style="`height: ${height_befor_panel}`">


                            <div id="panel" class="panel border  border-dark  rounded-1  text-white" :style="style_panel">

                                <div class="bg-codemiroor border  border-dark text-white  p-1">
                                    <div v-if="!list_input_local" class="mt-2 ms-2" role="group"
                                        aria-label="Basic radio toggle button group ">

                                        <input type="radio" class="btn-check" name="btnradio" autocomplete="off" checked>

                                        <label class="btn p-1 text-white">Null
                                        </label>


                                        <!---  <div :class=" [(get_compiler.output == answer.output ) ? 'text-success ' :  (get_compiler.output != answer.output) ? 'text-danger'  ] "></div> --->
                                    </div>
                                    <div v-else class="mt-2 ms-2" role="group"
                                        aria-label="Basic radio toggle button group ">
                                        <span v-for="(answer, index) in list_input_local">

                                            <input type="radio" class="btn-check" name="btnradio1" :id="index"
                                                autocomplete="off" :checked="index == cases_logic"
                                                @click="cases_logic = index">

                                            <label v-if="!get_answers[index]" class="btn p-1 text-white" :for="index">Case
                                                {{ index + 1 }} </label>
                                            <label v-else class="btn p-1" :class="{
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
                                        <div v-for="(answer, index) in list_input_local" class="ms-2 mt-2"
                                            v-show="index == cases_logic">

                                            <span class="d-flex align-items-stretch">
                                                <div class="card alert alert-dark p-1 flex-fill">
                                                    <div class="card-header">
                                                        Test
                                                    </div>
                                                   <div>nkxAXa</div>
                                                   <div>casclaslcb</div>
                                                   <div>casclaslcb</div>
                                                    <div>knclasc</div>
                                                    <div class="card-body">

                                                        <span>{{ answer.input }}</span>

                                                    </div>
                                                </div>

                                                <div class="card alert alert-dark p-1 flex-fill">
                                                    <div class="card-header">
                                                        Your Result
                                                    </div>
                                                    <div class="card-body">

                                                        <span>{{ answer.output }}</span>
                                                    </div>
                                                </div>

                                                <div class="card alert alert-dark p-1 flex-fill " style="max-width: 50%;">
                                                    <div class="card-header">
                                                        Result
                                                    </div>
                                                    <div class="card-body">

                                                        <h6 v-if="get_answers[index]"> <span>{{
                                                            get_answers[index].output }}</span></h6>
                                                        <!-- <h6 v-else-if="get_errors[index]"> <span> {{ get_errors[index] }}</span></h6> -->
                                                        <span v-else> </span>

                                                    </div>
                                                </div>
                                            </span>

                                        </div>
                                    </span>
                                </div>
                                <!-- <div id="result" v-show="!testcase_result"
                                    class=" bg-codemiroor console  overflow-scroll-y text-danger p-2 " role="alert">


                                    <span class="fs-1">
                                        <p> {{ error_code[0] }}
                                        </p>

                                    </span>
                                </div> -->


                            </div>
                            <button ] @click="test" id="btn-click-run"
                                class=" border  accordion bg-codemiroor  d-flex justify-content-between rounded-1  align-items-center ">
                                <span class="" id="run_consle" @click="run_consle()"> click <i
                                        class='bx bxs-chevron-down'></i>

                                </span>

                                <span v-show="!get_isLoanding" @click="run()" type="button" id="run"
                                    class=" btn btn-primary px-3 py-1"> Run</span>
                                <button v-show="get_isLoanding" class="btn btn-primary px-3 py-1" type="button" disabled>
                                    <span class="spinner-border spinner-border-sm " aria-hidden="true"></span>
                                    <span role="status">Runing...</span>
                                </button>
                            </button>
                        </div>



                    </div>

                </div>
            </div>




        </aside>
    </div>
</template>
  
<script setup>
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { onMounted, ref, watchEffect, watch, reactive, onUpdated, computed } from 'vue';
import { storeToRefs } from 'pinia';
import { VCodeMirror } from 'vue3-code-mirror'
import 'codemirror/mode/python/python.js'
import 'codemirror/lib/codemirror.js'
import 'codemirror/mode/clike/clike.js'
import 'codemirror/addon/edit/closebrackets.js'
import "codemirror/theme/dracula.css";
import "codemirror/theme/duotone-light.css";
import "codemirror/theme/paraiso-light.css";
import 'codemirror/addon/display/placeholder.js'
//import "codemirror/theme/";

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
const subjects = useSubjectStore();
const study_class = useStudy_classStore();


import { useQuestion_submit_code_bankStore } from "../stores/question_submit_code_bank.js"
const { get_one_question_submit_code_bank, state_question_submit_code_bank } = storeToRefs(useQuestion_submit_code_bankStore());
const { action_add_id_question_submit_code_bank, action_one_question_submit_code_bank, action_all_question_submit_code_banks, reset_state_question_submit_code_bank, action_delete_question_submit_code_bank } = useQuestion_submit_code_bankStore();



const { list_exam_question, get_one_list_exam_question, one_list_exam_question } = storeToRefs(useList_exam_questionStore());
const { action_one_list_exam_question } = useList_exam_questionStore();

//const { question_submit_code } = storeToRefs(useQuestion_submit_codeStore);
const { state_question_submit_code, one_question_submit_code, get_one_question_submit_code, list_question_submit_codes, lenght, get_list_question_submit_code } = storeToRefs(useQuestion_submit_codeStore());
const { action_one_question_submit_code, action_list_question_submit_code, action_add_question_submit_code, reset_state_question_submit_code } = useQuestion_submit_codeStore();


const { get_compiler, get_isLoanding, compiler, get_answers, answers, error_code, get_errors } = storeToRefs(useCompilerStore());// no da thanh ref nen khi dung phai co value
const { action_compiler, action_answers } = useCompilerStore();

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

    //    await get_answers.value.forEach( (answer, index) => {
    //         if (answer.output != list_input_local.value[index].output) {
    //           // console.log(answer.output == list_input_local.value[index].output);
    //            return  check_answer =  false;
    //         }
    //         else{
    //             check_answer = true;
    //         }

    //     });

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
async function run() {
    // console.log(get_answers.value);
    // await action_answers(get_one_question_submit_code.value.answer, code.value);// arr and obj
    //console.log(get_one_question_submit_code.value.answer)
    //console.log(get_isLoanding.value);
    // await action_compiler(
    //     {
    //         code: code.value,
    //         lang: "Cpp",
    //         input: "10 10"
    //     }
    // );

    // // answer_local.value = [
    // //     {
    // //         input: code_input1.value,
    // //         output: question_submit_code.output1
    // //     },
    // //     {
    // //         input: code_input2.value,
    // //         output: question_submit_code.output2
    // //     },
    // //     {
    // //         input: code_input3.value,
    // //         output: question_submit_code.output3
    // //     }


    // ];
    console.log(question_submit_code)
    console.log(list_input_local.value);

    await action_answers(list_input_local.value, code.value);
}

onMounted(() => {
    subjects.action_all_subjects();
    study_class.action_all_study_class();
    action_one_question_submit_code_bank(route.params.id_question_bank)

})

watchEffect(() => {

})

const mode = ref({ name: '', json: true })

const cmOptions = ref({ tabSize: 1, theme: "dracula", lineNumbers: true, mode: 'text/x-c++src' })

const cmOptions_input = ref({ tabSize: 2, scrollbarStyle: null, lineNumbers: true, theme: 'paraiso-light', lineWrapping: true, spellcheck: false, mode: 'text/x-c++src', placeholder: 'Vui lòng nhập kiểu, tên và giá trị biến' })

const code = ref("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");// codemirorr bi loi magrin
const answer_local = ref();


const list_input_local = ref([reactive({ input: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", name: "input", output: "" })]);

function add_input(index) {

    list_input_local.value.push(reactive({ input: "", name: "input", output: "" }));
    //Form_submitcode_filtered = Object.filter(Form_submitcode, score => score > 1); 
    // Form_submitcode['input' + (index + 1)] = yup
    //     .string()
    //     .required("Vui lòng điền trường này");;
    // console.log(Form_submitcode);

    // Form_submitcode = Form_submitcode;
}


const delete_input = (index) => {
    console.log(index)
    var arrr = list_input_local.value.filter(function (input, _index) {
        return _index != index
    })// true giu lai


    list_input_local.value = arrr;


}

// answer_local.value = [
//     {
//         input: question_submit_code.input1,
//         output: code_input1.value
//     },
//     {
//         input: question_submit_code.input2,
//         output: code_input2.value
//     },
//     {
//         input: question_submit_code.input3,
//         output: code_input3.value
//     }
//  ]

watchEffect(() => {
    // answer_local;
    console.log(answer_local);;
    console.log(question_submit_code.input1)
})





// const input = {
//     input: "sd",
//     output: "ldjspf"
// };
// const list_input_local = ref([input]);
// const list_input = ref(list_input_local);





onMounted(() => {
    code.value = "";
    // code_input1.value = "int a = 3; int b = 2;";
    // code_input2.value = "int a = 5; int b = 4;";
    // code_input3.value = "int a = 2; int c = 2;";
    list_input_local.value[0].input = 'printf("%d", add(-5, 1));';

})





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


function change_height() {
    //     var section1 = document.getElementById("section1");
    // var section2 = document.getElementById("section2");

    // document.onmousemove = function(event) {

    //   section1.style.height = event.clientY + 'px';
    //   section2.style.height = "calc(100% - "+ event.clientY + 'px';
    // }

    var change_height = document.getElementById('change_height');
    var codemiroor = document.getElementById("codemiroor");
    var panel = document.getElementById('panel')
    var befor_panel = document.getElementById('befor_panel')
    change_height.onmousemove = function (event) {
        //console.log(event.clientX);
        console.log(event.clientY);


        //codemiroor.style.height =  ( (event.clientY -70))
        // panel.style.height = (height_screen.value - codemiroor.offsetHeight)
        //section_right.style.height = (height_screen.value - codemiroor.offsetHeight)
    }

}


const height_screen = ref(window.innerHeight - 70);
const height_befor_panel = ref();
const height_panel = ref();
const section_right = ref();
const codemiroor = ref();
const panelDisplay = ref('none');
const btn_click_run = ref()
const style_panel = reactive({
    display: 'none',
    maxHeight: null
})
height_panel.value = 0;
onMounted(() => {
    window.addEventListener('resize', () => {
        height_screen.value = (window.innerHeight - 70)
    })
    section_right.value = height_screen.value
    //height_befor_panel.value = document.getElementById("befor_panel").offsetHeight
    btn_click_run.value = 50
    height_befor_panel.value = 50
    codemiroor.value = (height_screen.value - height_befor_panel.value - 10);

})
function run_consle() {

    if (style_panel.maxHeight) {
        console.log(height_screen.value)
        codemiroor.value = (codemiroor.value + style_panel.maxHeight);
        style_panel.display = 'none';
        style_panel.maxHeight = null;
        height_befor_panel.value = 50// cong them buuton

    } else {
        height_befor_panel.value = 350// cong them buuton
        style_panel.display = 'block';
        style_panel.maxHeight = (height_befor_panel.value - 50)
        codemiroor.value = (codemiroor.value - style_panel.maxHeight)
    }


    //     if (panel.style.maxHeight) {
    //         panel.style.maxHeight = null;    
    //          console.log("klals")  

    //         console.log(befor_panel.offsetHeight);
    //         codemiroor.style.height = (height_screen.value + befor_panel.offsetHeight -10)
    //       // panel.style.display = "none"
    //     } else {

    //       console.log(befor_panel.offsetHeight);//45
    //         panel.style.maxHeight = 200 + "px";// hien
    //         console.log(befor_panel.offsetHeight)
    //         console.log(panel.offsetHeight);//45
    //        panel.style.display = "block"
    //         codemiroor.style.height = (height_screen.value - befor_panel.offsetHeight  )
    //     }

}
function hanleUpdate(value) {
    code.value = value;
    // var codemiroor = document.getElementById("codemiroor");
    // var height_panel = document.getElementById('panel');
    // var run_consle = document.getElementById('run_consle');
    // var section_right = document.getElementById("section_right");
    // var befor_panel = document.getElementById("befor_panel");
    // section_right.style.height = height_screen.value
    // codemiroor.style.height = (height_screen.value - befor_panel.offsetHeight -10)


}

//const codemiroor = ref(document.getElementById("codemiroor"))
watch(height_screen, () => {
    section_right.value = height_screen.value
    codemiroor.value = (height_screen.value - height_befor_panel.value - 10);
    // var codemiroor = document.getElementById("codemiroor");
    // var height_panel = document.getElementById('panel');
    // var run_consle = document.getElementById('run_consle');
    // var section_right = document.getElementById("section_right");
    // var befor_panel = document.getElementById("befor_panel");
    // section_right.style.height = height_screen.value
    // codemiroor.style.height = (height_screen.value - befor_panel.offsetHeight - 10)
})


onMounted(() => {
    // let codemiroor = document.getElementById("codemiroor");
    // let section_right = document.getElementById("section_right");
    // let run_consle = document.getElementById('run_consle')
    // let panel = document.getElementById('panel')
    // let befor_panel = document.getElementById("befor_panel");
    // section_right.style.height = (height_screen.value)
    // codemiroor.style.height = (height_screen.value - befor_panel.offsetHeight -10)
    // console.log(befor_panel.offsetHeight)//45

    // run_consle.addEventListener("click", function () {
    //     // console.log(height_screen.value);
    //     // console.log(panel.offsetHeight);
    //     // console.log(run_consle.offsetHeight);

    //     if (panel.style.maxHeight) {
    //         panel.style.maxHeight = null;    
    //          console.log("klals")  
    //          let befor_panel = document.getElementById("befor_panel");
    //         console.log(befor_panel.offsetHeight);
    //         codemiroor.style.height = (height_screen.value + befor_panel.offsetHeight -10)
    //       // panel.style.display = "none"
    //     } else {
    //        const befor_panel = document.getElementById("befor_panel");
    //        const panel = document.getElementById('panel')
    //       console.log(befor_panel.offsetHeight);//45
    //         panel.style.maxHeight = 200 + "px";// hien
    //         console.log(befor_panel.offsetHeight)
    //         console.log(panel.offsetHeight);//45
    //        panel.style.display = "block"
    //         codemiroor.style.height = (height_screen.value - befor_panel.offsetHeight  )
    //     }
    // });

    var run = document.getElementById('run');
    run.addEventListener("click", function () {
        // this.classList.toggle("active");
        var panel = document.getElementById('panel')
        console.log(panel.style.maxHeight)
        if (!panel.style.maxHeight) {
            panel.style.maxHeight = 160 + "px";
            codemiroor.style.height = 450 + "px";;
            panel.style.display = "block"
        }
    });

})

</script>
  
<style scoped>
/* @import "@/assets/content-styles.css"; */
</style>
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
    padding: 18px;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-size: 15px;
    transition: 0.4s;
}



.panel {
    display: none;
    max-height: 0px;
    overflow: hidden;
    transition: max-height 0.2s ease-out;

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
