<script setup>
import Cards from '../components/card-list.vue'
import Footer from '../components/footer.vue'
import axios from 'axios'
import { onMounted, reactive, ref, watch } from 'vue'

const filters = reactive({
  sortBy: '',
  searchQuery: ''
})

const onChangeSearchInput = (event) => {
  filters.searchQuery = event.target.value
}

const onChangeSelect = (event) => {
  filters.sortBy = event.target.value
}
const items = ref([])

const fetchItems = async () => {
  try {
    const params = {
      sortBy: filters.sortBy
    }

    if (filters.searchQuery) {
      params.name = `*${filters.searchQuery}*`
    }

    const { data } = await axios.get('https://9b239a59d1f6538d.mokky.dev/cards', {
      params
    })
    items.value = data
  } catch (err) {
    console.log(err)
  }
}

onMounted(fetchItems)
watch(filters, fetchItems)
</script>

<template>
  <div class="container">
    <div class="sort-by">
      <p>Сортировать:</p>

      <select @change="onChangeSelect" class="select-search">
        <option value="name">По названию</option>
        <option value="cost">По цене (дешевые)</option>
        <option value="-cost">По цене (дорогие)</option>
      </select>
    </div>
    <div>
      <input
        @change="onChangeSearchInput"
        class="select-search input-search"
        type="text"
        placeholder="Поиск..."
      />
    </div>
  </div>
  <img
    src="https://static.insales-cdn.com/files/1/375/20062583/original/zatochka_merch-2.jpg?1649766022"
    alt=""
  />
  <Cards :items="items" />
</template>

<style scoped>
img {
  margin-top: 24px;
  width: 100vw;
}
.container {
  padding: 0 10vw;
  margin-top: 24px;
  width: 100vw;
  height: 3vw;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.sort-by {
  display: flex;
  align-items: center;
}
.select-search {
  align-self: center;
  height: max-content;
  padding: 4px 0px;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 1vh;
  border: 1px solid rgb(210, 210, 210);
  width: max-content;
  margin-left: 1vw;
  color: black;
  background-color: white;
}
.input-search {
  padding-left: 0.5vw;
}
@media only screen and (max-width: 550px) {
  .container {
    height: max-content;
    display: flex;
    justify-content: center;
  }
  .select-search {
    height: max-content;
    width: 75vw;
    height: 5vh;
    margin-top: 1vh;
    margin-bottom: 1vh;
  }
  .sort-by {
    display: none;
  }
}
</style>
