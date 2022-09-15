<template>
  <div>
    <div class="container-xxl">
      <div class="row">
        <div class="col-xl">
          <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toHomePage">Esilehele
          </button>
        </div>
        <div class="col-sm">
          <h2><span style="color: #2c3e50">Ürituse lisamine</span></h2>
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
                <div class="input-group input-daterange">
                  <input type="date" class="form-control-sm" value="2022-09-13">
                  <div class="input-group-addon">-</div>
                  <input type="date" class="form-control-sm" value="2023-09-13">
                </div>
              </tr>
              <tr>
                <th>Valdkond</th>
                <select v-model="selected">
                  <option disabled value="">Vali valdkond</option>
                  <option v-for="option in categoryList" :value="option">{{ option }}</option>
                </select>
              </tr>
              <tr>
                <th>Maakond</th>
                <select v-model="selected">
                  <option disabled value="">Vali maakond</option>
                  <option v-for="option in countyList" :value="option">{{ option }}</option>
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
                <select v-model="selected">
                  <option disabled value="">Vali keel</option>
                  <option v-for="option in languageList" :value="option">{{ option }}</option>
                </select>
              </tr>
              <tr>
                <th>Ürituse veebileht</th>
                <td><input type="url" placeholder="Veebileht"> <!--v-model="example"--></td>
              </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
    <div class="col-sm">
      <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toSaveEvent">Salvesta
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
      selected: '',
      pictureExport: {
        data: String
      },
      pictureImport: {}
    }
  },

  methods: {
    toHomePage: function () {
      this.$router.push({name: 'homeRoute'})
    },
    toAccountPage: function () {
      this.$router.push({name: 'accountRoute'})
    },
    toSaveEvent: function () {
      this.$router.push({name: 'addEventNextPageRoute'})
    },
  }
}
</script>

<style scoped>

</style>