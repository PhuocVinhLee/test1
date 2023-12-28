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
  <div class="row">
<div class="col-xl-3 col-lg-4 col-md-6 col-12 mb-4" v-for="study_class in get_all_study_class">

    <router-link class="card" :to="{
          name: 'CoursesDetailDashboard',
          params: {id_courses: study_class._id}

        }">

        
        <div class="card-body">
            <div class="card-title d-flex align-items-start justify-content-between">
                <div class="avatar flex-shrink-0">
                    <img src="../assets/img/icons/unicons/paypal.png" alt="Credit Card" class="rounded" />
                </div>
                <div class="dropdown">
                    <button class="btn p-0" type="button" id="cardOpt4" data-bs-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        <i class="bx bx-dots-vertical-rounded"></i>
                    </button>
                    <div class="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt4">
                        <router-link class="dropdown-item" :to ="{
                            name: 'CoursesEdit',
                            params: {id_courses: study_class._id}
                        }"> Edit</router-link>
                        <router-link class="dropdown-item" :to ="{
                            name: 'CoursesEdit',
                            params: {id_courses: study_class._id}
                        }"> Delete</router-link>
                        <!-- // <a class="dropdown-item" href="javascript:void(0);">View More</a>
                        // <a class="dropdown-item" href="javascript:void(0);">Delete</a> -->
                    </div>
                </div>
            </div>
            <span class="d-block mb-1">{{ study_class.study_class_title }}</span>
            <h3 class="card-title text-nowrap mb-2">35</h3>
            <small class="text-danger fw-semibold"> 14.82%</small>
        </div>
    </router-link>
</div>




</div>


   
</template>
<style scoped></style>