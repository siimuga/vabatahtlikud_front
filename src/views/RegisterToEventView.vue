<template>
  <div>
    <div class="container-xxl">
      <div class="row">
        <div class="col-xl">
          <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toHomePage">Esilehele
          </button>
        </div>
        <div class="col-sm">
          <h2><span style="color: #2c3e50">Registreerumine üritusele</span></h2>
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

    <div class="row row-cols-2">
      <div class="col">
        <table class="table table-hover">
          <thead>
          <tr>
            <th scope="col">Vali osalemise kuupäev</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="eventDate in eventDateInfos" :key="eventDate.id">
            <td>
              <input type="checkbox" v-model="volunteerEventDateInfo" :value="eventDate.id"> {{ eventDate.date }}
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="col">
        <table class="table table-hover">
          <thead>
          <tr>
            <th scope="col">Vali sobivad tööülesanded</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="task in tasks" :key="task.taskId">
            <td>
              <input type="checkbox" v-model="volunteerTaskInfo" :value="task.taskId"> {{ task.name }}
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <table class="table table-hover">
        <thead>
        <tr>
          <th scope="col">Lisainfo korraldajale</th>
          <th scope="col">Osalejate arv</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td><textarea placeholder="Kuni 1000 tähemärki" v-model="volunteerRequest.info"></textarea></td>
          <td><input type="number" v-model="volunteerRequest.volunteersSize" placeholder="1"></td>
        </tr>
        </tbody>
      </table>
    </div>
    <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="registerToEvent">Registreeru
    </button>
  </div>
</template>

<script>
export default {
  name: "RegisterView",
  data: function () {
    return {
      userId: sessionStorage.getItem('userId'),
      eventId: sessionStorage.getItem('eventId'),
      errorMessage: '',
      eventDateInfos: [],
      tasks: [],
      volunteerId: 0,
      volunteerRequest: {
        userId: sessionStorage.getItem('userId'),
        eventId: sessionStorage.getItem('eventId'),
        volunteersSize: 0,
        info: ''
      },
      volunteerEventDateInfo: [],
      volunteerTaskInfo: []
    }
  },
  methods: {
    toHomePage: function () {
      this.$router.push({name: 'homeRoute'})
    },
    toAccountPage: function () {
      this.$router.push({name: 'accountRoute'})
    },
    registerToEvent: function () {
      if (this.volunteerEventDateInfo.length === 0) {
        alert(this.errorMessage = 'Vähemalt üks kuupäev peab olema valitud')
      } else if (this.volunteerRequest.volunteersSize < 1) {
        alert(this.errorMessage = 'Vähemalt üks osaleja peab olema valitud')
      } else {
        this.$http.post("/volunteer/register", this.volunteerRequest
        ).then(response => {
          this.volunteerId = response.data.volunteerId
          this.fillNewForm()
          console.log(response.data)
        }).catch(error => {
          alert(this.errorMessage = 'Viga sisestamisel')
          console.log(error)
        })
      }
    },

    fillNewForm: function () {
      let someDtoObject = {
        volunteerId: this.volunteerId,
        volunteerEventDateInfos: this.volunteerEventDateInfo,
        volunteerTaskInfos: this.volunteerTaskInfo,
      }
      this.$http.post("/volunteer/register/new", someDtoObject
      ).then(response => {
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })

    },
    findDatesAndTasksByEvent: function () {
      this.$http.get("event/event/register", {
        params: {
          eventId: this.eventId
        }
      })
          .then(response => {
            this.tasks = response.data.tasks
            this.eventDateInfos = response.data.eventDateInfos
            console.log(response.data)
          })
          .catch(error => {
            console.log(error)
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