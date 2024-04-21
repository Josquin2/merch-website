<script>
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import axios from 'axios'
export default {
  setup() {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      success: '',
      login: '',
      password: ''
    }
  },
  methods: {
    async send() {
      const isFormCorrect = await this.v$.$validate()
      if (!isFormCorrect) {
        this.success = 'Проверьте ошибки!'
        return
      } else {
        const { data } = await axios.get('https://9b239a59d1f6538d.mokky.dev/logs')
        for (let item of data) {
          if (item.login == this.login && item.password == this.password.toString()) {
            sessionStorage.setItem('username', this.login)
            this.success = 'Да'
            this.$forceUpdate()
            console.log('yea')

            // TODO: make current profile
            break
          } else if (item.login != this.login || item.password != this.password) {
            this.success = 'Неверный логин или пароль!'
            setTimeout(() => (this.success = ''), 1200)
          }
        }
      }
    },
    checkIfLogined() {
      if (sessionStorage.getItem('username') == null) {
        return false
      } else {
        return true
      }
    },
    Quit() {
      sessionStorage.clear()
      this.$forceUpdate()
    }
  },
  validations() {
    return {
      login: { required },
      password: { required }
    }
  }
}
</script>

<template>
  <div class="container">
    <div v-if="checkIfLogined() == false" class="login">
      <h1>Личный кабинет</h1>
      <input
        type="text"
        placeholder="Имя пользователя"
        v-model="login"
        @blur="v$.login.$touch"
        :class="{ error: v$.login.$error }"
      />

      <input
        type="password"
        placeholder="Пароль"
        v-model="password"
        @blur="v$.password.$touch"
        :class="{ error: v$.password.$error }"
      />
      <p v-if="v$.login.$error || v$.password.$error">Неверный логин или пароль!</p>

      <button class="sign-in" @click="send">Войти</button>
      <router-link to="/profile/registration"
        ><button class="sign-in registration">Регистрация</button></router-link
      >
      <p>{{ success }}</p>
    </div>
    <div v-else>
      <button @click="Quit">Logout</button>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: auto;
  height: 80vh;
  width: 98vw;
  background-color: white;
  display: flex;
  justify-content: center;
}
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.login p {
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 3vh;
}
.login h1 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 44px;
}
.error {
  border: 1px solid red;
  background-color: rgb(255, 224, 224);
}
.login input {
  margin-top: 6vh;
  width: 20vw;
  height: 6vh;
  border: solid black 1px;
  border-radius: 12px;
  padding-left: 0.3vw;
  font-size: 18px;
  transition: 0.3s;
}
.sign-in {
  margin-top: 6vh;
  width: 10vw;
  height: 6vh;
  background-color: rgb(31, 31, 31);
  color: white;
  font-size: 22px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}
.registration {
  margin-top: 2vh;
  width: 16vw;
  color: black;
  background-color: white;
  border: solid black 1px;
  transition: 0.3s;
}
.registration:hover {
  background-color: black;
  color: white;
}
</style>
