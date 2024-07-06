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
    <div class="image">
      <img class="" :src="image" alt="" />
    </div>

    <div class="underimg">
      <p class="name">{{ name }}</p>

      <b class="name" style="opacity: 70%">{{ cost }} ₽</b>
    </div>
  </div>
</template>
<style lang="scss">
.card {
  margin-top: 15px;
  cursor: pointer;
  width: 22vw;
  height: 437px;
  background-color: #f3f3f3;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .image {
    margin-top: 3px;
    width: 21.5vw;
    height: 361px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    img {
      width: 18vw;
    }
  }
  .underimg {
    margin-top: 12px;
    text-align: center;
    display: flex;
    flex-direction: column;

    b {
      margin-top: 4px;
    }
  }
}
@media only screen and (max-width: 1100px) {
  .card {
    width: 28.5vw;
    height: 375px;

    .image {
      width: 26.5vw;
      margin-top: 8px;
    }
  }
  .underimg {
    b {
      margin-bottom: 6px;
    }
  }
}
@media only screen and (max-width: 700px) {
  .card {
    width: 41vw;
    height: 345px;
    .image {
      width: 39vw;
      margin-top: 8px;

      img {
        width: 28vw;
      }
    }
  }
}

@media only screen and (max-width: 550px) {
  .card {
    width: 90vw;
    height: 375px;

    .image {
      margin-top: 10px;
      width: 85vw;

      img {
        width: 75vw;
      }
    }

    .underimg {
      margin-top: 8px;

      b {
        margin-bottom: 4px;
      }
    }
  }
}
</style>
