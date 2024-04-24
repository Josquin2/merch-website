<script>
import Card from '@/components/card-template.vue'
export default {
  components: {
    Card
  },
  data() {
    return {
      user: sessionStorage.getItem('username'),
      info: []
    }
  },
  methods: {},
  async mounted() {
    const resp = await fetch('https://9b239a59d1f6538d.mokky.dev/favorites')
    const data = await resp.json()
    for (let item of data) {
      if (item.username == this.user) {
        this.info.push(item)
      }
    }
  }
}
</script>

<template>
  <div>
    <h2 class="favorites">Favorites</h2>
  </div>
  <div v-if="info.length < 1">
    <p class="empty-error">Your favorites is empty!</p>
  </div>

  <div class="container">
    <Card
      v-for="item in info"
      :image="item.pass.image"
      :name="item.pass.name"
      :cost="item.pass.cost"
    />
  </div>
</template>

<style scoped>
.favorites {
  margin-top: 5vh;
  text-align: center;
  font-size: 32px;
  font-family: Arial, Helvetica, sans-serif;
}
.container {
  padding: 5vw 5vw 0vw 5vw;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
}
.empty-error {
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  margin-top: 30vh;
}
@media only screen and (max-width: 600px) {
  .container {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
