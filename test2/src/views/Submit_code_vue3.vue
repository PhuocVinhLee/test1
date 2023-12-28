 
<template>
  <div>
    <header class="p-1 bg-dark ">
      <div class="">
        <div class=" d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start ">
          <div class="navbar navbar-dark bg-dark shadow-sm">
            <div class="container">
              <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
                aria-controls="offcanvasExample">
                <span class="navbar-toggler-icon"></span>
                <span class="text-white"> List questions</span>
              </button>

            </div>
          </div>

          <nav aria-label="..." class="me-2">
            <ul class="pagination pagination-sm m-0">
              
              
              <li><router-link :to="{
                        name: 'Submit_code_vue3',
                        params: { idquestion: '64bcf15465db8d20d94bd6db'}
                    }">
                    <span class="mt-2 badge badge-warning">
                        <i class="fas fa-edit"></i> Hiệu chỉnh</span>
                </router-link></li>

              <li class="page-item "><a class="page-link bg-dark text-white border border-dark-subtle "
                  href="#">Previous</a></li>

              <li class="page-item "><a class="page-link bg-dark text-white  border border-dark-subtle" href="#">1</a>
              </li>

              <li class="page-item"><a class="page-link bg-dark text-white border border-dark-subtle" href="#">Next</a>
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
            get_one_exam.exam_title }}</button>
          <div class="text-white me-4"> Thời gian còn lại: <span class="badge bg-secondary p-2"><span>20</span> :
              <span>30</span></span></div>
          <div class="me-2">
            <img src="https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-Viet-Nam.jpg" class="rounded-circle"
              alt="..." width="24" height="24">

          </div>


        </div>
      </div>

    </header>


    <!-- model list question-->

    <div class="offcanvas offcanvas-start bg-dark text-white " tabindex="-1" id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel">
      <div class="offcanvas-header  border-bottom">
        <h6 class="offcanvas-title" id="offcanvasExampleLabel">Total <span class="badge bg-secondary fs-6 ">23</span>
          questions</h6>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <div>
          <div class="btn-group-vertical  d-flex" role="group" aria-label="Vertical button group">

            <button type="button"
              class="btn btn-outline-secondary text-white text-start p-3 d-flex justify-content-between w-100">
              <span class="me-3"><i class="fa-sharp fa-regular fa-flag"></i></span> <span>Tìm cây nhị phân đối xứng trong
                node </span>
              <span class="text-danger ms-3">Medium</span></button>
            <button type="button"
              class="btn btn-outline-secondary text-white text-start p-3 d-flex justify-content-between w-100">
              <span class="me-3"><i class="fa-solid fa-flag"></i></span> <span>Tìm cây nhị phân đối xứng trong node
              </span>
              <span class="text-warning ms-3">Medium</span></button>

            <button type="button" class="btn btn-outline-secondary text-white text-start">
              <span><i class="fa-solid fa-flag"></i></span> Tìm số chẵn lẻ</button>
            <button type="button" class="btn btn-outline-secondary">Button</button>
            <button type="button" class="btn btn-outline-secondary">Button</button>

            <button type="button" class="btn btn-outline-secondary">Button</button>
            <button type="button" class="btn btn-outline-secondary">Button</button>
            <button type="button" class="btn btn-outline-secondary text-white">Button</button>
            <button type="button" class="btn btn-outline-secondary text-white">Button</button>
            <button type="button" class="btn btn-outline-secondary">Button</button>
            <button type="button" class="btn btn-outline-secondary">Button</button>

            <button type="button" class="btn btn-outline-secondary">Button</button>
            <button type="button" class="btn btn-outline-secondary">Button</button>
            <button type="button" class="btn btn-outline-secondary text-white">Button</button>

            end
          </div>
        </div>

      </div>
    </div>

    <aside class="bg-black w-100 container-fluid " style="width: 100% ;">


      <div class=" p-2 w-100 ">

        <div class="row">
          <div class="col rounded-1 py-2 bg-dark text-white  overflow-scroll-y me-2" style="max-height: 650px;">
            <h5>1. Tính tổng hai số</h5>
            <div class="mb-2 "> Bạn được cho hai danh sách liên kết không rỗng đại diện cho hai số nguyên không âm. Các
              chữ số được
              lưu trữ theo thứ tự đảo ngược và mỗi nút của chúng chứa một chữ số. Cộng hai số và trả về tổng dưới dạng
              danh sách liên kết.

              Bạn có thể cho rằng hai số không chứa bất kỳ số 0 nào đứng đầu, ngoại trừ chính số 0.</div>

            <div>Ví dụ 1:</div>
            <div class="alert alert-dark" role="alert">
              <h6>Input: <span class="badge bg-secondary">10</span></h6>
              <h6>Output: <span class="badge bg-secondary">20</span></h6>
            </div>
            <div>Ví dụ 2:</div>
            <div class="alert alert-dark" role="alert">
              <h6>Input: <span class="badge bg-secondary">15</span></h6>
              <h6>Output: <span class="badge bg-secondary">30</span></h6>
            </div>
            <div>Ví dụ 3:</div>
            <div class="alert alert-dark" role="alert">
              <h6>Input: <span class="badge bg-secondary">12</span></h6>
              <h6>Output: <span class="badge bg-secondary">24</span></h6>
            </div>

            <div>Chú ý:</div>
            <ul class="list-group ms-4">
              <li>Số nút trong mỗi danh sách liên kết nằm trong khoảng.</li>
              <li>Đảm bảo rằng danh sách đại diện cho một số không có số 0 đứng đầu.</li>
              <li>Cras justo odio</li>
              <li>Số nút trong mỗi danh sách liên kết nằm trong khoảng.</li>
              <li>Đảm bảo rằng danh sách đại diện cho một số không có số 0 đứng đầu.</li>
              <li>Cras justo odio</li>

            </ul>
            <div>Chú ý:</div>
            <ul class="list-group ms-4">
              <li>Số nút trong mỗi danh sách liên kết nằm trong khoảng.</li>
              <li>Đảm bảo rằng danh sách đại diện cho một số không có số 0 đứng đầu.</li>
              <li>Cras justo odio</li>
              <li>Số nút trong mỗi danh sách liên kết nằm trong khoảng.</li>
              <li>Đảm bảo rằng danh sách đại diện cho một số không có số 0 đứng đầu.</li>
              <li>Cras justo odio</li>

            </ul>




          </div>

          <div class="col-6 vitri  pading-0  ">

            <div style="max-height: 650px;">
              <VCodeMirror class="CodeMirror" id="codemiroor" :value="code" :options="cmOptions" :readonly="false"
                @update:value='hanleUpdate' />

            </div>



            <div class="botton ">
              <div id="panel" class="panel  border border border-dark  rounded-1  text-white">
                <div class="bg-codemiroor border border border-dark text-white  p-1" style="max-height: px;">
                  <div class="" role="group" aria-label="Basic radio toggle button group">
                    <input @click="a(true)" type="radio" class="btn-check" name="btnradio" id="btnradio1"
                      autocomplete="off" checked>
                    <label class="btn btn-outline-black text-white" for="btnradio1">Testcase</label>

                    <input @click="a(false)" type="radio" class="btn-check" name="btnradio" id="btnradio2"
                      autocomplete="off">
                    <label class="btn btn-outline-black text-white" for="btnradio2">Result</label>

                  </div>
                </div>

                <div id="testcase" v-show="testcase_result" class=" bg-codemiroor console  overflow-scroll-y text-white"
                  role="alert">
                  <span>
                    <div class="mt-2 ms-2" role="group" aria-label="Basic radio toggle button group ">
                      <input type="radio" class="btn-check" name="btnradio1" id="btnradio3" autocomplete="off" checked>
                      <label class="btn btn-outline-black text-white p-1" for="btnradio3">Case 1</label>

                      <input type="radio" class="btn-check" name="btnradio1" id="btnradio4" autocomplete="off">
                      <label class="btn btn-outline-black text-white p-1" for="btnradio4">Case 2</label>
                      <input type="radio" class="btn-check" name="btnradio1" id="btnradio5" autocomplete="off">
                      <label class="btn btn-outline-black text-white p-1" for="btnradio5">Case 3</label>

                    </div>
                    <div class="ms-2 mt-2" v-show="cases_logic">

                      <div class="alert alert-dark p-1" role="alert">
                        <h6>Input: <span>12</span></h6>

                      </div>
                      <div class="alert alert-dark p-1" role="alert">

                        <h6>Output: <span>12</span></h6>
                      </div>

                    </div>

                    <div class="ms-2 mt-2" v-show="cases_logic">

                      <div class="alert alert-dark p-1" role="alert">
                        <h6>Input: <span>12</span></h6>

                      </div>
                      <div class="alert alert-dark p-1" role="alert">

                        <h6>Output: <span>12</span></h6>
                      </div>

                    </div>

                    <div class="ms-2 mt-2" v-show="cases_logic">

                      <div class="alert alert-dark p-1" role="alert">
                        <h6>Input: <span>12</span></h6>

                      </div>
                      <div class="alert alert-dark p-1" role="alert">

                        <h6>Output: <span>12</span></h6>
                      </div>

                    </div>
                  </span>
                </div>
                <div id="result" v-show="!testcase_result" class=" bg-codemiroor console  overflow-scroll-y text-white"
                  role="alert">


                  <span class="">
                    <p>kcsna ssss;zjc;xzjc;zxj cs cc sc sc s cs c sc ascc asc ascasc asc ascas cs ac asc sac a sc asc
                      ascsa c asc asc a sc asc a sc sac asca scac
                      ca casca c ac as cascmq cas c,as cas ca ca sc,a sc
                    </p>

                  </span>


                </div>


              </div>
              <button @click="test"
                class=" accordion bg-codemiroor p-1 d-flex justify-content-between rounded-1  align-items-center "><span
                  class="" id="run_consle">Console <i class="fa-sharp fa-solid fa-chevron-down"></i></span>
                <span type="button" id="run" class=" btn btn-secondary px-3 py-1">Run</span> </button>
            </div>


          </div>

        </div>
      </div>




    </aside>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { onMounted, ref, watchEffect } from 'vue';
