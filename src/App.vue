<template>
  <div class="wrapper">
    <div class="generator__container">
      <h1 class="generator__title">Password Generator</h1>
      <PasswordNav />
      <div class="generator__body">
        <CharacterLength />
        <CharacterOptions />
        <CharacterStrenght />
        <div class="generate__btn">
          <button @click="generateRandomPass">GENERATE</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useCounterStore } from "@/stores/counter";
import PasswordNav from "@/components/PasswordNav.vue";
import CharacterLength from "@/components/CharacterLength.vue";
import CharacterOptions from "@/components/CharacterOptions.vue";
import CharacterStrenght from "@/components/CharacterStrenght.vue";
const dataStore = useCounterStore();

const generateRandomPass = () => {
  dataStore.generatedPass = "";
  let baseChars = dataStore.charsItems.lowerChars;
  if (dataStore.optionCase.lowerCase) {
    baseChars += dataStore.charsItems.lowerChars;
  }
  if (dataStore.optionCase.upperCase) {
    baseChars += dataStore.charsItems.upperChars;
  }

  if (dataStore.optionCase.numbers) {
    baseChars += dataStore.charsItems.numberChars;
  }
  if (dataStore.optionCase.symbols) {
    baseChars += dataStore.charsItems.symbolChars;
  }

  for (let i = 0; i < dataStore.passLength; i++) {
    const randomIndex = Math.floor(Math.random() * baseChars.length);
    dataStore.generatedPass += baseChars[randomIndex];
  }
  checkPasswordStatus();
};

const checkPasswordStatus = () => {
  let strong =
    dataStore.optionCase.lowerCase == true &&
    dataStore.optionCase.upperCase == true &&
    dataStore.optionCase.numbers == true &&
    dataStore.optionCase.symbols == true &&
    dataStore.passLength >= 12;

  let medium =
    (dataStore.optionCase.lowerCase == true &&
      dataStore.optionCase.upperCase == true &&
      dataStore.optionCase.numbers == true) ||
    (dataStore.optionCase.symbols == true && 8 < dataStore.passLength < 12);

  let weak =
    dataStore.optionCase.lowerCase == true ||
    (dataStore.optionCase.upperCase == true && dataStore.passLength < 8);

  if (strong) {
    dataStore.passwordStatus = "STRONG";
    dataStore.activeClass = "strong__pass";
  } else if (medium) {
    dataStore.passwordStatus = "MEDIUM";
    dataStore.activeClass = "medium__pass";
  } else if (weak) {
    dataStore.passwordStatus = "WEAK";
    dataStore.activeClass = "weak__pass";
  }
};
generateRandomPass();
</script>

<style lang="scss" scoped>
.wrapper {
  min-height: 100vh;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .generator__container {
    max-width: 500px;
    width: 500px;
    .generator__title {
      text-align: center;
      color: white;
      margin-bottom: 20px;
    }
    .generator__body {
      padding: 30px 20px;
      background: #0b1740;
      .generate__btn {
        margin-top: 30px;
        button {
          width: 100%;
          padding: 20px;
          outline: none;
          border: 1px solid #192d66;
          color: white;
          cursor: pointer;
          font-size: 20px;
          position: relative;
          background-image: linear-gradient(to right, #0b1740, #192d66);
          &:hover {
            background-image: linear-gradient(to right, #0e1e4b, #192d66);
          }
          &:after {
            content: "";
            display: block;
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
            transition: all 0.5s;
            box-shadow: 0 0 10px 10px #ffa500;
          }
          &:active:after {
            box-shadow: 0 0 0 0 #ffa500;
            position: absolute;
            left: 0;
            top: 0;
            opacity: 1;
            transition: 0s;
          }
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .wrapper {
    padding: 0 20px;
    .generator__container {
      .generator__title {
        font-size: 30px;
      }
      .generator__body {
        padding:  20px;
        .generate__btn {
          button {
            padding: 10px;
          }
        }
      }
    }
  }
}
</style>
