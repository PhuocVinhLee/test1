<script setup>
import { onMounted, reactive, ref } from "vue";
import { storeToRefs } from 'pinia'
import { useStudy_classStore } from "../stores/study_class.js";
const { get_one_study_class, study_classs, one_study_class, get_isLoading, get_all_study_class } = storeToRefs(useStudy_classStore());
function get_edit_study_class(id) {
    console.log(id)
    study_classStore.action_one_study_class(id);// lay du lieu cho model edit
}

function get_delete_study_class(id) {
    study_classStore.action_one_study_class(id);// lay du lieu cho model delete
}

function submit(id){
    action_delete_study_class(id);
}


onMounted(() => {

})



</script>
<template>
    <div class="table-responsive text-nowrap">
        <div v-if="get_isLoading" class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        <table v-else class="table ">

            <thead>
                <tr>
                    <th>STT</th>
                    <th>Tên</th>               
                    <th>Môn học</th>
                    <th>Số lượng sinh viên</th>
                    <th>Mật khẩu</th>
                    <th>Học kỳ/Năm học</th>
                    <th>Hiệu chỉnh</th>
                    <th>Hành động</th>

                </tr>
            </thead>

            <tbody>


                <tr v-for="(study_class, index) in get_all_study_class" :key="study_class._id">
                    <td>{{ index + 1 }}</td>
                    <td>{{ study_class.study_class_name }}</td>
                <td>{{ study_class.subject_id }}</td>
                <td>{{ study_class.student_number }}</td>
                <td><div class="input-group input-group-merge">
                    <input type="password" id="password" class="form-control " name="password" placeholder="············" aria-describedby="password">
                    <span class="input-group-text cursor-pointer"><i class="bx bx-hide"></i></span>
                  </div></td>
                <td>{{ study_class.semester_id }}</td>

               
                    <td>
                        <div class="dropdown">
                            <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                <i class="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div class="dropdown-menu">
                                <router-link :to="{ name: 'ExamQuizEdit', params: { id: study_class._id } }">
                                    <a class="dropdown-item" href="javascript:void(0);"><i class="bx bx-edit-alt me-1"></i>
                                        Edit</a>
                                </router-link>


                                <a @click="get_delete_study_class(study_class._id)" class="dropdown-item " href="javascript:void(0); " data-bs-toggle="modal"
                                    data-bs-target="#modalTop"><i class="bx bx-trash me-1"></i> Delete</a>
                            </div>
                        </div>
                    </td>
                    <td> 
                        <button type="button" class="btn btn-icon btn-outline-primary me-2 mb-2">
                            <i class="menu-icon tf-icons bx bx-layout"></i>
                            </button>
                            <button type="button" class="btn btn-icon btn-outline-primary me-2 mb-2">
                                <i class='bx bxs-file-doc'></i>
                            </button>
                            <button type="button" class="btn btn-icon btn-outline-primary me-2 mb-2">
                                <i class='bx bx-user-plus' ></i>
                            </button>
                            <button type="button" class="btn btn-icon btn-outline-primary me-2 mb-2" >
                                <i class='bx bxs-spreadsheet'></i>
                            </button>
                           

                    </td>
                </tr>


            </tbody>
        </table>
    </div>


   
</template>
<style scoped></style>