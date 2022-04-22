<template>
  <div class="mainForm">
    <mainMenu @mouseenter="resizePoint(getIndexPointById($event), [60, 60])" @mouseleave="resizePoint(getIndexPointById($event), [42, 42])" :data="data" class="mainMenu" />
    <div id="map"></div>
  </div>  
</template>

<script>
import mainMenu from '../components/mainMenu.vue'
import mapPoint from '../assets/point.png'

export default {
  name: 'mainForm',
  components:{
      mainMenu
  },
  data(){
      return{
          data:[
            {
              "id": 1,
              "latitude": 50.760918,
              "longitude": 4.110170,
              "name": "ВАЗ"
            },
            {
              "id": 2,
              "latitude": 47.492647,
              "longitude": 19.051399,
              "name": "ГАЗель"
            },
            {
              "id": 3,
              "latitude": 41.902689,
              "longitude": 12.496176,
              "name": "Lexus"
            },
            {
              "id": 4,
              "latitude": 43.779787,
              "longitude": 11.265817,
              "name": "Volkswagen"
            },
            {
              "id": 5,
              "latitude": 52.373057,
              "longitude": 4.892557,
              "name": "Lada"
            },
            {
              "id": 6,
              "latitude": -22.903150,
              "longitude": -43.189903,
              "name": "Kia"
            },
            {
              "id": 7,
              "latitude": 38.716174,
              "longitude": -9.141589,
              "name": "Bentli"
            },
            {
              "id": 8,
              "latitude": 50.080293,
              "longitude": 14.428983,
              "name": "Porche"
            },
            {
              "id": 9,
              "latitude": 48.856663,
              "longitude": 2.351556,
              "name": "BMW"
            },
            {
              "id": 10,
              "latitude": 45.438095,
              "longitude": 12.319029,
              "name": "Honda"
            }
          ],
          map: null,
          pointObject: []
      }
  },
  methods:{
    initMap: function(){
      this.map = new ymaps.Map("map", {
          center: [50, 30],
          zoom: 5  
      });
      this.map.controls.remove('geolocationControl');
      this.map.controls.remove('searchControl');
      this.map.controls.remove('trafficControl');
      this.map.controls.remove('typeSelector');
      this.map.controls.remove('fullscreenControl');
      this.map.controls.remove('rulerControl');
      this.data.forEach(point => {
        this.addPoint([point.latitude, point.longitude], point.name, point.name, [42, 42])
      });
    },
    addPoint: function(pointPosition, pointName, pointHint, size){
      let myPlacemark = new ymaps.Placemark(pointPosition, {
        hintContent: pointHint,
        balloonContent: pointName,
      }, {
        iconLayout: 'default#image',
        iconImageHref: mapPoint,
        iconImageSize: size,
        iconImageOffset: [0 - (size[0] / 2), 0 - (size[1])],
      })
      this.map.geoObjects.add(myPlacemark)
      this.$set(this.pointObject, this.pointObject.length, myPlacemark)
    },
    resizePoint: function(id, size){
      this.pointObject[id].options.set('iconImageSize', size)
      this.pointObject[id].options.set('iconImageOffset', [0 - (size[0] / 2), 0 - (size[1])])
    },
    getIndexPointById: function(id){
      let index = null
      this.data.forEach((el, idx) => {
        if(el.id == id){
          index = idx
        }
      })
      if(index != null){
        return index
      }
    }
  },
  mounted(){
    ymaps.ready(this.initMap());
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#map{
  width: 100vw;
  height: 100vh;
}

.mainMenu{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 70%;
}
</style>
