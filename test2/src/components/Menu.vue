<template>
  <aside id="layout-menu" class="layout-menu menu-vertical menu bg-menu-theme">
    <div class="app-brand demo">
      <a href="index.html" class="app-brand-link">
        <span class="app-brand-logo demo">
          <img
            src="data:image/png;base64,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" />
        </span>

        <span class="app-brand-text demo menu-text fw-bolder ">nline Exam</span>
      </a>

      <a href="javascript:void(0);" class="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
        <i class="bx bx-chevron-left bx-sm align-middle"></i>
      </a>
    </div>

    <div class="menu-inner-shadow"></div>

    <ul class="menu-inner py-1">
      <!-- Dashboard -->
      <li class="menu-item ">
        <router-link v-if="get_all_periods[0]" class="menu-link" :to="{
          name: 'Dashboard',
          query: {id_period: get_all_periods[0]._id}

        }">

          <i class="menu-icon tf-icons bx bx-home-circle"></i>
          <div data-i18n="Analytics">Dashboard</div>
        </router-link>
        <!-- <a href="index.html" class="menu-link">
          <i class="menu-icon tf-icons bx bx-home-circle"></i>
          <div data-i18n="Analytics">Dashboard</div>
        </a> -->
      </li>

      <!-- exam -->
      <!-- <li class="menu-item">
        <a href="javascript:void(0);" class="menu-link menu-toggle">
          <i class="menu-icon tf-icons bx bx-layout"></i>
          <div data-i18n="Layouts">Kỳ thi</div>
        </a>

        <ul class="menu-sub">
          <li class="menu-item">
            <router-link class="menu-link" :to="{
              name: 'ExamSubmitcode',
              // params: { idquestion: '64bcf15465db8d20d94bd6db'},
              params: { id: '65014d42b91ceb293644a6b2' }
            }">

              <div>Kỳ thi submit code</div>
            </router-link>
          </li>


          <li class="menu-item">
            <router-link class="menu-link" :to="{//QuestionSubmitCode
              name: 'ExamQuiz',
              // params: { idquestion: '64bcf15465db8d20d94bd6db'}
            }">

              <div>Kỳ thi trắc nghiệm</div>
            </router-link>
          </li>

        </ul>
      </li> -->
      <!-- exam -->
      <!-- <li class="menu-item" :class="{ active: route.name == 'ExamSubmitcode' || route.name == 'ExamQuiz' }">
        <a href="javascript:void(0);" class="menu-link menu-toggle">
          <i class="menu-icon tf-icons bx bx-layout"></i>
          <div>Kỳ thi</div>
        </a>

        <ul class="menu-sub">
          <li class="menu-item " v-for="period in get_all_periods" :key="period._id"
            :class="{ active: route.query.id == period._id }">
            <router-link class="menu-link" :to="{
              name: 'ExamSubmitcode',
              query: { id: period._id, page: '1' },
              //params: { id: period._id}
            }">

              <div>{{ period.school_year }} | {{ period.semester }}</div>
            </router-link>
          </li>




        </ul>
      </li> -->
      <!-- exam -->

      <!-- <li class="menu-item">
        <a href="javascript:void(0);" class="menu-link menu-toggle">
          <i class="menu-icon tf-icons bx bx-dock-top"></i>
          <div data-i18n="Account Settings">Đề thi</div>
        </a>
        <ul class="menu-sub">
          <li class="menu-item">
            <a href="pages-account-settings-account.html" class="menu-link">
              <div data-i18n="Account">Câu hỏi trắc nghiệm</div>
            </a>
          </li>
          <li class="menu-item">
            <router-link class="menu-link" :to="{//QuestionSubmitCode
              // name: 'QuestionSubmitCode',
              // params: { idquestion: '64bcf15465db8d20d94bd6db'}
            }">

              <div>Câu hỏi submit code</div>
            </router-link>
          </li>
        </ul>
      </li> -->

      <li class="menu-item " :class="{ active: route.name == 'QuestionSubmitCodeBank' || route.name == 'QuestionQuizBank' }">
        <a href="javascript:void(0);" class="menu-link menu-toggle">
          <i class="menu-icon tf-icons bx bx-dock-top"></i>
          <div>Ngân hàng câu hỏi</div>
        </a>
        <ul class="menu-sub">
          <li class="menu-item" :class="{ active: subject._id == route.params.id_subject }"
            v-for="(subject, index) in get_all_subjects_peroid_teacher" :key="subject._id">
            

           <router-link class="menu-link" :class="{active: route.params.id_subject == subject._id }"

                :to="{//QuestionSubmitCode
                  name: 'QuestionSubmitCodeBankAll',
                  params: {id_subject: subject._id},
                  // query: { type:'all', page: 1 }
                }">
                 <div>{{ subject.subject_title }}</div>
              </router-link>


          </li>

        </ul>
      </li>

      <!-- <li class="menu-item " :class="{ active: route.name == 'QuestionSubmitCode' || route.name == 'QuestionQuiz' }">
        <a href="javascript:void(0);" class="menu-link menu-toggle">
          <i class="menu-icon tf-icons bx bx-dock-top"></i>
          <div>Câu hỏi</div>
        </a>
        <ul class="menu-sub">
          <li class="menu-item" :class="{ active: subject._id == route.query.id }" @click="a = subject._id"
            v-for="(subject, index) in get_all_subjects" :key="subject._id">
            <a class="menu-link">
              <div>{{ subject.subject_title }}</div>
            </a>

            <ul class="" v-show="a == subject._id">
              <li class="menu-item" :class="{active: route.query.type =='all' }">

                <router-link class="menu-link" :to="{//QuestionSubmitCode
                  name: 'QuestionSubmitCode',
                  query: { id: subject._id, type: 'all',  page: 1 }
                }">
                  <span class="ms-0"><i class='bx bx-group'></i></span>
                  <div>Tất cả</div>


                </router-link>
              </li>
              <li class="menu-item " :class="{active: route.query.type =='public' }">
                <router-link class="menu-link" :to="{//QuestionSubmitCode
                  name: 'QuestionSubmitCode',
                  query: { id: subject._id, type: 'public',  page: 1 }
                }">

                  <i class='bx bx-user-plus'></i>
                  <div>Chung</div>


                </router-link>
              </li>
              <li class="menu-item" :class="{active: route.query.type =='private' }">
                <router-link class="menu-link" :to="{//QuestionSubmitCode
                  name: 'QuestionSubmitCode',
                  query: { id: subject._id, type: 'private',  page: 1 }
                }">
                  <i class='bx bx-user-circle'></i>
                  <div>Riêng</div>


                </router-link>
              </li>
            </ul>


          </li>

        </ul>
      </li> -->

      <!-- <li class="menu-item ">

        <router-link class="menu-link" :to="{
          name: 'StudyClass',

        }">

          <i class="menu-icon tf-icons bx bx-home-circle"></i>
          <div>Lớp học</div>
        </router-link>
        
      </li> -->
      <li class="menu-item" :class="{ active: route.name == 'ExamSubmitcode' || route.name == 'ExamQuiz' || route.name =='CoursesDetailDashboard' }">
        <a href="javascript:void(0);" class="menu-link menu-toggle">
          <i class="menu-icon tf-icons bx bx-layout"></i>
          <div>Khóa học của tôi</div>
        </a>

        <ul class="menu-sub">
          <li class="menu-item " v-for="period in get_all_periods" :key="period._id"
            :class="{ active: route.query.id == period._id }">
            <router-link class="menu-link" :to="{
              name: 'Courses',
              query: { id: period._id },
              //params: { id: period._id}
            }">

              <div>{{ period.school_year }} | {{ period.semester }}</div>
            </router-link>
          </li>




        </ul>
      </li>




    </ul>
  </aside>
</template>

<script setup>
import { onMounted, ref, watchEffect } from 'vue';
import main_nav from '../assets/js/main.js';

import { storeToRefs } from 'pinia';
import { useRoute, useRouter } from 'vue-router'
const route = useRoute();// 
const router = useRouter()
import { usePeriodStore } from "../stores/period.js"
const { get_all_periods } = storeToRefs(usePeriodStore());
const { action_all_periods } = usePeriodStore();



import { useSubjectStore } from "../stores/subject.js"
const { get_all_subjects,get_all_subjects_peroid_teacher } = storeToRefs(useSubjectStore());
const { action_all_subjects,action_all_subjects_by_period_teacher } = useSubjectStore();




onMounted(() => {
  main_nav()
  action_all_periods();
  action_all_subjects_by_period_teacher();
  
})

</script>
