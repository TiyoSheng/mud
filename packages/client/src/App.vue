<script setup>
import {useGlobalStore} from './hooks/globalStore'

const { store } = useGlobalStore()
const incrementFun = async () => {
  await store.state.increment()
};
</script>
<template>
  <div>Counter: <span>{{store.state.counter}}</span></div>
  <button @click="incrementFun">Increment</button>
</template>