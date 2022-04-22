<template>
  <div class="mainMenu">
    <h3>Объекты</h3>
    <input v-model="filterKey" type="text" />
    <div class="carList">
      <mouseListItem @mouseenter="$emit('mouseenter', $event)" @mouseleave="$emit('mouseleave', $event)" v-for="(item, index) in filtredData" :key="item.id" :id="item.id" :title="item.name" />
    </div>
  </div>
</template>

<script>
import mouseListItem from './carListItem.vue'

export default {
  name: 'mainMenu',
  components:{
    mouseListItem
  },
  props: {
    data: Object,
  },
  data(){
    return{
      filterKey: '',
      filtredData: {}
    }
  },
  mounted(){
    this.filterKey = ''
    this.filtredData = this.data
  },
  watch:{
    filterKey: function(newVal){
      if(newVal == ''){
        this.filtredData = this.data
      }else{
        this.filtredData = this.data.filter(el => el.name.toLowerCase().includes(newVal.toLowerCase()))
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.mainMenu{
  background: #fff;
  border-radius: 20px;
  width: 550px;
  height: 90%;
  z-index: 1;
  padding: 10px 0;
}
h3{
  text-align: left;
}
input{
  height: 40px;
  width: 100%;
  background: $grey;
  outline: none;
  border: none;
  box-sizing: border-box;
  font-size: 22px;
}

@media only screen and (max-width: 1750px) {
  .mainMenu {
    width: 480px;
  }
}

@media only screen and (max-width: 1650px) {
  .mainMenu {
    width: 450px;
  }
}

@media only screen and (max-width: 1550px) {
  .mainMenu {
    width: 420px;
  }
}

@media only screen and (max-width: 1450px) {
  .mainMenu {
    width: 390px;
  }
}

@media only screen and (max-width: 1350px) {
  .mainMenu {
    width: 350px;
  }
}

@media only screen and (max-width: 1250px) {
  .mainMenu {
    width: 300px;
  }
}
</style>
