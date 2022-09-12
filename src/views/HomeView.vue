<template>
  <div>
  <button type="button" style="margin: 5px" class="btn-outline-primary" v-on:click="toLogInPage">Sisene</button>
  <button type="button" style="margin: 5px" class="btn-outline-primary" v-on:click="toLogInPage">Loo konto</button>
  <br>
  <h2><span style="color: #2c3e50">Tule vabatahtlikuks!</span></h2>
  <br>

  <div>
    <img alt="Vue logo" style="width: 300px; margin: 10px"  src="../assets/picture_events.jpg" v-on:click="toAllEventsPage">
    <img alt="Vue logo" style="width: 300px; margin: 10px" src="../assets/picture_volunteer.jpg" v-on:click="toVolunteerPage">
    <img alt="Vue logo" style="width: 300px; margin: 10px" src="../assets/picture_organizer.jpg" v-on:click="toOrganizerPage">
  </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',

  data: function () {
    return{
      divToLogInPage: true
    }
  },

  methods: {
    toLogInPage: function () {

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
