<template>
  <div>
    <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toLogInPage">Sisene</button>
    <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toLogInPage">Loo konto</button>
    <br>
    <br>
    <h1><span style="color: #2c3e50">Tule vabatahtlikuks!</span></h1>
    <br>
    <br>
    <div class="container-xxl">
      <div class="row">
        <div class="col-md-4">
          <div class="content"> <a href="#">
            <div class="content-overlay"></div> <img class="content-image" src="../assets/picture_events.jpg" v-on:click="toAllEventsPage">
            <div class="content-details fadeIn-bottom">
              <h3 class="content-title">Sündmused</h3>
              <p class="content-text"><i class="fa fa-map-marker"></i>Loe edasi</p>
            </div>
          </a> </div>
        </div>
        <div class="col-md-4">
          <div class="content"> <a href="#">
            <div class="content-overlay"></div> <img class="content-image" src="../assets/picture_volunteer.jpg" v-on:click="toVolunteerPage">
            <div class="content-details fadeIn-bottom">
              <h3 class="content-title">Vabatahtlikule</h3>
              <p class="content-text"><i class="fa fa-map-marker"></i>Loe edasi</p>
            </div>
          </a> </div>
        </div>
        <div class="col-md-4">
          <div class="content"> <a href="#">
            <div class="content-overlay"></div> <img class="content-image" src="../assets/picture_organizer.jpg" v-on:click="toOrganizerPage">
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
      divToLogInPage: true
    }
  },

  methods: {
    toLogInPage: function () {
      this.$router.push({name: 'logInRoute'})
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
  }
}

</script>
