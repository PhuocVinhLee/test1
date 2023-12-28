
<template>
    <div class="tab-content">
        <div class="tab-pane fade show active" id="navs-top-home" role="tabpanel">
            <div class="flex-grow-1 row ">
                <div class="col-9  ">

                </div>
                <!-- <div class="col-3 text-end fs-4">
                    <div class="form-check form-switch">
                        <input class="form-check-input float-end" type="checkbox" role="switch"
                            @click="show_sort_question = !show_sort_question" v-model="show_sort_question">
                    </div>
                </div> -->
            </div>

            <div class="table-responsive text-nowrap mt-2" style="min-height: 300px;">

                <table class="table table-bordered ">

                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Trạng thái</th>
                            <td>Thời gian bắt đầu</td>
                            <td>Thời gian kết thúc</td>
                            <!-- <th>Môn học</th> -->
                            <th>Thời gian làm bài</th>
                            <th>Tổng Điểm</th>
                            <th>Hành động</th>



                        </tr>
                    </thead>

                    <tbody>


                        <tr v-for="(one_exam_submit_code, index) in all_result_exam_submit_codes_local"
                            :key="one_exam_submit_code._id">

                            <td>{{ index + 1 }}</td>
                            <td>
                                <ul class="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                    <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top"
                                        class="avatar avatar-xs pull-up" title="" data-bs-original-title="Lilian Fuller">
                                        <img src="../assets/img/avatars/5.png" alt="Avatar" class="rounded-circle">
                                    </li>
                                    <span class="ms-1"> <strong>{{ one_exam_submit_code.user_id }}</strong></span>
                                    <!-- <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top"
                                        class="avatar avatar-xs pull-up" title="" data-bs-original-title="Sophia Wilkerson">
                                        <img src="../assets/img/avatars/6.png" alt="Avatar" class="rounded-circle">
                                    </li>
                                    <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top"
                                        class="avatar avatar-xs pull-up" title="" data-bs-original-title="Christina Parker">
                                        <img src="../assets/img/avatars/7.png" alt="Avatar" class="rounded-circle">
                                    </li> -->
                                </ul>
                            </td>
                            <td>

                                <span
                                    v-if="one_exam_submit_code.completed == true || one_exam_submit_code.datetime_completed"
                                    class="badge bg-success">Hoàn thành</span>
                                <span v-else class="badge bg-warning">Đang diễn ra</span>
                            </td>

                            <td>{{ currentDate(one_exam_submit_code.datetime_attempts) }}</td>
                            <td>{{ currentDate(one_exam_submit_code.datetime_completed) }} </td>
                            <td>{{ Number((time_distance(one_exam_submit_code.datetime_completed,
                                one_exam_submit_code.datetime_attempts
                            ))).toLocaleString() }} phút</td>
                            <td>{{ one_exam_submit_code.mark_all }} </td>
                            <td>
                                <div class="btn-group">
                                    <span class="badge bg-label-primary  dropdown-toggle" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        xem
                                    </span>
                                    <div class="dropdown-menu p-2 " style="width: 1000px;">

                                        <table class="table table-dark">
                                            <thead>
                                                <tr>
                                                    <th>STT</th>
                                                    <th>Tên câu hỏi</th>
                                                    <th>Số lần thử sai</th>
                                                    <th>Điểm</th>

                                                </tr>
                                            </thead>
                                            <tbody class="table-border-bottom-0">
                                                <tr v-for="answer, index2 in one_exam_submit_code.list_answer">
                                                    <td>{{ index2 + 1 }}</td>
                                                    <td>{{ answer.question_title }}</td>
                                                    <td>

                                                        <span>{{ answer.submit_number }}</span>

                                                    </td>
                                                    <td>{{ answer.mark }}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            </td>



                        </tr>


                    </tbody>
                </table>


                <button v-show="show_sort_question" @click="sort_question()" type="button" class="btn btn-primary">Lưu thay
                    đổi</button>

            </div>

            <div>
                <Bar v-if="check_chart" style="width: 100%; height: 500px;" :data="data" :options="options" />
            </div>

            <div class="toast-container position-fixed bottom-0 end-0 me-4" v-show="state_exam_submit_code">
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
    </div>
    <div class="modal fade" id="modalToggle" aria-labelledby="modalToggleLabel" tabindex="-1" style="display: none;"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modalToggleLabel">Chọn một hình thức thêm câu hỏi</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">

                    <h5 class=""><button @click="add_question()" type="button" class="btn btn-primary"
                            data-bs-toggle="modal" data-bs-target="#modalToggle">
                            <i class='bx bxs-plus-circle'></i> Ngân hành câu hỏi hệ thống
                        </button></h5>


                </div>
                <!-- <div class="modal-footer">
                <button class="btn btn-primary" data-bs-target="#modalToggle2" data-bs-toggle="modal"
                    data-bs-dismiss="modal">
                    Open second modal
                </button>
            </div> -->
            </div>
        </div>
    </div>
</template>
<script setup>
import { onMounted, onBeforeMount, ref, reactive, watchEffect, computed } from 'vue';
import { VueDraggableNext } from 'vue-draggable-next'
import Pagination from "@/components/Pagination.vue";

