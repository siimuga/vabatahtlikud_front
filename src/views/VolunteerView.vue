<template>
  <div>
    <div class="container-xxl">
      <div class="row">
        <div class="col-xl">
          <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toHomePage">Esilehele
          </button>
        </div>
        <div class="col-sm">
          <h2><span style="color: #2c3e50">Vabatahtlikule</span></h2>
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
    <div>Siia tuleb info vabatahtlikule</div>
    <br>
    <div class="row">
      <div class="col-md-4">
        <img src="../assets/VolunteerView/volunteer-view1.jpg"  style="width:75%; margin: 5px">
      </div>
      <div class="col-md-4">
        <img src="../assets/VolunteerView/volunteer-view2.jpg"  style="width:75%; margin: 5px">
      </div>
      <div class="col-md-4">
        <img src="../assets/VolunteerView/volunteer-view3.jpg"  style="width:75%; margin: 5px">
      </div>
    </div>
    <br>
<!--    <div class="container-xxl">-->
<!--      <div class="row">-->
<!--        <div class="col-sm-2"><a>-->
<!--          <div class="content-overlay"></div>-->
<!--          <img type="button" class="content-image" src="../assets/VolunteerView/volunteer-view1.jpg">-->
<!--        </a></div>-->
<!--      </div>-->
<!--      <br>-->
<!--      <div class="row">-->
<!--        <div class="col-sm-2">-->
<!--          <div class="content-overlay"></div>-->
<!--          <img type="button" class="content-image" src="../assets/VolunteerView/volunteer-view2.jpg">-->
<!--        </div>-->
<!--      </div>-->
<!--      <br>-->
<!--      <div class="row">-->
<!--        <div class="col-sm-2">-->
<!--          <div class="content-overlay"></div>-->
<!--          <img type="button" class="content-image" src="../assets/VolunteerView/volunteer-view3.jpg">-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script>
export default {
  name: "VolunteerView",
  data: function () {
    return {
      divToLogInPage: true,
      userId: sessionStorage.getItem('userId'),
    }
  },

  methods: {
    toLogInPage: function () {
      this.$router.push({name: 'logInRoute'})
    },

    toLogOut: function () {
      sessionStorage.removeItem('userId')
      this.$router.push({name: 'homeRoute'})
    },
    toHomePage: function () {
      this.$router.push({name: 'homeRoute'})
    }
  },
}
</script>

<style scoped>

</style>