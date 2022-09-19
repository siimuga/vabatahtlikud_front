<template>
  <div>
    <div class="container-xxl">
      <div class="row">
        <div class="col-xl">
          <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toAddEventPage">Tagasi
          </button>
        </div>
        <div class="col-sm">
          <h2><span style="color: #2c3e50">Ürituse lisamine 2</span></h2>
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
                <td>{{ additionalInfo.name }}</td>
                <td><input type="text" placeholder="Lisainfo" :v-model="additionalInfo.name"></td>
                <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="addAdditionalInfo">
                  Lisa
                </button>
                <button type="button" style="margin: 5px" class="btn btn-outline-danger"
                        v-on:click="deleteAdditionalInfo">
                  Kustuta
                </button>
              </tr>
              </tbody>
            </table>
            <!--            <div v-for="additionalInfo in additionalInfosList">-->
            <!--              <td>{{additionalInfo.name}}</td>-->
            <!--              <td><button type="button" style="margin: 5px" class="btn btn-outline-danger" v-on:click="deleteAdditionalInfo"></button> </td>-->
            <!--            </div>-->
            <table class="table table-hover">
              <thead>
              <tr>
                <th scope="col">Tööülesanded</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>{{ task.name }}</td>
                <td><input type="text" placeholder="Ülesanne" :v-model="task.name"></td>
                <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="addTask">Lisa
                </button>
                <button type="button" style="margin: 5px" class="btn btn-outline-danger" v-on:click="deleteTask">Kustuta
                </button>
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
                <td>
                  <ImageInput @pictureInputSuccess="getPictureDataFromFile"/>
                </td>
                <button type="button" style="margin: 1px" class="btn btn-outline-dark"
                        v-on:click="sendImageDataToBackend">Lisa
                </button>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm">
      <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="saveEvent">Valmis</button>
    </div>
  </div>
</template>

<script>
import ImageInput from "@/components/image/ImageInput"

export default {
  name: "AddEventNextPageView",
  components: {ImageInput},
  props: {
    eventId: 1
  },
  data: function () {
    return {
      countyList: [],
      categoryList: [],
      languageList: [],
      selected: '',
      pictureExport: {
        data: String
      },
      pictureImport: {},
      task: {
        name: ''
      },
      additionalInfo: {
        name: '',
        eventId: 0
        // eventId: sessionStorage.getItem('eventId')
      },
    }
  },
  methods: {
    toAddEventPage: function () {
      this.$router.push({name: 'addEventRoute'})
    },
    toLogInPage: function () {
      this.$router.push({name: 'logInRoute'})
    },
    addTask: function () {
      this.$http.post("/event/task", this.event)
          .then(response => {
            this.task = response.data
            console.log(response.data)
          })
    },
    addAdditionalInfo: function () {
      this.$http.post("/event/additional/info", {}, this.event)
          .then(response => {
            this.additionalInfo = response.data
            console.log(response.data)
          })
    },
    deleteAdditionalInfo: function () {
      this.$http.delete("/event/delete/additional/info", this.event)
          .then(response => {
            this.deleteAdditionalInfo = response.data
            console.log(response.data)
          })
    },

    deleteTask: function () {
      this.$http.delete("/event/delete/task", this.event)
          .then(response => {
            this.deleteTask = response.data
            console.log(response.data)
          })
    },
    saveEvent: function () {
      this.$http.post("/event/event", this.event)
          .then(response => {
            this.saveEvent = response.data
            console.log(response.data)
          })
    },
  },
  toHomePage: function () {
    this.$router.push({name: 'homeRoute'})
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

  mounted() {
    this.addTask()
    this.addAdditionalInfo()
    this.deleteAdditionalInfo()
    this.deleteTask()
    this.saveEvent()
  }
}

</script>

<style scoped>

</style>