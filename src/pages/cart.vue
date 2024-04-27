<script>
export default {
  data() {
    return {
      data: [],
      allCost: 0,
      user: sessionStorage.getItem('username')
    }
  },
  methods: {
    onNameClick(e) {
      this.$router.push({ name: 'Item', params: { item: e.target.innerText } })
    },
    onDeleteButtonClick(item) {
      fetch(`https://9b239a59d1f6538d.mokky.dev/usercard/${item}`, {
        method: 'DELETE'
      })
      for (let i = 0; i < this.data.length; i++) {
        // console.log(this.data[i].id)
        if (this.data[i].id == item) {
          this.data.splice(i, 1)
        }
      }
    },
    isSessionStorageEmpty() {
      if (sessionStorage.getItem('username') == null) {
        return false
      } else {
        return true
      }
    }
  },
  async mounted() {
    const data = await fetch('https://9b239a59d1f6538d.mokky.dev/usercard')
    const resp = await data.json()
    for (let item of resp) {
      if (item.username == this.user) {
        this.data.push(item)
        this.allCost += item.pass.cost
        // console.log(this.data)
      }
    }
  },
  watch: {
    data: {
      handler() {
        console.log('watching')
        this.allCost = 0
        for (let item of this.data) {
          if (item.username == this.user) {
            this.allCost += item.pass.cost
          }
        }
      },
      deep: true
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="cards-box">
      <div v-if="isSessionStorageEmpty() == false" class="rubbish">
        <p>Для доступа к корзине войдите в аккаунт!</p>
      </div>
      <div v-if="data.length < 1" class="rubbish">
        <p>Корзина пуста!</p>
      </div>
      <div v-else class="rubbish">
        <h2>Корзина</h2>
      </div>
      <div v-for="item in data" class="card-template">
        <img :src="item.pass.image" alt="" class="image-template" />
        <div class="name-cost">
          <b class="name-of-item" @click="onNameClick">
            {{ item.pass.name }}
          </b>
          <p>{{ item.pass.cost }}</p>
          <p v-if="item.pass.chooseSize">Размер: {{ item.pass.chooseSize }}</p>
        </div>
        <div class="bin">
          <button @click="onDeleteButtonClick(item.id)">
            <img src="/public/bin.png" alt="" />
          </button>
        </div>
      </div>
    </div>
    <div class="order-box">
      <h3>Оформление заказа</h3>
      <div class="other-information">
        <p>Всего товаров: {{ data.length }}</p>
        <p>К оплате: {{ allCost }} рублей</p>

        <p style="margin-top: 2vh">Какая-то еще информация.</p>
        <p>По типу: Нажимая "Заказать"</p>
        <p>Вы соглашаетесь с информацией,</p>
        <p>которую никто и никогда не прочтет.</p>
        <p>Именно поэтому я не делал слово</p>
        <p>"информацией" кликабельным.</p>
        <p>А тут я уже устал писать какой-либо текст.</p>
        <p>Да и не знаю, что писать.</p>
        <p>Ах, точно, кнопка снизу тоже не кликабельна.</p>
        <p>Просто поверьте, что товары приедут.</p>
        <p style="margin-top: 3vh">Примерный срок доставки - 120 лет.</p>
      </div>
      <button class="order-button">Заказать</button>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 98vw;
  height: 100vh;
  background-color: white;
  padding: 1vw;
  padding-left: 2vw;
  display: flex;
}
.cards-box {
  width: 49vw;
  height: max-content;
}
.card-template {
  margin-left: 2.5vw;
  margin-top: 2vh;
  width: 40vw;
  height: 20vh;
  display: flex;
  border-radius: 1vw;
  border: 1px solid rgb(190, 190, 190);
  justify-items: flex-end;
  flex-wrap: wrap;
  overflow: auto;
}
.rubbish {
  font-size: 24px;
  font-family: Arial, Helvetica, sans-serif;
}
.image-template {
  margin-left: 1vw;
  width: 20vh;
}
.name-cost {
  margin-top: 4vh;
}
.name-cost b {
  font-size: 24px;
  font-family: Arial, Helvetica, sans-serif;
  margin-left: 3vw;
  opacity: 80%;
}
.name-of-item {
  cursor: pointer;
}
.name-cost p {
  margin-left: 3vw;
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 0.8vh;
}
.bin {
  position: absolute;
  margin-top: 10vh;
  margin-left: 35vw;
}
.bin button {
  width: 4vw;
  height: 4vw;
  background-color: white;
  border: 0;
  cursor: pointer;
}
.bin button img {
  width: 2vw;
  opacity: 60%;
  transition: 0.3s;
}
.bin button img:hover {
  opacity: 100%;
}
.order-box {
  width: 49vw;
  padding-left: 2vh;
  border-left: 1px solid rgb(210, 210, 210);
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
}
.order-box h3 {
  margin-top: 5vh;
  font-size: 24px;
}
.other-information {
  margin-top: 4vh;
}
.order-button {
  margin-top: 10vh;
  width: 16vw;
  height: 6vh;
  border: none;
  border-radius: 0.8vw;
  background-color: rgb(39, 39, 39);
  color: white;
  font-size: 22px;
  cursor: pointer;
  transition: 0.3s;
}
.order-button:hover {
  background-color: black;
}
@media only screen and (max-width: 600px) {
  .container {
    flex-direction: column;
  }
  .cards-box {
    width: 98vw;
  }
  .card-template {
    width: 90vw;
    height: 20vh;
  }
  .image-template {
    margin-top: 6vh;
    width: 8vh;
    height: 8vh;
  }
  .bin {
    margin-top: 12vh;
    margin-left: 76vw;
  }
  .bin button {
    width: 4vh;
    height: 4vh;
  }
  .bin button img {
    width: 4vh;
    height: 4vh;
  }

  .rubbish {
    text-align: center;
    margin-top: 2vh;
  }

  .order-box {
    margin-top: 5vh;
    width: 90vw;
    border-left: none;
    border-top: 1px solid rgb(210, 210, 210);
  }
  .order-button {
    width: 30vw;
    margin-bottom: 4vh;
  }
}
</style>
