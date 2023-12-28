
<template>
    <div>
        <splitpanes class="default-theme" style="height: 100%;">
            <pane :size="size_pane">
                <span>
                    <div class="p-3 overflow-scroll-y" style="height: 100%;">
                        <div class="card text-center mb-3">
                            <div class="card-body">
                                <h5 class="card-title fs-3 fw-bold">{{ infor_exam.exam_quiz_title }}</h5>
                               

                            </div>

                        </div>
                        <div class="card text-center mb-3">
                            <div class="card-body">

                                <div class="me-4 fs-5"> <span>Thời gian còn lại:</span> <span
                                        class="badge bg-secondary p-2">
                                        <countdown @vue:mounted="handleMounted" @change="handleChange" ref="count_down"
                                            :time="minute * 1000 * 60" :format="time_format" @finish="handleFinish">
                                            <template #="{ resolved }">
                                                <!-- <span class="countdown-item">{{ resolved.HH }}</span> : -->
                                                <span class="countdown-item">{{ resolved.mm }}</span> :
                                                <span class="countdown-item">{{ resolved.ss }}</span>
                                            </template>
                                        </countdown>
                                    </span></div>
                            </div>

                        </div>


                        <div class="card mb-3">
                            <div class="card-body " ref="kosten">
                                <button @click="showScrollInto(index, kosten)" v-for="(question, index) in list_question"
                                    :key="index" type="button" :href="'#list-item-' + index" class="btn btn-icon  m-1"
                                    :class="{
                                        ' border border-3 border-dark': Location == index, 'btn btn-primary': question.checked >= 0,
                                        'btn-outline-primary': Location != index && !question.checked && question.checked != 0, 'border border-3 border-warning': question.flag
                                    }">
                                    <!-- 'btn-outline-primary': Location != index, -->
                                    <span>{{ index + 1 }}</span>
                                </button>


                                <div><button @click="SubmitAndCompeleted()" type="button" class="btn btn-primary mt-3">Nộp
                                        bài và
                                        kết thúc</button></div>
                            </div>

                        </div>

                    </div>
                </span>
            </pane>
            <pane class="overflow-scroll-y">
                <span>
                    <div class="p-3">
                        <div ref="sections" v-for="(question, index) in list_question" :key="i" :id="'list-item-' + index">
                           
                            <div class="card mb-3">
                                <div v-if="question.flag"
                                    @click="submit_flag(question._id, question.checked, !question.flag)"
                                    class="text-end m-1"> <i class='bx bxs-flag fs-3'></i></div>
                                <div v-else @click="submit_flag(question._id, question.checked, !question.flag)"
                                    class="text-end m-1"><i class='bx bx-flag fs-3'></i> </div>

                                <div class="card-body">
                                    <h5 class="card-title">
                                        <span class="fw-bold">Câu: {{ index + 1 }}
                                        .</span> {{ question.question_quiz_title
                                        }}
                                        {{ question._id }}
                                    </h5>

                                    <!-- <h6 class="card-subtitle text-muted">Support card subtitle</h6> -->

                                    <img class="img-fluid " style="height: 200px ; width: 50%;"
                                        src="../assets/img/elements/13.jpg" alt="Card image cap">
                                    <form class="mt-3">
                                        <div class="form-check  d-flex" v-for="answer, index2 in question.answer">
                                            <input @click="submit_question(question._id, index2, question.flag)"
                                                name="default-radio-1" :checked="index2 == question.checked"
                                                class="form-check-input me-1" type="radio" value="" id="defaultRadio1">
                                            <label class="form-check-label me-1" for="defaultRadio1">
                                                 <span    class="fw-bold" v-if="index2 == 0">A.</span>
                                                 <span    class="fw-bold" v-if="index2 == 1">B.</span>
                                                 <span    class="fw-bold" v-if="index2 == 2">C.</span>
                                                 <span    class="fw-bold" v-if="index2 == 3">D.</span>
                                                 <span    class="fw-bold" v-if="index2 == 4">E.</span>
                                                </label>
                                            <span v-html="answer.input"></span>

                                        </div>

                                    </form>

                                </div>
                                <!-- <div class="card-body">
                                    <p class="card-text">Bear claw sesame snaps gummies chocolate.</p>
                                    <a href="javascript:void(0);" class="card-link">Card link</a>
                                    <a href="javascript:void(0);" class="card-link">Another link</a>
                                </div> -->

                            </div>
                        </div>

                    </div>
                </span>
            </pane>

        </splitpanes>
    </div>
