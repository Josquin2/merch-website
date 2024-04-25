<script>
export default {
  data() {
    return {}
  },
  methods: {
    onProfileClick() {
      if (sessionStorage.getItem('username') == null) {
        this.$router.push({ name: 'Profile' })
      } else {
        this.$router.push({
          name: 'CurrentProfile',
          params: { user: sessionStorage.getItem('username') }
        })
      }
    }
  }
}
</script>

<template>
  <div class="container">
    <router-link to="/merch-website/"><button class="main-button">МЕРЧ</button></router-link>
    <div class="images">
      <router-link to="/merch-website/favorites"
        ><img class="right-imgs" src="/public/heart.png" alt="heart"
      /></router-link>

      <router-link to="/merch-website/cart">
        <img class="right-imgs" src="/public/cart.png" alt="" />
      </router-link>

      <img @click="onProfileClick" class="right-imgs" src="/public/profile.png" alt="" />
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: auto;
  width: 98vw;
  height: 5vw;
  background-color: white;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgb(220, 220, 220);
}
.right-imgs {
  cursor: pointer;
  float: right;
  width: 40px;
  opacity: 40%;
  transition: 0.3s;
  margin-right: 15px;
}
.right-imgs:hover {
  opacity: 100%;
}
.images {
  position: absolute;
  right: 0;
  float: right;
  margin-right: 20px;
}
.main-button {
  border: 0;
  cursor: pointer;
  background-color: white;
  color: black;
  font-size: 30px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  margin-left: 20px;
}
.search {
  padding-left: 1vw;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 2.5vw;
  height: 3vw;
  width: 20vw;
  border-radius: 10px;
  border: 1px solid gray;
  font-size: 18px;
}
.search-button {
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  margin-left: 9vw;
  cursor: pointer;
  background-color: white;
  border: 0;
  height: 2.5vw;
  width: 2.5vw;
  border-radius: 10px;
}
@media only screen and (max-width: 600px) {
  .container {
    height: 10vh;
  }
}
</style>
