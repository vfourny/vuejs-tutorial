<template>
  <n-card bordered title="Liste des utilisateurs">
    <n-list bordered>
      <n-list-item v-for="user in users" :key="user.name" @click="sendUser(user)">
        <n-text>{{ user.name }} - {{ user.age }} ans</n-text>
      </n-list-item>
    </n-list>
    <slot></slot>
  </n-card>
</template>

<script lang="ts" setup>
import {defineEmits, defineProps} from 'vue';
import {NCard, NList, NListItem, NText} from 'naive-ui';
import type {User} from '../types/common.type.ts';
import {useCounterStore} from "@/stores/counter.store.ts";
import {storeToRefs} from "pinia";

const props = defineProps({
  users: {
    type: Array as () => User[],
    required: true,
  },
});

const counterStore = useCounterStore();

const {counter} = storeToRefs(counterStore);

const emit = defineEmits(['sendUser']);

const sendUser = (user: User) => {
  counter.value++
  emit('sendUser', user);
};
</script>
