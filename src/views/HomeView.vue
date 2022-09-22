<template>
  <div>
    <div v-if="divToLogInPage">
      <div class="container-xxl">
        <div class="row">
          <div class="col-xl">
          </div>
          <div class="col-sm">
          </div>
          <div class="col-sm">
            <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toLogInPage">Sisene</button>
            <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toLogInPage">Loo konto</button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="divDisplayAdmin">
      <div class="container-xxl">
        <div class="row">
          <div class="col-xl">
          </div>
          <div class="col-sm">
          </div>
          <div class="col-sm">
            <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toLogOut">Logi välja</button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="divDisplayLoggedIn">
      <div class="container-xxl">
        <div class="row">
          <div class="col-xl">
          </div>
          <div class="col-sm">
          </div>
          <div class="col-sm">
            <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toMyEventsPage">Minu
              üritused
            </button>
            <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toAccountPage">Minu konto
            </button>
            <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toLogOut">Logi välja</button>
          </div>
        </div>
      </div>
    </div>
    <br>
    <br>
    <h1><span style="color: #2c3e50">Tule vabatahtlikuks!</span></h1>
    <br>
    <br>
    <div class="container-xxl">
      <div class="row">
        <div class="col-md-4">
          <div type="button" class="content" v-on:click="toAllEventsPage"> <a href="#">
            <div  class="content-overlay"></div> <img type="button" class="content-image" src="../assets/HomeView/picture_events.jpg">
            <div  class="content-details fadeIn-bottom">
              <h3 class="content-title" >Sündmused</h3>
              <p class="content-text"><i class="fa fa-map-marker"></i>Loe edasi</p>
            </div>
          </a> </div>
        </div>
        <div class="col-md-4">
          <div type="button" class="content" v-on:click="toVolunteerPage"> <a href="#">
            <div class="content-overlay"></div> <img class="content-image" src="../assets/HomeView/picture_volunteer.jpg">
            <div class="content-details fadeIn-bottom">
              <h3 class="content-title">Vabatahtlikule</h3>
              <p class="content-text"><i class="fa fa-map-marker"></i>Loe edasi</p>
            </div>
          </a> </div>
        </div>
        <div class="col-md-4">
          <div type="button" class="content" v-on:click="toOrganizerPage"> <a href="#">
            <div class="content-overlay"></div> <img class="content-image" src="../assets/HomeView/picture_organizer.jpg">
            <div class="content-details fadeIn-bottom">
              <h3 class="content-title">Korraldajale</h3>
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
  name: 'HomeView',

  data: function () {
    return {
      userId: sessionStorage.getItem('userId'),
      divToLogInPage: false,
      divDisplayAdmin: false,
      divDisplayLoggedIn: false,
      divToAllEventsPage: true,
      divToVolunteerPage: true,
      divToOrganizerPage: true
    }
  },

  methods: {

    hideAll: function () {
      this.divDisplayLoggedIn = false
      this.divDisplayAdmin = false
      this.divToLogInPage = false
    },
    displayLogin: function () {
      if (this.userId === null) {
        this.hideAll()
        this.divToLogInPage = true
      }
    },
    displayAdmin: function () {
      if (this.userId === '1') {
        this.hideAll()
        this.divDisplayAdmin = true
      }
    },
    displayLoggedIn: function () {
      if (this.userId > 1) {
        this.hideAll()
        this.divDisplayLoggedIn = true
      }
    },
    toLogInPage: function () {
      this.$router.push({name: 'logInRoute'})
    },
    toLogOut: function () {
      sessionStorage.removeItem('userId')
      location.reload()
    },
    toMyEventsPage: function () {
      this.$router.push({name: 'myEventsRoute'})
    },

    toAccountPage: function () {
      this.$router.push({name: 'accountRoute'})
    },

    toAllEventsPage: function () {
      this.$router.push({name: 'allEventsRoute'})
    },
    toVolunteerPage: function () {
      this.$router.push({name: 'volunteerRoute'})
    },
    toOrganizerPage: function () {
      this.$router.push({name: 'organizerRoute'})
    }
  },
  mounted() {
    sessionStorage.removeItem('eventId')
    this.userId = sessionStorage.getItem('userId')
    this.displayLogin()
    this.displayAdmin()
    this.displayLoggedIn()
  }
}

</script>
