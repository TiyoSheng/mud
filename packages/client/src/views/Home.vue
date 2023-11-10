<script setup>
import {useGlobalStore} from '../hooks/globalStore'
import { getComponentValue } from "@latticexyz/recs";
import { singletonEntity } from "@latticexyz/store-sync/recs";
import {watch,ref} from 'vue'

const { store } = useGlobalStore()

const count = ref(0)

const incrementFun = async () => {
  await store.systemCalls.increment()
  console.log('getComponentValue', getComponentValue(store.components.Counter, singletonEntity))
  console.log('state', store)
  // count.value = getComponentValue(store.components.Counter, singletonEntity).value;
}
</script>
<template>
  <div>Counter: <span>{{store.state.Counter}}</span></div>
  <button @click="incrementFun">Increment</button>
</template>