<template>
  <div class="container-xxl">
    <div class="authentication-wrapper authentication-basic container-p-y">
      <div class="authentication-inner">
        <!-- Register -->
        <div class="card">
          <div class="card-body">
            <!-- Logo -->
            <div class="app-brand justify-content-center">

              <span class="app-brand-logo demo">
                <img
                  src="data:image/png;base64,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" />
              </span>
              <span class="app-brand-text demo menu-text fw-bolder ">nline Exam</span>

              <!-- <span class="app-brand-text demo text-body fw-bolder">Sneat</span> -->

            </div>
            <div v-if="get_state_error" class="alert alert-warning" role="alert">Phiên hoạt động đã hết! Vui lòng đăng nhập lại</div>
            <!-- /Logo -->
            <h4 class="mb-3">Welcome to Student</h4>
            <!-- <p class="mb-4">Vui lòng đăng nhập vào tài khoản của bạn và bắt đầu trải nghiệm</p> -->

            <Form @submit="submit()" :validation-schema="userFormSchema" v-slot="{ errors }" id="formAuthentication"
              class="mb-3">
              <div class="mb-3">
                <!-- <Field type="text" class="form-control"
                  :class="{ ' is-valid': !errors.exam_submit_code_title && exam_submit_code_local.exam_submit_code_title }"
                  v-bind:class="{ 'is-invalid': errors.exam_submit_code_title }" name="exam_submit_code_title"
                  v-model="exam_submit_code_local.exam_submit_code_title" />
                <ErrorMessage name="exam_submit_code_title" class="error-feedback" />
                <span> {{ errors.exam_submit_code_title }} </span> -->

                <label for="email" class="form-label">Mã số sinh viên</label>
                <Field type="text" v-model="student.email" class="form-control" @keyup ="state_login = false"
                  :class="{ ' is-valid': !errors.email && student.email }"
                  v-bind:class="{ 'is-invalid': errors.email || state_login.message }" name="email" />
                  <ErrorMessage name="email" class="invalid-feedback" />
                  <span  v-if="state_login" class="invalid-feedback"> {{ state_login.message }}</span> 
                <!-- <span> {{ errors.email }} </span> -->

              </div>
              <div class="mb-3 form-password-toggle">
                <div class="d-flex justify-content-between">
                  <label class="form-label" for="password">Password</label>
                  <a href="auth-forgot-password-basic.html">
                    <small>Forgot Password?</small>
                  </a>
                </div>
                <div class="input-group input-group-merge">

                  <Field type="text" v-model="student.password" class="form-control"
                  :class="{ ' is-valid': !errors.password && student.password }"
                  v-bind:class="{ 'is-invalid': errors.password }" name="password" />
                  <!-- <ErrorMessage name="email" class="error-feedback" />
                <span> {{ errors.email }} </span> -->

                  <!-- <input type="password" v-model="student.password" id="password" class="form-control" name="password"
                    placeholder="············" aria-describedby="password">-->
                  <span class="input-group-text cursor-pointer"><i class="bx bx-hide"></i></span> 
                  <ErrorMessage name="password" class="invalid-feedback" />
                </div>
                
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="remember-me">
                  <label class="form-check-label" for="remember-me"> Remember Me </label>
                </div>
              </div>
              <div class="mb-3">
                <button @click="login($event)" class="btn btn-primary d-grid w-100">Sign in</button>
              </div>
            </Form>

            <p class="text-center">
              <span>New on our platform?</span>
              <a href="auth-register-basic.html">
                <span>Create an account</span>
              </a>
            </p>
          </div>
        </div>
        <!-- /Register -->
      </div>
    </div>
  </div>
</template>

<script setup>

import { onMounted, reactive, watchEffect } from 'vue';
import * as yup from "yup";
import { Form, Field, ErrorMessage, } from "vee-validate";
import { storeToRefs } from 'pinia';
import { useStudentStore } from "../stores/student.js"
const {state_login } = storeToRefs(useStudentStore());
const { action_login } = useStudentStore();

import { useIndexStore } from "../stores/index.js"
const { get_state_error } = storeToRefs(useIndexStore());
const {  } = useIndexStore();

import { usePeriodStore } from "../stores/period.js"
const { get_all_periods } = storeToRefs(usePeriodStore());
const { action_all_periods } = usePeriodStore();

import { useRoute, useRouter } from 'vue-router'
const route = useRoute();//
const router = useRouter() 

const userFormSchema = yup.object().shape({
  email: yup
    .string()
    .required("Vui lòng điền trường này")
    .min(5, "Tên phải ít nhất 5 ký tự.")
    .max(100, "Tên có nhiều nhất 100 ký tự."),

  password: yup
    .string()
    .required("Vui lòng điền trường này")
    .min(5, "Tên phải ít nhất 5 ký tự.")
    .max(100, "Tên có nhiều nhất 100 ký tự."),

});
const student = reactive({
  email: "vinh@student.ctu.edu.vn",
  password: "123456789"
});

async function login(event) {
  event.preventDefault();

  await action_login(student);
 await action_all_periods();
  // router.push({
  //       name: "Courses",
  //       query:{id: get_all_periods.value[0]._id}
  //   }
  //   );
  window.history();
}

// watchEffect(()=>{
//   console.log(student.username, student.password);
// })


</script>