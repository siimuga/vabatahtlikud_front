<template>
  <div class="home">
    <button type="button" style="margin: 5px" class="btn-outline-primary" v-on:click="toLogInPage">Sisene</button>
    <br>
    <h2><span style="color: #2c3e50">Tule vabatahtlikuks!</span></h2>
    <br>


    <img alt="Vue logo" style="width: 300px; margin: 10px"  src="../assets/picture_volunteer.jpg" v-on:click="toAllEventsPage">
    <a href="http://localhost:8081/organizer#/organizer"><img alt="Vue logo" style="width: 300px; margin: 10px"  src="../assets/picture_organizer.jpg"></a>

<!--    <img alt="Vue logo" style="width: 300px; margin: 10px"  src="../assets/picture_events.jpg">-->
<!--    <img alt="Vue logo" style="width: 300px; margin: 10px" src="../assets/picture_volunteer.jpg">-->
<!--    <img alt="Vue logo" style="width: 300px; margin: 10px" src="../assets/picture_organizer.jpg">-->

  </div>
</template>

<script>

export default {
  name: 'HomeView',

  methods: {
    toAllEventsPage: function () {
      this.$router.push({name: 'allEventsRoute'})
    },
  }
}
</script>
