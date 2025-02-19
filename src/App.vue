<script setup>
import {computed, ref} from 'vue';

const counter = ref(0);
const connectedUser = ref(null);
const users = ref([
  {name: 'John', age: 25},
  {name: 'Jane', age: 24},
  {name: 'Jack', age: 30},
]);

const doubleCounter = computed(() => counter.value * 2);

const reset = () => {
  counter.value = 0;
};
</script>

<template>
  <div
  >
    <div>
      <p>Compteur : {{ counter }}</p>
      <p>Double compteur : {{ doubleCounter }}</p>
      <button @click="counter++">Incrémenter</button>
      <button v-bind:disabled="counter===0" @click="reset">Réinitialiser</button>
    </div>

    <div>
      <p v-if="connectedUser">Connected User : {{ connectedUser }}</p>
      <ul>
        <li v-for="user in users" :key="user.name">
          {{ user.name }} - {{ user.age }} years
        </li>
      </ul>
      <input v-model="connectedUser" type="text">
    </div>
  </div>
</template>

<style scoped>
div {
  margin-top: 2em;
  display: block
}
</style>