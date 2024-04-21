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
    <div style="display: flex">
      <p class="sort-by">Сортировать:</p>

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
  justify-content: space-between;
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
  border-radius: 1vh;
  border: 1px solid rgb(210, 210, 210);
  width: 15vw;
  margin-left: 1vw;
}
.input-search {
  margin-top: 1vh;
  padding-left: 0.5vw;
}
@media only screen and (max-width: 600px) {
  .container {
    height: max-content;
  }
  .select-search {
    height: max-content;
    width: 45vw;
    height: 5vh;
    margin-top: 1vh;
    margin-bottom: 1vh;
  }
  .sort-by {
    display: none;
  }
}
</style>