</template>
<script setup>
import { onMounted, ref, onBeforeMount, reactive, watch, watchEffect } from 'vue';
import QuestionSubmitCodeBankFormAdd from "@/components/QuestionSubmitCodeBankFormAdd.vue";
import { useExam_quizStore } from "../stores/exam_quiz.js"
import { mapActions, storeToRefs } from 'pinia';
import { useRoute, useRouter } from 'vue-router'
const route = useRoute();// 
const router = useRouter();

import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
import Countdown from 'vue3-countdown';//useResult_exam_quizStore

const { get_one_exam_quiz, exam_quizs, one_exam_quiz, lenght, state_exam_quiz } = storeToRefs(useExam_quizStore());
const { action_one_exam_quiz, action_question_from_one_exam_quiz, action_all_exam_quizs, reset_state_exam_quiz, action_delete_exam_quiz } = useExam_quizStore();
import { useResult_exam_quizStore } from "../stores/result_exam_quiz.js"
const { get_all_result_exam_quizs, state_result_exam_quizs } = storeToRefs(useResult_exam_quizStore());
const { action_all_result_exam_quizs, action_update_result_exam_quizs, action_one_result_exam_quizs, action_add_result_exam_quizs } = useResult_exam_quizStore();


const minute = ref(20000)
const time_format = ref("mm:ss")
const count_down = ref();

function hanleUpdate() {
    //minute.value = 50000;
    time_format.value = "mm:ss"
    count_down.value.reset();

    count_down.value.start();
}
async function handleMounted() {
    console.log("Count down onMounted");
}

function handleFinish() {
    console.log("Oke")
}
function handleChange({ currentTime, resolved, formatted }) {
    //  console.log(currentTime, resolved, formatted)
}

const size_pane = ref(27);
function auto_close_toast() {
    const myTimeout = setTimeout(reset_state_exam_quiz, 5000);
}

function close_toast() {
    reset_state_exam_quiz();
}

const list_question = ref([]);
const infor_exam = ref({})

async function get_result_exam_quiz_local() {
    await action_all_result_exam_quizs(route.params.id_exam);// get list result-exam
    result_exam_quiz_local.value = get_all_result_exam_quizs.value[get_all_result_exam_quizs.value.length - 1];

}
async function get_list_question() {
    await action_question_from_one_exam_quiz(route.params.id_exam);// exam
    list_question.value = get_one_exam_quiz.value.list_question;
    infor_exam.value = get_one_exam_quiz.value
}

function time_distance(end_time, start_time) {// end > start
    console.log(start_time)
    console.log(end_time)
    let s = new Date(start_time);
    let e = new Date(end_time);

    console.log((e - s) / 1000 / 60);
    return ((e - s) / 1000 / 60);// minue

}

const result_exam_quiz_local = ref({});
async function submit_question(id_question, answer_question, flag) {

    const answer = {
        question_id: id_question,
        answer: answer_question,
        flag: flag

    }
    let list_answer1 = [];
    if (result_exam_quiz_local.value.list_answer) {
        list_answer1 = await result_exam_quiz_local.value.list_answer.filter((a) => {
            if (a.question_id != id_question) {
                return answer;
            }

        });
    }
    await list_answer1.push(answer);

    result_exam_quiz_local.value.list_answer = await list_answer1;
    await action_update_result_exam_quizs(result_exam_quiz_local.value._id, result_exam_quiz_local.value);
    await get_list_question();
    list_question.value = await get_one_exam_quiz.value.list_question.map((question) => {
        if (result_exam_quiz_local.value.list_answer) {
            result_exam_quiz_local.value.list_answer.forEach(question2 => {
                if (question2.question_id == question._id) {
                    question.checked = question2.answer;
                    question.flag = question2.flag;
                }
            });
        }
        return question;
    })
}
async function submit_flag(id_question, answer_question, flag) {

    const answer = {
        question_id: id_question,
        answer: answer_question,
        flag: flag
    }
    let list_answer1 = [];
    if (result_exam_quiz_local.value.list_answer) {
        list_answer1 = await result_exam_quiz_local.value.list_answer.filter((a) => {
            if (a.question_id != id_question) {
                return answer;
            }

        });
    }
    await list_answer1.push(answer);
    result_exam_quiz_local.value.list_answer = await list_answer1;
    await action_update_result_exam_quizs(result_exam_quiz_local.value._id, result_exam_quiz_local.value);
    await get_list_question();
    list_question.value = await get_one_exam_quiz.value.list_question.map((question) => {
        if (result_exam_quiz_local.value.list_answer) {
            result_exam_quiz_local.value.list_answer.forEach(question2 => {
                if (question2.question_id == question._id) {
                    question.checked = question2.answer;
                    question.flag = question2.flag;
                }
            });
        }
        return question;
    })

}
watchEffect(() => {
    //console.log(result_exam_quiz_local.value);
})


