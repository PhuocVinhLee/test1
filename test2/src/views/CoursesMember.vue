
<template>
    <!-- <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Tables /</span> Basic Tables</h4> -->

    <!-- add exam_submit_code-->

    <!-- <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">{{ get_one_courese.courese_name }} /</span> Topic</h4> -->
    <!-- list exam_submit_code -->
    <!-- <div class="card">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h5 class="mb-0">Basic Layout</h5>
            <small class="text-muted float-end">Default label</small>
        </div>
        <div class="card-body"> -->
    <div class="tab-content">
        <div class="tab-pane fade show active" id="navs-top-home" role="tabpanel">
<div v-if="!list_student[0]"> <p class="text-center">Không tìm thấy dữ liệu</p></div>
            <div v-else class="table-responsive text-nowrap">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Tên</th>
                            <th>Mã số sinh viên</th>


                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody class="table-border-bottom-0">

                        <tr v-for=" student in list_student" :key="student._id">
                            <td>
                                <i class="fab fa-bootstrap fa-lg text-primary me-3"></i> <strong>{{ student.username
                                }}</strong>
                            </td>

                            <td>
                                <ul class="list-unstyled users-list m-0 avatar-group d-flex align-items-center">

                                    <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top"
                                        class="avatar avatar-xs pull-up" title="" data-bs-original-title="Christina Parker">
                                        <img src="../assets/img/avatars/7.png" alt="Avatar" class="rounded-circle">
                                    </li>
                                    <span class="ms-2"> {{ student.student_id }}</span>
                                </ul>
                            </td>

                            <td>
                                <button @click="get_infor_student(student._id, student.student_id)" type="button"
                                    class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#basicModal">
                                    Xóa
                                </button>

                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>





        </div>

    </div>
    <div class="mt-3">
        <!-- Button trigger modal -->

        <!-- Modal -->
        <div class="modal fade" id="basicModal" tabindex="-1" aria-hidden="true" style="display: none;">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">

                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <h5>Bạn có muốn xóa ngưởi dùng có mã số <strong> {{ student.student_id }} </strong> ra khỏi lớp học
                            này!.</h5>
                    </div>
                    <div class="modal-footer">
                        <button id="btn-close" type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                            Đóng
                        </button>
                        <button @click="delete_student(student._id)" type="button" class="btn btn-primary">Lưu thay
                            đổi</button>
                    </div>
                </div>
            </div>
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
                        Bạn cập nhật dữ liệu thành công 
                    </div>
                </div>
            </div>
</template>
<script setup>
import { onMounted, ref, reactive } from 'vue';


import { storeToRefs } from 'pinia';
import { useRoute, useRouter } from 'vue-router'
const route = useRoute();// 
import { useStudy_classStore } from "../stores/study_class"
const { get_one_study_class ,state_study_class} = storeToRefs(useStudy_classStore());
const { action_one_study_class, action_update_study_class,reset_state_study_class } = useStudy_classStore();


import { useStudentStore } from "../stores/student.js"
const { get_all_students, get_list_students, state_student, get_one_student } = storeToRefs(useStudentStore());
const { action_search_student, action_one_student, action_list_student_by_question_bank, action_update_student, action_one_acccout_student } = useStudentStore();

function auto_close_toast() {
    const myTimeout = setTimeout(reset_state_study_class, 5000);
}

function close_toast() {
    reset_state_study_class();
}

// action_one_courese(route.params.id_courses);
const list_student = ref([]);

async function get_student() {
    list_student.value = [];
    if(get_one_study_class.value.list_student){
        for (const id_student of get_one_study_class.value.list_student) {

await action_one_student(id_student);
if (get_one_student.value._id) {
    list_student.value.push(get_one_student.value);
}

}
    }

}
const student = reactive({
    _id: "",
    student_id: 1
});
function get_infor_student(_id, student_id) {
    student._id = _id,
        student.student_id = student_id

}
const list_student_local = ref({});
async function delete_student(id_student) {
    list_student_local.value = list_student_local.value.filter((id) => {
        return id != id_student;
    })
    var close = document.getElementById("btn-close");
    close.click();
    auto_close_toast();
    await action_update_study_class(get_one_study_class.value._id, {list_student: list_student_local.value});
    getAll();
}

async function getAll() {
    await action_one_study_class(route.params.id_courses);
    list_student_local.value = get_one_study_class.value.list_student;
    get_student();
}
onMounted(() => {
    getAll();



})
</script>  

