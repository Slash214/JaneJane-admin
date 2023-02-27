<template>
  <div class="card">上午好 admin, 这是我的个人模板后台，很高兴看见你</div>

  <div class="list">
    <div class="item" v-for="i in 8" :key="i">模块{{ i }}</div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.card {
  width: 100%;
  height: 150px;
  padding: 20px;
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 20px;
  background-color: #fff;
}
.list {
  display: flex;
  flex-wrap: wrap;
  .item {
    width: 23.5%;
	margin: 0 2% 2% 0;
	height: 10vh;
    background-color: #fff;
	&:nth-child(4n) {
		margin-right: 0;
	}
  }
}
</style>
