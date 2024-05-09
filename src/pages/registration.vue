<script>
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
export default {
  setup() {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      success: '',
      login: '',
      password: '',
      confirmPassword: '',
      data: []
    }
  },
  methods: {
    async send() {
      const isFormCorrect = await this.v$.$validate()
      if (!isFormCorrect) {
        this.success = 'Проверьте ошибки!'
        return
      } else {
        if (this.password == this.confirmPassword) {
          // Совпадение паролей
          for (let a of this.data) {
            console.log(a.login)
            if (a.login == this.login) {
              // Проверка на уже занятый логин
              this.success = 'Имя пользователя занято!'
              setTimeout(() => (this.success = ''), 1500)
            } else {
              // Новый пользователь успешно создан
              fetch('https://9b239a59d1f6538d.mokky.dev/logs', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  login: this.login,
                  password: this.password
                })
              })
              sessionStorage.setItem('username', this.login)
              this.$router.push({ name: 'CurrentProfile', params: { user: this.login } })
            }
          }
        } else {
          this.success = 'Пароли не совпадают!'
        }
      }
    }
  },
  validations() {
    return {
      login: { required },
      password: { required },
      // TODO: not working
      confirmPassword: { required }
      //
    }
  },
  async mounted() {
    const resp = await fetch('https://9b239a59d1f6538d.mokky.dev/logs')
    const data = await resp.json()
    this.data = data
  }
}
</script>

<template>
  <div class="container">
    <div class="login">
      <h1>Новый аккаунт</h1>
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
      <input
        type="password"
        placeholder="Повторите пароль"
        v-model="confirmPassword"
        @blur="v$.confirmPassword.$touch"
        :class="{ error: v$.confirmPassword.$error }"
      />
      <p v-if="v$.login.$error || v$.password.$error || v$.confirmPassword.$error">
        Проверьте поля!
      </p>

      <button class="sign-in" @click="send">Зарегестрироваться</button>
      <router-link to="/merch-website/profile"
        ><button class="sign-in registration">Есть аккаунт?</button></router-link
      >
      <p>{{ success }}</p>
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
  width: 16vw;
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
  width: 12vw;
  color: black;
  background-color: white;
  border: solid black 1px;
  transition: 0.3s;
}
.registration:hover {
  background-color: black;
  color: white;
}
@media only screen and (max-width: 600px) {
  .login input {
    width: 60vw;
  }
  .sign-in {
    width: 60vw;
  }
}
</style>