let now = new Date();
now.setMinutes(now.getMinutes() - now.getTimezoneOffset());

async function datetime_attempts() {
    await get_result_exam_quiz_local();
    if (!result_exam_quiz_local.value) {
        await action_add_result_exam_quizs({
            exam_id: route.params.id_exam,
            datetime_attempts: now.toISOString().slice(0, 19),
            completed: false,
            list_question: []
        });
        await get_result_exam_quiz_local();
        minute.value = get_one_exam_quiz.value.exam_quiz_duration;
    } else if (result_exam_quiz_local.value.completed
        || (time_distance(now.toISOString().slice(0, 19), result_exam_quiz_local.value.datetime_attempts) >= get_one_exam_quiz.value.exam_quiz_duration)) {
        console.log("create")
        await action_add_result_exam_quizs({
            exam_id: route.params.id_exam,
            datetime_attempts: now.toISOString().slice(0, 19),
            completed: false,
            list_question: []
        });
        await get_result_exam_quiz_local();
        minute.value = get_one_exam_quiz.value.exam_quiz_duration;

    } else {
        await get_result_exam_quiz_local();// neu ket qua da ton tai va con TG thi thi lay KQ cu de thi tiep
        list_question.value = await get_one_exam_quiz.value.list_question.map((question) => {
            if (result_exam_quiz_local.value.list_answer) {
                result_exam_quiz_local.value.list_answer.forEach(question2 => {
                    if (question2.question_id == question._id) {
                        question.checked = question2.answer;
                        question.flag = question2.flag;
                    }
                });
            }
            return question;
        })
        minute.value = get_one_exam_quiz.value.exam_quiz_duration - time_distance(now.toISOString().slice(0, 19), result_exam_quiz_local.value.datetime_attempts);
    }

}

async function SubmitAndCompeleted() {

    let now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    result_exam_quiz_local.value.completed = true;
    result_exam_quiz_local.value.datetime_completed = now.toISOString().slice(0, 19);
    
    console.log(result_exam_quiz_local.value)
    var list_answer = [];
    list_answer = result_exam_quiz_local.value.list_answer.map((q,index) => {
        // let check = true;

       for (const question of  get_one_exam_quiz.value.list_question) {
        if (question._id == q.question_id) {
            if(q.answer == question.right_answer){
                q.mark = 1;
                q.question_title = question.question_quiz_title;
            }
            else{
                q.mark = 0;
                q.question_title = question.question_quiz_title;           
            }
               
            break;
            }
       }
        // get_one_exam_quiz.value.list_question.forEach((question) => {
        //     if (question._id == q.question_id && q.answer == question.right_answer) {
        //         check = false;
        //         q.mark = 1;
        //         q.question_title = question.question_quiz_title;
                
        //     }
        // })

        // if (check == true) {
        //     q.mark = 0;
        // }
        // check = true;


        return q;
    })

    console.log(result_exam_quiz_local.value)
    await action_update_result_exam_quizs(result_exam_quiz_local.value._id, result_exam_quiz_local.value);
    router.push(
        {
            name: 'ExamQuizDashboard',
            params: { id: route.params.id_exam, id_courses: route.params.id_courses }
        })
}


onMounted(async () => {
    await get_list_question();
    await datetime_attempts();
    await handleMounted();
    count_down.value.reset();// update time Countdown
    count_down.value.start()

})

const source = ref();
const kosten = ref();
const sections = ref([]);
const Location = ref();

function showScrollInto(index, currentLocation) {
    source.value = currentLocation;
    const toLocation = index;//index - 1
    Location.value = index;
    // refs set with a v-for are returned as an array
    sections.value[toLocation].scrollIntoView({ behavior: "smooth" });
}
</script>  
<style scoped>
.overflow-scroll-y {
    overflow: auto;


}
</style>