import { storeToRefs } from 'pinia';
import { VCodeMirror } from 'vue3-code-mirror'
import 'codemirror/mode/python/python.js'
import 'codemirror/lib/codemirror.js'
import 'codemirror/mode/clike/clike.js'
import 'codemirror/addon/edit/closebrackets.js'
import "codemirror/theme/dracula.css";
const props = defineProps({
  id: { type: String, required: true },
})
props.id;
import { useQuestion_submit_codeStore } from "../stores/question_submit_code.js"
import { useList_exam_questionStore } from "../stores/list_exam_question.js"
import { useExamStore } from "../stores/exam.js"

const {get_one_exam, exams, one_exam} = storeToRefs(useExamStore());
const {action_one_exam} = useExamStore();

const {list_exam_question} = storeToRefs(useList_exam_questionStore());
const {action_one_list_exam_question} = useList_exam_questionStore();

const {question_submit_code} = storeToRefs(useQuestion_submit_codeStore);
const {one_question_submit_code} = useQuestion_submit_codeStore();
const {action_one_question_submit_code} = useQuestion_submit_codeStore();


action_one_exam('64bcf15465db8d20d94bd6db');
action_one_question_submit_code("64bcf25365db8d20d94bd6de");
action_one_list_exam_question("64bcf15465db8d20d94bd6db");


const mode = ref({ name: '', json: true })
const code = ref(" codd nevf dasbdka dsakbdajaodjsa\\\n \n\n \ndljvxvl\n\n\n\nsfsdfs\nn\n\n\n\n\n\n\n\n\n\n\nkdsfnsdf");
const cmOptions = ref({ tabSize: 2, theme: "dracula", lineNumbers: true, mode: 'text/x-c++src' })

const testcase_result = ref(true)
const cases_logic = ref(1)
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

})

onMounted(() => {


  // var acc = document.getElementsByClassName("accordion"); codemiroor

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