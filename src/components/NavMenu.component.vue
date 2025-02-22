<template>
  <n-layout-header bordered>
    <n-menu v-model:value="activeKey" :options="menuOptions" mode="horizontal"/>
  </n-layout-header>
</template>

<script setup>
import {ref} from 'vue'
import {useRouter} from 'vue-router'
import {NMenu, NLayoutHeader} from 'naive-ui'

const router = useRouter()
const activeKey = ref(router.currentRoute.value.path)

const menuOptions = [
  {
    label: 'Accueil',
    key: '/',
    onClick: () => router.push('/')
  },
  {
    label: 'Compteur',
    key: '/counter',
    onClick: () => router.push('/counter')
  }
]
</script>

<style scoped>
.n-layout-header {
  padding: 10px;
}
</style>
