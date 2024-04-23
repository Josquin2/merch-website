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
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="about">
      <div style="display: flex">
        <p>Username:</p>
        <b>{{ user }}</b>
      </div>

      <div class="quit-button">
        <button @click="onQuitButton">Quit</button>
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
}
.about {
  font-size: 24px;
  font-family: Arial, Helvetica, sans-serif;
}
.quit-button button {
  width: 10vw;
  height: 5vh;
  font-size: 24px;
  font-family: Arial, Helvetica, sans-serif;
  background-color: white;
  border: 1px solid rgb(39, 39, 39);
  border-radius: 1vh;
  cursor: pointer;
}
</style>
