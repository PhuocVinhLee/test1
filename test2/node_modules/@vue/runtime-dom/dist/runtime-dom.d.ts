


<template>
    <aside class="px-4 mt-2 pb-2  w-100" style="width: 100% ;">
      <nav aria-label="...">
        <ul class="pagination">
          <li class="page-item disabled">
            <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item active" aria-current="page">
            <a class="page-link" href="#">2</a>
          </li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>
  
      <div class="row">
        <div class="col py-2 bg-dark text-white">
          <h4>1. Tính tổng hai số</h4>
          <div class="mb-2"> Bạn được cho hai danh sách liên kết không rỗng đại diện cho hai số nguyên không âm. Các
            chữ số được
            lưu trữ theo thứ tự đảo ngược và mỗi nút của chúng chứa một chữ số. Cộng hai số và trả về tổng dưới dạng
            danh sách liên kết.
  
            Bạn có thể cho rằng hai số không chứa bất kỳ số 0 nào đứng đầu, ngoại trừ chính số 0.</div>
  
          <div>Ví dụ 1:</div>
          <div class="alert alert-dark" role="alert">
            <h5>Input: <span class="badge bg-secondary">10</span></h5>
            <h5>Output: <span class="badge bg-secondary">20</span></h5>
          </div>
          <div>Ví dụ 2:</div>
          <div class="alert alert-dark" role="alert">
            <h5>Input: <span class="badge bg-secondary">15</span></h5>
            <h5>Output: <span class="badge bg-secondary">30</span></h5>
          </div>
          <div>Ví dụ 3:</div>
          <div class="alert alert-dark" role="alert">
            <h5>Input: <span class="badge bg-secondary">12</span></h5>
            <h5>Output: <span class="badge bg-secondary">24</span></h5>
          </div>
  
          <div>Chú ý:</div>
          <ul class="list-group ms-4">
            <li>Số nút trong mỗi danh sách liên kết nằm trong khoảng.</li>
            <li>Đảm bảo rằng danh sách đại diện cho một số không có số 0 đứng đầu.</li>
            <li>Cras justo odio</li>
          </ul>
  
  
  
        </div>
  
        <div class="col-6 vitri">
  
          <div>
            <VCodeMirror id="codemiroor" :value="code" :options="cmOptions" :readonly="false" @update:value='hanleUpdate' />
          </div>
  
          <div class="botton">
  
            <div class="panel">
              <div class=" bg-dark text-white" role="alert">
                A simple primary alert—check it out!
                lsc;lzczc
                <p>kcsna;zjc;xzjc;zxj</p>
              </div>
            </div>
            <button class="accordion ">Section 1
  
            </button>
          </div>
  
          
  
        </div>
  
      </div>
  
  
  
  
    </aside>
  </template>
  
  <script setup>
  import { onMounted, ref, watchEffect } from 'vue';
  import { VCodeMirror } from 'vue3-code-mirror'
  import 'codemirror/mode/python/python.js'
  import 'codemirror/lib/codemirror.js'
  import 'codemirror/mode/clike/clike.js'
  import 'codemirror/addon/edit/closebrackets.js'
  import "codemirror/theme/dracula.css";
  
  const mode = ref({ name: '', json: true })
  const code = ref(" codd nevfjaodjsa \ndljvxvl\n\n\n\nsfsdfs\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nkdsfnsdf");
  const cmOptions = ref({ tabSize: 2, theme: "dracula", lineNumbers: true, mode: 'text/x-c++src' })
  function hanleUpdate(value) {
    code.value = value;
    console.log(code.value)
  }
  watchEffect(() => {
  
  })
  
  onMounted(() => {
    var acc = document.getElementsByClassName("accordion"); codemiroor
    var i;
    var codemiroor = document.getElementById("codemiroor");
  
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.previousElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
          codemiroor.style.height = 600 + "px";;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
          codemiroor.style.height = 500 + "px";;
        }
      });
    }
  })
  
  </script>
  
  
  <style scoped>
  .vitri {
    position: relative;
  }
  
  #console {
    position: absolute;
    bottom: 0px;
  }
  
  .CodeMirror {
    border: 1px solid #eee;
    height: 600px;
  
  }
  
  .accordion {
    background-color: #eee;
    color: #444;
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
  .accordion:hover {
    background-color: #ccc;
  }
  
  .panel {
   
    background-color: white;
    max-height: 0px;
    overflow: hidden;
    transition: max-height 0.2s ease-out;
  
  }
  
  .botton {
    position: absolute;
    bottom: 5px;
    width: 100%;
  }</style>