
<template>
    <div class="content-wrapper">
        <div class="container-xxl flex-grow-1 container-p-y">

            <div class="">
                <Form @submit="" class="row  " id="courses_add" :validation-schema="QuestionBankFormSchema"
                    v-slot="{ errors }">

                    <div class="col-md-4 mb-3">
                        <label for="validationServer" class="form-label mb-0">
                            <h6>Ngân hàng câu hỏi</h6>
                        </label>
                        <Field class="form-select" as="select" name="subject_id" aria-label="select coursesple"
                            v-model="question_bank_local._id">
                            <!-- <option v-show="false" value="" disabled>Vui lòng chọn ng</option> -->
                            
                            <option v-for="question_bank in get_all_question_submit_code_banks" :key="question_bank._id"
                                :value="question_bank._id"> {{
                                    question_bank.question_submit_code_bank_title }}</option>

                        </Field>
                        <ErrorMessage name="subject_id" class="error-feedback" />
                    </div>
                    <div class="col-md-3 mb-3">
                        <label for="validationServer" class="form-label mb-0">
                            <h6>Chủ sỡ hữu</h6>
                        </label>
                        <Field class="form-select" as="select" name="subject_id" aria-label="select coursesple"
                            v-model="question_bank_local._id">
                            <!-- <option v-show="false" value="" disabled>Vui lòng chọn ng</option> -->
                            <option value="all">Chung</option>
                            <!-- <option value="all">Người khác</option> -->
                            <option value="all">Người khác</option>
                            <option value="all">Tôi</option>
                            <!-- <option v-for="question_bank in get_all_question_submit_code_banks" :key="question_bank._id"
                                :value="question_bank._id"> {{
                                    question_bank.question_submit_code_bank_title }}</option> -->

                        </Field>
                        <ErrorMessage name="subject_id" class="error-feedback" />
                    </div>
                </Form>


                <!-- <h4 v-if="1" class="fw-bold py-3 "><span>{{  }}</span> {{ get_one_question_submit_code_bank.question_submit_code_bank_title }}
                    <span v-show="route.name == 'TopicAdd'">/ Thêm chủ đề</span>
                    <span v-show="route.name == 'TopicEdit'">/ {{  }} </span>
                </h4> -->

                <div class="nav-align-top mb-4">
                    <ul class="nav nav-tabs" role="tablist">
                        <li class="nav-item ">
                            <router-link type="button" class="nav-link " :class="{
                                active: route.name == 'QuestionSubmitcodeBankDetailDashboard' || route.name == 'TopicAdd'
                                    || route.name == 'TopicEdit'
                            }" :to="{
    name: 'QuestionSubmitcodeBankDetailDashboard',
    query: { page: 1 },

    params: { id_question_bank: route.params.id_question_bank }
}">

                                Câu hỏi
                            </router-link>
                        </li>
                        <!-- <li class="nav-item">
                            <router-link type="button" class="nav-link " :class="{ active: route.name == 'CoursesEdit' }"
                                :to="{
                                    name: '',
                                    //params: { id_courses: '65014d42b91ceb293644a6b2'}

                                }">
                                Cài đặt
                            </router-link>
                        </li> -->
                        <li class="nav-item">
                            <router-link type="button" class="nav-link "
                                :class="{ active: route.name == 'QuestionSubmitcodeBankDetailMember' }" :to="{
                                    name: 'QuestionSubmitcodeBankDetailMember',
                                    params: { id_question_bank: route.params.id_question_bank }
                                }">
                                Thành viên
                            </router-link>
                        </li>

                    </ul>
                    <!-- knclkac -->
                    <router-view>

                    </router-view>


                </div>
            </div>


        </div>
    </div>
</template>
<script setup>
import { onMounted, watchEffect, watch, ref, reactive , onBeforeMount} from 'vue';
import * as yup from "yup";
import { Form, Field, ErrorMessage, } from "vee-validate";
import { storeToRefs } from 'pinia';
import { useRoute, useRouter } from 'vue-router'
const route = useRoute();// 
const router = useRouter();
import { useStudy_classStore } from "../stores/study_class"
import { useQuestion_submit_code_bankStore } from "../stores/question_submit_code_bank.js"
const { get_one_question_submit_code_bank, get_all_question_submit_code_banks, one_question_submit_code_bank, lenght, state_question_submit_code_bank } = storeToRefs(useQuestion_submit_code_bankStore());
const { action_one_question_submit_code_bank, action_all_question_submit_code_banks, reset_state_question_submit_code_bank, action_delete_question_submit_code_bank } = useQuestion_submit_code_bankStore();


const question_bank_local = reactive({
    _id: route.params.id_question_bank
});
const QuestionBankFormSchema = yup.object().shape({
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

});

watch(question_bank_local, () => {
    router.push({
        params: { id_question_bank: question_bank_local._id },
        query: { page: 1 }
    }
    );
})


onMounted(() => {
    action_all_question_submit_code_banks(route.params.id_subject);
})
</script>  
