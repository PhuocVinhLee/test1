
<template>
  

  <div class="tab-content">
        <div class="tab-pane fade show active" id="navs-top-home" role="tabpanel">
                
                <Exam_submit_codeFormEdit></Exam_submit_codeFormEdit>
    
        </div>
    </div>

    
    

  

   
</template>
<script setup>
import { onMounted } from 'vue';
import Exam_submit_codeFormAdd from "@/components/Exam_submit_codeFormAdd.vue";
import Exam_submit_codeFormEdit from "@/components/Exam_submit_codeFormEdit.vue";
import ListExam_submit_code from "@/components/Exam_submit_codeTable.vue";
import Pagination from "@/components/Pagination.vue";

import { storeToRefs } from 'pinia';
import { useRoute, useRouter } from 'vue-router'
const route = useRoute();// 

import { useExam_submit_codeStore } from "../stores/exam_submit_code.js"
const { get_one_exam_submit_code, exam_submit_codes, one_exam_submit_code, lenght, state_exam_submit_code_add } = storeToRefs(useExam_submit_codeStore());
const { action_one_exam_submit_code, action_all_exam_submit_codes, reset_state_exam_submit_code, action_delete_exam_submit_code } = useExam_submit_codeStore();


function emit_page(page) {
    console.log(page);
    action_all_exam_submit_codes(page);// click vao page o duoi 
}

function auto_close_toast() {
    const myTimeout = setTimeout(reset_state_exam_submit_code, 5000);
}

function close_toast() {
    reset_state_exam_submit_code();
}
async function delete_exam_submit_code(id, event) {
    console.log(event);
    event.preventDefault()
    await action_delete_exam_submit_code(id);
    await action_all_exam_submit_codes(route.query.page);
    auto_close_toast();// auto dong thong bao
    const myModalEl = document.getElementById('btn-close-delete');
    myModalEl.click();// close model

}

const props = defineProps(['id'])// url/prop



//console.log(props.id)

onMounted(() => {
    action_one_exam_submit_code(route.params.id_exam)

})
</script>  

