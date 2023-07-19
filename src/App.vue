<template>
  <div class="wrapper">
    <div class="generator__container">
      <h1 class="generator__title">Password Generator</h1>
      <div class="generator__head">
        {{ dataStore.generatedPass }}
        <div class="copy__info" v-if="dataStore.copyInfo">Copied!</div>
        <i class="fa-regular fa-copy copyBtn" @click="copyBtn"></i>
      </div>
      <div class="generator__body">
      <h1>{{ dataStore.count }}</h1>
        <div class="character__length-container">
          <div class="character__length">
            Character Length
            <input
              v-model="passLength"
              :min="minLength"
              :max="maxLength"
              readonly
              type="number"
            />
          </div>
          <input
            v-model="passLength"
            :min="minLength"
            :max="maxLength"
            class="character__range"
            type="range"
          />
        </div>
        <div class="character__options">
          <div>
            <input type="checkbox" v-model="lowerCase" />
            Include Lowercase Letters
          </div>
          <div>
            <input type="checkbox" v-model="upperCase" />
            Include Uppercase Letters
          </div>
          <div>
            <input type="checkbox" v-model="numbers" />
            Include Numbers
          </div>
          <div>
            <input type="checkbox" v-model="symbols" />
            Include Symbols
          </div>
        </div>
        <div class="character__strenght">
          STRENGTH
          <div class="pass" :class="dataStore.activeClass">
            {{ dataStore.passwordStatus }}
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div class="generate__btn">
          <button @click="generateRandomPass">GENERATE</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useCounterStore } from '@/stores/counter'
const dataStore = useCounterStore()


const minLength = 6;
const maxLength = 22;
const passLength = ref(minLength);

const lowerCase = ref(true);
const upperCase = ref(false);
const numbers = ref(false);
const symbols = ref(false);

const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const symbolChars = `!@#$%^&*/?~(){}[]<>."'`;

const generateRandomPass = () => {
  dataStore.generatedPass = "";
  let baseChars = lowerChars;
  if (lowerCase.value) {
    baseChars += lowerChars;
  }
  if (upperCase.value) {
    baseChars += upperChars;
  }

  if (numbers.value) {
    baseChars += numberChars;
  }
  if (symbols.value) {
    baseChars += symbolChars;
  }

  for (let i = 0; i < passLength.value; i++) {
    const randomIndex = Math.floor(Math.random() * baseChars.length);
    dataStore.generatedPass += baseChars[randomIndex];
  }
  checkPasswordStatus();
};
const checkPasswordStatus = () => {
  let strong =
    lowerCase.value == true &&
    upperCase.value == true &&
    numbers.value == true &&
    symbols.value == true &&
    passLength.value >= 12;

  let medium =
    (lowerCase.value == true &&
      upperCase.value == true &&
      numbers.value == true) ||
    (symbols.value == true && 8 < passLength.value < 12);

  let weak =
    lowerCase.value == true ||
    (upperCase.value == true && passLength.value < 8);

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

const copyBtn = () => {
  navigator.clipboard.writeText(dataStore.generatedPass);
  dataStore.copyInfo = true;
  setTimeout(() => {
    dataStore.copyInfo = false;
  }, 700);
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
      color: #878690;
      margin-bottom: 20px;
    }
    .generator__head {
      background: #24232b;
      position: relative;
      padding: 20px;
      font-size: 25px;
      color: white;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      .copyBtn {
        color: #a1ffb0;
        cursor: pointer;
      }
      .copy__info {
        width: 80px;
        background: #24232b;
        font-size: 14px;
        font-weight: 700;
        position: absolute;
        right: 0;
        top: -35px;
        text-align: center;
        padding: 5px;
        border-radius: 4px;
        color: #a1ffb0;
      }
    }
    .generator__body {
      padding: 30px 20px;
      background: #24232b;
      .character__length-container {
        .character__length {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: white;
          font-size: 20px;
          margin-bottom: 10px;
          input {
            color: #a1ffb0;
            font-size: 25px;
            width: 40px;
            background: none;
            border: none;
            outline: none;
            &::-webkit-inner-spin-button {
              -webkit-appearance: none;
              margin: 0;
            }
          }
        }
        .character__range {
          width: 100%;
        }
      }
      .character__options {
        margin: 30px 0;
        display: flex;
        flex-direction: column;
        gap: 10px;
        font-size: 20px;
        color: white;
        input {
          margin-right: 10px;
          cursor: pointer;
        }
      }
      .character__strenght {
        display: flex;
        justify-content: space-between;
        color: white;
        font-size: 20px;
        background: #181818;
        padding: 20px;
        .pass {
          span {
            display: inline-block;
            width: 10px;
            height: 20px;
            margin-left: 5px;
          }
        }
        .weak__pass {
          color: red;
          span {
            border: 1px solid red;
            &:nth-child(1) {
              background: red;
            }
            &:nth-child(2) {
              background: red;
            }
          }
        }
        .medium__pass {
          color: orange;
          span {
            border: 1px solid orange;
            &:nth-child(1) {
              background: orange;
            }
            &:nth-child(2) {
              background: orange;
            }
            &:nth-child(3) {
              background: orange;
            }
            &:nth-child(4) {
              background: orange;
            }
          }
        }
        .strong__pass {
          color: green;
          span {
            border: 1px solid green;
            background: green;
          }
        }
      }
      .generate__btn {
        margin-top: 30px;
        button {
          width: 100%;
          padding: 20px;
          background: none;
          outline: none;
          border: 1px solid #a1ffb0;
          color: #a1ffb0;
          cursor: pointer;
          font-size: 20px;
        }
      }
    }
  }
}
</style>
