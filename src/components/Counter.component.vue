<script lang="ts" setup>
import {computed, ref} from 'vue';
import {NButton, NCard, NText} from 'naive-ui';

const counter = ref(0);
const doubleCounter = computed(() => counter.value * 2);

const reset = () => {
  counter.value = 0;
};
</script>

<template>
  <n-card bordered title="Compteur">
    <n-text strong>Valeur actuelle : {{ counter }}</n-text>
    <br/>
    <n-text type="success">Double : {{ doubleCounter }}</n-text>
    <br/><br/>
    <n-button type="primary" @click="counter++">Incrémenter</n-button>
    <n-button :disabled="counter === 0" class="ml-2" type="error" @click="reset">
      Réinitialiser
    </n-button>
  </n-card>
</template>
