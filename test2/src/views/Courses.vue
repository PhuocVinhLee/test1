<template>
    <!-- Content wrapper -->
    <div class="content-wrapper">
        <!-- Content -->

        <div class="container-xxl flex-grow-1 container-p-y">
            <div class="d-flex mb-4">
                <div class="me-3 ">
                    <router-link class="d-block" :to="{
                        name: 'CoursesAdd'
                    }">
                        <input type="checkbox" class="btn-check" id="btn-check" autocomplete="off">
                        <label class="btn btn-primary" for="btn-check">Thêm khóa học</label>
                    </router-link>

                </div>
                <div class=" ">
                    <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
                        <div class="btn-group" role="group" aria-label="Button group with nested dropdown">

                            <!-- <div class="btn-group" role="group">
                                <button id="btnGroupDrop1" type="button" class="btn btn-outline-primary  dropdown-toggle"
                                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    All
                                </button>
                                <div class="dropdown-menu" aria-labelledby="btnGroupDrop1" style="">
                                    <a class="dropdown-item" href="javascript:void(0);">Dropdown link</a>
                                    <a class="dropdown-item" href="javascript:void(0);">Dropdown link</a>
                                </div>
                            </div> -->
                            <select class="form-select" as="select" aria-label="select exam_quizple"
                                v-model="filter_course">
                                <option value="All">All</option>
                                <option v-for=" subject in get_all_subjects" :key="subject._id" :value="subject._id">
                                    {{ subject.subject_title }}</option>


                            </select>
                        </div>

                    </div>
                </div>
            </div>


            <div class="row">
                <div class="col-xl-3 col-lg-4 col-md-6 col-12 mb-4" v-for="study_class in list_study_class">

                    <router-link class="card" :to="{
                        name: 'CoursesDetailDashboard',
                        params: { id_courses: study_class._id }

                    }">


                        <div class="card-body">
                            <div class="card-title d-flex align-items-start justify-content-between">
                                <div class="avatar flex-shrink-0">
                                    
                                </div>
                                <div class="dropdown">
                                    <button class="btn p-0" type="button" id="cardOpt4" data-bs-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">
                                        <i class="bx bx-dots-vertical-rounded"></i>
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt4">
                                        <router-link class="dropdown-item" :to="{
                                            name: 'CoursesEdit',
                                            params: { id_courses: study_class._id }
                                        }"> Edit</router-link>
                                        <!-- <router-link class="dropdown-item" :to="{
                                            name: 'CoursesEdit',
                                            params: { id_courses: study_class._id }
                                        }"> Delete</router-link> -->
                                        <!-- // <a class="dropdown-item" href="javascript:void(0);">View More</a>
                        // <a class="dropdown-item" href="javascript:void(0);">Delete</a> -->
                                    </div>
                                </div>
                            </div>
                            <span class="d-block mb-1">{{ study_class.study_class_title }}</span>
                            <span class="text-black" v-if="study_class.subject"><span>Môn học: </span> <strong>{{ study_class.subject.subject_title }}</strong></span>
                            <div class="text-black"> Tổng cộng: <strong v-if="study_class.list_student"
                                    class="card-title text-nowrap mb-2">{{ study_class.list_student.length }}</strong>
                                <strong v-else class="card-title text-nowrap mb-2">0 </strong>
                                thành viên
                            </div>
                        </div>
                    </router-link>
                </div>




            </div>

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
                        Bạn đã cập nhật dữ liệu thành công
                    </div>
                </div>
            </div>


        </div>


        <!-- Footer -->
        <footer class="content-footer footer bg-footer-theme">
            <div class="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
                <div class="mb-2 mb-md-0">
                    ©

                    , made with ❤️ by
                    <a href="https://themeselection.com" target="_blank" class="footer-link fw-bolder">ThemeSelection</a>
                </div>
                <div>
                    <a href="https://themeselection.com/license/" class="footer-link me-4" target="_blank">License</a>
                    <a href="https://themeselection.com/" target="_blank" class="footer-link me-4">More Themes</a>

                    <a href="https://themeselection.com/demo/sneat-bootstrap-html-admin-template/documentation/"
                        target="_blank" class="footer-link me-4">Documentation</a>

                    <a href="https://github.com/themeselection/sneat-html-admin-template-free/issues" target="_blank"
                        class="footer-link me-4">Support</a>
                </div>
            </div>
        </footer>
        <!-- / Footer -->

        <div class="content-backdrop fade"></div>
    </div>
    <!-- Content wrapper -->
