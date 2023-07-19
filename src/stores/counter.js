import { ref } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    generatedPass: ref(""),
    activeClass: ref(""),
    passwordStatus : ref(""),
    copyInfo :ref(false),

    
  }),
});
