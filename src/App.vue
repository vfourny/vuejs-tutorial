<script lang="ts" setup>
import {ref} from 'vue';
import CounterComponent from './components/Counter.component.vue';
import UserCollection from './components/UserCollection.component.vue';
import type {User} from './types/common.type.ts';

const selectedUser = ref<User | null>(null);
const newUser = ref({name: '', age: 0});

const users = ref<User[]>([
  {name: 'John', age: 25},
  {name: 'Jane', age: 24},
  {name: 'Jack', age: 30},
]);

const userReceived = (user: User) => {
  selectedUser.value = user;
};

const addUser = () => {
  if (newUser.value.name && newUser.value.age) {
    users.value.push({...newUser.value});
  }
};

</script>

<template>
  <div
  >
    <CounterComponent/>

    <div>
      <p v-if="selectedUser">Selected User : {{ selectedUser.name }}</p>
      <UserCollection :users="users" @send-user="userReceived">
        <div class="form-group">
          <input v-model="newUser.name" placeholder="Nom"/>
          <input v-model="newUser.age" placeholder="Âge" type="number"/>
          <button @click="addUser">Valider</button>
        </div>
      </UserCollection>
    </div>
  </div>
</template>
