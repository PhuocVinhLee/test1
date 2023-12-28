<template>
    <Form @submit="submit()" class="row  " id="exam_quiz_add" :validation-schema="productFormSchema"
        v-slot="{ errors }">

        <div class="col-md-12 mb-3">
            <label for="validationServer" class="form-label">Tên kỳ thi</label>
            <Field type="text" class="form-control"
                :class="{ ' is-valid': !errors.exam_quiz_title && exam_quiz_local.exam_quiz_title }"
                v-bind:class="{ 'is-invalid': errors.exam_quiz_title }" name="exam_quiz_title"
                v-model="exam_quiz_local.exam_quiz_title" />
            <ErrorMessage name="exam_quiz_title" class="error-feedback" />
            <span> {{ errors.exam_quiz_title }} </span>

        </div>
        <!-- <div class="col-md-6 mb-3">
            <label for="validationServer" class="form-label">Môn thi </label>
            <Field class="form-select" as="select" :class="{ ' is-valid': !errors.subject_id && exam_quiz_local.subject_id }"
                v-bind:class="{ 'is-invalid': errors.subject_id }" name="subject_id" aria-label="select exam_quizple"
                v-model="exam_quiz_local.subject_id">
                <option v-show="false" value="" disabled>Vui lòng chọn môn thi</option>
                <option v-for="subject in subjects.get_all_subjects" :key="subject._id" :value="subject._id"> {{
                    subject.subject_title }}</option>

            </Field>
            <ErrorMessage name="subject_id" class="error-feedback" />
        </div> -->
        <!-- <div class="col-md-6 mb-3">
            <label for="validationServer" class="form-label">Lớp học </label>
            <Field class="form-select "
                :class="{ ' is-valid': !errors.study_class_id && exam_quiz_local.study_class_id }"
                v-bind:class="{ 'is-invalid': errors.study_class_id }" as="select" name="study_class_id" required
                aria-label="select exam_quizple" v-model="exam_quiz_local.study_class_id">
                <option v-show="false" disabled value="">Vui lòng chọn lớp học</option>
                <option v-for="study_class in get_all_study_class" :key="study_class._id" :value="study_class._id">{{
                    study_class.study_class_name }}</option>
            </Field>
            <ErrorMessage name="study_class_id" class="error-feedback" />
        </div> -->
        <div class="col-md-6 mb-3">
            <label for="validationServer" class="form-label">Mật khẩu </label>
            <div class="input-group input-group-merge">
                <Field name="password" :type="showPassword"
                    :class="{ ' is-valid': !errors.password && exam_quiz_local.password, 'is-invalid': errors.password }"
                    class="form-control" v-model="exam_quiz_local.password" />
                <span @click="change_show_password()" class="input-group-text cursor-pointer">
                    <i v-if="showPassword == 'text'" class="bx bx-hide"></i>
                    <i v-else class="bx bx-show"></i>
                </span>
            </div>
            <ErrorMessage name="password" class="error-feedback" />

        </div>
        <div class="col-md-6 mb-3">
            <label for="validationServer" class="form-label">Số lần thi </label>
            <Field name="number_attempts" type="text"
                :class="{ ' is-valid': !errors.number_attempts && exam_quiz_local.number_attempts, 'is-invalid': errors.number_attempts }"
                class="form-control" v-model="exam_quiz_local.number_attempts" />
            <ErrorMessage name="number_attempts" class="error-feedback" />

        </div>
        <!-- <div class="col-md-6 mb-3">
            <label for="validationServer" class="form-label">Tổng số câu hỏi </label>
            <Field name="total_question" type="number"
                :class="{ ' is-valid': !errors.total_question && exam_quiz_local.total_question, 'is-invalid': errors.total_question }"
                class="form-control" v-model="exam_quiz_local.total_question" />
            <ErrorMessage name="total_question" class="error-feedback" />

        </div> -->
        <!-- <div class="col-md-6 mb-3">
            <label for="validationServer" class="form-label">Điểm tối đa</label>
            <Field name="max_marks" type=number step=0.05 min="   "
                :class="{ ' is-valid': !errors.max_marks && exam_quiz_local.max_marks, 'is-invalid': errors.max_marks }"
                class="form-control" v-model="exam_quiz_local.max_marks" />
            <ErrorMessage name="max_marks" class="error-feedback" />

        </div> -->
        <!-- <div class="col-md-6 mb-3">
            <label for="validationServer" class="form-label">Điểm trừ tối đa / câu hỏi </label>
            <Field name="max_percent_marks" type=number step=0.05 max="0" class="form-control"
                :class="{ ' is-valid': !errors.max_percent_marks && exam_quiz_local.max_percent_marks, 'is-invalid': errors.max_percent_marks }"
                v-model="exam_quiz_local.max_percent_marks" />
            <ErrorMessage name="max_percent_marks" class="error-feedback" />

        </div> -->
        <div class="col-md-6 mb-3">
            <label for="validation1Server" class="form-label">Thời gian làm bài </label>
            <Field name="exam_quiz_duration" id="" step="1" type=number
                :class="{ ' is-valid': !errors.exam_quiz_duration && exam_quiz_local.exam_quiz_duration, 'is-invalid': errors.exam_quiz_duration }"
                class="form-control" min="0" v-model="exam_quiz_local.exam_quiz_duration" />
            <ErrorMessage name="exam_quiz_duration" class="error-feedback" />

        </div>
        <div class="col-md-6 mb-3">
            <label for="validationServer" class="form-label">Thời gian bắt đầu </label>
            <Field type=datetime-local name="exam_quiz_datetime_start" id="" class="form-control"
                :class="{ ' is-valid': !errors.exam_quiz_datetime_start && exam_quiz_local.exam_quiz_datetime_start, 'is-invalid': errors.exam_quiz_datetime_start }"
                v-model="exam_quiz_local.exam_quiz_datetime_start" />
            <ErrorMessage name="exam_quiz_datetime_start" class="error-feedback" />

        </div>
        <div class="col-md-6 mb-3">
            <label for="validationServer" class="form-label">Thời gian kết thúc </label>
            <Field type=datetime-local name="exam_quiz_datetime_end" id="" class="form-control"
                :class="{ ' is-valid': !errors.exam_quiz_datetime_end && exam_quiz_local.exam_quiz_datetime_end, 'is-invalid': errors.exam_quiz_datetime_end }"
                v-model="exam_quiz_local.exam_quiz_datetime_end" />
            <ErrorMessage name="exam_quiz_datetime_end" class="error-feedback" />

        </div>
        <!-- <div class="col-md-6 mb-3">
            <label for="validation1Server" class="form-label">Thời gian chờ </label>
            <Field name="exam_quiz_wait" id="" step="1" type=number
                :class="{ ' is-valid': !errors.exam_quiz_wait && exam_quiz_local.exam_quiz_wait, 'is-invalid': errors.exam_quiz_wait }"
                class="form-control" min="0" v-model="exam_quiz_local.exam_quiz_wait" />
            <ErrorMessage name="exam_quiz_wait" class="error-feedback" />

        </div> -->

        <!-- <div class="col-md-6">
                    <label for="validationServer" class="form-label">Hình thức thi </label>
                    <Field class="form-select" as="select"
                        :class="{ ' is-valid': !errors.exam_quiz_type && exam_quiz_local.exam_quiz_type }"
                        v-bind:class="{ 'is-invalid': errors.exam_quiz_type }" name="exam_quiz_type" aria-label="select exam_quizple"
                        v-model="exam_quiz_local.exam_quiz_type">
                        <option v-show="false" value="" disabled>Vui lòng chọn hình thức thi</option>
                        <option value="tracnghiem">Trắc nghiệm</option>
                        <option value="submitcode">Submit code</option>

                    </Field>
                    <ErrorMessage name="exam_quiz_type" class="error-feedback" />
                </div> -->


        <!-- <div class="col-md-6  ">
            <label for="validationServer" class="form-label">Ngôn ngữ</label>
            <div>
                <div class="form-check form-check-inline">
                    <Field class="form-check-input" type="radio" name="lang" id="inlineRadio1" value="Java" />
                    <label class="form-check-label mt-0" for="inlineRadio1">Java</label>
                </div>
                <div class="form-check form-check-inline">
                    <Field class="form-check-input" type="radio" name="lang" id="inlineRadio2" value="Python" />
                    <label class="form-check-label mt-0" for="inlineRadio2">Python</label>
                </div>
                <div class="form-check form-check-inline">
                    <Field class="form-check-input" v-model="exam_quiz_local.lang" type="radio" name="lang"
                        id="inlineRadio4" value="C/C++" />
                    <label class="form-check-label mt-0" for="inlineRadio4">C/C++</label>
                </div>
                <div></div>
                <ErrorMessage name="lang" class="error-feedback" />
            </div>

        </div> -->

        <div class="">
            <button class="btn btn-primary" type="submit">Lưu thay đổi</button>

        </div>

    </Form>
