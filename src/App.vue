<script lang="ts" setup>
import {ref} from 'vue';
import CounterComponent from './components/Counter.component.vue';
import UserCollection from './components/UserCollection.component.vue';
import type {User} from './types/common.type.ts';
import {NButton, NCard, NInput, NInputNumber, NText} from 'naive-ui';

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
      <n-card v-if="selectedUser" bordered title="Utilisateur sélectionné">
        <n-text strong>{{ selectedUser.name }}</n-text>
      </n-card>
      <UserCollection :users="users" @send-user="userReceived">
        <div class="form-group">
          <n-input v-model:value="newUser.name" placeholder="Nom"/>
          <n-input-number v-model:value="newUser.age" placeholder="Âge"/>
          <n-button type="primary" @click="addUser">Valider</n-button>
        </div>
      </UserCollection>
    </div>
  </div>
</template>
