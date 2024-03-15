<template>
  <div class="container">
    <div class="item">
      <img class="first-image" src="" alt="" />
      <div>
        <div class="description">
          <p class="name">t-shirt</p>
          <b style="font-family: Arial, Helvetica, sans-serif">2000 P</b>
          <p class="name" style="margin-top: 1vw; font-size: 20px; opacity: 100%">Размер:</p>
        </div>
        <ul class="">
          <li>S</li>
          <li>M</li>
          <li>L</li>
          <li>XL</li>
        </ul>
        <div style="display: flex; margin-top: 1vw">
          <button class="intocart">В корзину</button>
          <button class="heart"><img class="heart-img" src="/public/heart.png" alt="" /></button>
        </div>

        <p class="item-description">description</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 98vw;
  height: 60vw;
  background-color: white;
}
.item {
  display: flex;
  padding: 5vw;
}
.first-image {
  width: 30vw;
  height: 34vw;
}
.description {
  margin-left: 6vw;
}
.name {
  font-size: 30px;
  font-family: Arial, Helvetica, sans-serif;
  opacity: 70%;
  margin-bottom: 1vw;
}
.description b {
  font-size: 20px;
}
.intocart {
  height: 4vw;
  width: 20vw;
  margin-left: 6vw;
  border: 1px solid rgb(188, 188, 188);
  border-radius: 10px;
  color: white;
  background-color: black;
  font-size: 24px;
  cursor: pointer;
  transition: 0.4s;
}
.intocart:hover {
  background-color: rgb(39, 39, 39);
}
.heart {
  height: 4vw;
  width: 4vw;
  border-radius: 10px;
  border: 1px solid rgb(170, 170, 170);
  background-color: white;
  cursor: pointer;
  opacity: 50%;
  transition: 0.4s;
  margin-left: 1vw;
}
.heart-img {
  width: 2vw;
}
.heart:hover {
  opacity: 100%;
}
ul {
  list-style: none;
  margin-left: 5vw;
  margin-top: 1vw;
}
li {
  display: inline;
  margin-left: 1vw;
}
.item-description {
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  margin-left: 6vw;
  margin-top: 1vw;
}
</style>
