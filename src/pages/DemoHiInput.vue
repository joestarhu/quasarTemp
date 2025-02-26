<template>
    <q-page padding>
        你好呀,这是input类型的Demo试验场
        <HiInput v-model="a.value" v-bind="a"></HiInput>
    </q-page>
</template>

<script setup lang="js">
import { ref } from 'vue'
import HiInput from 'src/components/HiInput.vue'

let a = ref({
    value:"",
    i18nLabel:"msgModeAuto",
    // i18nPlaceHolder:"msgModeAuto",
    qProps:{
        // label:"姓名",
        "stack-label":true,
        outlined:true,
        dense:true,
        placeholder:'请输入10~12位相关字符',
        // placeholder:"msgModeAuto",
        clearable:true,
    }
})



</script>