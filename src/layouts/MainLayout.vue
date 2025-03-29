<template>
  <q-layout view="lHh Lpr lFf">
    <!-- <q-header elevated> -->
    <q-header :class="Dark.isActive ? 'bg-dark' : 'hi-bg-light'" bordeAred>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
        <q-space></q-space>
        <div>
          <HiAppearance></HiAppearance>
          <HiLanguage />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered :class="Dark.isActive ? 'bg-dark' : 'hi-bg-light'" :width="260">
      <q-list>
        <q-item>
          <q-item-section side>
            <img src="/icons/favicon-32x32.png">
          </q-item-section>
          <q-item-section class="text-h6 text-bold">
              Quasar Demo
          </q-item-section>
        </q-item>
        <HiMenu v-for="link in essentialLinks" :key="link.title" v-bind="link"></HiMenu>
      </q-list>
    </q-drawer>

    <q-page-container>
      <q-page class="q-pa-md">
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>


<script setup lang="js">
import { Dark } from 'quasar'
import { ref } from 'vue'
import HiAppearance from 'components/HiAppearance.vue'
import HiLanguage from 'components/HiLanguage.vue'
import HiMenu from 'components/HiMenu.vue'

const essentialLinks = [
  {
    i18nlabel: "输入框",
    icon: 'input',
    to: "/input"
  },
  {
    i18nlabel: "Demo",
    icon: 'coffee',
    to: "/demo"
  },
]

const leftDrawerOpen = ref(false)
const drawerMiniMode = ref(true)

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