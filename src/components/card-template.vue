<script setup>
defineProps({
  image: String,
  name: String,
  cost: Number,
  item: Object
})
</script>

<template>
  <div class="card" @click="$router.push({ name: 'Item', params: { item: name } })">
    <img class="image" :src="image" alt="" />
    <div class="underimg">
      <p class="name">{{ name }}</p>

      <b class="name" style="opacity: 70%">{{ cost }}</b>
      <b class="name" style="opacity: 70%; margin-left: 0.5vw">₽</b>
    </div>
  </div>
</template>
<style scoped>
.card {
  margin-top: 3vh;
  cursor: pointer;
  width: 22vw;
  height: 24vw;
  background-color: white;
  border-radius: 15px;
  display: table;
  transition: 0.3s;
}
.card:hover {
  box-shadow:
    0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);
}
.underimg {
  text-align: center;
  margin-bottom: 0.5vw;
}
.image {
  margin-left: 1vw;
  padding-top: 1vw;
  width: 20vw;
  height: 20vw;
}
.name {
  font-family: Arial, Helvetica, sans-serif;
}
@media only screen and (max-width: 600px) {
  .card {
    width: 40vw;
    height: 30vh;
  }
  .image {
    width: 40vw;
    height: 40vw;
  }
}
</style>
