<template>
  <div class="user-list">
    <h2>Liste des utilisateurs</h2>
    <ul>
      <li v-for="user in users" :key="user.name" @click="sendUser(user)">
        {{ user.name }} - {{ user.age }} ans
      </li>
    </ul>

    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import {defineProps} from 'vue';
import type {User} from '../types/common.type.ts';

const props = defineProps({
  users: {
    type: Array as () => User[],
    required: true,
  },
});

const emit = defineEmits(['sendUser']);

const sendUser = (user: User) => {
  emit('sendUser', user);
};
</script>