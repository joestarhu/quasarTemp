<template>
<q-card flat>
        <q-card-section>
        <p class="text-bold">你好呀,这是input类型的Demo试验场</p>
        <HiInput v-model="a.value" v-bind="a"></HiInput>
        <HiInput v-model="b.value" v-bind="b"></HiInput>
        <HiInput v-model="c.value" v-bind="c"></HiInput>
    </q-card-section>
    </q-card>
</template>

<script setup lang="js">
import { HiInputObj } from 'src/base/settings'
import HiInput from 'src/components/HiInput.vue'

let a = HiInputObj.text({outlined:false,borderless:true,readonly:true,dense:false,"stack-label":true},"msgModeAuto","这是Readonly","")
let b = HiInputObj.select({options:[{ i18nLabel:"msgModeAuto", label:"Off", value:0},{i18nLabel:"msgModeDark",label:"On", value:1}]},"msgNoData",0)
let c = HiInputObj.text({outlined:false,dense:false, standout:true,"stack-label":true},"msgModeAuto","这是Readonly","")

</script>