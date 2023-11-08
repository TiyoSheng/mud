<script setup>
import {useGlobalStore} from './hooks/globalStore'
import { getComponentValue } from "@latticexyz/recs";
import { singletonEntity } from "@latticexyz/store-sync/recs";
import {watch,ref} from 'vue'

const { store } = useGlobalStore()

const count = ref(0)
const incrementFun = async () => {
  await store.state.systemCalls.increment()
  console.log('incremented', getComponentValue(store.state.components.Counter, singletonEntity))
  count.value = getComponentValue(store.state.components.Counter, singletonEntity).value;
}
</script>
<template>
  <div>Counter: <span>{{count}}</span></div>
  <button @click="incrementFun">Increment</button>
</template>