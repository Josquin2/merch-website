<script>
import { useVuelidate } from '@vuelidate/core'
import { required, sameAs } from '@vuelidate/validators'
export default {
  setup() {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      success: '',
      login: '',
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    async send() {
      const isFormCorrect = await this.v$.$validate()
      if (!isFormCorrect) {
        this.success = 'Проверьте ошибки!'
        return
      } else {
        this.success = 'Новый клиент успешно создан!'
        setTimeout(() => {
          this.success = ''
        }, 2000)
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
  }
}
</script>

<template>
  <div class="container">
    <div class="login">
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
      <input
        type="password"
        placeholder="Повторите пароль"
        v-model="confirmPassword"
        @blur="v$.confirmPassword.$touch"
        :class="{ error: v$.confirmPassword.$error }"
      />
      <p v-if="v$.login.$error || v$.password.$error || v$.confirmPassword.$error">
        Проверьте поля!
        {{ v$.confirmPassword.$error }}
        {{ v$.login.$error }}
      </p>

      <button class="sign-in" @click="send">Войти</button>
      <router-link to="/profile/registration"
        ><button class="sign-in registration">Регистрация</button></router-link
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
