<script>
export default {
  data() {
    return {
      user: sessionStorage.getItem('username'),
      cartCounter: 21,
      favoritesCounter: 12,
      balance: 12000
    }
  },
  methods: {
    onQuitButton() {
      sessionStorage.clear()
      this.$router.push({ name: 'Profile' })
    },
    goShoppingButton() {
      this.$router.push('/merch-website/')
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="about">
      <div style="text-align: center">
        <p>Hello,</p>
        <b>{{ user }}!</b>
      </div>

      <div class="buttons">
        <button class="single-button shopping" @click="goShoppingButton">Go shopping!</button>
        <button class="single-button" @click="onQuitButton">Quit</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: auto;
  width: 90vw;
  height: auto;
  background-color: white;
  display: flex;
  padding: 5vh;
  justify-content: center;
  padding-top: 30vh;
}
.about {
  font-size: 24px;
  font-family: Arial, Helvetica, sans-serif;
}
.buttons {
  display: flex;
  flex-direction: column;
}
.single-button {
  width: 10vw;
  height: 5vh;
  font-size: 24px;
  font-family: Arial, Helvetica, sans-serif;
  background-color: rgb(39, 39, 39);
  color: white;
  border: 1px solid rgb(39, 39, 39);
  border-radius: 1vh;
  cursor: pointer;
  align-self: center;
  margin-top: 1vh;
}
.shopping {
  width: 20vw;
  background-color: white;
  color: black;
}
@media only screen and (max-width: 600px) {
  .container {
    width: 50vw;
  }
  .single-button {
    width: 30vw;
  }
  .shopping {
    width: 50vw;
  }
}
</style>
