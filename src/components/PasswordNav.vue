<template>
  <div class="generator__head">
    {{ dataStore.generatedPass }}
    <div class="copy__info" v-if="copyInfo">Copied!</div>
    <img
      class="copyBtn"
      @click="copyBtn"
      src="../assets/copy-regular.svg"
      alt=""
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useCounterStore } from "@/stores/counter";
const dataStore = useCounterStore();

const copyInfo = ref(false);

const copyBtn = () => {
  navigator.clipboard.writeText(dataStore.generatedPass);
  copyInfo.value = true;
  setTimeout(() => {
    copyInfo.value = false;
  }, 700);
};
</script>

<style lang="scss" scoped>
.generator__head {
  background: #0b1740;
  position: relative;
  padding: 20px;
  font-size: 25px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  .copyBtn {
    color: #ffa500;
    width: 30px;
    cursor: pointer;
    &:active {
      transform: translateY(4px);
    }
  }
  .copy__info {
    width: 80px;
    background: #ffa500;
    font-size: 14px;
    font-weight: 700;
    position: absolute;
    right: 0;
    top: -35px;
    text-align: center;
    padding: 5px;
    border-radius: 4px;
    color: #0b1740;
  }
}

@media (max-width: 768px) {
  .generator__head {
    padding: 10px 20px;
    font-size: 20px;
    .copyBtn {
      width: 25px;
      &:active {
        transform: translateY(2px);
      }
    }
    .copy__info {
      width: 60px;
      font-size: 12px;
      top: -25px;
      padding: 3px;
    }
  }
}
</style>