</template>
<script setup>
import * as yup from "yup";
import { Form, Field, ErrorMessage, } from "vee-validate";
import { useExam_quizStore } from "../stores/exam_quiz.js"
import { useSubjectStore } from "../stores/subject.js"
import { useStudy_classStore } from "../stores/study_class.js"
import { ref, reactive, onMounted, watchEffect, watch, computed } from "vue";
import { storeToRefs } from 'pinia';
import { useRoute, useRouter } from 'vue-router'
const route = useRoute();// 
const router = useRouter();// 

const exam_quiz = useExam_quizStore();/////
const { get_one_exam_quiz, exam_quizs, one_exam_quiz, lenght, state_exam_quiz, } = storeToRefs(useExam_quizStore());
const { action_one_exam_quiz, action_all_exam_quizs, action_add_exam_quiz, reset_state_exam_quiz } = useExam_quizStore();

const { get_all_study_class } = storeToRefs(useStudy_classStore());
const { action_all_study_class } = useStudy_classStore();

import { useTopicStore } from "../stores/topic.js"
const { get_one_topic, get_all_topics, topics, one_topic, state_topic,state_active } = storeToRefs(useTopicStore());
const { action_one_topic, action_all_topics, action_add_topic, reset_state_topic, action_add_one_active, reset_state_active } = useTopicStore();


