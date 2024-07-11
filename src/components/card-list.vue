<script setup>
import Card from './card-template.vue'
defineProps({
  items: Array
})
</script>

<template>
  <div class="container-cards">
    <div class="card-list">
      <Card
        v-for="item in items"
        :item="item"
        :key="item.id"
        :image="item.image"
        :name="item.name"
        :cost="item.cost"
      />
    </div>
  </div>
</template>

<style scoped>
.container-cards {
  margin: auto;
  width: 98vw;
  height: max-content;
  background-color: white;
  display: flex;
}
.card-list {
  background-color: white;
  height: max-content;
  width: 98vw;

  padding: 40px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
}
@media only screen and (max-width: 1100px) {
  .card-list {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
@media only screen and (max-width: 700px) {
  .card-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media only screen and (max-width: 550px) {
  .card-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
  }
}
</style>
