<template>
    <Form @submit="submit()" class="row  " id="topic_add" :validation-schema="productFormSchema" v-slot="{ errors }">

        {{ errors }}
        <div class="col-md-12 mb-3">
            <label for="validationServer" class="form-label">Tên chủ đề</label>
            <Field type="text" class="form-control" :class="{ ' is-valid': !errors.topic_title && topic_local.topic_title }"
                v-bind:class="{ 'is-invalid': errors.topic_title }" name="topic_title" v-model="topic_local.topic_title" />
            <ErrorMessage name="topic_title" class="error-feedback" />
            <span> {{ errors.topic_title }} </span>

        </div>


        <div class="col-md-6 mb-3">
            <label for="validationServer" class="form-label">Mô tả chủ đề </label>
            <Field type="text" class="form-control " v-slot="{ field, errors }"
                                    :class="{ ' is-valid': !errors.topic_describe && topic_local.topic_describe }"
                                    v-bind:class="{ 'is-invalid': errors.topic_describe }"
                                    name="topic_describe"
                                    v-model="topic_local.topic_describe">
                                    <textarea v-bind="field" name="topic_describe"
                                        :class="{ 'is-valid': !errors.topic_describe && topic_local.topic_describe, ' is-invalid': errors[0] }"
                                        class="form-control " id="exampleFormControlTextarea1" rows="3">

                                    </textarea>
                                    
                                    <ErrorMessage v-if="errors[0]" name="topic_describe"
                                        class="error-feedback" />
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
</template>
<script setup>
import * as yup from "yup";
import { Form, Field, ErrorMessage, } from "vee-validate";
import { useTopicStore } from "../stores/topic.js"
import { useSubjectStore } from "../stores/subject.js"
import { useStudy_classStore } from "../stores/study_class.js"
import { ref, reactive, onMounted, watchEffect, watch, computed } from "vue";
import { storeToRefs } from 'pinia';
import { useRoute, useRouter } from 'vue-router'
const route = useRoute();// 
const router = useRouter();// 

const topic = useTopicStore();/////
const { get_one_topic, topics, one_topic, lenght, state_topic, } = storeToRefs(useTopicStore());
const { action_one_topic, action_all_topics,action_update_topic, action_add_topic, reset_state_topic } = useTopicStore();

const { get_all_study_class } = storeToRefs(useStudy_classStore());
const { action_all_study_class } = useStudy_classStore();

const subjects = useSubjectStore();
const study_class = useStudy_classStore();

import { usePeriodStore } from "../stores/period.js"
const { get_all_periods } = storeToRefs(usePeriodStore());
const { action_all_periods } = usePeriodStore();

const topic_local = ref(
    get_one_topic
);



function auto_close_toast() {
    const myTimeout = setTimeout(reset_state_topic, 5000);// thong bao se tu tat sau 5s khi submit
}

async function submit() {
   // console.log(topic_local.value)
    await action_update_topic(route.params.id_topic, topic_local.value); // them topic vao csdl
    auto_close_toast();// tu tat thong bao
    router.push({
        name: "CoursesDetailDashboard"
    }
    );
    // window.history.back();
}
const productFormSchema = yup.object().shape({
    topic_title: yup
        .string()
        .required("Vui lòng điền trường này")
        .min(5, "Tên phải ít nhất 5 ký tự.")
        .max(100, "Tên có nhiều nhất 100 ký tự."),
    topic_describe: yup
        .string()
        .required("Vui lòng điền trường này"),

});


onMounted(() => {
    action_one_topic(route.params.id_topic);
    console.log(topic_local.value);
})



</script>
