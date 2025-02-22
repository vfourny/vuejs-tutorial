<script lang="ts" setup>
import {onMounted, ref} from 'vue';
import CounterComponent from './components/Counter.component.vue';
import UserCollection from './components/UserCollection.component.vue';
import type {User} from './types/common.type.ts';
import {NButton, NCard, NText} from 'naive-ui';
import {useRandomUserStore} from "@/stores/randomUser.store.ts";
import {storeToRefs} from "pinia";

const randomUserStore = useRandomUserStore();

const {randomUseGenerated} = storeToRefs(randomUserStore);

const selectedUser = ref<User | null>(null);

const users = ref<User[]>([]);

const userReceived = (user: User) => {
  selectedUser.value = user;
};

const addUser = async () => {
  await randomUserStore.generateUser()
  if (randomUseGenerated.value) {
    users.value.push(randomUseGenerated.value)
  }
};

onMounted(async () => {
  await addUser()
});

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
          <n-button type="primary" @click="addUser">Ajout user Random</n-button>
        </div>
      </UserCollection>
    </div>
  </div>
</template>
