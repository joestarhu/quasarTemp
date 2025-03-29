<template>
    <div id="X6Container"></div>
</template>

<script setup lang="js">
import { Graph } from '@antv/x6'
import { onMounted,ref } from 'vue'


let graph=null
const X6Container = ref(null)



const data = {
  nodes: [
    {
      id: 'node1',
      shape: 'circle',
      x: 40,
      y: 40,
      width: 100,
      height: 40,
      label: 'hello',
      attrs: {
        body: {
          stroke: '#8f8f8f',
          strokeWidth: 1,
          fill: '#fff',
          rx: 6,
          ry: 6,
        },
      },
    },
    {
      id: 'node2',
      shape: 'rect',
      x: 160,
      y: 180,
      width: 100,
      height: 40,
      label: 'world',
      attrs: {
        body: {
          stroke: '#8f8f8f',
          strokeWidth: 1,
          fill: '#fff',
          rx: 6,
          ry: 6,
        },
      },
    },
  ],
  edges: [
    {
      shape: 'edge',
      source: 'node1',
      target: 'node2',
      label: 'x6',
      attrs: {
        line: {
          stroke: '#8f8f8f',
          strokeWidth: 1,
        },
      },
    },
  ],
}



function initChart(container){
    const x6 = new Graph({
        container:document.getElementById('X6Container'),
        // container:container,
        width: '100%',
        height: 600,
        background: {
            color: '#F2F7FA',
        },
        grid: {
        visible: true,
        type: 'doubleMesh',
        args: [
          {
            color: '#eee', // 主网格线颜色
            thickness: 1, // 主网格线宽度
          },
          {
            color: '#ddd', // 次网格线颜色
            thickness: 1, // 次网格线宽度
            factor: 4, // 主次网格线间隔
          },
        ],
      },
    })

    x6.fromJSON(data)
    x6.centerContent()


    x6.addEdge({
  source: { x: 540, y: 40 },
  target: { x: 580, y: 180 },
  vertices: [{ x: 540, y: 140 }],
  connector: { name: 'smooth' },
  attrs: {
    line: {
      stroke: '#1890ff',
      strokeDasharray: 5,
      targetMarker: 'classic',
      style: {
        animation: 'ant-line 30s infinite linear',
      },
    },
  },
})


    return x6
}


onMounted(()=>{
    graph = initChart(X6Container)
})


</script>

<style>
@keyframes ant-line {
    to {
        stroke-dashoffset: -1000
    }
}
</style>