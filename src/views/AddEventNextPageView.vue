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
                <td>{{addTask}}</td>
                <td><input type="text" placeholder="Ülesanne" :v-model="task.name"></td>
                  <button type="button" style="margin: 1px" class="btn btn-outline-dark" v-on:click="addTask">Lisa
                  </button>
                  <button type="button" style="margin: 1px" class="btn btn-danger" v-on:click="toDeleteTask">Kustuta
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
      <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toHomePage">Valmis</button>
    </div>
  </div>
</template>

<script>
import ImageInput from "@/components/image/ImageInput";

export default {
  name: "AddEventView",
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
      addTask: '',
      pictureExport: {
        data: String
      },
      pictureImport: {},
      task: {}

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
     // this.event.addTask = this.toAddTask()
      this.$http.post("event/task", this.event)
          .then(response => {
            this.addTask = response.data
            console.log(response.data)
          })
    },
    toDeleteTask: function () {

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
  },
  mounted() {
    this.addTask()
  }
}
</script>

<style scoped>

</style>