<template>
  <div class="container">
    <p class="sort-by">Сортировать:</p>
    <select>
      <option>По названию</option>
      <option>По цене (дешевые)</option>
      <option>По цене (дорогие)</option>
    </select>
  </div>
</template>

<style>
.container {
  margin: auto;
  width: 98vw;
  height: 3vw;
  background-color: white;
  display: flex;
}
select {
  align-self: center;
  height: 2vw;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 5px;
  border: 1px solid rgb(210, 210, 210);
  width: 15vw;
  margin-left: 1vw;
}
.sort-by {
  font-family: Arial, Helvetica, sans-serif;
  align-self: center;
  margin-left: 3vw;
}
</style>