const subjects = useSubjectStore();
const study_class = useStudy_classStore();

import { usePeriodStore } from "../stores/period.js"
const { get_all_periods } = storeToRefs(usePeriodStore());
const { action_all_periods } = usePeriodStore();

//const exam_quiz_local = reactive({});
watchEffect(async () => {
    // await action_all_study_class();;
    // console.log(exam_quiz_local.exam_quiz_title)
    await action_all_periods();
    // exam_quiz_local.study_class_id = get_all_study_class.value[0]._id;
    // exam_quiz_local.value = {
    //     // subject_id: "647058a9c434b9468888a30d",//647057da2a8296117ff62cfd
    //     study_class_id: get_all_study_class.value[0]._id,
    //     total_question: 34,
    //     marks_right: 0.5,
    //     marks_wrong: - 0.5,
    //     exam_quiz_duration: 45,
    //     exam_quiz_datetime: "2023-08-08T18:39",
    //     exam_quiz_title: " thi cong nghe web",
    //     lang: "Java",
    //     period_id: get_all_periods.value[0]._id
    // };
})


const exam_quiz_local = reactive({
    // study_class_id: 1,
    // total_question: 34,
    // max_marks: 10,
    // max_percent_marks: 20,
    exam_quiz_duration: 45,
    exam_quiz_status: 'Khởi tạo',
    //  exam_quiz_datetime_start: now.toISOString().slice(0,16),
    exam_quiz_datetime_end: "",
    // exam_quiz_wait :0,
    exam_quiz_title: " thi cong nghe web",
    // lang: "Java",
    password: null,
    number_attempts: 1

});
const active_local = reactive({

    id: "",
    create_at: "2023-10-04T13:43",
    type: "exam_quiz"

})
//var str = new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });
var now = new Date();
now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
exam_quiz_local.exam_quiz_datetime_start = now.toISOString().slice(0, 19)


exam_quiz_local.exam_quiz_datetime_end = now.toISOString().slice(0, 19)


function auto_close_toast() {
    const myTimeout = setTimeout(reset_state_active, 5000);// thong bao se tu tat sau 5s khi submit
}

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

async function submit() {
    await action_add_exam_quiz(exam_quiz_local); // them exam_quiz vao csdl
    console.log(state_exam_quiz.value.data.insertedId);
     if(state_exam_quiz){
        active_local.id =  await state_exam_quiz.value.data.insertedId;
        await action_add_one_active(route.params.id_topic,{ list_active: active_local});
    }
    
    auto_close_toast();// tu tat thong bao
    router.push({
        name: "CoursesDetailDashboard"
    }
    );
    // window.history.back();
}
const productFormSchema = yup.object().shape({
    exam_quiz_title: yup
        .string()
        .required("Vui lòng điền trường này")
        .min(5, "Tên phải ít nhất 5 ký tự.")
        .max(100, "Tên có nhiều nhất 100 ký tự."),
    // study_class_id: yup
    //     .string()
    //     .optional()
    //     .required("Vui lòng điền trường này")
    //     .min(1, "Tên phải ít nhất 5 ký tự.")
    //     .max(100, "Tên có nhiều nhất 100 ký tự."),
    // exam_quiz_type: yup
    //     .string()
    //     .optional()
    //     .required("Vui lòng điền trường này")
    //     .min(1, "Tên phải ít nhất 5 ký tự.")
    //     .max(100, "Tên có nhiều nhất 100 ký tự."),
    exam_quiz_duration: yup
        .number().typeError("Vui lòng điền vào số")
        .required("Vui lòng điền trường này")
        .min(1, "Thời gian thi tối thiểu 1 phút.")
        .max(180, "Thời gian thi tối đa 180 phút."),
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
    exam_quiz_duration: yup
        .number().typeError("Vui lòng điền vào số")
        .required("Vui lòng điền trường này")
        .min(1, "Số lượng câu hỏi tối thiểu là 1")

        .max(200, "Số lượng câu hỏi tối đa 200"),
    exam_quiz_datetime_start: yup
        .string()
        .required("Vui lòng điền trường này"),
    exam_quiz_datetime_end: yup
        .string()
        .required("Vui lòng điền trường này"),
        number_attempts: yup
        .string()
        .required("Vui lòng điền trường này"),
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

 } ,
    ['password', 'password'],);


onMounted(() => {
    //exxam.action_one_exam_quiz("649ab26e090127292b6a5a6e");
    // subjects.action_all_subjects();
    // action_all_study_class();;
    // // console.log(exam_quiz_local.exam_quiz_title)
    // action_all_periods();
    // console.log(get_all_study_class.value);
})



</script>
<!-- <style scoped>@import "@/assets/form.css";</style> -->

<style scoped>
.error-feedback {
    color: red;
}
</style>