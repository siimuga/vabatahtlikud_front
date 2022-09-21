<template>
  <div>
    <div class="container-xxl">
      <div class="row">
        <div class="col-xl">
          <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toHomePage">Esilehele
          </button>
        </div>
        <div class="col-sm">
          <h2><span style="color: #2c3e50">Ürituse muutmine</span></h2>
        </div>
        <div class="col-sm">
          <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toAccountPage">Minu konto
          </button>
          <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toLogOut">Logi välja
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
                <th>Ürituse nimi</th>
                <td><input type="text" v-model="eventViewInfo.eventName">
                </td>
              </tr>
              <tr>
                <th>Kuupäev(ad)</th>
                <div>
                  <td class="input-group input-daterange"></td>
                  <input type="date" class="form-control-sm" v-model="eventViewInfo.startDate">
                  <input type="date" class="form-control-sm" v-model="eventViewInfo.endDate">
                </div>
              </tr>
              <tr>
                <th>Valdkond</th>
                <select v-model="eventViewInfo.categoryName">
                  <option disabled value="">Vali valdkond</option>
                  <option v-for="option in categoryList" :value="option.name">{{ option.name }}
                  </option>
                </select>
              </tr>
              <tr>
                <th>Maakond</th>
                <select v-model="eventViewInfo.locationCountyName">
                  <option disabled value="">Vali maakond</option>
                  <option v-for="option in countyList" :value="option.name">{{ option.name }}
                  </option>
                </select>
              </tr>
              <tr>
                <th>Aadress</th>
                <td><input type="text" placeholder="Aadress" v-model="eventViewInfo.locationAddress">
                </td>
              </tr>
              <tr>
                <th>Vabatahtlike arv</th>
                <td><input type="text" placeholder="Arv" v-model="eventViewInfo.volunteersRequired">
                </td>
              </tr>
              <tr>
                <th>Suhtluskeel</th>
                <select v-model="eventViewInfo.languageName">
                  <option disabled value="">Vali keel</option>
                  <option v-for="option in languageList"
                          :value="option.name">{{ option.name }}
                  </option>
                </select>
              </tr>
              <tr>
                <th>Veebileht</th>
                <td><input type="text" placeholder="Veebileht" v-model="eventViewInfo.link">
                </td>
              </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
    <div class="col-sm">
      <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="updateEvent">Edasi
      </button>
    </div>
  </div>
</template>

<script>
import ImageInput from "@/components/image/ImageInput";
import AlertSuccess from "@/alerts/AlertSuccess";

export default {
  name: "AddEventView",
  components: {ImageInput, AlertSuccess},
  data: function () {
    return {
      eventId: sessionStorage.getItem('eventId'),
      countyList: [],
      categoryList: [],
      languageList: [],
      pictureImport: {},
      eventViewInfo: {
        eventId: 0,
        eventName: '',
        startDate: '',
        endDate: '',
        locationCountyName: '',
        locationAddress: '',
        volunteersRequired: 0,
        volunteersAttended: 0,
        languageName: '',
        link: '',
        pictureData: '',
        hasPicture: false,
        categoryName: ''
      }
    }
  },
  methods: {
    toHomePage: function () {
      this.$router.push({name: 'homeRoute'})
    },
    toLogOut: function () {
      sessionStorage.removeItem('eventId')
      sessionStorage.removeItem('userId')
      this.$router.push({name: 'homeRoute'})
    },
    toAccountPage: function () {
      this.$router.push({name: 'accountRoute'})
    },
    updateEvent: function () {
      this.$http.patch("/event/event", this.eventViewInfo
      ).then(response => {
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
      alert(this.successMessage = 'Ürituse põhiandmed on muudetud!')
      this.$router.push({name: 'updateEventNextPageRoute'})
    },
    findAllCategories: function () {
      this.$http.get("/event/category")
          .then(response => {
            this.categoryList = response.data
            console.log(response.data)
          }).catch(error => {
        console.log(error)
      })
    },
    findAllCounties: function () {
      this.$http.get("/event/county")
          .then(response => {
            this.countyList = response.data
            console.log(response.data)
          }).catch(error => {
        console.log(error)
      })
    },
    findAllLanguages: function () {
      this.$http.get("/event/language")
          .then(response => {
            this.languageList = response.data
            console.log(response.data)
          }).catch(error => {
        console.log(error)
      })
    },
    findEventInfo: function () {
      this.$http.get("/event/event/main", {
            params: {
              eventId: this.eventId
            }
          }
      )
          .then(response => {
            this.eventViewInfo = response.data
            console.log(response.data)
          }).catch(error => {
        console.log(error)
      })
    },
  },
  mounted() {
    this.findAllCategories()
    this.findAllCounties()
    this.findAllLanguages()
    this.findEventInfo()
  }
}
</script>

<style scoped>

</style>