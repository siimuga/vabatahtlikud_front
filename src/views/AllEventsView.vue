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
              <option value="kõik"> Kõik valdkonnad</option>
              <option v-for="option in categoryList" :value="option">{{ option.name }}</option>
            </select>
          </div>
          <div class="btn-group" style="margin: 5px">
            <select class="btn btn-outline-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false" v-model="selectedCounty">
              <option disabled value="">Vali maakond</option>
              <option value="kõik"> Kõik maakonnad</option>
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
      <div class="row row-cols-4">
        <div class="col-md-3" v-for="event in eventsList" v-if="selectedCategory==='kõik' && selectedCounty==='kõik'" v-model="findAllEvents">
          <h3 class="content-title">{{ event.eventName }}</h3>
          <h3 class="content-title">{{ event.volunteersAttended }}/{{ event.volunteersRequired }}</h3>
          <div type="button" class="content" v-on:click="toEventPage(event)"><a href="#">
            <div class="content-overlay">
            </div>
            <div v-if="event.hasPicture = false">
              <img type="button" class="content-image" src="../assets/EventView/event_image.jpg">
            </div>
            <div v-if="event.hasPicture = true">
              <img type="button" class="content-image" src="../assets/EventView/event_image.jpg">
            </div>
            <div class="content-details fadeIn-bottom">
              <p class="content-text"><i class="fa fa-map-marker"></i>Loe edasi</p>
            </div>
          </a></div>
          <br>
        </div>
      </div>
    </div>

    <div class="container-xxl" style="alignment: center">
      <div class="row row-cols-4">
        <div class="col-md-3" v-for="event in eventsListCategory" v-if="selectedCategory!=='kõik' && selectedCounty==='kõik'"> <!--v-model="findByCategory(selectedCategory)"-->
          <h3 class="content-title">{{ event.eventName }}</h3>
          <h3 class="content-title">{{ event.volunteersAttended }}/{{ event.volunteersRequired }}</h3>
          <div type="button" class="content" v-on:click="toEventPage(event)"><a href="#">
            <div class="content-overlay">
            </div>
            <div v-if="event.hasPicture = false">
              <img type="button" class="content-image" src="../assets/EventView/event_image.jpg">
            </div>
            <div v-if="event.hasPicture = true">
              <img type="button" class="content-image" src="../assets/EventView/event_image.jpg">
            </div>
            <div class="content-details fadeIn-bottom">
              <p class="content-text"><i class="fa fa-map-marker"></i>Loe edasi</p>
            </div>
          </a></div>
          <br>
        </div>
      </div>
    </div>

    <div class="container-xxl" style="alignment: center">
      <div class="row row-cols-4">
        <div class="col-md-3" v-for="event in eventsListCounty" v-if="selectedCategory==='kõik' && selectedCounty!=='kõik'"><!-- v-model="findByCounty(selectedCounty)"-->
          <h3 class="content-title">{{ event.eventName }}</h3>
          <h3 class="content-title">{{ event.volunteersAttended }}/{{ event.volunteersRequired }}</h3>
          <div type="button" class="content" v-on:click="toEventPage(event)"><a href="#">
            <div class="content-overlay">
            </div>
            <div v-if="event.hasPicture = false">
              <img type="button" class="content-image" src="../assets/EventView/event_image.jpg">
            </div>
            <div v-if="event.hasPicture = true">
              <img type="button" class="content-image" src="../assets/EventView/event_image.jpg">
            </div>
            <div class="content-details fadeIn-bottom">
              <p class="content-text"><i class="fa fa-map-marker"></i>Loe edasi</p>
            </div>
          </a></div>
          <br>
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
      eventsListCategory: [],
      eventsListCounty: [],
      eventsListCategoryAndCounty: [],
      selectedCategory: '',
      selectedCounty: ''
    }
  },

  methods: {
    toHomePage: function () {
      this.$router.push({name: 'homePageRoute'})
      location.reload()
    },
    toLogInPage: function () {
      this.$router.push({name: 'logInRoute'})
    },
    findAllEvents: function () {
      this.$http.get("/event/events")
          .then(response => {
            this.eventsList = response.data
            console.log(response.data)
          })
    },
    findAllCategories: function () {
      this.$http.get("/event/category")
          .then(response => {
            this.categoryList = response.data
            console.log(response.data)
          })
    },
    findAllCounties: function () {
      this.$http.get("/event/county")
          .then(response => {
            this.countyList = response.data
            console.log(response.data)
          })
    },
    findByCounty: function (selectedCounty) {
      this.$http.get("/event/events/county")
          .then(response => {
            this.eventsListCounty = response.data
            console.log(response.data)
          }).catch(error => {
        console.log(error)
      })
    },

    findByCategory: function () {
      this.$http.get("/event/events/category")
          .then(response => {
            this.eventsListCategory = response.data
            console.log(response.data)
          }).catch(error => {
        console.log(error)
      })
    },

    findEventsByCategoryAndCounty: function () {
      this.$http.get("/event/event")
          .then(response => {
            this.eventsListCategoryAndCounty = response.data
            console.log(response.data)
          }).catch(error => {
        console.log(error)
      })
    },
    toEventPage: function (event) {
      sessionStorage.setItem('eventId', event.eventId)
      this.$router.push({name: 'eventRoute'})
    }

  },
  mounted() {
    this.findAllCategories()
    this.findAllCounties()
    this.findAllEvents()
    sessionStorage.removeItem('eventId')
    this.selectedCounty = 'kõik'
    this.selectedCategory = 'kõik'
  }
}
</script>

<style scoped>

</style>