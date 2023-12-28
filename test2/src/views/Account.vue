<script setup>
import * as yup from "yup";
import { Form, Field, ErrorMessage, } from "vee-validate";
import { ref, reactive, onMounted, watchEffect, watch, computed } from "vue";
import { storeToRefs } from 'pinia';
import { useRoute, useRouter } from 'vue-router'
const route = useRoute();// 
const router = useRouter();// 

import { useTeacherStore } from "../stores/teacher.js"
const { get_all_teachers, get_list_teachers, state_teacher, get_one_teacher } = storeToRefs(useTeacherStore());
const { action_search_teacher, action_one_teacher, action_list_teacher_by_question_bank, action_update_teacher, action_one_acccout_teacher } = useTeacherStore();



const teacher = ref({
    firstname: "Phuoc Vinh",
    lastname: "Le",
    gender: 1,
    password: "",

});
const fileSk = ref({});
const file = ref();
function fileSkUpload(e) {
    // const file = fileSk.value.files;
    file.value = e.target.files[0];// arr
    
};


onMounted(async () => {
    await action_one_acccout_teacher();
    teacher.value = get_one_teacher.value;
    console.log(get_one_teacher.value)
})
const productFormSchema = yup.object().shape({
    // avatar: yup
    // .mixed()
    //     .test("fileSize", "The file is too large", (value) => {
    //     if (!value.length) return true // attachment is optional
    //     return value[0].size <= 2000000
    //   })

    firstname: yup
        .string()
        .required("Vui lòng điền trường này")
        .min(5, "Tên phải ít nhất 5 ký tự.")
        .max(100, "Tên có nhiều nhất 100 ký tự."),
    lastname: yup
        .string()
        .required("Vui lòng điền trường này")
        .min(2, "Tên phải ít nhất 5 ký tự.")
        .max(100, "Tên có nhiều nhất 100 ký tự."),
    password: yup
        .string()
        .required("Vui lòng điền trường này")
        .min(5, "Tên phải ít nhất 5 ký tự.")
        .max(100, "Tên có nhiều nhất 100 ký tự."),
    gender: yup
        .number().typeError("Vui lòng điền vào số")
        .required("Vui lòng điền trường này")
        .min(1, "Thời gian thi tối thiểu 1 phút.")
        .max(2, "Thời gian thi tối đa 180 phút."),
    // [Form.File]: yup.mixed()
    //     .test({
    //         message: 'Please provide a supported file type',
    //         test: (file, context) => {
    //             const isValid = ['png', 'pdf'].includes(getExtension(file?.name));
    //             if (!isValid) context?.createError();
    //             return isValid;
    //         }
    //     })
    //     .test({
    //         message: `File too big, can't exceed ${700000}`,
    //         test: (file) => {
    //             const isValid = file?.size < 700000;
    //             return isValid;
    //         }
    //     })
    // study_class_id: yup
    //     .string()
    //     .optional()
    //     .required("Vui lòng điền trường này")
    //     .min(1, "Tên phải ít nhất 5 ký tự.")
    //     .max(100, "Tên có nhiều nhất 100 ký tự."),
    // exam_submit_code_type: yup
    //     .string()
    //     .optional()
    //     .required("Vui lòng điền trường này")
    //     .min(1, "Tên phải ít nhất 5 ký tự.")
    //     .max(100, "Tên có nhiều nhất 100 ký tự."),
    // exam_submit_code_duration: yup
    //     .number().typeError("Vui lòng điền vào số")
    //     .required("Vui lòng điền trường này")
    //     .min(1, "Thời gian thi tối thiểu 1 phút.")
    //     .max(180, "Thời gian thi tối đa 180 phút."),
    // max_marks: yup
    //     .number().typeError("Vui lòng điền vào số")
    //     .required("Vui lòng điền trường này")
    //     .min(0.1, "Điểm đúng trên câu tối thiểu 0,1 điểm.")
    //     .max(10, "Điểm đúng trên câu tối đa 10 điểm."),
    // max_percent_marks: yup
    //     .number().typeError("Vui lòng điền vào số")
    //     .required("Vui lòng điền trường này")
    //     .min(0, "Điểm sai trên câu tối đa -10 điểm.")
    //     .max(100, "Điểm sai trên câu tối thiểu -0,1 điểm."),

    // total_question: yup
    //     .number().typeError("Vui lòng điền vào số")
    //     .required("Vui lòng điền trường này")
    //     .min(1, "Số lượng câu hỏi tối thiểu là 1")

    //     .max(200, "Số lượng câu hỏi tối đa 200"),

    // lang: yup
    //     .string().
    //     when("exam_submit_code_type", (val, schema) => {
    //         if (val == "submitcode") {  //if exam_submit_code_type exist then apply required else not
    //             return yup.string().required("Vui lòng chọn ngôn ngữ");
    //         } else {
    //             return yup.string().notRequired();
    //         }
    //     }),  
    //   password: yup .string().notRequired(),
    //   exam_submit_code_wait: yup.number().typeError("Vui lòng điền vào số").notRequired()

});
async function submit() {
    console.log(file.value)
    let data = new FormData();
    data.append('file', file.value);
    data.append('firstname', teacher.value.firstname)
    data.append('lastname', teacher.value.lastname)
    data.append('gender', teacher.value.gender)
    data.append('password', teacher.value.password),
    data.append('avatar', teacher.value.avatar)
console.log(data);
   await action_update_teacher(data);
    await action_one_acccout_teacher();
    teacher.value = get_one_teacher.value;
    // auto_close_toast();// tu tat thong bao
    // router.push({
    //     name: "CoursesDetailDashboard"
    // }
    // );
    // window.history.back();
}


