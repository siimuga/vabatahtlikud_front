<template>
  <div>
    <div class="container-xxl">
      <div class="row">
        <div class="col-xl">

          <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toHomePage">Esilehele
          </button>

          <div class="btn-group" style="margin: 5px">
            <button class="btn btn-outline-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
              Vali valdkond
            </button>
            <ul class="dropdown-menu">
              ...
            </ul>
          </div>
          <div class="btn-group" style="margin: 5px">
            <button class="btn btn-outline-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
              Vali maakond
            </button>
            <ul class="dropdown-menu">
              ...
            </ul>
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
    }
  },

  methods: {
    toLogInPage: function () {
      this.$router.push({name: 'logInRoute'})
    },
    toHomePage: function () {
      this.$router.push({name: 'homePageRoute'})
    },
  },
}
</script>

<style scoped>

</style>