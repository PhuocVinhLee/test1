
<template>
    <!-- <div class="content-wrapper">
        <div class="container-xxl flex-grow-1 container-p-y"> -->

    <!-- <div class="container-xxl flex-grow-1 container-p-y"> -->

    <!-- <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Tables /</span> Basic Tables</h4> -->

    <!-- add exam_submit_code-->

    <!-- <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Exam_submit_code /</span> Exam_submit_code submit code_add</h4> -->
    <!-- list exam_submit_code -->
    <!-- <div class="card">

                <div class="card-body "> -->
    <div class="tab-content">
        <div class="tab-pane fade show active" id="navs-top-home" role="tabpanel">
          
            <form class="form" files="true" @submit.prevent="onSubmit" enctype="multipart/form-data">
                <div class="form-group my-3">
                    <label>
                        <input type="file" multiple class="form-control" name="fileSk" id="fileSk" ref="fileSk"
                            @change="fileSkUpload($event)" />
                    </label>
                </div>
                <div v-show="list_files[0]">
                    <div class="table-responsive text-nowrap">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>Filename</th>
                                    <th>Type</th>
                                    <th>Size</th>
                                    <th>Date Modified</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <VueDraggableNext v-model="list_files" tag="tbody" @start="drag = true" @end="drag = false">
                                <tr v-for="file, index1 in list_files" :key="index1">
                                    <td><i class="fab fa-angular fa-lg text-danger me-3"></i> <strong>{{ file.name
                                    }}</strong></td>
                                    <td>{{ file.type }}
                                        <div class="link-danger">{{ file.err_type }}</div>
                                        <!-- <span class="alert alert-danger" role="alert">This is a danger alert — check it out!</span> -->
                                    </td>
                                    <td>
                                        {{ parseInt(file.size / 1024) + 'KB' }}
                                        <div class="link-danger">{{ file.err_size }}</div>
                                    </td>
                                    <td>
                                        <div> {{ currentDate(file.lastModifiedDate) }}</div>
                                    </td>
                                    <td>

                                        <button type="button" class="btn btn-primary"
                                            @click.preventDefault="delete_one_file(index1)">Xóa</button>
                                    </td>
                                </tr>
                            </VueDraggableNext>




                            <!-- <tbody class="table-border-bottom-0">
                                    <tr v-for="(file, index) in  list_files" :key="index">

                                        <td><i class="fab fa-angular fa-lg text-danger me-3"></i> <strong>{{ file.name
                                        }}</strong></td>
                                        <td>{{ file.type }}
                                            <div class="link-danger">{{ file.err_type }}</div>
                                            
                                        </td>
                                        <td>
                                            {{ parseInt(file.size / 1024) + 'KB' }}
                                            <div class="link-danger">{{ file.err_size }}</div>
                                        </td>
                                        <td>
                                            <div> {{ currentDate(file.lastModifiedDate) }}</div>
                                        </td>
                                        <td>

                                            <button class="btn btn-primary" @click="delete_one_file(index)">Xóa</button>
                                        </td>
                                    </tr>

                                </tbody> -->
                        </table>
                    </div>



                    <div v-show="progress" class="progress">
                        <div class="progress-bar progress-bar-striped bg-primary" role="progressbar"
                            :style="{ 'width': progress + '%' }" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                            {{ progress + "%" }}
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary mt-3">Submit</button>
                </div>
            </form>


            <div>
                <!-- <Form @submit="submit()" enctype="multipart/form-data" class="row " id="exam_add"
                            :validation-schema="productFormSchema" v-slot="{ errors }">
{{ errors }}
                            <div class="col-md-12 mb-3">
                <label for="validationServer" class="form-label">Tên câu hỏi</label>
                <Field type="text" class="form-control"
                    :class="{ ' is-valid': !errors.question_submit_code_bank_title && question_submit_code_bank.question_submit_code_bank_title }"
                    v-bind:class="{ 'is-invalid': errors.question_submit_code_bank_title }"
                    name="question_submit_code_bank_title"
                    v-model="question_submit_code_bank.question_submit_code_bank_title" />
                <ErrorMessage name="question_submit_code_bank_title" class="error-feedback" />
                <span> {{ errors.question_submit_code_bank_title }} </span>

            </div>
                            <div class="col-md-12 mb-3">
                                <label for="validationServer" class="form-label">Tên câu hỏi</label>
                                <Field type="file" class="form-control"
                                    :class="{ ' is-valid': !errors.file && question_submit_code_bank.file }"
                                    v-bind:class="{ 'is-invalid': errors.file }"
                                    name="file" v-model="question_submit_code_bank.file"
                                    @change="selectFile()" />
                                <ErrorMessage name="file" class="error-feedback" />
                                <span> {{ errors.file }} </span>

                            </div>






                            <div class="col-md-6">


                            </div>

                            <div class="mb-3">
                                <button type="button" class="btn btn-secondary me-3" data-bs-dismiss="modal">Đóng</button>
                                <button class="btn btn-primary" id="closemodal" type="submit">Lưu thay đổi</button>

                            </div>

                        </Form> -->

            </div>



        </div>

        <!-- </div> -->

    </div>
    <!-- </div>
    </div> -->
</template>
<script setup>
import { onMounted, reactive, ref } from 'vue';


