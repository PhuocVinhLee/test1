
<template>
    <div class="content-wrapper">
        <div class="container-xxl flex-grow-1 container-p-y">

            <div class="">

                <div class="nav-align-top mb-4">
                    <ul class="nav nav-tabs" role="tablist">
                        <li class="nav-item">
                            <!-- <button type="button" class="nav-link active" role="tab" data-bs-toggle="tab"
                                data-bs-target="#navs-top-home" aria-controls="navs-top-home" aria-selected="true">
                                Home
                            </button> -->
                            <div class="">
                      <!-- <label class="form-label" for="selectTypeOpt">Năm học</label> -->
                      <select id="selectTypeOpt" class="form-select color-dropdown">
                        <option value="bg-primary" selected="">2023-2024</option>
                        <option value="bg-secondary">Secondary</option>
                        <option value="bg-success">Success</option>
                        <option value="bg-danger">Danger</option>
                        <option value="bg-warning">Warning</option>
                        <option value="bg-info">Info</option>
                        <option value="bg-dark">Dark</option>
                      </select>
                    </div>

                        </li>
                        <li class="nav-item">
                            <!-- <button type="button" class="nav-link" role="tab" data-bs-toggle="tab"
                                data-bs-target="#navs-top-profile" aria-controls="navs-top-profile" aria-selected="false">
                                Profile
                            </button> -->
                            <div class="col">
                      <!-- <label class="form-label" for="selectTypeOpt">HỌc kỳ</label> -->
                      <select id="selectTypeOpt" class="form-select color-dropdown">
                        <option value="bg-primary" selected="">HKI</option>
                        <option value="bg-secondary">Secondary</option>
                        <option value="bg-success">Success</option>
                        <option value="bg-danger">Danger</option>
                        <option value="bg-warning">Warning</option>
                        <option value="bg-info">Info</option>
                        <option value="bg-dark">Dark</option>
                      </select>
                    </div>
                        </li>
                    </ul>
                    <div class="tab-content">
                        <div class="tab-pane fade show active" id="navs-top-home" role="tabpanel">
                            <div class="">
                                <router-link :to="{
                                    name: '',
                                    // params: { idquestion: '64bcf15465db8d20d94bd6db'}
                                }">
                                    <h5 class="card-header"><button type="button" class="btn btn-primary">
                                            <i class='bx bxs-plus-circle'></i> Thêm kỳ thi
                                        </button></h5>
                                </router-link>

                                <StudyClassTable style="min-height: 450px;"></StudyClassTable>
                                <!-- edit study_class-->
                            </div>





                            <Pagination :lenght="lenght" @page="emit_page"></Pagination> <!-- chan trang -->
                        </div>
                        <div class="tab-pane fade" id="navs-top-profile" role="tabpanel">
                            <p>
                                Donut dragée jelly pie halvah. Danish gingerbread bonbon cookie wafer candy oat cake ice
                                cream. Gummies halvah tootsie roll muffin biscuit icing dessert gingerbread. Pastry ice
                                cream
                                cheesecake fruitcake.
                            </p>
                            <p class="mb-0">
                                Jelly-o jelly beans icing pastry cake cake lemon drops. Muffin muffin pie tiramisu halvah
                                cotton candy liquorice caramels.
                            </p>
                        </div>
                        <div class="tab-pane fade" id="navs-top-messages" role="tabpanel">
                            <p>
                                Oat cake chupa chups dragée donut toffee. Sweet cotton candy jelly beans macaroon gummies
                                cupcake gummi bears cake chocolate.
                            </p>
                            <p class="mb-0">
                                Cake chocolate bar cotton candy apple pie tootsie roll ice cream apple pie brownie cake.
                                Sweet
                                roll icing sesame snaps caramels danish toffee. Brownie biscuit dessert dessert. Pudding
                                jelly
                                jelly-o tart brownie jelly.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Exam/</span> Exam_submit_code</h4> -->
            <!-- list study_class -->


            <div class="mt-3">
                <!-- Button trigger modal -->
                <!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalTop">
            Launch modal
        </button> -->

                <!-- Modal -->
                <div class="modal modal-top fade" id="modalTop" tabindex="-1">
                    <div class="modal-dialog">
                        <form class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="modalTopTitle">Modal title</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row">
                                    <div class="col mb-3">
                                        <p>Bạn có chắc chắn nuốn xóa <span class="badge bg-label-dark">{{
                                             }} </span>? </p>
                                    </div>
                                </div>
                                <div class="row g-2">

                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-outline-secondary" id="btn-close-delete"
                                    data-bs-dismiss="modal">
                                    Close
                                </button>
                                <button type="button" class="btn btn-primary"
                                    @click="delete_study_class(get_one_study_class._id, $event)">Save</button>
                            </div>
                        </form>
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
                        Bạn đã cập nhật dữ liệu thành công
                    </div>
                </div>
            </div>


        </div>
    </div>
</template>
<script setup>
import { onMounted } from 'vue';
// import Exam_submit_codeFormAdd from "@/components/Exam_submit_codeFormAdd.vue";
// import Exam_submit_codeFormEdit from "@/components/Exam_submit_codeFormEdit.vue";
import StudyClassTable from "@/components/StudyClassTable.vue";
import Pagination from "@/components/Pagination.vue";
import { useStudy_classStore } from "../stores/study_class.js"
import { storeToRefs } from 'pinia';
import { useRoute, useRouter } from 'vue-router'
const route = useRoute();// 

const { get_one_study_class, study_classs, one_study_class, lenght, state_study_class } = storeToRefs(useStudy_classStore());
const { action_one_study_class, action_all_study_class, reset_state_study_class, action_delete_study_class } = useStudy_classStore();


function emit_page(page) {
    console.log(page);
    action_all_study_classs(page);// click vao page o duoi 
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

onMounted(() => {
    action_all_study_class();// chu yeu de lay leght cua study_class

})
</script>  

