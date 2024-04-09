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
    <p class="sort-by">Сортировать:</p>

    <select @change="onChangeSelect" class="select-search">
      <option value="name">По названию</option>
      <option value="cost">По цене (дешевые)</option>
      <option value="-cost">По цене (дорогие)</option>
    </select>
    <input
      @change="onChangeSearchInput"
      class="select-search"
      style="margin-left: 55vw; padding-left: 0.5vw"
      type="text"
      placeholder="Поиск..."
    />
  </div>
  <Cards :items="items" />
  <!-- <Item /> -->
  <Footer />
</template>

<style>
.container {
  margin: auto;
  width: 98vw;
  height: 3vw;
  background-color: white;
  display: flex;
}
.sort-by {
  font-family: Arial, Helvetica, sans-serif;
  align-self: center;
  margin-left: 3vw;
}
.select-search {
  align-self: center;
  height: 2vw;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 5px;
  border: 1px solid rgb(210, 210, 210);
  width: 15vw;
  margin-left: 1vw;
}
</style>
