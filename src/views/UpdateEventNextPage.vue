<template>
  <div>
    <div class="container-xxl">
      <div class="row">
        <div class="col-xl">
          <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toHomePage">Esilehele
          </button>
          <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toUpdateEventPage">Tagasi
            põhiandmetesse
          </button>
        </div>
        <div class="col-sm">
          <h2><span style="color: #2c3e50">Ürituse lisade muutmine</span></h2>
        </div>
        <div class="col-sm">
          <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toMyAccount">Minu konto
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
            <table class="table table-hover">
              <thead>
              <tr>
                <th scope="col">Täpsustav info</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="addinfo in additionalInfos">
                <td>{{ addinfo.name }}</td>
                <td>
                  <button type="button" style="margin: 1px" class="btn btn-danger"
                          v-on:click="toDeleteAddInfo(addinfo)">
                    Kustuta
                  </button>
                </td>
              </tr>
              <tr>
                <td><input type="text" placeholder="Uus lisainfo" v-model="additionalInfoInfo.name"></td>
                <button type="button" style="margin: 1px" class="btn btn-outline-dark" v-on:click="toAddInfo">Lisa
                </button>
              </tr>
              </tbody>
            </table>
            <br>
            <table class="table table-hover">
              <thead>
              <tr>
                <th scope="col">Tööülesanded</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="task in tasks">
                <td>{{ task.name }}</td>
                <td>
                  <button type="button" style="margin: 1px" class="btn btn-danger" v-on:click="toDeleteTask(task)">
                    Kustuta
                  </button>
                </td>
              </tr>
              <tr>
                <td><input type="text" placeholder="Uus ülesanne" v-model="taskRequest.name"></td>
                <button type="button" style="margin: 1px" class="btn btn-outline-dark" v-on:click="toAddTask">Lisa
                </button>
              </tr>
              </tbody>
            </table>
            <br>
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
  </div>
</template>

<script>
import ImageInput from "@/components/image/ImageInput";
import AlertError from "@/alerts/AlertError";

export default {
  name: "UpdateEventNextPage",
  components: {ImageInput, AlertError},
  data: function () {
    return {
      eventId: sessionStorage.getItem('eventId'),
      additionalInfos: [],
      tasks: [],
      errorMessage: '',
      pictureExport: {
        data: String
      },
      pictureImport: {},
      additionalInfoInfo: {
        name: '',
        eventId: sessionStorage.getItem('eventId'),
      },
      taskRequest: {
        name: '',
        eventId: sessionStorage.getItem('eventId'),
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
    toUpdateEventPage: function () {
      this.$router.push({name: 'updateEventRoute'})
    },
    toMyAccount: function () {
      this.$router.push({name: 'accountRoute'})
    },
    findDatesAndTasksByEvent: function () {
      this.$http.get("event/task/addinfo", {
        params: {
          eventId: this.eventId
        }
      })
          .then(response => {
            this.tasks = response.data.tasks
            this.additionalInfos = response.data.additionalInfos
            console.log(response.data)
          })
          .catch(error => {
            console.log(error)
          })
    },
    toAddInfo: function () {
      this.$http.post("/event/additional/info", this.additionalInfoInfo
      ).then(response => {
        console.log(response.data)
      }).catch(error => {
        this.errorMessage = error.response.data.detail
        alert(this.errorMessage)
      })
      location.reload()
    },
    toAddTask: function () {
      this.$http.post("/event/task", this.taskRequest
      ).then(response => {
        console.log(response.data)
      }).catch(error => {
        this.errorMessage = error.response.data.detail
        alert(this.errorMessage)
      })
      location.reload()
    },
    toDeleteTask: function (task) {
      this.$http.delete("/event/delete/task", {
        params: {
          taskId: task.taskId,
        }
      })
          .then(response => {
            console.log(response.data)
          }).catch(error => {
        console.log(error)
      })
      alert(this.successMessage = 'Ülesanne kustutatud')
      location.reload()
    },
    toDeleteAddInfo: function (addinfo) {
      this.$http.delete("/event/delete/additional/info", {
        params: {
          additionalInfoId: addinfo.addInfoId,
        }
      })
          .then(response => {
            console.log(response.data)
          }).catch(error => {
        console.log(error)
      })
      alert(this.successMessage = 'Ülesanne kustutatud')
      location.reload()
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
    this.findDatesAndTasksByEvent()
  }
}
</script>

<style scoped>

</style>