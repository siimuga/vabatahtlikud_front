<template>
  <div>
    <div class="container-xxl">
      <div class="row">
        <div class="col-xl">
          <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toAddEventPage">Tagasi
          </button>
        </div>
        <div class="col-sm">
          <h2><span style="color: #2c3e50">Ürituse muutmine 2</span></h2>
        </div>
        <div class="col-sm">
          <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toLogInPage">Minu konto
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
            <table class="table table-hover">
              <thead>
              <tr>
                <th scope="col">Täpsustav info</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>info</td>
                <td>
                  <button type="button" style="margin: 1px" class="btn btn-outline-dark" v-on:click="toAddTask">Lisa
                  </button>
                  <button type="button" style="margin: 1px" class="btn btn-danger" v-on:click="toDeleteTask">Kustuta
                  </button>
                </td>
              </tr>
              </tbody>
            </table>
            <table class="table table-hover">
              <thead>
              <tr>
                <th scope="col">Tööülesanded</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>ülesanne</td>
                <td>
                  <button type="button" style="margin: 1px" class="btn btn-outline-dark" v-on:click="toAddTask">Lisa
                  </button>
                  <button type="button" style="margin: 1px" class="btn btn-danger" v-on:click="toDeleteTask">Kustuta
                  </button>
                </td>
              </tr>
              </tbody>
            </table>
            <table class="table table-hover">
              <thead>
              <tr>
                <th scope="col">Lisa pilt</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td><ImageInput @pictureInputSuccess="getPictureDataFromFile"/></td>
                <button type="button" style="margin: 1px" class="btn btn-outline-dark"
                        v-on:click="sendImageDataToBackend">Lisa</button>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm">
      <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toSaveEventUpdate">Salvesta muudatused</button>
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
    toAddEventPage: function () {
      this.$router.push({name: 'addEventRoute'})
    },
    toLogInPage: function () {
      this.$router.push({name: 'logInRoute'})
    },
    toAddTask: function () {

    },
    toDeleteTask: function () {

    },
    toSaveEventUpdate: function () {

    },
    getPictureDataFromFile: function (pictureDataBase64) {
      this.pictureExport.data = pictureDataBase64
    },
    sendImageDataToBackend: function () {
      this.$http.post("/event/picture", this.pictureExport
      ).then(response => {
        alert("Pilt edukalt lisatud!")
      }).catch(error => {
        alert("Viga pildi lisamisel!")
      })
    },
  }
}
</script>

<style scoped>

</style>