var now = new Date();
now.setMinutes(now.getMinutes() - now.getTimezoneOffset());

</script>
<template>
    <div class="container-xxl flex-grow-1 container-p-y">

        <div class="card mb-4">
            <h5 class="card-header">Profile Details</h5>
            <!-- Account -->

            <hr class="my-0">
            <div class="card-body">
                <Form @submit="submit()" :validation-schema="productFormSchema" v-slot="{ errors }"   enctype="multipart/form-data">
      <div class="row">
                        <!-- <Field type="text" class="form-control"
                            :class="{ ' is-valid': !errors.exam_submit_code_title && exam_submit_code_local.exam_submit_code_title }"
                            v-bind:class="{ 'is-invalid': errors.exam_submit_code_title }" name="exam_submit_code_title"
                            v-model="teacher.firstname" />
                        <ErrorMessage name="exam_submit_code_title" class="error-feedback" />
                        <span> {{ errors.exam_submit_code_title }} </span> -->
                       

                        <div class="d-flex align-items-start align-items-sm-center gap-4 mb-3">
                            <img :src="`http://localhost:3000/files/`+teacher.avatar" alt="user-avatar" class="d-block rounded" height="100"
                                width="100" id="uploadedAvatar">
                            <div class="button-wrapper">
                                <label for="upload" class="btn btn-primary me-2 mb-4" tabindex="0">
                                    <span class="d-none d-sm-block">Upload new photo</span>
                                    <i class="bx bx-upload d-block d-sm-none"></i>
                                    <input class="account-file-input" type="file"   multiple hidden="" name="fileSk" id="upload"  ref="fileSk"
                                        @change="fileSkUpload($event)" />
                                    <!-- <Field  v-model="teacher.avatar" type="file" @change=""  name="avatar" id="upload" class="account-file-input" hidden=""
                                        accept="image/png, image/jpeg"/> -->
                                </label>
                               

                                <p class="text-muted mb-0">Allowed JPG, GIF or PNG. Max size of 800K</p>
                            </div>
                        </div>

                        <div class="mb-3 col-md-6">
                            <label for="firstName" class="form-label">First Name</label>
                            <Field class="form-control" :class="{ ' is-valid': !errors.firstname && teacher.firstname }"
                                v-bind:class="{ 'is-invalid': errors.firstname }" v-model="teacher.firstname" type="text"
                                id="firstName" name="firstname" autofocus="" />
                            <ErrorMessage name="firstname" class="error-feedback" />
                        </div>
                        <div class="mb-3 col-md-6">
                            <label for="lastname" class="form-label">Last Name</label>
                            <Field class="form-control" :class="{ ' is-valid': !errors.lastname && teacher.lastname }"
                                v-bind:class="{ 'is-invalid': errors.lastname }" v-model="teacher.lastname" type="text"
                                name="lastname" autofocus="" />
                            <ErrorMessage name="lastname" class="error-feedback" />
                        </div>
                        <div class="mb-3 col-md-6">
                            <label for="validationServer" class="form-label">Giới tính</label>
                            <Field class="form-select " :class="{ ' is-valid': !errors.gender && teacher.gender }"
                                v-bind:class="{ 'is-invalid': errors.gender }" as="select" name="gender" required
                                aria-label="select" v-model="teacher.gender">

                                <option :value="1">Nam</option>
                                <option :value="2">Nữ</option>
                            </Field>
                            <ErrorMessage name="gender" class="error-feedback" />


                        </div>
                        <div v-show="false" class="mb-3 col-md-6">
                            <label for="password" class="form-label">Password</label>
                            <Field class="form-control" :class="{ ' is-valid': !errors.password && teacher.password }"
                                v-bind:class="{ 'is-invalid': errors.password }" v-model="teacher.password" type="text"
                                name="password" autofocus="" />
                            <ErrorMessage name="password" class="error-feedback" />
                        </div>

                    </div>
                    <div class="mt-2">
                        <button type="submit" class="btn btn-primary me-2">Lưu thay đổi</button>
                        <button type="reset" class="btn btn-outline-secondary">Hủy</button>
                    </div>
                </Form>
            </div>
            <!-- /Account -->
        </div>
    </div>
</template>