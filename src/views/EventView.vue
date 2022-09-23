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
          <div v-if="divToLogInPage">
            <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toLogInPage">
              Sisene
            </button>
            <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toLogInPage">Loo
              konto
            </button>
          </div>
          <div v-if="divDisplayAdmin">
            <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toAdminPage">
              Admin
            </button>
            <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toLogOut">Logi
              välja
            </button>
          </div>
          <div v-if="divDisplayLoggedIn">
            <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toMyEventsPage">
              Minu
              üritused
            </button>
            <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toAccountPage">Minu
              konto
            </button>
            <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toLogOut">Logi
              välja
            </button>
          </div>
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
                <th>Registreerunuid</th>
                <td>{{ eventViewInfo.volunteersAttended }}</td>
              </tr>
              <tr>
                <th>Vabatahtlikke vajatud</th>
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
    <div v-if="divToLogInPage">
      <div class="col-sm">
        <a v-if="divDisplayLink" :href=eventViewInfo.link class="btn btn-secondary">Mine veebilehele</a>
        <button type="button" style="margin: 5px" class="btn btn-outline-dark"
                v-on:click="toLogInPage">
          Registreeru vabatahtlikuks
        </button>
      </div>
    </div>
    <div v-if="divDisplayLoggedIn">
      <div class="col-sm">
        <a v-if="divDisplayLink" :href=eventViewInfo.link class="btn btn-secondary">Mine veebilehele</a>
        <button v-if="!divDisplayVolunteer && !divDisplayOrganizer" type="button" style="margin: 5px" class="btn btn-outline-dark"
                v-on:click="toRegisterToEventPage">
          Registreeru vabatahtlikuks
        </button>
        <button v-if="divDisplayVolunteer" type="button" style="margin: 5px" class="btn btn-success">
          Oled juba registreerunud
        </button>
        <button v-if="divDisplayOrganizer" type="button" style="margin: 5px" class="btn btn-success">
          Oled juba korraldaja
        </button>
      </div>
    </div>

    <div v-if="divDisplayAdmin">
      <button type="button" style="margin: 5px" class="btn btn-secondary" v-on:click="toChangeEvent">
        Muuda ürituse andmeid
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventView",

  data: function () {
    return {
      userId: sessionStorage.getItem('userId'),
      eventId: sessionStorage.getItem('eventId'),
      countyList: [],
      categoryList: [],
      languageList: [],
      selected: '',
      eventViewInfo: {},
      divDisplayLink: false,
      divDisplayVolunteer: false,
      divDisplayOrganizer: false,
      divToLogInPage: false,
      divDisplayAdmin: false,
      divDisplayLoggedIn: false
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
    toAccountPage: function () {
      sessionStorage.removeItem('eventId')
      this.$router.push({name: 'accountRoute'})
    },
    toMyEventsPage: function () {
      sessionStorage.removeItem('eventId')
      this.$router.push({name: 'myEventsRoute'})
    },

    toLogInPage: function () {
      sessionStorage.removeItem('eventId')
      this.$router.push({name: 'logInRoute'})
    },
    toLogOut: function () {
      sessionStorage.removeItem('userId')
      sessionStorage.removeItem('eventId')
      this.$router.push({name: 'homeRoute'})
    },
    toChangeEvent: function () {
      sessionStorage.setItem('eventId', this.eventId)
      this.$router.push({name: 'updateEventRoute'})
    },
    toHomePage: function () {
      sessionStorage.removeItem('eventId')
      this.$router.push({name: 'homeRoute'})
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

    checkVolunteer: function () {
      this.$http.get("/event/event/user/volunteer", {
        params: {
          userId: this.userId,
          eventId: this.eventId
        }
      })
          .then(response => {
            this.divDisplayVolunteer = response.data
            console.log(response.data)
          }).catch(error => {
        console.log(error)
      })
    },
    checkOrganizer: function () {
      this.$http.get("/event/event/user/organizer", {
        params: {
          userId: this.userId,
          eventId: this.eventId
        }
      })
          .then(response => {
            this.divDisplayOrganizer = response.data
            console.log(response.data)
          }).catch(error => {
        console.log(error)
      })
    },


  },
  mounted() {
    this.findEventInfo()
    this.checkVolunteer()
    this.checkOrganizer()
    this.displayLogin()
    this.displayAdmin()
    this.displayLoggedIn()
  }

}
</script>

<style scoped>

</style>