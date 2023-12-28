  <script setup>
  import { useTopicStore } from "../stores/topic.js"
  import { storeToRefs } from 'pinia'
const { get_all_topics} = storeToRefs(useTopicStore());
const { action_add_topic } = useTopicStore();
</script>
  <template>
    <div class="card mb-4 " style=" background-color: rgb(252, 248, 244);" v-for=" topic in get_all_topics">
        <div class="card-body">
            <h3 class="card-title">{{ topic.topic_title }}</h3>
            <h4>{{ topic }}</h4>
            <!-- <div v-for="active in topic.list_active">
                {{ active }}
            </div> -->
            <p class="card-text">
                Một vài mô tả về chủ đề này nếu có.
            </p>
            <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago.</small>
            </p>
        </div>
        <!-- <div class="text-center mb-4"><img class="card-img-bottom w-25 " style="height: 200px;"
                src="../assets/img/elements/1.jpg" alt="Card image cap"></div> -->
        <router-link  :to ="{
            name:'ExamSubmitCodeDetail',

        } " class="card mx-4 mb-4 px-3 bg-label-primary " v-for="active in topic.list_active" >
            <span class="d-flex flex-row justify-content-between  align-items-center">
                <span class="d-flex flex-row align-items-center">
                    <i class='bx bxs-file-pdf' style="font-size: 50px;"></i>
                    <h5 class="card-title mb-0" v-if="active.type=='exam'">{{ active.exam_title }}</h5>
                    <h5 class="card-title mb-0" v-else-if="active.type == 'notification'">notificationtest1</h5>
                    <h5 class="card-title mb-0" v-else-if="active.type =='document'">{{ document }}</h5>
                    <h5 class="card-title mb-0" v-else-if="active.type =='exercise'">exercise</h5>
                    <i class='bx bx-edit'></i>
                </span>

                <span>
                    <div class="dropdown">
                        <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                            <i class="bx bx-dots-vertical-rounded"></i>
                        </button>
                        <div class="dropdown-menu">

                            <a class="dropdown-item"><i class="bx bx-edit-alt me-1"></i>
                                Edit</a>
                            <a class="dropdown-item"><i class="bx bx-edit-alt me-1"></i>
                                Hide</a>
                            <a class="dropdown-item"><i class="bx bx-edit-alt me-1"></i>
                                Nhân đôi</a>


                            <a class="dropdown-item "><i class="bx bx-trash me-1"></i> Delete</a>
                        </div>
                    </div>
                </span>
            </span>
            <!-- <p class="card-text">
                Các em xem slide này trước để ngày mai cô vào sẽ giải thích sau nhé.
            </p> -->
            <p class="card-text"><small class="text-muted">Lần cuối cùng cập nhật 3 phút trước</small></p>
        </router-link>
        <div class="card mx-4 mb-4 px-3 bg-label-primary " >
            <span class="d-flex flex-row justify-content-between  align-items-center">
                <span class="d-flex flex-row align-items-center">
                    <i class='bx bx-edit' style="font-size: 50px;"></i>
                    <h5 class="card-title mb-0">Kiểm tra giữa kỳ</h5>
                    
                </span>

                <span>
                    <div class="dropdown">
                        <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                            <i class="bx bx-dots-vertical-rounded"></i>
                        </button>
                        <div class="dropdown-menu">

                            <a class="dropdown-item"><i class="bx bx-edit-alt me-1"></i>
                                Edit</a>
                            <a class="dropdown-item"><i class="bx bx-edit-alt me-1"></i>
                                Hide</a>
                            <a class="dropdown-item"><i class="bx bx-edit-alt me-1"></i>
                                Nhân đôi</a>


                            <a class="dropdown-item "><i class="bx bx-trash me-1"></i> Delete</a>
                        </div>
                    </div>
                </span>
            </span>
            <!-- <p class="card-text">
                Các em xem slide này trước để ngày mai cô vào sẽ giải thích sau nhé.
            </p> -->
            <p class="card-text"><small class="text-muted">Lần cuối cùng cập nhật 3 phút trước</small></p>
        </div>
        <div class="card mx-4 mb-4 px-3 bg-label-primary ">
            <span class="d-flex flex-row justify-content-between  align-items-center">
                <span class="d-flex flex-row align-items-center">
                    <i class='bx bxs-book-open' style="font-size: 50px;"></i>
                  
                    <h5 class="card-title mb-0">Bài tập danh sách liên kết</h5>
                </span>

                <span>
                    <div class="dropdown">
                        <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                            <i class="bx bx-dots-vertical-rounded"></i>
                        </button>
                        <div class="dropdown-menu">

                            <a class="dropdown-item"><i class="bx bx-edit-alt me-1"></i>
                                Edit</a>
                            <a class="dropdown-item"><i class="bx bx-edit-alt me-1"></i>
                                Hide</a>
                            <a class="dropdown-item"><i class="bx bx-edit-alt me-1"></i>
                                Nhân đôi</a>


                            <a class="dropdown-item "><i class="bx bx-trash me-1"></i> Delete</a>
                        </div>
                    </div>
                </span>
            </span>
            <!-- <p class="card-text">
                Các em xem slide này trước để ngày mai cô vào sẽ giải thích sau nhé.
            </p> -->
            <p class="card-text"><small class="text-muted">Lần cuối cùng cập nhật 3 phút trước</small></p>
        </div>

        <div class="card mx-4 mb-4 px-3 ">
            <span class="d-flex flex-row justify-content-between  align-items-center">
                <span class="d-flex flex-row align-items-center" data-bs-toggle="modal" data-bs-target="#modalToggle">
                    <!-- <i class="menu-icon tf-icons bx bx-layout" style="font-size: 70px;"></i> -->
                    <!-- <i class='bx bx-message-square-add' style="font-size: 70px;"></i> -->
                    <i class='bx bx-plus' style="font-size: 50px;"></i>
                    <!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalToggle">
                          Launch modal
                        </button> -->
                    <h5  class="card-title mb-0">Thêm một tài nguyên hoặc hành động</h5>
                </span>

               
            </span>
           
        </div>
    </div>

    <div class="card mb-3 " style=" background-color: rgb(250, 245, 240);">
        <div class="card-body">
            <h5 class="card-title">Chủ đề 2</h5>
            <p class="card-text">
                This is a wider card with supporting text below as a natural lead-in to additional content. This
                content is a little bit longer.
            </p>
            <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
            </p>
        </div>
        <div class="text-center "><img class="card-img-bottom w-25 " style="height: 200px;"
                src="../assets/img/elements/1.jpg" alt="Card image cap"></div>


    </div>



    
   
</template>