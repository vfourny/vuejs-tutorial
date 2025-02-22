<script lang="ts" setup>
import {computed, ref} from 'vue';

const counter = ref(0);
const doubleCounter = computed(() => counter.value * 2);

const reset = () => {
  counter.value = 0;
};
</script>

<template>
  <div>
    <p>Compteur : {{ counter }}</p>
    <p>Double compteur : {{ doubleCounter }}</p>
    <button @click="counter++">Incrémenter</button>
    <button v-bind:disabled="counter===0" @click="reset">Réinitialiser</button>
  </div>
</template>