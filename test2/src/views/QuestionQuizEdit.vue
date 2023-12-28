<template>
    <div class="content-wrapper">
        <div class="container-xxl flex-grow-1 container-p-y">


        <h4 class="fw-bold mb-3 " >
        <routerLink :to="{
            name: 'QuestionQuizBankDetailDashboard',
            params: { id_subject: route.params.id_subject, id_question_bank: route.params.id_question_bank },
            query: { page: 1 }
        }" class="text-muted fw-light"><div class="">
{{ get_one_question_quiz.question_quiz_title }}
        </div>
        </routerLink>
    </h4>
        <div class="card">

            <div class="card-body ">
   
   <div>
    <Form @submit="submit()" class="row g-3  " id="exam_add" :validation-schema="productFormSchema" v-slot="{ errors }">
        <!-- <div class="col-md-12">
                               <span v-html="question_quiz.question_quiz_describe"></span>
                            </div> -->
                            {{ errors }}
        <div class="col-md-12">
            <label for="validationServer" class="form-label">Tên câu hỏi</label>
            <Field type="text" class="form-control"
                :class="{ ' is-valid': !errors.question_quiz_title && question_quiz.question_quiz_title }"
                v-bind:class="{ 'is-invalid': errors.question_quiz_title }" name="question_quiz_title"
                v-model="question_quiz.question_quiz_title" />
            <ErrorMessage name="question_quiz_title" class="error-feedback" />
            <span> {{ errors.question_quiz_title }} </span>

            <div class="col-md-12">
                                    <label for="validationServer" class="form-label text-white">Ảnh mô tả</label>
                                    <div class="mb-2" v-if="file.name"><img :src="image" id="image" alt="user-avatar"
                                            class="d-block rounded" height="200" width="300"></div>
                                    <div class="mb-2" v-else><img
                                            :src="`http://localhost:3000/files/` + question_quiz.image_name"
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
                                            <button type="button" class="btn btn-outline-success py-0 px-2 text-black"
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



        </div>
        <div class="col-md-12 text-black ">
            <label for="validationServer" class="form-label text-white">Mô tả</label>
            <Field type="text" class="form-control " v-slot="{ field, errors }"
                :class="{ ' is-valid': !errors.question_quiz_describe && question_quiz.question_quiz_describe }"
                v-bind:class="{ 'is-invalid': errors.question_quiz_title }" name="question_quiz_describe"
                v-model="question_quiz.question_quiz_describe">
                <!-- <textarea v-bind="field" name="question_quiz_describe"
                                        :class="{ 'is-valid': !errors.question_quiz_describe && question_quiz_submit_code.question_quiz_describe, ' is-invalid': errors[0] }"
                                        class="form-control " id="exampleFormControlTextarea1" rows="3">

                                    </textarea> -->
                <ckeditor v-bind="field" name="question_quiz_describe" :editor="editor"
                    v-model="question_quiz.question_quiz_describe" :config="editorConfig">
                </ckeditor>
                <ErrorMessage v-if="errors[0]" name="question_quiz_describe" class="error-feedback" />
                <!-- <div >{{ errors[0] }}/jkjk</div> -->
            </Field>
            <!-- <ErrorMessage name="question_quiz_title" class="error-feedback" /> -->

            <!-- <span> {{ errors.question_quiz_title }} kkhk </span> -->

        </div>

        <div class="col-md-6">
            <label for="validationServer" class="form-label">Mức độ </label>
            <Field class="form-select "
                :class="{ ' is-valid': !errors.question_quiz_level && question_quiz.question_quiz_level }"
                v-bind:class="{ 'is-invalid': errors.question_quiz_level }" as="select" name="question_quiz_level" required
                aria-label="select example" v-model="question_quiz.question_quiz_level">

                <option value="Medium">Medium</option>
                <option value="Easy">Easy</option>
                <option value="Hard">Hard</option>

            </Field>
            <ErrorMessage name="question_quiz_level" class="error-feedback" />
        </div>
        
        <div class="col-md-6">
            <label for="validationServer" class="form-label"> Số lượng câu trả lời</label>

            <div class="form-check form-check-inline mt-3 m-0 " @click="delete_input(list_answer_local.length - 1)">
                <span> <i class='bx bx-minus'></i></span>
            </div>
            <div class="form-check form-check-inline m-0">
                <Field type="text" class="form-control"
                    :class="{ ' is-valid': !errors.question_number && question_quiz.question_number }"
                    v-bind:class="{ 'is-invalid': errors.question_number }" name="question_number"
                    v-model="list_answer_local.length" style="width: 40;" />
            </div>
            <div class="form-check form-check-inline m-0" @click="add_input()">
                <i class='bx bx-plus'></i>
            </div>
        </div>

        <div class="row mt-3" v-for="(list_input, index) in list_answer_local" :key="index">
            <!-- <div class="col-md-6">
                                        
                                        <label for="validationServer" class="form-label">Result {{ index + 1 }}</label>
                                        <Field type="text" class="form-control"
                                            :class="{ ' is-valid': !errors.input0 && list_input.output }"
                                            v-bind:class="{ 'is-invalid': errors['input' + index] }"
                                            :name="`list_input[${index}].input`" v-model="list_input.output" />

                                        <ErrorMessage :name="`list_input[${index}].input`" class="error-feedback" />
                                    </div> -->

            <div class="col-md-12">


                <label for="validationServer" class="form-label">Lựa chọn {{ index + 1
                }}</label>
                <div class="input-group">
                    <span class="p-0 form-control">
                        <!-- <VCodeMirror style="height: 100%;" :value="list_input.input" :options="cmOptions_input"
                                    :readonly="false"
                                    @update:value="(value) => { list_input.input = value; console.log(value) }" /> -->
                        <ckeditor v-bind="field" name="question_quiz_describe" :editor="editor" v-model="list_input.input"
                            :config="editorConfig">
                        </ckeditor>
                    </span>

                    <span class="input-group-text btn btn-danger" @click="delete_input(index)" type="button"
                        id="basic-addon2"><span>X</span></span>

                
                </div>
            </div>

        </div>
        <div class="col-md-6">
            <label for="validationServer" class="form-label">Đáp án đúng </label>
            <Field class="form-select " :class="{ ' is-valid': !errors.right_answer && question_quiz.right_answer }"
                v-bind:class="{ 'is-invalid': errors.right_answer }" as="select" name="right_answer" required
                aria-label="select example" v-model="question_quiz.right_answer">
                <option :value="index" v-for="answer, index in list_answer_local" :key="index">Lựa chọn {{ index + 1 }}
                </option>


            </Field>
            <ErrorMessage name="question_quiz_level" class="error-feedback" />
        </div>



        <div class="col-md-6">


        </div>

        <div class="mb-3">
            <!-- <button type="button" class="btn btn-secondary me-3" data-bs-dismiss="modal">Đóng</button> -->
            <button class="btn btn-primary" id="closemodal" type="submit">Lưu thay đổi</button>

        </div>

    </Form>
   </div>

