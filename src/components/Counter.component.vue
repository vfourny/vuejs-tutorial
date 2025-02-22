<script lang="ts" setup>
import {computed} from 'vue';
import {NButton, NCard, NText} from 'naive-ui';
import {useCounterStore} from "@/stores/counter.store.ts";
import {storeToRefs} from "pinia";

const counterStore = useCounterStore();

const {counter} = storeToRefs(counterStore);

const doubleCounter = computed(() => counter.value * 2);

</script>s

<template>
  <n-card bordered title="Compteur">
    <n-text strong>Valeur actuelle : {{ counter }}</n-text>
    <br/>
    <n-text type="success">Double : {{ doubleCounter }}</n-text>
    <br/><br/>
    <n-button type="primary" @click="counter++">Incrémenter</n-button>
    <n-button :disabled="counter === 0" class="ml-2" type="error" @click="counterStore.reset()">
      Réinitialiser
    </n-button>
  </n-card>
</template>
