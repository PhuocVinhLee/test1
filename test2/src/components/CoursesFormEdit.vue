<template>
    <Form @submit="submit()" class="row  " id="courses_add" :validation-schema="study_classFormSchema" v-slot="{ errors }">

        <div class="col-md-12 mb-3">
            <label for="validationServer" class="form-label">Tên Lớp học</label>
            <Field type="text" class="form-control"
                :class="{ ' is-valid': !errors.study_class_title && study_class_local.study_class_title }"
                v-bind:class="{ 'is-invalid': errors.study_class_title }" name="study_class_title"
                v-model="study_class_local.study_class_title" />
            <ErrorMessage name="study_class_title" class="error-feedback" />
            <!-- <span> {{ errors.study_class_title }} </span> -->

        </div>
        <div class="col-md-6 mb-3">
            <label for="validationServer" class="form-label">Môn học</label>
            <Field class="form-select" as="select"
                :class="{ ' is-valid': !errors.subject_id && study_class_local.subject_id }"
                v-bind:class="{ 'is-invalid': errors.subject_id }" name="subject_id" aria-label="select coursesple"
                v-model="study_class_local.subject_id">
                <option v-show="false" value="" disabled>Vui lòng chọn môn thi</option>
                <option v-for="subject in get_all_subjects" :key="subject._id" :value="subject._id"> {{
                    subject.subject_title }}</option>

            </Field>
            <ErrorMessage name="subject_id" class="error-feedback" />
        </div>


        <div class="col-md-6 mb-3">
            <label for="validationServer" class="form-label">Mật khẩu </label>
            <div class="input-group input-group-merge">
                <Field name="password" :type="showPassword"
                    :class="{ ' is-valid': !errors.password && study_class_local.password, 'is-invalid': errors.password }"
                    class="form-control" v-model="study_class_local.password" />
                <span @click="change_show_password()" class="input-group-text cursor-pointer">
                    <i v-if="showPassword == 'text'" class="bx bx-hide"></i>
                    <i v-else class="bx bx-show"></i>
                </span>
            </div>
            <ErrorMessage name="password" class="error-feedback text-danger" />

        </div>
        <div class="col-md-12 mb-3">
            <label for="validationServer" class="form-label">Mô tả chủ đề </label>
            <Field type="text" class="form-control " v-slot="{ field, errors }"
                :class="{ ' is-valid': !errors.study_class_describe && study_class_local.study_class_describe }"
                v-bind:class="{ 'is-invalid': errors.study_class_describe }" name="study_class_describe"
                v-model="study_class_local.study_class_describe">
                <textarea v-bind="field" name="study_class_describe"
                    :class="{ 'is-valid': !errors.study_class_describe && study_class_local.study_class_describe, ' is-invalid': errors[0] }"
                    class="form-control " id="exampleFormControlTextarea1" rows="3">

                                    </textarea>

                <ErrorMessage v-if="errors[0]" name="study_class_describe" class="error-feedback" />
                <!-- <div >{{ errors[0] }}/jkjk</div> -->
            </Field>

            <!-- <Field name="topic_describe" type="text"
                :class="{ ' is-valid': !errors.topic_describe && topic_local.topic_describe, 'is-invalid': errors.topic_describe }"
                class="form-control" v-model="topic_local.topic_describe" /> -->
            <ErrorMessage name="topic_describe" class="error-feedback" />

        </div>





        <div class="">
            <button class="btn btn-primary" type="submit">Lưu thay đổi</button>

        </div>

    </Form>

    <div class="toast-container position-fixed bottom-0 end-0 me-4" v-show="state_study_class">
                <div id="liveToast" class="bs-toast toast fade show bg-primary" role="alert" aria-live="assertive"
                    aria-atomic="true">
                    <div class="toast-header">
                        <i class="bx bx-bell me-2"></i>
                        <div class="me-auto fw-semibold">Bootstrap</div>
                        <small>11 mins ago</small>
                        <button type="button" class="btn-close" @click="close_toast()" aria-label="Close"></button>
                    </div>
                    <div class="toast-body">
                        Bạn đã cập nhật dữ liệu thành công.
                    </div>
                </div>
            </div>
</template>
<script setup>
import * as yup from "yup";
import { Form, Field, ErrorMessage, } from "vee-validate";



import { ref, reactive, onMounted, watchEffect, watch, computed } from "vue";
import { storeToRefs } from 'pinia';
import { useRoute, useRouter } from 'vue-router'
const route = useRoute();// 
const router = useRouter();// 

import { useSubjectStore } from "../stores/subject.js"
const { get_all_subjects } = storeToRefs(useSubjectStore());
const { action_all_subjects } = useSubjectStore();

import { usePeriodStore } from "../stores/period.js"
const { get_all_periods } = storeToRefs(usePeriodStore());
const { action_all_periods } = usePeriodStore();

import { useStudy_classStore } from "../stores/study_class.js"
const { get_one_study_class, state_study_class } = storeToRefs(useStudy_classStore());
const { action_add_study_class, reset_state_study_class, action_one_study_class, action_update_study_class } = useStudy_classStore();

//const courses_local = reactive({});

const study_class_local = reactive(
    get_one_study_class

);
onMounted(async () => {
    await action_one_study_class(route.params.id_courses);
    action_all_subjects();
    action_all_periods();
    console.log(get_one_study_class.value)
})
// watchEffect(async () => {

//     await action_all_subjects();
//     await action_all_periods();
//     // study_class_local.subject_id = get_all_subjects.value[0]._id;
//     // study_class_local.period_id = get_all_periods.value[0]._id;

// })

const study_classFormSchema = yup.object().shape({
    study_class_title: yup
        .string()
        .required("Vui lòng điền trường này")
        .min(5, "Tên phải ít nhất 5 ký tự.")
        .max(100, "Tên có nhiều nhất 100 ký tự."),
    study_class_describe: yup
        .string()
        .required("Vui lòng điền trường này")
        .min(1, "Tên phải ít nhất 5 ký tự.")
        .max(100, "Tên có nhiều nhất 100 ký tự."),
    password: yup
        .string()
        .nullable()
        .notRequired()
        .when('password', {
            is: (value) => value?.length,
            then: (rule) => rule.min(3).required('Password is required').matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*[\]{}()?"\\,><':;|_~`=+-])[a-zA-Z\d!@#$%^&*[\]{}()?"\\,><':;|_~`=+-]{12,99}$/,
                'Mật khẩu chứa ít nhất 12 ký tự, 1 chữ hoa, 1 chữ thường, 1 ký tự đặt biệt và 1 số'
            )
        }),
},
    ['password', 'password'],
);
const showPassword = ref('password');
function change_show_password() {
    if (showPassword.value == "text") {
        showPassword.value = "password"
    } else {
        showPassword.value = "text";
    }
    // (showPassword.value == "text" ? "password" : "text");
    console.log(showPassword.value);
}

function auto_close_toast() {
    const myTimeout = setTimeout(reset_state_study_class, 5000);// thong bao se tu tat sau 5s khi submit
}
function close_toast(){
    reset_state_study_class();
}

async function submit() {
    console.log(study_class_local);
    await action_update_study_class(route.params.id_courses, study_class_local.value); // them courses vao csdl
    auto_close_toast();// tu tat thong bao
    // router.push({
    //     name: "Courses", query: { id: get_all_periods.value[0]._id }
    // }
    // );
    // window.history.back();
}




</script>

<style scoped>
.error-feedback {
    color: red;
}
</style>
