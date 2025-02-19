<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}
          <HiAppearance></HiAppearance>
          <HiLanguage />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>
          自定义组件一览
        </q-item-label>

        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>


<script setup lang="js">
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import HiAppearance from 'components/HiAppearance.vue'
import HiLanguage from 'components/HiLanguage.vue'

const essentialLinks = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  }
]

const leftDrawerOpen = ref(false)


function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}


</script>

<style>
.dm-bg-light {
  background-color: #FFF;
  color: #34373C;
}

.body--light {
  background-color: #F5F7FA;
}
</style>