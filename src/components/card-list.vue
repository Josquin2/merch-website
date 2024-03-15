<script setup>
import Card from './card-template.vue'
defineProps({
  items: Array
})
</script>

<template>
  <div class="container">
    <div class="card-list">
      <Card
        v-for="item in items"
        :key="item.id"
        :image="item.image"
        :name="item.name"
        :cost="item.cost"
      />
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: auto;
  width: 98vw;
  height: 110vw;
  background-color: white;
  display: flex;
}
.card-list {
  background-color: white;
  height: 100vw;
  width: 98vw;

  padding: 40px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
}
</style>
