<script setup>
import Card from './card-template.vue'
</script>

<template>
  <div class="container">
    <div class="card-list">
      <Card image="/public/merch/hudi1.png" name="Худи Острые края" cost="6200 ₽" />
      <Card image="/public/merch/cap1.png" name="Бейсболка Острые края" cost="2100 ₽" />
      <Card image="/public/merch/t-shirt1.png" name="Футболка Острые края" cost="2300 ₽" />
      <Card image="/public/merch/socks1.png" name="Носки Роза" cost="600 ₽" />
      <Card image="/public/merch/cd1.png" name="Диск Грязное дельце" cost="800 ₽" />
      <Card image="/public/merch/bandana.png" name="Бандана Заточка" cost="1200 ₽" />
      <Card image="/public/merch/t-shirt2.png" name="Футболка Братское сердце" cost="2000 ₽" />
      <Card image="/public/merch/braclete.png" name="Браслет Заточка" cost="200 ₽" />
      <Card image="/public/merch/cap2.png" name="Шапка Заточка" cost="1200 ₽" />
      <Card image="/public/merch/cd2.png" name="Диск Как в американском фильме" cost="800 ₽" />
      <Card image="/public/merch/hudi2.png" name="Худи Заточка оверсайз" cost="6000 ₽" />
      <Card image="/public/merch/socks2.png" name="Носки Заточка" cost="600 ₽" />
      <Card
        image="/public/merch/t-shirt3.png"
        name="Футболка Доброе утро, Вьетнам!"
        cost="3000 ₽"
      />
      <Card image="/public/merch/t-shirt4.png" name="Футболка Грязное дельце" cost="2900 ₽" />
      <Card image="/public/merch/cd3.png" name="Диск Острые края" cost="800 ₽" />
      <Card image="/public/merch/sign.png" name="Значок Заточка" cost="300 ₽" />
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
