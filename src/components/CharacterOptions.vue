<template>
  <div class="character__options">
    <div class="option__container">
      Include Lowercase Letters
      <input
        type="checkbox"
        id="lowercase"
        v-model="dataStore.optionCase.lowerCase"
      />
      <!-- <label for="lowercase" toggle></label> -->
    </div>
    <div class="option__container">
      Include Uppercase Letters
      <input type="checkbox" v-model="dataStore.optionCase.upperCase" />
    </div>
    <div class="option__container">
      Include Numbers
      <input type="checkbox" v-model="dataStore.optionCase.numbers" />
    </div>
    <div class="option__container">
      Include Symbols
      <input type="checkbox" v-model="dataStore.optionCase.symbols" />
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";
const dataStore = useCounterStore();
</script>

<style lang="scss" scoped>
.character__options {
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-size: 20px;
  color: white;
  .option__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    input {
      position: relative;
      width: 45px;
      height: 20px;
      -webkit-appearance: none;
      appearance: none;
      background: #060f2d;
      border-radius: 15px;
      cursor: pointer;
      &::before {
        content: "";
        width: 20px;
        height: 20px;
        background: #ffa500;
        border-radius: 50%;
        transition: 0.3s ease;
        position: absolute;
        left: 0;
      }
      &:checked {
        &::before {
          right: 0;
          transform: translateX(130%);
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .character__options {
    font-size: 18px;
    color: white;
    .option__container {
      input {
        width: 40px;
        height: 15px;
        &::before {
          content: "";
          width: 15px;
          height: 15px;
        }
        &:checked {
          &::before {
            transform: translateX(160%);
          }
        }
      }
    }
  }
}
</style>
