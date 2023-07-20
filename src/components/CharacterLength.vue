<template>
  <div class="character__length-container">
    <div class="character__length">
      Character Length
      <input
        v-model="dataStore.passLength"
        :min="dataStore.minLength"
        :max="dataStore.maxLength"
        readonly
        type="number"
      />
    </div>
    <input
      v-model="dataStore.passLength"
      :min="dataStore.minLength"
      :max="dataStore.maxLength"
      class="character__range"
      type="range"
    />
  </div>
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";
const dataStore = useCounterStore();
</script>

<style lang="scss" scoped>
.character__length-container {
  .character__length {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    font-size: 20px;
    margin-bottom: 10px;
    input {
      color: #ffa500;
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
    height: 12px;
    background: #060f2d;
    border: solid 1px #ffa500;
    border-radius: 8px;
    -webkit-appearance: none;
    &::-webkit-slider-thumb {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      -webkit-appearance: none;
      cursor: pointer;
      background: #ffa500;
    }
  }
}

@media (max-width: 768px) {
  .character__length-container {
    .character__length {
      font-size: 18px;
      input {
        font-size: 18px;
        width: 25px;
      }
    }
    .character__range {
      height: 10px;
      border-radius: 4px;
      &::-webkit-slider-thumb {
        width: 18px;
        height: 18px;
      }
    }
  }
}
</style>
