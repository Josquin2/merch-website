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
      <div v-if="isSessionStorageEmpty() == false">
        <p>Для доступа к корзине войдите в аккаунт!</p>
      </div>
      <div v-if="data.length < 1">
        <p>Корзина пуста!</p>
      </div>
      <div v-else>
        <h2>Корзина</h2>
      </div>
      <div v-for="item in data" class="card-template">
        <img :src="item.pass.image" alt="" class="image-template" />
        <div class="name-cost">
          <b>
            {{ item.pass.name }}
          </b>
          <p>{{ item.pass.cost }}</p>
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
      <p>Всего товаров: {{ data.length }}</p>
      <p>К оплате: {{ allCost }} рублей</p>
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
  width: 50vw;
  height: 100vh;
}
.card-template {
  margin-top: 2vh;
  width: 40vw;
  height: 20vh;
  display: flex;
  border-radius: 1vw;
  border: 2px solid rgb(190, 190, 190);
  justify-items: flex-end;
  flex-wrap: wrap;
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
  border-left: 1px solid rgb(210, 210, 210);
}
</style>
