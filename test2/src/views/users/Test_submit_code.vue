 
<template>
    <div>
        <header class="p-1 bg-dark ">
            <div class="">
                <div class=" d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start ">
                    <div class="navbar navbar-dark bg-dark shadow-sm">
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
                                    href="#">{{ route.query.question }}</a>
                            </li>

                            <li class="page-item" @click="next_page()"> <a href="#"
                                    class="page-link bg-dark text-white border border-dark-subtle ">
                                    Next
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div>
                        <button type="button" class="btn btn-secondary btn-sm bg-dark px-3"><span class=""><i
                                    class="fa-sharp fa-regular fa-flag"></i></span></button>
                    </div>


                    <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 text-white justify-content-center mb-md-0">

                    </ul>

                    <button type="button" class="btn btn-secondary btn-lg text-brand-orange me-4 p-1">{{
                        get_one_exam_submit_code.exam_submit_code_title }}</button>
                    <div class="text-white me-4"> Thời gian còn lại: <span class="badge bg-secondary p-2"><span>20</span> :
                            <span>30</span></span></div>
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

                            query: { question: parseInt(index) + 1 }
                        }" type="button"
                            class="btn btn-outline-secondary text-white text-start p-3 d-flex justify-content-between w-100"
                            :class="{ active: parseInt(route.query.question) == index + 1 }"
                            v-for="(question, index) in list_question">
                            <span class="me-3"><i class="fa-sharp fa-regular fa-flag"></i></span>

                            <span class=""> <span>{{ index + 1 }}. </span> {{
                                question.question_submit_code_title }} </span>
                            <span class="text-danger ms-3">Medium</span> </router-link>

                        <button type="button"
                            class="btn btn-outline-secondary text-white text-start p-3 d-flex justify-content-between w-100">
                            <span class="me-3"><i class="fa-solid fa-flag"></i></span> <span>Tìm cây nhị phân đối xứng trong
                                node
                            </span>
                            <span class="text-warning ms-3">Medium</span></button>


                        end
                    </div>
                </div>

            </div>
        </div>

        <aside class="bg-black w-100 container-fluid " style="width: 100% ;">


            <div class=" p-2 w-100 ">

                <div class="row w-100">
                    <div class="col rounded-1 py-2 bg-dark text-white  overflow-scroll-y me-2" style="max-height: 650px;">
                        <h5>Câu {{ route.query.question }}. {{ one_question_submit_code.question_submit_code_title }}</h5>
                     
                        <span class="badge text-bg-danger"> {{ one_question_submit_code.question_submit_code_level }}</span>
                        <span v-html="one_question_submit_code.question_submit_code_describe"></span>
                        <div class="mb-2 "> Bạn được cho hai danh sách liên kết không rỗng đại diện cho hai số nguyên không
                            âm. Các
                            chữ số được
                            lưu trữ theo thứ tự đảo ngược và mỗi nút của chúng chứa một chữ số. Cộng hai số và trả về tổng
                            dưới dạng
                            danh sách liên kết.

                            Bạn có thể cho rằng hai số không chứa bất kỳ số 0 nào đứng đầu, ngoại trừ chính số 0.</div>
                       



                        <div v-for="(answer, index) in one_question_submit_code.answer">
                            <div>Ví dụ {{ index + 1 }}:</div>
                            <span class="d-flex align-items-stretch">
                                                <div class="card alert alert-dark p-1 flex-fill">
                                                    <div class="card-header">
                                                        Test
                                                    </div>
                                                    <div class="card-body">

                                                        <span>{{ answer.input }}</span>

                                                    </div>
                                                </div>

                                                <div class="card alert alert-dark p-1 flex-fill">
                                                    <div class="card-header">
                                                        Result
                                                    </div>
                                                    <div class="card-body">

                                                        <span>{{ answer.output }}</span>
                                                    </div>
                                                </div>

                                                
                                            </span>
                        </div>

                    </div>

                    <div class="col-6 vitri  pading-0  ">

                        <div style="max-height: 650px;">
                            <VCodeMirror class="CodeMirror" id="codemiroor" :value="code" :options="cmOptions"
                                :readonly="false" @update:value='hanleUpdate' />

                        </div>



                        <div class="botton ">
                            <div id="panel" class="panel  border border border-dark  rounded-1  text-white">
                                <div class="bg-codemiroor border border border-dark text-white  p-1"
                                    style="max-height: px;">
                                    <div class="mt-2 ms-2" role="group" aria-label="Basic radio toggle button group ">
                                        <span v-for="(answer, index) in one_question_submit_code.answer">

                                            <input type="radio" class="btn-check" name="btnradio1" :id="index"
                                                autocomplete="off" :checked="index == cases_logic"
                                                @click="cases_logic = index">

                                            <label v-if="!get_answers[index]" class="btn p-1 text-white" :for="index">Case
                                                {{ index + 1 }} </label>
                                            <label v-else class="btn p-1" :class="{
                                                'text-success': get_answers[index].output === answer.output, 'text-danger': get_answers[index].output != answer.output && get_answers[index].output
                                                , 'text-white': !get_answers
                                            }" :for="index">Case
                                                {{ index + 1 }}</label>
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
                                        <div v-for="(answer, index) in one_question_submit_code.answer" class="ms-2 mt-2"
                                            v-show="index == cases_logic">

                                            <span class="d-flex align-items-stretch">
                                                <div class="card alert alert-dark p-1 flex-fill">
                                                    <div class="card-header">
                                                        Test
                                                    </div>
                                                    <div class="card-body">

                                                        <span>{{ answer.input }}</span>

                                                    </div>
                                                </div>

                                                <div class="card alert alert-dark p-1 flex-fill">
                                                    <div class="card-header">
                                                        Result
                                                    </div>
                                                    <div class="card-body">

                                                        <span>{{ answer.output }}</span>
                                                    </div>
                                                </div>

                                                <div class="card alert alert-dark p-1 flex-fill">
                                                    <div class="card-header">
                                                        Your Result
                                                    </div>
                                                    <div class="card-body">

                                                        <h6 v-if="get_answers[index]">Output: <span>{{
                                                            get_answers[index].output }}</span></h6>
                                                        <h6 v-else> <span></span></h6>

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
                            <button @click="test"
                                class=" accordion bg-codemiroor p-1 d-flex justify-content-between rounded-1  align-items-center "><span
                                    class="" id="run_consle">Console <i class="fa-sharp fa-solid fa-chevron-down"></i>

                                </span>

                                <span v-show="!get_isLoanding" @click="run()" type="button" id="run"
                                    class=" btn btn-secondary px-3 py-1">Run </span>
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
import { useRoute, useRouter } from 'vue-router'
import { onMounted, ref, watchEffect, watch, reactive } from 'vue';
import { storeToRefs } from 'pinia';
import { VCodeMirror } from 'vue3-code-mirror'
import 'codemirror/mode/python/python.js'
import 'codemirror/lib/codemirror.js'
import 'codemirror/mode/clike/clike.js'
import 'codemirror/addon/edit/closebrackets.js'
import "codemirror/theme/dracula.css";

