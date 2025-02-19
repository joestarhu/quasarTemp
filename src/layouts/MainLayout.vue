<template>
  <q-layout view="lHh Lpr lFf">
    <!-- <q-header elevated> -->
    <q-header :class="Dark.isActive ? 'bg-dark' : 'hi-bg-light'" bordered>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          Quasar v{{ $q.version }}
        </q-toolbar-title>

        <div>
          <HiAppearance></HiAppearance>
          <HiLanguage />
        </div>
      </q-toolbar>
    </q-header>

    <!-- <q-drawer v-model="leftDrawerOpen" show-if-above bordered> -->
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered :class="Dark.isActive ? 'bg-dark' : 'hi-bg-light'">
      <q-list>
        <q-item>
          <q-item-section side><img src="/icons/favicon-32x32.png"></q-item-section>
          <q-item-section class="text-h5 text-wight-bold">Quasar App</q-item-section>
        </q-item>
        <HiMenu v-for="link in essentialLinks" :key="link.title" v-bind="link"></HiMenu>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>


<script setup lang="js">
import { Dark } from 'quasar'
import { defineComponent, ref } from 'vue'
import HiAppearance from 'components/HiAppearance.vue'
import HiLanguage from 'components/HiLanguage.vue'
import HiMenu from 'components/HiMenu.vue'

const essentialLinks = [
  {
    title: 'Docs',
    i18nlabel: "msgModeAuto",
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
.hi-bg-light {
  background-color: #FFF;
  color: #34373C;
}

.body--light {
  background-color: #F5F7FA;
}
</style>