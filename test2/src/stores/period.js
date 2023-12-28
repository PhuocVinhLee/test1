import { defineStore } from "pinia"
import PeriodService from "@/services/period.service";
export const usePeriodStore = defineStore("periods", {
    state: () => ({
        periods: [],
        isLoading: false,
    }),
    getters: {
        get_all_periods: (state) => {
            return state.periods;
        }
    },
    actions: {
        async action_all_periods() {
            this.periods = await PeriodService.getAll()

            console.log(this.periods);
        }
    },

})