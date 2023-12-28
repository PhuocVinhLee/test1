<script setup>
import AppHeader from "@/components/Header.vue";
import FooTer from "@/components/Fooder.vue";
import Menu from "@/components/Menu.vue";
import Nav from "@/components/Nav.vue"

import { useRoute, useRouter } from 'vue-router'
import { computed, watch } from 'vue'
import { onMounted, ref, watchEffect } from 'vue';
import { storeToRefs } from 'pinia';
import { useIndexStore } from "./stores/index.js"
const { get_state_error } = storeToRefs(useIndexStore());
const { } = useIndexStore();
const route = useRoute();
const router = useRouter();

const path = computed(() => { return (route.name == 'Test_submit_code' ||route.name == 'TestQuestionSubmitCode'
|| route.name == 'QuestionSubmitCodeEdit'
 || route.name == 'QuestionSubmitCodeAdd' || route.name == 'TestQuestionQuiz') })
const path_login = computed(() => {
  return (route.name == 'login'||route.name == 'TestQuestionSubmitCode' ||  route.name == 'LoginTeacher' || route.name == 'QuestionSubmitCodeAdd'
  ||route.name == 'QuestionSubmitCodeEdit'
   || route.name == 'Test_submit_code'
    || route.name == 'TestQuestionQuiz')
})
onMounted(() => {
  console.log(path.value)
})

watch(get_state_error, () => {
  router.push({
    name: "LoginTeacher"
  }
  );
})


</script>


<template>
  <div>
    <div v-if="!path_login" class="layout-wrapper layout-content-navbar">
      <div class="layout-container">


        <Menu></Menu>
        <div class="layout-page">
          <Nav v-show="!path"></Nav>

          <router-view />
        </div>


      </div>

      <!-- Overlay -->
      <div class="layout-overlay layout-menu-toggle"></div>
    </div>


    <div v-else> <router-view /></div>
  </div>



  <!-- <AppHeader v-if="!path" /> -->
  <!-- <main class="d-flex flex-nowrap w-100">
      <Nav ></Nav>

      <router-view  /> -->
  <!-- 
    </main> -->

  <!-- <FooTer v-if="!path" /> -->
</template>

<style >
.bg-light,
.footer-light {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-light-rgb), var(--bs-bg-opacity)) !important;
}

::-webkit-scrollbar {
  width: 10px;
  /* Độ rộng của thanh cuộn */
}

::-webkit-scrollbar-track {
  background-color: #f1f1f1;
  /* Màu nền của vùng track */
}

::-webkit-scrollbar-thumb {
  background-color: #888;
  /* Màu của thanh cuộn */
  border-radius: 4px;
  /* Độ cong của góc dưới */
}

::-webkit-scrollbar-thumb:hover {
  background-color: #555;
  /* Màu của thanh cuộn khi hover */
}

* {
  scrollbar-color: #888 #f1f1f1;
}

/* Ví dụ tùy chỉnh kích thước scrollbar trong Firefox */
* {
  scrollbar-width: thin;
}
</style>

<!-- <style>
@import 'sneat-1.0.0/assets/vendor/fonts/boxicons.css';
@import 'sneat-1.0.0/assets/vendor/css/core.css';
;
@import 'sneat-1.0.0/assets/vendor/css/theme-default.css';

@import 'sneat-1.0.0/assets/css/demo.css';
@import 'sneat-1.0.0/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css';

@import 'sneat-1.0.0/assets/vendor/libs/apex-charts/apex-charts.css';
</style> -->

