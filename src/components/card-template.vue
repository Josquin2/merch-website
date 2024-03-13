<script setup>
defineProps({
  image: String,
  name: String,
  cost: String
})
</script>

<template>
  <div class="card">
    <img class="image" :src="image" alt="" />
    <div class="underimg">
      <p class="name">{{ name }}</p>

      <b class="name" style="opacity: 70%">{{ cost }}</b>
    </div>
  </div>
</template>
<style scoped>
.card {
  cursor: pointer;
  width: 22vw;
  height: 24vw;
  background-color: white;
  border-radius: 10px;
  display: table;
  transition: 0.3s;
}
.card:hover {
  box-shadow:
    0 4px 6px -1px rgb(0 0 0 / 0.1),
    0 2px 4px -2px rgb(0 0 0 / 0.1);
}
.underimg {
  text-align: center;
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
</style>