</div>

<!-- </div> -->

</div>
</div>
</div>
</template>
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

import { useQuestion_quizStore } from "../stores/question_quiz.js"
import { useList_exam_questionStore } from "../stores/list_exam_question.js"
// import { useExamStore } from "../stores/exam.js"
import { useCompilerStore } from "../stores/compiler.js"
import { useSubjectStore } from "../stores/subject.js"
import { useStudy_classStore } from "../stores/study_class.js"
const subjects = useSubjectStore();
const study_class = useStudy_classStore();


import { useQuestion_quiz_bankStore } from "../stores/question_quiz_bank.js"
const { get_one_question_quiz_bank, state_question_quiz_bank } = storeToRefs(useQuestion_quiz_bankStore());
const { action_add_id_question_quiz_bank, action_one_question_quiz_bank, action_all_question_quiz_banks, reset_state_question_quiz_bank, action_delete_question_quiz_bank } = useQuestion_quiz_bankStore();



const { list_exam_question, get_one_list_exam_question, one_list_exam_question } = storeToRefs(useList_exam_questionStore());
const { action_one_list_exam_question } = useList_exam_questionStore();

//const { question_quiz } = storeToRefs(useQuestion_submit_codeStore);
const { state_question_quiz, one_question_quiz, get_one_question_quiz, list_question_quizs, lenght, get_list_question_quiz } = storeToRefs(useQuestion_quizStore());
const { action_one_question_quiz,action_update_question_quiz, action_list_question_quiz, action_add_question_quiz, reset_state_question_quiz } = useQuestion_quizStore();


const { get_compiler, get_isLoanding, compiler, get_answers, answers, error_code, get_errors } = storeToRefs(useCompilerStore());// no da thanh ref nen khi dung phai co value
const { action_compiler, action_answers } = useCompilerStore();

import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const editor = ref(ClassicEditor);
const editorData = ref('<p>Content of the editor.</p>');
const editorConfig = ref({
    // The configuration of the editor.

});




const question_quiz = reactive({
    question_quiz_title: " thi cong nghe web1",
    question_quiz_describe: " ",
    question_quiz_level: 'Medium',
    question_quiz_type: 'function',
    lang: "C/C++",
    subject_id: route.params.id_subject,
    question_number: 1,
   image_name: "",
    right_answer: 0
});

// watchEffect(async () => {
//     question_quiz.subject_id = route.query.id;
//     console.log(question_quiz.subject_id)

// })


