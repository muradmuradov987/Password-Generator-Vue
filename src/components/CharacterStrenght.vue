<template>
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
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";
const dataStore = useCounterStore();
</script>

<style lang="scss" scoped>
.character__strenght {
  display: flex;
  justify-content: space-between;
  color: white;
  font-size: 20px;
  background: #060f2d;
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
    color: #ffa500;
    span {
      border: 1px solid #ffa500;
      &:nth-child(1) {
        background: #ffa500;
      }
      &:nth-child(2) {
        background: #ffa500;
      }
      &:nth-child(3) {
        background: #ffa500;
      }
      &:nth-child(4) {
        background: #ffa500;
      }
    }
  }
  .strong__pass {
    color: hsla(160, 100%, 37%, 1);
    span {
      border: 1px solid hsla(160, 100%, 37%, 1);
      background: hsla(160, 100%, 37%, 1);
    }
  }
}


@media (max-width: 768px){
  .character__strenght {
  font-size: 18px;
  padding: 10px ;
  .pass {
    span {
      width: 7px;
      height: 17px;
      margin-left: 3px;
    }
  }
}
}
</style>
