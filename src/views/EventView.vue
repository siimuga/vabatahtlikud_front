<template>
  <div>
    <div class="container-xxl">
      <div class="row">
        <div class="col-xl">
          <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toHomePage">Esilehele
          </button>
        </div>
        <div class="col-sm">
          <h2><span style="color: #2c3e50">{{ eventViewInfo.eventName }}</span></h2>
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
    <div>

      <div class="container-xl">
        <div class="row">
          <div class="col-sm">
            <h3><span style="color: #2c3e50"></span></h3>
            <table class="table">
              <tbody>
              <tr>
                <th>Aeg</th>
                <td>{{ eventViewInfo.startDate }} - {{ eventViewInfo.endDate }}</td>
              </tr>
              <tr>
                <th>Valdkond</th>
                <td>{{ eventViewInfo.categoryName }}</td>
              </tr>
              <tr>
                <th>Maakond</th>
                <td>{{ eventViewInfo.locationCountyName }}</td>
              </tr>
              <tr>
                <th>Aadress</th>
                <td>{{ eventViewInfo.locationAddress }}</td>
              </tr>
              <tr>
                <th>Vabatahtlike arv</th>
                <td>{{ eventViewInfo.volunteersRequired }}</td>
              </tr>
              <tr>
                <th>Suhtluskeel</th>
                <td>{{ eventViewInfo.languageName }}</td>
              </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>


    <div class="col-sm">
      <a v-if="divDisplayLink" :href=eventViewInfo.link class="btn btn-success">Mine veebilehele</a>
      <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toRegisterToEventPage">
        Registreeru vabatahtlikuks
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventView",

  data: function () {
    return {
      eventId: sessionStorage.getItem('eventId'),
      countyList: [],
      categoryList: [],
      languageList: [],
      selected: '',
      eventViewInfo: {},
      divDisplayLink: false,
    }
  },

  methods: {
    toLogInPage: function () {
      sessionStorage.removeItem('eventId')
      this.$router.push({name: 'logInRoute'})
    },
    toHomePage: function () {
      sessionStorage.removeItem('eventId')
      this.$router.push({name: 'homePageRoute'})
    },
    toRegisterToEventPage: function () {
      this.$router.push({name: 'registerToEventRoute'})
    },
    displayLink: function () {
      if (this.eventViewInfo.link == null) {
        this.divDisplayLink = false
      } else {
        this.divDisplayLink = true
      }

    },

    findEventInfo: function () {
      this.$http.get("/event/event/main", {
            params: {
              eventId: this.eventId
            }
          }
      ).then(response => {
        this.eventViewInfo = response.data
        this.displayLink()
        console.log(this.eventViewInfo.link)
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },
  },
  mounted() {
    this.findEventInfo()
  }

}
</script>

<style scoped>

</style>