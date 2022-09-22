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
          <div v-if="divToLogInPage">
            <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toLogInPage">Sisene</button>
            <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toLogInPage">Loo konto</button>
          </div>
          <div v-if="divDisplayAdmin">
            <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toAdminPage">Admin</button>
            <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toLogOut">Logi välja</button>
          </div>
          <div v-if="divDisplayLoggedIn">

            <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toAccountPage">Minu konto
            </button>
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
  </div>
</template>

<script>
export default {
  name: "VolunteerView",
  data: function () {
    return {
      divToLogInPage: false,
      divDisplayAdmin: false,
      divDisplayLoggedIn: false,
      userId: sessionStorage.getItem('userId'),

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
    toAdminPage: function () {
      this.$router.push({name: 'adminRoute'})
    },
    toLogInPage: function () {
      this.$router.push({name: 'logInRoute'})
    },

    toLogOut: function () {
      sessionStorage.removeItem('userId')
      this.$router.push({name: 'homeRoute'})
    },

    toAccountPage: function () {
      this.$router.push({name: 'accountRoute'})
    },
    toHomePage: function () {
      this.$router.push({name: 'homeRoute'})
    }
  },
  mounted() {
    this.displayLogin()
    this.displayAdmin()
    this.displayLoggedIn()
  }
}
</script>

<style scoped>

</style>