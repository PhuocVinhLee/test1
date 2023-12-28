import { createWebHistory, createRouter } from "vue-router";
//import ContactBook from "@/views/ContactBook.vue";
const routes = [

    // {
    //     path: "/document-add",
    //     name: "DocumentAdd",
    //     component: () => import("@/views/DocumentAdd.vue"),

    // },

    {
        path: "/account",
        name: "Account",
        component: () => import("@/views/Account.vue"),

    },
    {
        path: "/test-chart",
        name: "TestChart",
        component: () => import("@/views//users/test_chart.vue"),

    },
    {
        path: "/test-question-submitcode/:id_courses/:id_exam/:question",
        name: "TestQuestionSubmitCode",
        component: () => import("@/views/TestQuestionSubmitCode.vue"),

    },
    {
        path: "/test-question-quiz/:id_courses/:id_exam",
        name: "TestQuestionQuiz",
        component: () => import("@/views/TestQuestionQuiz.vue"),

    },
    {
        path: "/question-quiz-bank-all/:id_subject",
        name: "QuestionQuizBankAll",
        component: () => import("@/views/QuestionQuizBankAll.vue"),

    },
    {
        path: "/question-quiz-bank-add",
        name: "QuestionQuizBankAdd",
        component: () => import("@/views/QuestionQuizBankAdd.vue"),

    },
    {
        path: "/question-quiz-add/:id_subject/:id_question_bank", 
        name: "QuestionQuizAdd",
        component: () => import("@/views/QuestionQuizAdd.vue"),

    },
    {
        path: "/question-quiz-edit/:id_question/:id_subject/:id_question_bank", 
        name: "QuestionQuizEdit",
        component: () => import("@/views/QuestionQuizEdit.vue"),

    },

    {
        path: "/list-question-submitcode/:id_exam/:id_courses/:id_subject/:id_question_bank",
        name: "ListQuestionSubmitcode",
        component: () => import("@/views/ListQuestionSubmitcode.vue"),

    },
    {
        path: "/list-question-quiz/:id_exam/:id_courses/:id_subject/:id_question_bank",
        name: "ListQuestionQuiz",
        component: () => import("@/views/ListQuestionQuiz.vue"),

    },
    {
        path: '/question-submitcode-bank-add-detail/:id_subject/:id_question_bank/:id_question_bank2',
        name: "QuestionSubmitcodeBankAddDetail",
        component: () => import("@/views/QuestionSubmitcodeBankAddDetail.vue"),
        // children: [

        //     {
        //         path: "question-submitcode-bank-add-detail-dashboard/:id_question_bank/:id_question_bank2",
        //         name: "QuestionSubmitcodeBankAddDetailDashboard",
        //         component: () => import("@/views/QuestionSubmitcodeBankAddDetailDashboard.vue"),

        //     },
        // ],

    },
    {
        path: '/question-quiz-bank-add-detail/:id_subject/:id_question_bank/:id_question_bank2',
        name: "QuestionQuizBankAddDetail",
        component: () => import("@/views/QuestionQuizBankAddDetail.vue"),
        // children: [

        //     {
        //         path: "question-submitcode-bank-add-detail-dashboard/:id_question_bank/:id_question_bank2",
        //         name: "QuestionSubmitcodeBankAddDetailDashboard",
        //         component: () => import("@/views/QuestionSubmitcodeBankAddDetailDashboard.vue"),

        //     },
        // ],
    },
    
    {
        path: '/question-quiz-bank-detail/:id_subject',
        name: "QuestionQuizBankDetail",
        component: () => import("@/views/QuestionQuizBankDetail.vue"),
        children: [

            {
                path: "question-quiz-bank-detail-dashboard/:id_question_bank",
                name: "QuestionQuizBankDetailDashboard",
                component: () => import("@/views/QuestionQuizBankDetailDashboard.vue"),

            },
            {
                path: "question-quiz-bank-detail-member/:id_question_bank",
                name: "QuestionQuizBankDetailMember",
                component: () => import("@/views/QuestionQuizBankDetailMember.vue"),

            },
        ],
    },

    {
        path: '/question-submitcode-bank-detail/:id_subject',
        name: "QuestionSubmitcodeBankDetail",
        component: () => import("@/views/QuestionSubmitcodeBankDetail.vue"),
        children: [

            {
                path: "question-submitcode-bank-detail-dashboard/:id_question_bank",
                name: "QuestionSubmitcodeBankDetailDashboard",
                component: () => import("@/views/QuestionSubmitcodeBankDetailDashboard.vue"),

            },
            {
                path: "question-submitcode-bank-detail-member/:id_question_bank",
                name: "QuestionSubmitcodeBankDetailMember",
                component: () => import("@/views/QuestionSubmitcodeBanDetailMember.vue"),

            },
        ],
    },
    {
        path: '/exam-quiz-detail/:id_exam/:id_courses',
        name: 'ExamQuizDetail',
        component: () => import("@/views/ExamQuizDetail.vue"),
        children: [
            {
                path: "exam-quiz-edit",
                name: "ExamQuizEdit",
                component: () => import("@/views/ExamQuizEdit.vue"),


            },
            {
                path: "exam-quiz-dashboard",
                name: "ExamQuizDashboard",
                component: () => import("@/views/ExamQuizDetailDashboard.vue"),


            },
            {
                path: "exam-quiz-question",
                name: "ExamQuizQuestion",
                component: () => import("@/views/ExamQuizQuestion.vue"),


            },
            {
                path: "exam-quiz-reult",
                name: "ExamQuizResult",
                component: () => import("@/views/ExamQuizResult.vue"),


            },
        ]
    },
    {
        path: '/exam-submitcode-detail/:id_exam/:id_courses',
        name: 'ExamSubmitCodeDetail',
        component: () => import("@/views/ExamSubmitCodeDetail.vue"),
        children: [
            {
                path: "exam-submit-code-edit",
                name: "ExamSubmitcodeEdit",
                component: () => import("@/views/ExamSubmitcodeEdit.vue"),


            },
            {
                path: "exam-submit-code-dashboard",
                name: "ExamSubmitcodeDashboard",
                component: () => import("@/views/ExamSubmitcodeDetailDashboard.vue"),


            },
            {
                path: "exam-submit-code-question",
                name: "ExamSubmitcodeQuestion",
                component: () => import("@/views/ExamSubmitcodeQuestion.vue"),


            },
            {
                path: "exam-submit-code-result",
                name: "ExamSubmitcodeResult",
                component: () => import("@/views/ExamSubmitcodeResult.vue"),


            },
        ]
    },

    {
        path: '/courses-detail/:id_courses',
        name: "CoursesDetail",
        component: () => import("@/views/CoursesDetail.vue"),
        children: [
            {
                path: "document-add/:id_topic",
                name: "DocumentAdd",
                component: () => import("@/views/DocumentAdd.vue"),
        
            },
            {
                path: "exam-submit-code-add/:id_topic",
                name: "ExamSubmitcodeAdd",
                component: () => import("@/views/ExamSubmitcodeAdd.vue"),

            },
            {
                path: "exam-quiz-add/:id_topic",
                name: "ExamQuizAdd",
                component: () => import("@/views/ExamQuizAdd.vue"),
        
            },
            {
                path: "topic-add",
                name: "TopicAdd",
                component: () => import("@/views/TopicAdd.vue"),

            },
            {
                path: "topic-edit/:id_topic",
                name: "TopicEdit",
                component: () => import("@/views/TopicEdit.vue"),

            },
            {
                // UserProfile will be rendered inside User's <router-view>
                // when /user/:id/profile is matched

                path: 'courses-detail-dashboard',
                name: "CoursesDetailDashboard",
                component: () => import("@/views/CoursesDetailDashboard.vue"),
                // children: [
                //     {
                //         path: "/topic-add",
                //         name: "TopicAdd",
                //         component: () => import("@/views/TopicAdd.vue"),

                //     },

                // ],

            },
            {
                path: "courses-edit",
                name: "CoursesEdit",
                component: () => import("@/views/CoursesEdit.vue"),

            },
            {
                path: "courses-member",
                name: "CoursesMember",
                component: () => import("@/views/CoursesMember.vue"),

            },
        ],
    },
    {
        path: '/student',
        name: "Student",
        component: () => import("@/views/users/Index.vue"),
        children: [
            {
                // UserProfile will be rendered inside User's <router-view>
                // when /user/:id/profile is matched

                path: 'exam_happening',
                component: () => import("@/views/users/Exam_happening.vue"),
            },
            {
                // UserProfile will be rendered inside User's <router-view>
                // when /user/:id/profile is matched

                path: 'awdad',
                component: () => import("@/views/users/Exam_happening.vue"),
            }
        ],
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: () => import("@/views/Dashboard.vue"),


    },
    {
        path: "/exam",
        name: "Exam",
        component: () => import("@/views/Exam.vue"),

    },
    {
        path: "/exam-quiz",
        name: "ExamQuiz",
        component: () => import("@/views/ExamQuiz.vue"),


    },

   
   
    {
        path: "/exam-submit-code",
        name: "ExamSubmitcode",
        component: () => import("@/views/ExamSubmitcode.vue"),



    },
    // {
    //     path: "/exam-submit-code-add",
    //     name: "ExamSubmitcodeAdd",
    //     component: () => import("@/views/ExamSubmitcodeAdd.vue"),

    // },

    {
        path: "/question-submit-code",
        name: "QuestionSubmitCode",
        component: () => import("@/views/Question_submit_code.vue"),

    },
    {
        path: "/question-submit-code-bank/:id_subject",
        name: "QuestionSubmitCodeBank",
        component: () => import("@/views/QuestionSubmitCodeBank.vue"),

    },
    {
        path: "/question-submit-code-bank-all/:id_subject",
        name: "QuestionSubmitCodeBankAll",
        component: () => import("@/views/QuestionSubmitCodeBankAll.vue"),

    },
    {
        path: "/question-submit-code-bank-add",
        name: "QuestionSubmitCodeBankAdd",
        component: () => import("@/views/QuestionSubmitCodeBankAdd.vue"),

    },
    {
        path: "/question-submit-code-add/:id_subject/:id_question_bank",
        name: "QuestionSubmitCodeAdd",
        component: () => import("@/views/QuestionSubmitCodeAdd.vue"),

    },
    {
        path: "/question-submit-code-edit/:id_question/:id_subject/:id_question_bank",
        name: "QuestionSubmitCodeEdit",
        component: () => import("@/views/QuestionSubmitcodeEdit.vue"),

    },
    {
        path: "/question-submit-code",
        name: "QuestionSubmitCode",
        component: () => import("@/views/Question_submit_code.vue"),

    },
    {
        path: "/study-class",
        name: "StudyClass",
        component: () => import("@/views/StudyClass.vue"),

    },
    {
        path: "/courses-add",
        name: "CoursesAdd",
        component: () => import("@/views/CoursesAdd.vue"),

    },

    {
        path: "/courses",
        name: "Courses",
        component: () => import("@/views/Courses.vue"),
        children: [
            // {
            //     // UserProfile will be rendered inside User's <router-view>
            //     // when /user/:id/profile is matched

            //     path: 'courses-detail',
            //     name: "CoursesDetail",
            //     component: () => import("@/views/CoursesDetail.vue"),
            // },
            {
                // UserProfile will be rendered inside User's <router-view>
                // when /user/:id/profile is matched

                path: 'awdad',
                component: () => import("@/views/users/Exam_happening.vue"),
            }
        ],

    },
    // {
    //     path: "/courses-detail",
    //     name: "CoursesDetail",
    //     component: () => import("@/views/CoursesDetail.vue"),

    // },
    // {
    //     path: "/topic-add",
    //     name: "TopicAdd",
    //     component: () => import("@/views/TopicAdd.vue"),

    // },
    {
        path: "/subject",
        name: "Subject",
        component: () => import("@/views/Subject.vue"),

    },
    {
        path: "/test_submit_code/:id",
        name: "Test_submit_code",
        component: () => import("@/views/users/Test_submit_code.vue"),

    },

    {
        path: "/submit_code_vue3",
        name: "Submit_code_vue3",
        component: () => import("@/views/Submit_code_vue3.vue"),
        props: true,
        children: [
            {
                // UserProfile will be rendered inside User's <router-view>
                // when /user/:id/profile is matched
                path: ':idquestion',
                component: () => import("@/views/Submit_code_vue3.vue"),
            }
        ],

    },
    {
        path: "/",
        name: "Home",
        component: () => import("@/views/Home.vue"),

    },
    {
        path: "/product-manager",
        name: "product_manager",
        component: () => import("@/views/Product_manager.vue"),

    },
    {
        path: "/product-over-view",
        name: "product_over_view",
        component: () => import("@/views/Product_over_view.vue"),

    },
    // {
    //     path: "/product-over-view-detail/:id",
    //     name: "product_over_view_detail",
    //     component: () => import("@/views/Product_over_view_detail.vue"),
    //     props: true
    // },
    {
        path: "/product-manager/:id",
        name: "product_manager.edit",
        component: () => import("@/views/Product_manager_edit.vue"),
        props: true // Truyền các biến trong $route.params vào làm props
    },
    {
        path: "/product-manager",
        name: "product_manager.add",
        component: () => import("@/views/Product_manager_add.vue"),
        props: true // Truyền các biến trong $route.params vào làm props
    },
    {
        path: "/card",
        name: "card",
        component: () => import("@/views/Card.vue"),
        props: true // Truyền các biến trong $route.params vào làm props
    },
    {
        path: "/order",
        name: "order",
        component: () => import("@/views/Order.vue"),

    },

    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("@/views/NotFound.vue"),
    },


    {
        path: "/login",
        name: "login",
        component: () => import("@/views/Login.vue"),
        props: true // Truyền các biến trong $route.params vào làm props
    },
    {
        path: "/login-teacher",
        name: "LoginTeacher",
        component: () => import("@/views/Login_teacher.vue"),
        props: true // Truyền các biến trong $route.params vào làm props
    },
    {
        path: "/logout",
        name: "logout",
        component: () => import("@/views/Logout.vue"),
        props: true // Truyền các biến trong $route.params vào làm props
    },

    {
        path: "/login-admin",
        name: "login-admin",
        component: () => import("@/views/Login_admin.vue"),
        props: true // Truyền các biến trong $route.params vào làm props
    },
    {
        path: "/test",
        name: "test",
        component: () => import("@/views/test.vue"),
        // props: true // Truyền các biến trong $route.params vào làm props
    },





];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;