const Form_submitcode = reactive({
    question_quiz_title: yup
        .string()
        .required("Vui lòng điền trường này")
        .min(5, "Tên phải ít nhất 5 ký tự.")
        .max(100, "Tên có nhiều nhất 100 ký tự."),
    question_quiz_describe: yup
        .string()
        .notRequired("Vui lòng điền trường này")
 ,
   
    question_number: yup
        .string()
        .required("Vui lòng điền trường này")
        .min(1, "Tên phải ít nhất 5 ký tự.")
        .max(10, "Tên có nhiều nhất 100 ký tự."),
    right_answer: yup
        .string()
        .required("Vui lòng điền trường này")
        .min(1, "Tên phải ít nhất 5 ký tự.")
        .max(10, "Tên có nhiều nhất 100 ký tự."),
    // subject_id: yup
    //     .string()
    //     .optional()
    //     .required("Vui lòng điền trường này")
    //     .min(1, "Tên phải ít nhất 5 ký tự.")
    //     .max(100, "Tên có nhiều nhất 100 ký tự."),

    list_input: yup.array(
        yup.object({
            input: yup.string().required("Vui lòng điền trường này")
        })
    ),


})





var productFormSchema = ref(yup.object().shape(Form_submitcode));

function auto_close_toast() {
    const myTimeout = setTimeout(reset_state_question_quiz, 5000);// thong bao se tu tat sau 5s khi submit
}


const fileSk = ref({});
const file = ref({});
const image = ref(false);
function fileSkUpload(e) {
    file.value = e.target.files[0];// arr

    image.value = URL.createObjectURL(e.target.files[0])

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

   // question_quiz.answer = list_answer_local.value;
    let data = new FormData();
    data.append('file', file.value);
    Object.keys(question_quiz).forEach(key => data.append(key, question_quiz[key]));
    list_answer_local.value.forEach((input, index) => {
        // data.append("answer[][index]", input);

        for (const [key, value] of Object.entries(input)) {
            data.append(`answer[${index}][${key}]`, value);
        }

    })

    await action_update_question_quiz(route.params.id_question,data);
    
     auto_close_toast(); 
    router.push({
        name: "QuestionQuizBankDetailDashboard",
        params: { id_subject: route.params.id_subject, id_question_bank: route.params.id_question_bank },
        query: { page: 1 }
    }
    );



    // await action_add_question_quiz(question_quiz); // them exam vao csdl
    // await  action_all_exams(route.query.page);//  get du lieu tai trang hien co
    // const myModalEl = document.getElementById('btn-close');
    // myModalEl.click();// dong model
    // auto_close_toast();// tu tat thong bao



}
function hanleUpdate(value) {
    code.value = value;
    

}


async function getAll() {
    await action_one_question_quiz(route.params.id_question);
 
    console.log(get_one_question_quiz.value)
    Object.keys(get_one_question_quiz.value).forEach(key => {
     if( get_one_question_quiz.value[key] && key != 'answer' ){
        question_quiz[key] = get_one_question_quiz.value[key];
     }
    });
 list_answer_local.value = get_one_question_quiz.value.answer
}
onMounted(() => {
     action_one_question_quiz_bank(route.params.id_question_bank);
    getAll();
    subjects.action_all_subjects();
    study_class.action_all_study_class();
    // action_one_question_quiz_bank(route.params.id_question_bank)

})

const mode = ref({ name: '', json: true })

const cmOptions = ref({ tabSize: 1, theme: "dracula", lineNumbers: true, mode: 'text/x-c++src' })

const cmOptions_input = ref({ tabSize: 2, scrollbarStyle: null, lineNumbers: true, theme: 'paraiso-light', lineWrapping: true, spellcheck: false, mode: 'text/x-c++src', placeholder: 'Vui lòng nhập kiểu, tên và giá trị biến' })

const code = ref("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");// codemirorr bi loi magrin
const answer_local = ref();


const list_answer_local = ref([reactive({ input: "\n\n\n\n\n\n\n" })]);

function add_input(index) {

    list_answer_local.value.push(reactive({ input: "" }));
    //Form_submitcode_filtered = Object.filter(Form_submitcode, score => score > 1); 
    // Form_submitcode['input' + (index + 1)] = yup
    //     .string()
    //     .required("Vui lòng điền trường này");;
    // console.log(Form_submitcode);

    // Form_submitcode = Form_submitcode;
}


const delete_input = (index) => {
    console.log(index)
    var arrr = list_answer_local.value.filter(function (input, _index) {
        return _index != index
    })// true giu lai


    list_answer_local.value = arrr;


}

// answer_local.value = [
//     {
//         input: question_quiz.input1,
//         output: code_input1.value
//     },
//     {
//         input: question_quiz.input2,
//         output: code_input2.value
//     },
//     {
//         input: question_quiz.input3,
//         output: code_input3.value
//     }
//  ]

watchEffect(() => {
    // answer_local;
    // console.log(answer_local);;
    // console.log(question_quiz.input1)
})





// const input = {
//     input: "sd",
//     output: "ldjspf"
// };
// const list_answer_local = ref([input]);
// const list_input = ref(list_answer_local);





onMounted(() => {
    code.value = "";
    // code_input1.value = "int a = 3; int b = 2;";
    // code_input2.value = "int a = 5; int b = 4;";
    // code_input3.value = "int a = 2; int c = 2;";
    //list_answer_local.value[0].input = 'printf("%d", add(-5, 1));';

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
