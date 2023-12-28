<!-- <template>
  <Countdown @timeElapsed='handel()' :deadlineISO=count countdownSize="1.5rem" labelSize=".8rem" :showDays="false"
    :showHours="true" :labels="{ days: '', hours: ' ', minutes: '', seconds: '' }" :flipAnimation="true"
    mainFlipBackgroundColor="#000" secondFlipBackgroundColor='#000' mainColor="ffffff" secondFlipColor="#ffffff" />
</template>

<script  setup>
import { Countdown } from 'vue3-flip-countdown'
import { ref, watchEffect, onMounted } from "vue";
const count = ref("2023-11-14T22:53")
const start = ("2023-11-14T18:50")
const end = ("2023-11-14T19:50")
const minutes = ref((start - end) / (1000 * 60))

let currentTime = new Date('2023-11-14T19:25');

//let expireTime = new Date('20223-10-10T19:20:33.000Z');//Date('2020-06-05T12:18:33.000Z');
let expireTime = new Date('2023-11-14T19:20');
let minute = (currentTime - expireTime ) / (1000 * 60);
onMounted(()=>{
  console.log(minute)
})



const time = ref(40);

function handel() {
  console.log("oke");
}
watchEffect(() => {
  console.log(minutes.value);
})
</script> -->

<!-- <template>
  <VueDraggableNext v-model="list">
  <transition-group>
    <span class="badge bg-secondary">Secondary</span>
    <div  v-for="element in list" :key="element.id"><span class="badge bg-secondary ms-3 mb-2">{{element.name}} </span></div>  
  </transition-group>
  <div v-for="l in list">{{ l }}</div>
</VueDraggableNext>
  <div class="flex m-4">
    <VueDraggableNext class="dragArea list-group w-full" :list="list" @change="log">
      <div
        class="list-group-item bg-gray-300 m-1 p-3 rounded-md text-center"
        v-for="element in list"
        :key="element.name"
      >
        {{ element.name }}
      </div>
    </VueDraggableNext>

    <div v-for="l in list">{{ l }}</div>
  </div>
</template>
<script setup>
 import { onMounted, ref, watchEffect, watch, reactive, onUpdated, computed } from 'vue';
  import { VueDraggableNext } from 'vue-draggable-next'
  const  enabled = ref(false);
  const dragging = ref(false);
  const list = ref([]);
  list.value = [
          { name: 'John', id: 1 },
          { name: 'Joao', id: 2 },
          { name: 'Jean', id: 3 },
          { name: 'Gerard', id: 4 },
        ];
  function  log(event) {
        console.log(event)
      }
  
  
</script> -->

<!-- <template>
  <section ref="kosten">
    <button @click="showScrollInto(0, kosten)" type="button" class="btn btn-warning">1</button>
    <button @click="showScrollInto(1, kosten)" type="button" class="btn btn-warning">2</button>
    <button @click="showScrollInto(2, kosten)" type="button" class="btn btn-warning">3</button>
    <button type="button" class="btn btn-warning">4</button>
     <select @change="showScrollInto($event, kosten)">
      <option value=""></option>
      <option v-for="i in 4" :key="i" :value="i - 1">section {{ i }}</option>
    </select> 
  </section>
  <section ref="sections" v-for="i in 4" :key="i">
     <button @click="returnToSource">Return</button> 
    <div>section{{ i }}</div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const source = ref();
const kosten = ref();
const sections = ref([]);