const route = useRoute();// 
const router = useRouter();
const props = defineProps({
    id: { type: String, required: true },
})

import { useQuestion_submit_codeStore } from "../../stores/question_submit_code.js"
import { useList_exam_questionStore } from "../../stores/list_exam_question.js"

import { useCompilerStore } from "../../stores/compiler.js"
import { useExam_submit_codeStore } from "../../stores/exam_submit_code.js"
const { get_one_exam, exams, one_exam,get_one_exam_submit_code } = storeToRefs(useExam_submit_codeStore());// no da thanh ref nen khi dung phai co value
const { action_one_exam_submit_code } = useExam_submit_codeStore();

const { list_exam_question, get_one_list_exam_question, one_list_exam_question } = storeToRefs(useList_exam_questionStore());
const { action_one_list_exam_question } = useList_exam_questionStore();

//const { question_submit_code } = storeToRefs(useQuestion_submit_codeStore);
const { one_question_submit_code, get_one_question_submit_code, list_question_submit_codes, get_list_question_submit_code } = storeToRefs(useQuestion_submit_codeStore());
const { action_one_question_submit_code, action_list_question_submit_code } = useQuestion_submit_codeStore();


const { get_compiler, get_isLoanding, compiler, get_answers, answers, error_code } = storeToRefs(useCompilerStore());// no da thanh ref nen khi dung phai co value
const { action_compiler, action_answers } = useCompilerStore();

