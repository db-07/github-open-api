<template>
  <router-view />
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
/*定义滚动条样式（高宽及背景）*/
::-webkit-scrollbar {
  width: 10px; /* 滚动条宽度， width：对应竖滚动条的宽度  height：对应横滚动条的高度*/
  height: 10px;
  background: #fff;
}
/*定义滚动条轨道（凹槽）样式*/
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 10px #fff; /* 较少使用 */
  border-radius: 3px;
}
/*定义滑块 样式*/
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  height: 100px; /* 滚动条滑块长度 */
  background-color: rgb(179, 179, 179);
}
</style>
