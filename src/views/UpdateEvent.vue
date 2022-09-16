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
          <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toHomePage">Logi välja
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
                <td><input type="text" placeholder="Ürituse nimi"><!--v-model="example"--></td>
              </tr>
              <tr>
                <th>Kuupäev(ad)</th>
                <div>
                  <td class="input-group input-daterange"></td>
                  <input type="date" class="form-control-sm" v-model="eventRequest.startDate">
                  <input type="date" class="form-control-sm" v-model="eventRequest.endDate">
                </div>
              </tr>
              <tr>
                <th>Valdkond</th>
                <select v-model="selectedCategory">
                  <option disabled value="">Vali valdkond</option>
                  <option v-for="option in categoryList" :value="option">{{ option.name }}</option>
                </select>
              </tr>
              <tr>
                <th>Maakond</th>
                <select v-model="selectedCounty">
                  <option disabled value="">Vali maakond</option>
                  <option v-for="option in countyList" :value="option">{{ option.name }}</option>
                </select>
              </tr>
              <tr>
                <th>Aadress</th>
                <td><input type="text" placeholder="Aadress"> <!--v-model="example"--></td>
              </tr>
              <tr>
                <th>Vabatahtlike arv</th>
                <td><input type="text" placeholder="Arv"> <!--v-model="example"--></td>
              </tr>
              <tr>
                <th>Suhtluskeel</th>
                <select v-model="selectedLanguage">
                  <option disabled value="">Vali keel</option>
                  <option v-for="option in languageList" :value="option">{{ option.name }}</option>
                </select>
              </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
    <div class="col-sm">
      <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toUpdateEventNextPage">Edasi
      </button>
    </div>
  </div>
</template>

<script>
import ImageInput from "@/components/image/ImageInput";

export default {
  name: "AddEventView",
  components: {ImageInput},
  data: function () {
    return {
      countyList: [],
      categoryList: [],
      languageList: [],
      selectedCategory: '',
      selectedCounty: '',
      selectedLanguage: '',
      selected: '',
      pictureExport: {
        data: String
      },
      pictureImport: {},
      eventRequest: {
        userId: 0,
        categoryId: 0,
        eventName: '',
        startDate: '',
        endDate: '',
        locationCountyId: 0,
        link: '',
        locationAddress: '',
        volunteersRequired: '',
        languageId: 0
      }
    }
  },

  methods: {
    toHomePage: function () {
      this.$router.push({name: 'homeRoute'})
    },
    toAccountPage: function () {
      this.$router.push({name: 'accountRoute'})
    },
    toUpdateEventNextPage: function () {
      this.$router.push({name: 'updateEventNextPageRoute'})
    },
    setDates: function () {
      this.eventRequest.startDate = new Date().toISOString().substring(0, 10)
      this.eventRequest.endDate = new Date().toISOString().substring(0, 10)
    }
  },
  mounted() {
    this.setDates()
    this.findAllCategorys()
    this.findAllCountys()
    this.findAllLanguages()
  },
}
</script>

<style scoped>

</style>