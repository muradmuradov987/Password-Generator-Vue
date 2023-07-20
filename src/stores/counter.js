import { ref } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    generatedPass: ref(""),
    activeClass: ref(""),
    passwordStatus: ref(""),
    minLength: 6,
    maxLength: 22,
    passLength: ref(6),
    optionCase: {
      lowerCase: true,
      upperCase: false,
      numbers: false,
      symbols: false,
    },
    charsItems: {
      lowerChars: "abcdefghijklmnopqrstuvwxyz",
      upperChars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      numberChars: "0123456789",
      symbolChars: `!@#$%^&*/?~(){}[]<>."'`,
    },
  }),
});
