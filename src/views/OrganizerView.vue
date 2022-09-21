<template>
  <div>
    <div class="container-xxl">
      <div class="row">
        <div class="col-xl">
          <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toHomePage">Esilehele
          </button>
        </div>
        <div class="col-sm">
          <h2><span style="color: #2c3e50">Korraldajale</span></h2>
        </div>
        <div class="col-sm">
          <div v-if="userId<1">
            <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toLogInPage">Sisene</button>
            <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toLogInPage">Loo konto</button>
          </div>
          <div v-if="userId>0">
            <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toLogOut">Logi välja</button>
          </div>
        </div>
      </div>
    </div>
    <br>
<div>Siia tuleb info korraldajale</div>
    <br>
    <div id="demo" class="carousel slide" data-bs-ride="carousel">

      <div class="carousel-indicators">
        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
      </div>

      <div align="center" class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/OrganizerView/organizer_view2.jpg" alt="Los Angeles" class="d-block w-50">
        </div>
        <div class="carousel-item">
          <img src="../assets/OrganizerView/organizer_view1.jpg" alt="Chicago" class="d-block w-50">
        </div>
        <div class="carousel-item">
          <img src="../assets/OrganizerView/organizer_view3.jpg" alt="New York" class="d-block w-50">
        </div>
      </div>

      <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
        <span class="carousel-control-next-icon"></span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrganizerView",
  data: function () {
    return {
      divToLogInPage: true,
      userId: sessionStorage.getItem('userId')
    }
  },

  methods: {
    toHomePage: function () {
      this.$router.push({name: 'homeRoute'})
    },
    toLogInPage: function () {
      this.$router.push({name: 'logInRoute'})
    },
    toLogOut: function () {
      sessionStorage.removeItem('userId')
      this.$router.push({name: 'homeRoute'})
    },

  },
}
</script>

<style scoped>

</style>