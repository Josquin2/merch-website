<script>
export default {
  props: {
    item: String
  },
  data() {
    return {
      user: sessionStorage.getItem('username'),
      info: '',
      error: '',
      size: ''
    }
  },
  methods: {
    chooseSize(e) {
      console.log(e.target.value)
      this.info.size = e.target.value
    },
    isFavorite() {
      if (this.user != null) {
        if (this.info.favorite == true) {
          this.info.favorite = false
        } else {
          this.info.favorite = true
        }
      } else {
        this.error = 'Войдите в аккаунт!'
      }
    },
    async onCartClick() {
      if (sessionStorage.getItem('username') == null) {
        console.log('zaregestityisya')
        this.error = 'Необходимо войти в аккаунт!'
      } else if (this.info.size == '') {
        this.error = 'Выберите размер!'
      } else {
        this.error = ''
        const username = sessionStorage.getItem('username')
        const url = 'https://9b239a59d1f6538d.mokky.dev/usercard'
        fetch(`${url}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username, pass: this.info })
        })
      }
    }
  },
  async mounted() {
    const url = 'https://9b239a59d1f6538d.mokky.dev/cards?name='
    const resp = await fetch(`${url}${this.item}`)
    const data = await resp.json()
    this.info = data[0]
    this.info.favorite = false
    this.info.size = ''
  }
}
</script>

<template>
  <div class="container">
    <div class="item">
      <img class="first-image" :src="info.image" alt="" />
      <div>
        <div class="description">
          <p class="name">{{ info.name }}</p>
          <b style="font-family: Arial, Helvetica, sans-serif">{{ info.cost }} Р</b>
          <p class="name" style="margin-top: 1vw; font-size: 20px; opacity: 100%">Размер:</p>
        </div>
        <div class="size-buttons">
          <button
            class="buttons-not-clicked"
            value="S"
            @click="chooseSize"
            :class="{ 'button-clicked': info.size == 'S' }"
          >
            S
          </button>
          <button
            class="buttons-not-clicked"
            value="M"
            @click="chooseSize"
            :class="{ 'button-clicked': info.size == 'M' }"
          >
            M
          </button>
          <button
            class="buttons-not-clicked"
            value="L"
            @click="chooseSize"
            :class="{ 'button-clicked': info.size == 'L' }"
          >
            L
          </button>
          <button
            class="buttons-not-clicked"
            value="XL"
            @click="chooseSize"
            :class="{ 'button-clicked': info.size == 'XL' }"
          >
            XL
          </button>
        </div>
        <div style="display: flex; margin-top: 1vw">
          <button class="intocart" @click="onCartClick">В корзину</button>
          <button
            class="heart"
            :class="{ 'heart-clicked': info.favorite == true }"
            @click="isFavorite"
          >
            <img
              class="heart-img"
              src="/public/heart.png"
              :src="{ '/public/heart-clicked.png': info.favorite == true }"
              alt=""
            />
          </button>
        </div>
        <p class="item-description error">{{ error }}</p>

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
.heart-clicked {
  border: 1px solid rgb(255, 210, 217);
  background-color: rgb(255, 210, 217);
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
.error {
  color: red;
}
.size-buttons {
  margin-left: 6vw;
}
.buttons-not-clicked {
  background-color: whitesmoke;
  border: 0;
  border-radius: 1vh;
  width: 3vw;
  height: 5vh;
  margin-right: 1vw;
  cursor: pointer;
}
.button-clicked {
  background-color: black;
  color: white;
}
</style>
