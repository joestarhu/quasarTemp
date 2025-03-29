<template>
        <q-btn @click="change">Data Change</q-btn>
        <div ref="G2Container" style="width:100%; height:400px; background-color: #FFF;"></div>
</template>


<script setup lang="js">
import { onBeforeMount, onMounted, ref } from 'vue';
import { Chart } from '@antv/g2';



let chart = null
const G2Container = ref(null)
const data = ref([
    { genre: 'Sports', sold: 275 },
    { genre: 'Strategy', sold: 115 },
    { genre: 'Action', sold: 120 },
    { genre: 'Shooter', sold: 350 },
    { genre: 'Other', sold: 150 },
]);


function change(){
    const interval = chart.getNodesByType('interval')[0];
    const new_data = [
        { genre: 'Sports', sold: 2751 },
        { genre: 'Strategy', sold: 1115 },
        { genre: 'Action', sold: 1220 },
    ]
    interval.data(new_data)
    chart.render()
}

function initChart(container){
    const chart = new Chart({
        container:container,
        autoFit: true,
    })
    chart.interval().data(data.value).encode("x","genre","xsxs").encode("y","sold")
    chart.render()

    return chart

}




onMounted(()=>{
    chart = initChart(G2Container.value)
})

</script>