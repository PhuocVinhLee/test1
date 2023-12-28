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
import { useQuestion_submit_codeStore } from "../stores/question_submit_code.js"
const { state_question_submit_code, one_question_submit_code, get_one_question_submit_code, list_question_submit_codes, lenght, get_list_question_submit_code } = storeToRefs(useQuestion_submit_codeStore());
const { action_one_question_submit_code, action_update_question_submit_code, action_list_question_submit_code, action_add_question_submit_code, reset_state_question_submit_code } = useQuestion_submit_codeStore();


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
    // lang: "C/C++",
    subject_id: route.params.id_subject,
    minus_percent_points: 0,
    max_minus_percent: 100,
    given_code_snippet: "",
    image_name: "",
    code: ""
});

// watchEffect(async () => {
//     question_submit_code.subject_id = route.query.id;
//     console.log(question_submit_code.subject_id)

// })


const Form_submitcode = reactive({
    minus_percent_points: yup
        .number().typeError("Vui lòng điền vào số")
        .required("Vui lòng điền trường này")
        .min(0, "Thời gian thi tối thiểu 1 phút.")
        .max(180, "Thời gian thi tối đa 180 phút."),
    max_minus_percent: yup
        .number().typeError("Vui lòng điền vào số")
        .required("Vui lòng điền trường này")
        .min(0, "Thời gian thi tối thiểu 1 phút.")
        .max(100, "Thời gian thi tối đa 180 phút."),

    question_submit_code_title: yup
        .string()
        .required("Vui lòng điền trường này")
        .min(5, "Tên phải ít nhất 5 ký tự.")
        .max(100, "Tên có nhiều nhất 100 ký tự."),
    given_code_snippet: yup
        .string()
    ,
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



    // lang: yup
    //     .string().
    //     when("exam_type", (val, schema) => {
    //         if (val == "submitcode") {  //if exam_type exist then apply required else not
    //             return yup.string().required("Vui lòng chọn ngôn ngữ");
    //         } else {
    //             return yup.string().notRequired();
    //         }
    //     }),

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

const fileSk = ref({});
const file = ref({});
const image = ref(false);
function fileSkUpload(e) {
    // const file = fileSk.value.files;
    file.value = e.target.files[0];// arr
    image.value = URL.createObjectURL(e.target.files[0])
    console.log(file.value)
    const max_size = 200000;
    const allowedType = ["image/jpeg", "image/png", "image/gif"];
    if (!allowedType.includes(file.value.type)) {
        file.value.err_type = "Type file wrong !";

    }
    if (file.value.size > max_size) {
        file.value.err_size = "Max size " + max_size / 1000 + "Kb";

    }

};
function delete_file() {
    file.value = {};
    image.value = false;
}


async function submit() {

    console.log(list_input_local.value)
    if (!file.value.err_size && !file.value.err_type) {
        question_submit_code.code = code.value
        
        if (question_submit_code.question_submit_code_type == 'function') {
            code.value = question_submit_code.given_code_snippet + '\n' + code.value;
            await action_answers(list_input_local.value, code.value);
        }
        else {
            await action_answers_width_program(list_input_local.value, code.value);
        }
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

        if (check_answer && !file.value.err_size && !file.value.err_type) {
           
            let data = new FormData();
            data.append('file', file.value);
            Object.keys(question_submit_code).forEach(key => data.append(key, question_submit_code[key]));
            list_input_local.value.forEach((input, index) => {
                // data.append("answer[][index]", input);

                for (const [key, value] of Object.entries(input)) {
                    data.append(`answer[${index}][${key}]`, value);
                }

            })



           await action_update_question_submit_code(route.params.id_question, data);
            //   console.log(state_question_submit_code.value.insertedId);

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



}
function hanleUpdate(value) {
    code.value = value;


}
async function run() {

    // await action_compiler(
    //     {
    //         code: code.value,
    //         lang: "Cpp",
    //         input: "10 10"
    //     }
    // );

    run_consle_top();
    let code_local;
    if (question_submit_code.question_submit_code_type == 'function') {
        code_local = question_submit_code.given_code_snippet + '\n' + code.value
        await action_answers(list_input_local.value, code_local);
    } else {
        code_local = code.value;
        await action_answers_width_program(list_input_local.value, code_local);


    }


}

onMounted(() => {
    subjects.action_all_subjects();
    study_class.action_all_study_class();
    action_one_question_submit_code_bank(route.params.id_question_bank)

})

const mode = ref({ name: '', json: true })

const cmOptions = ref({ tabSize: 1, theme: "dracula", lineNumbers: true, mode: 'text/x-c++src' })

const cmOptions_input = ref({ tabSize: 2, scrollbarStyle: null, lineNumbers: true, theme: 'paraiso-light', lineWrapping: true, spellcheck: false, mode: 'text/x-c++src', placeholder: 'Vui lòng nhập kiểu, tên và giá trị biến' })

const code = ref("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");// codemirorr bi loi magrin
const answer_local = ref();


const list_input_local = ref([{ input: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", name: "input", output: "" }]);

function add_input(index) {

    list_input_local.value.push({ input: "", name: "input", output: "" });
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



watchEffect(() => {
    // answer_local;
    console.log(answer_local);;
    console.log(question_submit_code.input1)
})
async function getAll() {
    await action_one_question_submit_code(route.params.id_question);
 
    //code.value = get_one_question_submit_code.value.code;
    // question_submit_code.question_submit_code_title = get_one_question_submit_code.value.question_submit_code_title
    // question_submit_code.question_submit_code_describe = get_one_question_submit_code.value.question_submit_code_describe
    // question_submit_code.question_submit_code_level = get_one_question_submit_code.value.question_submit_code_level
    // question_submit_code.subject_id = get_one_question_submit_code.value.subject_id

    // question_submit_code.teacher_id = get_one_question_submit_code.value.teacher_id


    // question_submit_code.question_submit_code_type = get_one_question_submit_code.value.question_submit_code_type

    // question_submit_code.minus_percent_points = get_one_question_submit_code.value.minus_percent_points
    // question_submit_code.max_minus_percent = get_one_question_submit_code.value.max_minus_percent

    // question_submit_code.given_code_snippet = get_one_question_submit_code.value.given_code_snippet
    // question_submit_code.image_name = get_one_question_submit_code.value.image_name
    Object.keys(get_one_question_submit_code.value).forEach(key => {
     if( get_one_question_submit_code.value[key] && key != 'answer' ){
        question_submit_code[key] = get_one_question_submit_code.value[key];
     }
    });
   
    list_input_local.value = get_one_question_submit_code.value.answer
    code.value = question_submit_code.code

}

onMounted(() => {
    code.value = "int add(int a, int b) \n {return a+b;} \nint giam(a) \n{return a-1;}";
    // code_input1.value = "int a = 3; int b = 2;";
    // code_input2.value = "int a = 5; int b = 4;";
    // code_input3.value = "int a = 2; int c = 2;";
    list_input_local.value[0].input = 'printf("%d", add(-5, 1));';
    getAll();

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
</script>

<template>
    <h4 class="fw-bold m-0 " style="height: 3%;">
        <routerLink :to="{
            name: 'QuestionSubmitcodeBankDetailDashboard',
            params: { id_subject: route.params.id_subject, id_question_bank: route.params.id_question_bank },
            query: { page: 1 }
        }" class="text-muted fw-light">{{ get_one_question_submit_code_bank.question_submit_code_bank_title
}} /
        </routerLink>
    </h4>
    <splitpanes class="default-theme " horizontal :push-other-panes="false" style="height: 96%">
        <pane>
            <splitpanes :push-other-panes="false">
                <pane>
                    <span>
                        <div class=" rounded-1 bg-codemiroor text-white p-2 overflow-scroll-y "
                            style="height: 100%; width: 100%;" id="form_add_question">


                            <Form @submit="submit()" class="row g-3  " id="exam_add" :validation-schema="productFormSchema"
                                v-slot="{ errors }">
                                <!-- <div class="col-md-12">
                               <span v-html="question_submit_code.question_submit_code_describe"></span>
                            </div> -->
                                <div class="col-md-12">
                                    <label for="validationServer" class="form-label text-white">Tên câu hỏi</label>
                                    <Field type="text" class="form-control"
                                        :class="{ ' is-valid': !errors.question_submit_code_title && question_submit_code.question_submit_code_title }"
                                        v-bind:class="{ 'is-invalid': errors.question_submit_code_title }"
                                        name="question_submit_code_title"
                                        v-model="question_submit_code.question_submit_code_title" />
                                    <ErrorMessage name="question_submit_code_title" class="error-feedback" />
                                    <span> {{ errors.question_submit_code_title }} </span>

                                </div>
                                <div class="col-md-12">
                                    <label for="validationServer" class="form-label text-white">Ảnh mô tả</label>
                                    <div class="mb-2" v-if="file.name"><img :src="image" id="image" alt="user-avatar"
                                            class="d-block rounded" height="200" width="300"></div>
                                    <div class="mb-2" v-else><img
                                            :src="`http://localhost:3000/files/` + question_submit_code.image_name"
                                            id="image" alt="user-avatar" class="d-block rounded" height="200" width="300">
                                    </div>
                                    <div class="button-wrapper">
                                        <label for="upload" class="btn btn-primary me-2 mb-2" tabindex="0">
                                            <span class="d-none d-sm-block">Upload</span>
                                            <i class="bx bx-upload d-block d-sm-none"></i>
                                            <input class="account-file-input" type="file" multiple hidden="" name="fileSk"
                                                id="upload" ref="fileSk" @change="fileSkUpload($event)" />
                                            <!-- <Field  v-model="teacher.avatar" type="file" @change=""  name="avatar" id="upload" class="account-file-input" hidden=""
                                        accept="image/png, image/jpeg"/> -->
                                        </label>
                                        <span v-show="file.name">
                                            <button type="button" class="btn btn-outline-success py-0 px-2 text-white"
                                                :class="{ 'btn-outline-success': !file.err_size || !file.err_type, 'btn-outline-danger': file.err_size || file.err_type }">
                                                {{ file.name }}

                                            </button> <span @click="delete_file"
                                                class="badge badge-center bg-primary ">x</span>
                                        </span>
                                        <p v-if="!file.name" class="text-muted mb-0">Cho phép JPG, GIF
                                            hoặc PNG. Kích thước thối đa 200Kb.</p>

                                        <p v-show="file.err_size || file.err_type">

                                            <span class="link-danger">{{ file.err_type }}. {{ file.err_size }}</span>



                                        </p>
                                    </div>
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
                                            v-model="question_submit_code.question_submit_code_describe"
                                            :config="editorConfig">
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


                                <!-- <div class="col-md-6 ">
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

                                </div> -->
                                <div class="col-md-6">
                                    <label for="validationServer" class="form-label">Phần trăm điễm bị trừ / lần thử</label>
                                    <Field type="number" class="form-control" step="1" max=100
                                        :class="{ ' is-valid': !errors.minus_percent_points && question_submit_code.minus_percent_points }"
                                        v-bind:class="{ 'is-invalid': errors.minus_percent_points }"
                                        name="minus_percent_points" v-model="question_submit_code.minus_percent_points" />
                                    <ErrorMessage name="minus_percent_points" class="error-feedback" />
                                    <span> {{ errors.minus_percent_points }} </span>

                                </div>
                                <div class="col-md-6">
                                    <label for="validationServer" class="form-label">Phần trăm tối đa bị trừ</label>
                                    <Field type="number" max=100 class="form-control"
                                        :step="question_submit_code.minus_percent_points"
                                        :class="{ ' is-valid': !errors.max_minus_percent && question_submit_code.max_minus_percent }"
                                        v-bind:class="{ 'is-invalid': errors.max_minus_percent }" name="max_minus_percent"
                                        v-model="question_submit_code.max_minus_percent" />
                                    <ErrorMessage name="max_minus_percent" class="error-feedback" />
                                    <span> {{ errors.max_minus_percent }} </span>

                                </div>

                                <div class="col-12">
                                    <ResizeRow :height="70" sliderWidth="5" style="min-height: 70; width: 100%;">

                                        <label for="validationServer" class="form-label">Đoạn mã cho trước</label>
                                        <!-- <Field type="text" class="form-control" style="height: 100%;"
                                                :class="{ ' is-valid': !errors.given_code_snippet && question_submit_code.given_code_snippet }"
                                                v-bind:class="{ 'is-invalid': errors.given_code_snippet }"
                                                name="given_code_snippet"
                                                v-model="question_submit_code.given_code_snippet" /> -->
                                        <VCodeMirror style="height: 100%; width: 100%;"
                                            :value="question_submit_code.given_code_snippet" :options="cmOptions_input"
                                            :readonly="false"
                                            @update:value="(value) => { question_submit_code.given_code_snippet = value; console.log(value) }" />

                                    </ResizeRow>
                                </div>


                                <div class="row mt-3" v-for="(list_input, index) in list_input_local" :key="index">
                                    <div class="col-md-6">

                                        <label for="validationServer" class="form-label">Result {{ index + 1 }}</label>
                                        <Field type="text" class="form-control"
                                            :class="{ ' is-valid': !errors.input0 && list_input.output }"
                                            v-bind:class="{ 'is-invalid': errors['input' + index] }"
                                            :name="`list_input[${index}].input`" v-model="list_input.output" />

                                        <ErrorMessage :name="`list_input[${index}].input`" class="error-feedback" />
                                    </div>

                                    <div class="col-md-6">

                                        <ResizeRow :height="70" sliderWidth="5" style="min-height: 70; width: 100%;">
                                            <div style="height: 100%;"> <label for="validationServer"
                                                    class="form-label">Test {{ index + 1 }}</label>
                                                <div class="input-group " style="height: 100%; width: 100%;">
                                                    <span class="p-0 form-control">
                                                        <VCodeMirror style="height: 100%;" :value="list_input.input"
                                                            :options="cmOptions_input" :readonly="false"
                                                            @update:value="(value) => { list_input.input = value; console.log(value) }" />
                                                    </span>
                                                    <span v-if="(index == list_input_local.length - 1)"
                                                        class="input-group-text btn btn-primary" @click="add_input(index)"
                                                        type="button" id="basic-addon2"><span>+</span></span>
                                                    <span v-else class="input-group-text btn btn-danger"
                                                        @click="delete_input(index)" type="button"
                                                        id="basic-addon2"><span>X</span></span>

                                                    <!-- <span  class="input-group-text btn btn-danger"
                                                        @click="delete_input(index)" type="button"
                                                        id="basic-addon2"><span>X</span></span> -->
                                                </div>
                                            </div>
                                        </ResizeRow>


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
                    </span>
                </pane>
                <pane>
                    <span>
                        <splitpanes class="default-theme" horizontal style="height: 95%  ; width: 99%;"
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
                                            <div v-if="!list_input_local" class="mt-2 ms-2" role="group"
                                                aria-label="Basic radio toggle button group ">

                                                <input type="radio" class="btn-check" name="btnradio" autocomplete="off"
                                                    checked>

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

                                                    <label v-if="!get_answers[index]" class="btn p-1 text-white"
                                                        :for="index">Case
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
                                                                                <th> Your Result</th>

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
                                                                                <th> Result</th>

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
                        <button @click="test" style="height: 5%;width: 99%;"
                            class="   accordion bg-codemiroor  d-flex justify-content-between rounded-1  align-items-center ">
                            <span class="">
                                <span @click="run_consle_top()" v-if="codemirorr.topPercent == 100"><i
                                        class='bx bxs-chevron-down bx-rotate-180'></i></span>
                                <span @click="run_consle_down()" v-else><i class='bx bxs-chevron-down'></i></span>

                            </span>

                            <span v-show="!get_isLoanding" @click="run()" type="button" id="run"
                                class=" btn btn-primary px-3 py-0"> Run</span>
                            <button v-show="get_isLoanding" class="btn btn-primary px-3 py-1" type="button" disabled>
                                <span class="spinner-border spinner-border-sm " aria-hidden="true"></span>
                                <span role="status">Runing...</span>
                            </button>
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