import { storeToRefs } from 'pinia';
import { useRoute, useRouter } from 'vue-router'
const route = useRoute();// 
const router = useRouter();// 
import { useExam_submit_codeStore } from "../stores/exam_submit_code.js"
const { get_one_exam_submit_code, exam_submit_codes, one_exam_submit_code, lenght, state_exam_submit_code_add, state_exam_submit_code } = storeToRefs(useExam_submit_codeStore());
const { action_question_from_one_exam_submit_code, action_all_exam_submit_codes, action_update_exam_submit_code, reset_state_exam_submit_code, action_delete_exam_submit_code } = useExam_submit_codeStore();

import { useResult_exam_submitcodeStore } from "../stores/result_exam_submitcode.js"
const { get_all_result_exam_submitcodes, state_result_exam_submitcodes } = storeToRefs(useResult_exam_submitcodeStore());
const { action_all_result_exam_submitcode, action_all_result_exam_submitcodes_by_teacher, action_update_result_exam_submitcodes, action_one_result_exam_submitcodes, action_add_result_exam_submitcodes } = useResult_exam_submitcodeStore();


import { useStudy_classStore } from "../stores/study_class"
const { get_one_study_class } = storeToRefs(useStudy_classStore());
const { action_one_study_class } = useStudy_classStore();

import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)
onBeforeMount(() => {

})
const data_chart = ref([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
const check_chart = ref(false);
function get_data_chart() {
    var data1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    data1[10] = all_result_exam_submit_codes_local.value.length;

    all_result_exam_submit_codes_local.value.map((result) => {


        if (result.mark_all <= 1) {
            data1[0] = data1[0] + 1;
        } else if (result.mark_all > 1 && result.mark_all <= 2) {
            data1[1] = data1[1] + 1;
        } else if (result.mark_all > 2 && result.mark_all <= 3) {
            data1[2] = data1[2] + 1;
        } else if (result.mark_all > 3 && result.mark_all <= 4) {
            data1[3] = data1[3] + 1;
        } else if (result.mark_all > 4 && result.mark_all <= 5) {
            data1[4] = data1[4] + 1;
        } else if (result.mark_all > 5 && result.mark_all <= 6) {
            data1[5] = data1[5] + 1;
        } else if (result.mark_all > 6 && result.mark_all <= 7) {
            data1[6] = data1[6] + 1;
        } else if (result.mark_all > 7 && result.mark_all <= 8) {
            data1[7] = data1[7] + 1;
        } else if (result.mark_all > 8 && result.mark_all <= 9) {
            data1[8] = data1[8] + 1;
        } else if (result.mark_all > 9 && result.mark_all <= 10) {
            data1[9] = data1[9] + 1;
        }

    })

    data.datasets = [
        {
            label: 'Điểm',
            backgroundColor: '#f87979',
            data: data1
            //[4, 0, 1.2, 3.9, 1, 4, 3.9, 8, 4, 2, 16]
        }

    ]
    check_chart.value = true;

}


const data = reactive(
    {
        labels: [
            '(0 - 1]',
            '(1 - 2]',
            '(2 - 3]',
            '(3 - 4]',
            '(4 - 5]',
            '(5 - 6]',
            '(6 - 7]',
            '(7 - 8]',
            '(8 - 9]',
            '(9 - 10]'],
        datasets: [
            {
                label: 'Điểm',
                backgroundColor: '#f87979',
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            }
        ]
    }
)
const options = ref({
    responsive: true,
    maintainAspectRatio: false
})


function auto_close_toast() {
    const myTimeout = setTimeout(reset_state_exam_submit_code, 5000);
}

function close_toast() {
    reset_state_exam_submit_code();
}
function time_distance(end_time, start_time) {// end > start
    console.log(start_time)
    console.log(end_time)
    let s = new Date(start_time);
    let e = new Date(end_time);

    console.log((e - s) / 1000 / 60);
    return ((e - s) / 1000 / 60);// minue

}
function currentDate(date_time) {
    const current = new Date(date_time);
    const date = `${current.getHours()}:${current.getMinutes()}:${current.getSeconds()} - ${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    return date;
}

onBeforeMount(async () => {
    await action_one_study_class(route.params.id_courses);

})

//list_result = ref([]);
const all_result_exam_submit_codes_local = ref([]);
const one_exam_submit_code_local = ref({});
async function map_result() {

    if (get_all_result_exam_submitcodes.value[0]) {
        all_result_exam_submit_codes_local.value = get_all_result_exam_submitcodes.value.map((ele) => {


            let list_answer = [];


            // for (const question of get_one_exam_submit_code.value.list_question) {
            //     let check_question = false;
            //     for (const answer of ele.list_answer) {
            //         if (question._id == answer.question_id) {
            //             check_question = true;
            //             break;
            //         }
            //     }

            //     if (check_question == false) {
            //         ele.list_answer.push({
            //             question_id: question._id,
            //             question_title: question.question_quiz_title,
            //             mark: 0
            //         });
            //     }
            // }

            let mark_local = 0;
            if( ele.list_answer){
                ele.list_answer.forEach((a) => {
                if (a.mark >= 0) {

                    mark_local = mark_local + a.mark;
                }

            })
            }
            ele.mark_all = mark_local;
            return ele;
        });
    }

}
onMounted(async () => {
    await action_question_from_one_exam_submit_code(route.params.id_exam)
    console.log(get_one_exam_submit_code.value);
    await action_all_result_exam_submitcodes_by_teacher(route.params.id_exam)
    // all_result_exam_submit_codes_local.value = get_all_result_exam_submitcodes.value
    await map_result();
    get_data_chart();




})
</script>  

<style scoped>
tr:hover {
    background-color: #ddd;
}
</style>
  
  