import { storeToRefs } from 'pinia';
import { useRoute, useRouter } from 'vue-router'
const route = useRoute();// 
const router = useRouter();
import * as yup from "yup";
import { Form, Field, ErrorMessage, } from "vee-validate";

import { useExam_submit_codeStore } from "../stores/exam_submit_code.js"
const { get_one_exam_submit_code, exam_submit_codes, one_exam_submit_code, lenght, state_exam_submit_code } = storeToRefs(useExam_submit_codeStore());
const { action_one_exam_submit_code, action_all_exam_submit_codes, reset_state_exam_submit_code, action_delete_exam_submit_code } = useExam_submit_codeStore();

import { usedocumentStore } from "../stores/document.js"
const { get_documents, get_state_documents } = storeToRefs(usedocumentStore());
const { action_add_documents, action_add_arr_documents, action_one_documents } = usedocumentStore();
import { VueDraggableNext } from 'vue-draggable-next'


import { useTopicStore } from "../stores/topic.js"
const { get_one_topic, get_all_topics, topics, one_topic, state_topic,state_active } = storeToRefs(useTopicStore());
const { action_one_topic, action_all_topics, action_add_topic, reset_state_topic, action_add_one_active, reset_state_active } = useTopicStore();


const question_submit_code_bank = reactive({
    question_submit_code_bank_title: " Môn công nghệ web AA 1",
    // question_submit_code_bank_authorization: 'use',
    // question_submit_code_bank_type: 'private',
    subject_id: route.query.id,
    // list_teacher_id: "",
});





const Form_submitcode = reactive({
    question_submit_code_bank_title: yup
        .string()
        .required("Vui lòng điền trường này")
        .min(5, "Tên phải ít nhất 5 ký tự.")
        .max(100, "Tên có nhiều nhất 100 ký tự."),
    file: yup
        .mixed()
        .nullable()
        .required('A file is required')
    // .test('Fichier taille',
    //     'upload file', (value) => !value || (value && value.size <= 1024 * 1024))
    // .test('format',
    //     'upload file', (value) => !value || (value && SUPPORTED_FORMATS.includes(value.type))),

    // question_submit_code_bank_type: yup
    //     .string()
    //     .required("Vui lòng điền trường này")
    //     .min(1, "Tên phải ít nhất 5 ký tự.")
    //     .max(100, "Tên có nhiều nhất 100 ký tự."),






})



var productFormSchema = ref(yup.object().shape(Form_submitcode));

const fileSk = ref([]);
const list_files = ref([]);

function fileSkUpload(e) {
    // const file = fileSk.value.files;
    fileSk.value = e.target.files;// arr
    list_files.value = e.target.files;

    console.log(list_files.value)
    list_files.value = [...fileSk.value].map((file) => {
        const max_size = 700000;
        const allowedType = ["application/pdf"];
        if (!allowedType.includes(file.type)) {
            file.err_type = "Type file wrong !";
            return file;
        }
        if (file.size > max_size) {
            file.err_size = "Max size " + max_size / 1000 + "Kb";
            return file;
        }


        return file;
    })

    // console.log(list_files.value);

}

function currentDate(date_time) {
    const current = new Date(date_time);
    const date = `${current.getHours()}:${current.getMinutes()}:${current.getSeconds()} - ${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    return date;
}

function delete_one_file(index) {
    list_files.value = [...list_files.value].filter((file, ind) => {

        return index != ind;


    })


}

function onUploadProgress(progressEvent) {
    var progress = parseInt(Math.round((progressEvent.loaded / progressEvent.total) * 100));
    if (config.onProgress) config.onProgress(progress);
}

const progress = ref(0);
let now = new Date();
now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
const active_local = reactive({

    id: "",
    create_at: now.toISOString().slice(0, 19),
    type: "document"

})
async function onSubmit() {
    console.log(list_files.value);
    let check_err = true;

    [...list_files.value].forEach((file) => {
        if (file.err_size || file.err_type || !file) {
            check_err = false;
        }

    })
    if (check_err) {
        let data = new FormData();
        for (const file of [...list_files.value]) {
            data.append('files', file);
            data.append('tenfile', "test")
        }
        // data.append('files_title', "ten file")
        progress.value = 0;
        await action_add_arr_documents("3876489264923949353", data, {
            onUploadProgress: progressEvent => {

                var progress1 = parseInt(Math.round((progressEvent.loaded / progressEvent.total) * 100));
            
                progress.value = progress1
               
            }
        })
        console.log(get_state_documents.value)
        const list_id_document = (get_state_documents.value.insertedIds);//Proxy(Object) {acknowledged: true, insertedCount: 5, insertedIds: {…}}

        for (const key in list_id_document) {
            console.log(list_id_document[key])
            active_local.id = list_id_document[key]
            await action_add_one_active(route.params.id_topic,{ list_active: active_local});
        }
auto_close_toast()
        router.push({
        name: "CoursesDetailDashboard", params: {   id_course: route.params.id_course }
    }
    );
   

    }
    else {

    }

}

async function submit() {
    await action_add_documents(Form_submitcode);
    console.log(get_documents.value)
}

function auto_close_toast() {
    const myTimeout = setTimeout(reset_state_active, 5000);
}

function close_toast() {
    reset_state_active();
}


// onMounted(() => {
//     action_all_exam_submit_codes(1);// chu yeu de lay leght cua exam_submit_code

// })
</script>  

