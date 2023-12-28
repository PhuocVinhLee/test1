
<template>
    <div class="content-wrapper">
        <div class="container-xxl flex-grow-1 container-p-y">

            <div class="">

                <div class="nav-align-top mb-4">
                    <ul class="nav nav-tabs" role="tablist">
                       <li class="nav-item">
                        <router-link  type="button" class="nav-link" :class=" {active:route.query.exam_type =='tracnghiem' }"
                        :to="{
                        name: 'Exam',
                        query: { school_year: route.query.school_year, semester: route.query.semester, exam_type:'tracnghiem', page: '5'}
                    }">    
                          Trắc nghiệm
                        </router-link>
                      </li>
                       <li class="nav-item">
                        <router-link  type="button" class="nav-link " :class=" {active:route.query.exam_type =='submitcode' }"
                        :to="{
                        name: 'Exam',
                        query: { school_year: route.query.school_year, semester: route.query.semester, exam_type:'submitcode', page: '5'}
                    }">     
                          Submitcode
                        </router-link>
                      </li>
                    </ul>
                  
                </div>
            </div>

            <!-- <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Exam/</span> Exam_submit_code</h4> -->
            <!-- list exam_submit_code -->


          
           


        </div>
    </div>
</template>
<script setup>
import { onMounted } from 'vue';

import { useRoute, useRouter } from 'vue-router'
const route = useRoute();// 




</script>  
