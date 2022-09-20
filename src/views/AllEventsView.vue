<template>
  <div>
    <div class="container-xxl">
      <div class="row">
        <div class="col-xl">

          <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toHomePage">Esilehele
          </button>

          <div class="btn-group" style="margin: 5px">
            <select class="btn btn-outline-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false" v-model="selectedCategory">
              <option disabled value="">Vali valdkond</option>
              <option v-for="option in categoryList" :value="option">{{ option.name }}</option>
            </select>
          </div>
          <div class="btn-group" style="margin: 5px">
            <select class="btn btn-outline-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false" v-model="selectedCounty">
              <option disabled value="">Vali maakond</option>
              <option v-for="option in countyList" :value="option">{{ option.name }}</option>
            </select>
          </div>

        </div>
        <div class="col-sm">
          <h2><span style="color: #2c3e50">Sündmused</span></h2>
        </div>
        <div class="col-sm">
          <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toLogInPage">Sisene
          </button>
          <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toLogInPage">Loo konto
          </button>
        </div>
      </div>
    </div>
    <br>
    <br>
    <div class="container-xxl" style="alignment: center">
      <div class="row">
        <div class="col-md-3">
          <div type="button" class="content" v-on:click="toEventPage"> <a href="#">
            <div  class="content-overlay"></div> <img type="button" class="content-image" src="../assets/EventView/event_image.jpg">
            <div  class="content-details fadeIn-bottom">
              <h3 class="content-title" >Sündmuse nimi</h3>
              <p class="content-text"><i class="fa fa-map-marker"></i>Loe edasi</p>
            </div>
          </a> </div>
        </div>
        <div class="col-md-3">
          <div type="button" class="content" v-on:click="toEventPage"> <a href="#">
            <div class="content-overlay"></div> <img class="content-image" src="../assets/EventView/event_image.jpg">
            <div class="content-details fadeIn-bottom">
              <h3 class="content-title">Sündmuse nimi</h3>
              <p class="content-text"><i class="fa fa-map-marker"></i>Loe edasi</p>
            </div>
          </a> </div>
        </div>
        <div class="col-md-3">
          <div type="button" class="content" v-on:click="toEventPage"> <a href="#">
            <div class="content-overlay"></div> <img class="content-image" src="../assets/EventView/event_image.jpg">
            <div class="content-details fadeIn-bottom">
              <h3 class="content-title">Sündmuse nimi</h3>
              <p class="content-text"><i class="fa fa-map-marker"></i>Loe edasi</p>
            </div>
          </a> </div>
        </div>
        <div class="col-md-3">
          <div type="button" class="content" v-on:click="toEventPage"> <a href="#">
            <div class="content-overlay"></div> <img class="content-image" src="../assets/EventView/event_image.jpg">
            <div class="content-details fadeIn-bottom">
              <h3 class="content-title">Sündmuse nimi</h3>
              <p class="content-text"><i class="fa fa-map-marker"></i>Loe edasi</p>
            </div>
          </a> </div>
        </div>
      </div>
    </div>


  </div>

</template>

<script>
export default {
  name: "EventsView",
  data: function () {
    return {
      divToLogInPage: true,
      countyList: [],
      categoryList: [],
      eventsList: [],
      selectedCategory: '',
      selectedCounty: ''
    }
  },

  methods: {
    toLogInPage: function () {
      this.$router.push({name: 'logInRoute'})
    },
    toHomePage: function () {
      this.$router.push({name: 'homePageRoute'})
    },
    toEventPage: function () {
      this.$http.get("/event/events")
          .then(response => {
            this.eventsList = response.data
            console.log(response.data)
          })
    },
    findAllCategorys: function () {
      this.$http.get("/event/category")
          .then(response => {
            this.categoryList = response.data
            console.log(response.data)
          })
    },
    findAllCountys: function () {
      this.$http.get("/event/county")
          .then(response => {
            this.countyList = response.data
            console.log(response.data)
          })
    },
  },
  mounted() {
    this.findAllCategorys()
    this.findAllCountys()
  }
}
</script>

<style scoped>

</style>