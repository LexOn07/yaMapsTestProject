<template>
  <div @mouseenter="$emit('mouseenter', id)" @mouseleave="$emit('mouseleave', id)" class="carListItem">
    <img src="../assets/car.png" alt="car" />  
    <h5>{{title}}</h5>
  </div>
</template>

<script>
export default {
  name: 'carListItem',
  props: {
    title: String,
    id: Number
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.carListItem{
    display: flex;
    align-items: center;
    padding: 10px 8px;
}
.carListItem:hover{
    background-color: $yellow;
    padding: 10px 3px;
    cursor: pointer;
}
h5{
    text-align: left;
    margin: 0;
}
img{
    margin-right: 2%;
    transform: scale(100%);
}
</style>
