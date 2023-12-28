import { defineStore } from "pinia"
import CompilerService from "@/services/compiler.service";
export const useCompilerStore = defineStore("compilers", {
    state: () => ({
        compiler: {},
        answers: [],
        error_code: [],
        isLoading: false,

    }),
    getters: {
        get_compiler: (state) => {

            return state.compiler
        },
        get_isLoanding: (state) => {
            return state.isLoading;
        },
        get_answers: (state) => {
            return state.answers;
        },
        get_errors: (state) => {
            return state.error_code;
        }
        

    },
    actions: {
        async action_compiler(data) {
            //  this.isLoading = true;
            const result = await CompilerService.get_data(data);
            this.compiler = result;
            // this.isLoading = false;
            console.log(this.compiler);
        },
        async action_answers_width_program(answer, code ) {// arr// string// obj/// input when is program
            try {
                this.answers = [];
                this.isLoading = true
                this.error_code = [];

                for (const elt of answer) {
                   
                        var output = await CompilerService.get_data({
                            code: code,
                            input: elt.input,
                            lang: "Cpp"
                        });

                        if (output.error) {
                            this.isLoading = false;
                            console.log(output.error);
                            var codes_eror = { input: elt.input, output: output.error }
                            await this.answers.push(codes_eror);
                        } else {
                            var codes = { input: elt.input, output: output.output }
                            await this.answers.push(codes);
                        }

                }
                this.isLoading = false
            } catch (error) {
                this.isLoading = false;
                //    console.log(error.response);    
                console.log(error);
            }

        }

        ,
        async action_answers(answer, code ) {// arr// string// obj/// input when is program
            try {
                this.answers = [];
                this.isLoading = true
                this.error_code = [];

                for (const elt of answer) {
                    console.log(answer);
                    var begin_program = '#include<stdio.h> \n';
                    var funtion = code;
                    var mid_program = '\nint main() { \n';
                    var test = elt.input; 
                  

                    var end_program = '\nreturn 0;  \n}  \n';

                    var code_local = code;
                  
                        code_local = begin_program + funtion + mid_program  + test + end_program;
                        var output = await CompilerService.get_data({
                            code: code_local,
                            //  input: elt.input,
                            lang: "Cpp"
                        });

                        if (output.error) {
                            this.isLoading = false;
                            console.log(output.error);
                            var codes_eror = { input: elt.input, output: output.error }
                            await this.answers.push(codes_eror);
                        } else {
                            var codes = { input: elt.input, output: output.output }
                            await this.answers.push(codes);
                        }

                }
                this.isLoading = false
            } catch (error) {
                this.isLoading = false;
                //    console.log(error.response);    
                console.log(error);
            }

        }

    },

})