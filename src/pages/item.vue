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
      size: '',
      favorite: false,
      favId: 1221,
      success: ' '
    }
  },

  methods: {
    chooseSize(e) {
      console.log(e.target.value)
      this.info.chooseSize = e.target.value
    },
    isFavorite() {
      if (this.user != null) {
        if (this.favorite == true) {
          this.favorite = false
          const url = 'https://9b239a59d1f6538d.mokky.dev'
          fetch(`${url}/favorites/${this.favId}`, {
            method: 'DELETE'
          })
        } else {
          this.favorite = true
          fetch('https://9b239a59d1f6538d.mokky.dev/favorites', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              username: this.user,
              pass: { image: this.info.image, name: this.info.name, cost: this.info.cost },
              favorite: this.favorite
            })
          })
        }
      } else {
        // Пользователь не вошел в аккаунт
        this.$router.push({ name: 'Profile' })
      }
    },

    async onCartClick() {
      // Пользователь не вошел в аккаунт
      if (sessionStorage.getItem('username') == null) {
        this.$router.push({ name: 'Profile' })
      } else if (this.info.chooseSize == '' && this.info.size) {
        this.error = 'Выберите размер!'
        setTimeout(() => (this.error = ''), 1500)
      } else {
        this.error = ''
        this.success = 'Товар добавлен в корзину!'
        const username = sessionStorage.getItem('username')
        const url = 'https://9b239a59d1f6538d.mokky.dev/usercard'
        fetch(`${url}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username, pass: this.info })
        })
        setTimeout(() => (this.success = ''), 1500)
      }
    }
  },

  async mounted() {
    const url = 'https://9b239a59d1f6538d.mokky.dev/cards?name='
    const resp = await fetch(`${url}${this.item}`)
    const data = await resp.json()
    this.info = data[0]
    this.info.chooseSize = ''
    console.log(this.info)

    const favorite = await fetch('https://9b239a59d1f6538d.mokky.dev/favorites')
    const favData = await favorite.json()

    for (let item of favData) {
      if (item.username == this.user && item.pass.name == this.info.name && item.favorite == true) {
        this.favorite = true
        this.favId = item.id
      }
    }
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
            v-for="button in info.size"
            class="buttons-not-clicked"
            :value="button"
            @click="chooseSize"
            :class="{ 'button-clicked': info.chooseSize == button }"
          >
            {{ button }}
          </button>
        </div>

        <div style="display: flex; margin-top: 1vw">
          <button class="intocart" @click="onCartClick">В корзину</button>
          <button class="heart" :class="{ 'heart-clicked': favorite == true }" @click="isFavorite">
            <img
              class="heart-img"
              src="/public/heart.png"
              :src="{ '/public/heart-clicked.png': favorite == true }"
              alt=""
            />
          </button>
        </div>
        <p class="item-description success-msg">{{ success }}</p>
        <p class="item-description error">{{ error }}</p>

        <p class="item-description" style="margin-top: 6vh">{{ info.description }}</p>
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
  position: absolute;
}
.success-msg {
  position: absolute;
}
.size-buttons {
  margin-left: 6vw;
}
.buttons-not-clicked {
  color: black;
  background-color: whitesmoke;
  border: 0;
  border-radius: 1vh;
  width: 3vw;
  height: 5vh;
  margin-right: 1vw;
  cursor: pointer;
  font-size: 18px;
}
.button-clicked {
  background-color: black;
  color: white;
}

@media only screen and (max-width: 600px) {
  .item {
    flex-direction: column;
  }
  .first-image {
    width: 80vw;
    height: 80vw;
    align-self: center;
  }
  .intocart {
    margin-top: 2vh;
    width: 48vw;
    height: 8vh;
    border-radius: 2vh;
  }
  .heart {
    margin-top: 2vh;
    width: 8vh;
    height: 8vh;
    border-radius: 2vh;
  }
  .heart-img {
    width: 4vh;
  }
  .buttons-not-clicked {
    width: 10vh;
    height: 6vh;
    margin-right: 1vh;
  }
}
</style>
