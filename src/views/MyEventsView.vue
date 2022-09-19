<template>
  <div>
    <div class="container-xxl">
      <div class="row">
        <div class="col-xl">
          <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toHomePage">Esilehele
          </button>
        </div>
        <div class="col-sm">
          <h2><span style="color: #2c3e50">Minu üritused</span></h2>
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
      <div class="col-sm">
        <h3 align="left" style="margin: 5px"><span style="color: #2c3e50">Eesolevad üritused</span></h3>
        <div v-if="activeEvents.length>0">
          <table class="table table-hover">
            <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Ürituse nimi</th>
              <th scope="col">Vabatahtlike arv</th>
              <th scope="col">Registreerunute arv</th>
              <th scope="col">Roll</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="event in activeEvents">
              <th scope="row">{{ event.seqNr }}</th>
              <td>{{ event.eventName }}</td>
              <td>{{ event.volunteersRequired }}</td>
              <td>{{ event.volunteersAttended }}</td>
              <td>{{ event.roleName }}</td>
              <td v-if="event.roleName === 'vabatahtlik'" v-model="event.eventId">
                <button type="button" style="margin: 5px" class="btn btn-danger" v-on:click="cancelParticipation">Tühista
                  osalemine
                </button>
              </td>
              <td v-if="event.roleName === 'korraldaja'">
                <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toChangeEvent">
                  Muuda
                </button>
                <button type="button" style="margin: 5px" class="btn btn-danger" v-on:click="toDeleteEvent">Kustuta
                </button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>

        <h3 align="center" style="margin: 5px"><span style="color: #2c3e50" v-if="activeEvents.length===0">Eesolevaid üritusi pole</span>
        </h3>
        <br>
        <h3 align="left" style="margin: 5px"><span style="color: #2c3e50">Möödunud üritused</span></h3>
        <div v-if="pastEvents.length>0">
          <table class="table table-hover">
            <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Ürituse nimi</th>
              <th scope="col">Vabatahtlike arv</th>
              <th scope="col">Registreerunute arv</th>
              <th scope="col">Roll</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="event in pastEvents">
              <th scope="row">{{ event.id }}</th>
              <td>{{ event.eventName }}</td>
              <td>{{ event.volunteersRequired }}</td>
              <td>{{ event.volunteersAttended }}</td>
              <td>{{ event.roleName }}</td>
            </tr>
            </tbody>
          </table>
        </div>
        <h3 align="center" style="margin: 5px"><span style="color: #2c3e50" v-if="pastEvents.length===0">Möödunuid üritusi pole</span>
        </h3>
      </div>
    </div>
  </div>


</template>

<script>
import AlertSuccess from "@/alerts/AlertSuccess";

export default {
  name: "AccountView",
  components: {AlertSuccess},
  props: {},

  data: function () {
    return {
      divToHomePage: true,
      example: 'Mari',
      userId: sessionStorage.getItem('userId'),
      selectedEventId : 0,
      pastEvents: [
        {
          id: 0,
          roleName: '',
          eventName: '',
          volunteersRequired: 0,
          volunteersAttended: 0
        }
      ],
      activeEvents: [
        {
          seqNr: 0,
          eventId: 0,
          roleName: '',
          eventName: '',
          volunteersRequired: 0,
          volunteersAttended: 0
        }
      ],
      volunteerDeleteRequest: [
        {
          userId: sessionStorage.getItem('userId'),
          eventId: event.eventId
        }
      ],
      successMessage: ''
    }
  },

  methods: {
    toHomePage: function () {
      this.$router.push({name: 'homeRoute'})
    },
    toAccountPage: function () {
      this.$router.push({name: 'accountRoute'})
    },
    toChangeEvent: function () {
      this.$router.push({name: 'addEventRoute'})
    },
    toDeleteEvent: function () {
      this.$router.push({name: 'homeRoute'})
    },
    cancelParticipation: function () {
        this.$http.delete("/event/event/cancel", this.volunteerDeleteRequest
        ).then(response => {
          alert(this.successMessage = 'Osalemine tühistatud')
          location.reload();
          console.log(response.data)
        }).catch(error => {
          console.log(error)
        })
    },
    findPastEvents: function () {
      this.$http.get("/event/event/user/history", {
        params: {
          userId: this.userId
        }
      })
          .then(response => {
            this.pastEvents = response.data
            console.log(response.data)
          })
          .catch(error => {
            console.log(error)
          })
    },
    findAllActiveEvents: function () {
      this.$http.get("/event/event/user", {
        params: {
          userId: this.userId
        }
      })
          .then(response => {
            this.activeEvents = response.data
            console.log(response.data)
          })
          .catch(error => {
            console.log(error)
          })
    },
  },
  mounted() {
    this.findPastEvents()
    this.findAllActiveEvents()
  }
}
</script>

<style scoped>

</style>