</template>


<script setup>

import { onMounted, watchEffect, watch, ref } from 'vue';
// import Exam_submit_codeFormAdd from "@/components/Exam_submit_codeFormAdd.vue";
// import Exam_submit_codeFormEdit from "@/components/Exam_submit_codeFormEdit.vue";
import CoursesTable from "@/components/CoursesTable.vue";
import Pagination from "@/components/Pagination.vue";
import { useStudy_classStore } from "../stores/study_class.js"
import { storeToRefs } from 'pinia';
import { useRoute, useRouter } from 'vue-router'

import dashboards from '../assets/js/dashboards-analytics';

import { usePeriodStore } from "../stores/period.js"
const { get_all_periods } = storeToRefs(usePeriodStore());
const { action_all_periods } = usePeriodStore();


onMounted(() => {
    dashboards();

})

const route = useRoute();// 

const { get_one_study_class, get_all_study_class, study_classs, one_study_class, lenght, state_study_class } = storeToRefs(useStudy_classStore());
const { action_one_study_class, action_all_study_class, reset_state_study_class, action_delete_study_class } = useStudy_classStore();

import { useTeacherStore } from "../stores/teacher.js"
const { get_all_teachers, get_list_teachers, state_teacher, get_one_teacher } = storeToRefs(useTeacherStore());
const { action_search_teacher, action_one_teacher, action_list_teacher_by_question_bank, action_update_teacher, action_one_acccout_teacher } = useTeacherStore();


import { useSubjectStore } from "../stores/subject.js"
const { get_all_subjects, get_all_subjects_peroid_teacher, get_one_subjects } = storeToRefs(useSubjectStore());
const { action_all_subjects, action_one_subjects,action_all_subjects_by_period_teacher } = useSubjectStore();




function emit_page(page) {
    console.log(page);
    // action_all_study_classs(page);// click vao page o duoi 
}

function auto_close_toast() {
    const myTimeout = setTimeout(reset_state_study_class, 5000);
}

function close_toast() {
    reset_state_study_class();
}
async function delete_study_class(id, event) {
    console.log(event);
    event.preventDefault()
    await action_delete_study_class(id);
    await action_all_study_classs(route.query.page);
    auto_close_toast();// auto dong thong bao
    const myModalEl = document.getElementById('btn-close-delete');
    myModalEl.click();// close model

}

async function map_student(){
  for (const [ index, study_classs] of  list_study_class.value.entries()) {
    console.log(study_classs)
    if(study_classs.teacher_id){
     await action_one_teacher(study_classs.teacher_id);
     list_study_class.value[index].teacher = get_one_teacher.value;
     
    }
    if(study_classs.subject_id){
     await action_one_subjects(study_classs.subject_id);
     list_study_class.value[index].subject = get_one_subjects.value;
     
    }
  }

  
}

const list_study_class = ref([]);
const list_study_class_local = ref([]);
async function study_class_form_teacher_id() {
    await action_one_acccout_teacher();
    await action_all_study_class(route.query.id);
    list_study_class.value = get_all_study_class.value.filter((study_class) => {
        return get_one_teacher.value._id == study_class.teacher_id;
    })
    list_study_class_local.value = list_study_class.value;
    map_student();
}   

const filter_course = ref("All");

watch(filter_course, () => {
    console.log("pkeek")
    if (filter_course.value == "All") {
        list_study_class.value = list_study_class_local.value
    } else {
        list_study_class.value = list_study_class_local.value.filter((study_class) => {
            return study_class.subject_id == filter_course.value;
        })
    }
})
watch(route, async () => {
    study_class_form_teacher_id();

})
onMounted(async () => {
    await action_all_subjects();
    study_class_form_teacher_id();
    
    console.log(get_all_subjects.value)
});

</script>  
<style scoped>
.bg-fff {
    background-color: #fff;
}
</style>