function showScrollInto(index, currentLocation) {
  source.value = currentLocation;
  const toLocation = index;//index - 1
  // refs set with a v-for are returned as an array
  sections.value[toLocation].scrollIntoView({ behavior: "smooth" });
}
function returnToSource() {
  source.value.scrollIntoView({ behavior: "smooth" });
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
section {
  border: 1px solid red;
  height: 500px;
}
</style> -->

<!-- <template>
 <countdown
  :time=" 10 * 1000"
  format="mm:ss"  @finish="handleFinish"
>
  <template #="{ resolved }">
    <span class="countdown-item">{{ resolved.HH }}</span> :
    <span class="countdown-item">{{ resolved.mm }}</span> :
    <span class="countdown-item">{{ resolved.ss }}</span>
  </template>
</countdown>
</template>

<script setup >
import Countdown from 'vue3-countdown';
function handleFinish(){
  console.log("Oke")
}
 
</script> -->

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
function hanleUpdate(value) {
    code.value = value;



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
    run_consle_top();

    await action_answers(list_input_local.value, code.value);
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
async function get_one_question() {
    await action_one_exam_submit_code(route.params.id_exam);
    for (const element of get_one_exam_submit_code.value.list_question) {
        await action_one_question_submit_code(element);
        await list_question.value.push(one_question_submit_code.value);
    }
    await action_one_question_submit_code(list_question.value[route.params.question - 1]._id);
    one_question_submit_code_local.value = one_question_submit_code.value;
    list_input_local.value = one_question_submit_code.value.answer;
}
watch(route, async () => {// refresh state

    for (const [index, element] of list_question.value.entries()) {
        if ((index + 1) == route.params.question) {

            await action_one_question_submit_code(element._id);

        }
    }
    one_question_submit_code_local.value = one_question_submit_code.value;
    if (one_result.value.list_answer) {
        for (const result of one_result.value.list_answer) {

            if (result.question_id == one_question_submit_code_local.value._id) {
                code.value = result.code;
            }else{
                code.value = " int khong co;"
            }
        }
    } else{
        code.value = " int khong co;"
    }
       
   
    answers.value = [];
    //error_code.value = [];
   // compiler.value = {};
   
    list_input_local.value = one_question_submit_code_local.value.answer


})
onMounted(async () => {

    await get_one_question();
    minute.value = 39;
    await handleMounted();
    count_down.value.reset();// update time Countdown
    count_down.value.start();

    await action_all_result_exam_submitcodes(route.params.id_exam);
    if (get_all_result_exam_submitcodes.value[get_all_result_exam_submitcodes.value.length - 1].completed == true) {
        let now = new Date();
        now.setMinutes(now.getMinutes() - now.getTimezoneOffset());

        await action_add_result_exam_submitcodes({
            exam_id: route.params.id_exam,
            datetime_attempts: now.toISOString().slice(0, 19),
            completed: false,
            list_question: []
        });
        await action_all_result_exam_submitcodes(route.params.id_exam);// cap nhat ket qua ky thi hien tai
        one_result.value = get_all_result_exam_submitcodes.value[get_all_result_exam_submitcodes.value.length - 1];
    } else {
        one_result.value = get_all_result_exam_submitcodes.value[get_all_result_exam_submitcodes.value.length - 1];

    }




})
async function next_page() {
    if (route.params.question < list_question.value.length) {
        list_question.value.forEach((element, index) => {
            if (parseInt(route.params.question) === parseInt(index + 1)) {
                router.push({ params: { question: parseInt(route.params.question) + 1 } })
            }
        });
    }


}
async function pre_page() {
    if (route.params.question > 1) {
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
            <div class=" d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start ">
                <div class="navbar navbar-dark bg-dark">
                    <div class="container">
                        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
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
                    </ul>
                </nav>
                <div>
                    <button type="button" class="btn btn-secondary btn-sm bg-dark px-3"><span class="">
                            <i class='bx bx-flag'></i> </span></button>
                </div>


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
                        <span class="text-danger ms-3">Medium</span> </router-link>




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

                            <span class="badge text-bg-danger"> {{ one_question_submit_code_local.question_submit_code_level
                            }}</span>
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
                        <button @click="test" style="height: 5%;"
                            class="   accordion bg-codemiroor  d-flex justify-content-between rounded-1  align-items-center ">
                            <span class="">
                                <span @click="run_consle_top()" v-if="codemirorr.topPercent == 100"><i
                                        class='bx bxs-chevron-down bx-rotate-180'></i></span>
                                <span @click="run_consle_down()" v-else><i class='bx bxs-chevron-down'></i></span>

                            </span>

                            <span v-show="!get_isLoanding" @click="run()" type="button" id="run"
                                class=" btn btn-primary px-3 py-0"> Submit</span>
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