async function next_page() {
    if (route.query.question < get_one_list_exam_question.value.list_question.length) {
        get_one_list_exam_question.value.list_question.forEach((element, index) => {
            if (parseInt(route.query.question) === parseInt(index + 1)) {
                router.push({ query: { question: parseInt(route.query.question) + 1 } })
            }
        });
    }


}
async function pre_page() {
    if (route.query.question > 1) {
        get_one_list_exam_question.value.list_question.forEach((element, index) => {
            if (parseInt(route.query.question) === parseInt(index + 1)) {

                router.push({ query: { question: parseInt(route.query.question) - 1 } })
            }
        });

    }

}

const list_question = reactive([]);
async function get_one_question() {
  await action_one_exam_submit_code(route.params.id);
  get_one_exam_submit_code.value.list_question.forEach( async(element, index) => {
     await   action_one_question_submit_code(element);
      await list_question.push(one_question_submit_code.value);
    });
    console.log(list_question);



    // get_one_list_exam_question.value.list_question.forEach((element, index) => {
    //     if (parseInt(route.query.question) === parseInt(index + 1)) {
    //         action_one_question_submit_code(element);
    //     }
    // });

}
onMounted(() => {
    // code.value = "";

    get_one_question();

})

watch(route, async () => {// refresh state
    await action_one_exam_submit_code(route.params.id);
    get_one_exam_submit_code.value.list_question.forEach( async(element, index) => {
     await   action_one_question_submit_code(element);
        if (parseInt(route.query.question) === parseInt(index + 1)) {
            action_one_question_submit_code(element);
            // get_one_question_submit_code;
            answers.value = [];
            error_code.value = [];
            compiler.value = {};
        }
    });
})

watchEffect(() => {

})
async function run() {
    console.log(get_answers.value);
    await action_answers(get_one_question_submit_code.value.answer, code.value);
    //console.log(get_one_question_submit_code.value.answer)
    //console.log(get_isLoanding.value);
    // await action_compiler(
    //     {
    //         code: code.value,
    //         lang: "Cpp",
    //         input: "10 10"
    //     }
    // );
}



watchEffect(() => {

})

const mode = ref({ name: '', json: true })
const code = ref("");;
const cmOptions = ref({ tabSize: 2, theme: "dracula", lineNumbers: true, mode: 'text/x-c++src' })

const testcase_result = ref(true)
const cases_logic = ref(0)

function hanleUpdate(value) {
    code.value = value;
    console.log(code.value)

}

function a(logic) {
    if (logic === testcase_result.value) return testcase_result.value;
    return testcase_result.value = !testcase_result.value;

}

function cases(logic) {
    if (logic === testcase_result.value) return testcase_result.value;
    return testcase_result.value = !testcase_result.value;

}


watchEffect(() => {
    //  console.log(router.query.question);
})
onMounted(() => {



    var codemiroor = document.getElementById("codemiroor");
    var run_consle = document.getElementById('run_consle')
    run_consle.addEventListener("click", function () {
        // this.classList.toggle("active");
        var panel = document.getElementById('panel')
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            codemiroor.style.height = 610 + "px";;
            panel.style.display = "none"
        } else {
            panel.style.maxHeight = 160 + "px";
            panel.style.display = "block"
            codemiroor.style.height = 450 + "px";;
        }
    });

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
.text-brand-orange {
    --tw-text-opacity: 1;
    color: rgb(255 161 22/var(--tw-text-opacity));
}

#testcase {
    max-height: 130px;
    min-height: 130px;
}

#result {
    max-height: 130px;
    min-height: 130px;
}

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

    height: 610px;
    width: 100%;
    border-radius: 3px;

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

.active,
.accordion:hover {}

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

.overflow-scroll-y {
    overflow: auto;


}
</style>