<template>
<!-- 普通输入框 -->
 <q-input v-if="type==='text'"
     v-bind="qProps" v-model.trim="innerValue" 
     :label="i18nLabel?$t(i18nLabel):qProps.label"
     :placeholder="i18nPlaceHolder?$t(i18nPlaceHolder):qProps.placeholder">
    <!-- <template #prepend>
        <q-icon size="1.2rem" name="search"></q-icon>
    </template> -->
 </q-input>
</template>

<script setup lang="js">
import {ref,watch,watchEffect} from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
    modelValue:{required:true},
    type:{type:String,default:"text"},
    // quasar原有的props属性
    qProps:{type:Object},
    i18nLabel:{type:String,default:""},
    i18nPlaceHolder:{type:String,default:""},

})
const emit = defineEmits(["update:modelValue","filter"])

const {t} = useI18n()
const innerValue = ref(props.modelValue)

function filterFn(val, update, abort){
    emit("filter", val, update, abort);
}

function optionsi18nLabel(option){
    if(option.i18nLabel){
        option.label = t(option.i18nLabel)
    }
    return option.label
}

watch(innerValue, newValue=>{
    emit("update:modelValue", newValue);
})

watchEffect(()=>{
    if(props.qProps.options){
        for(let option of props.qProps.options){
            optionsi18nLabel(option)
        }
    }
    innerValue.value = props.modelValue

})
</script>