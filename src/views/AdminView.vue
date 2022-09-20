<template>
  <div>
    <div class="container-xxl">
      <div class="row">
        <div class="col-xl">
          <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toHomePage">Esilehele
          </button>
        </div>
        <div class="col-sm">
          <h2><span style="color: #2c3e50">Admin</span></h2>
        </div>
        <div class="col-sm">
          <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toHomePage">Logi välja
          </button>
        </div>
      </div>
    </div>
    <div class="col-sm">
      <h5 align="left" style="margin: 5px"><u><span style="color: #2c3e50">Eesolevad üritused</span></u></h5>
      <div>
        <table class="table table-hover">
          <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Ürituse nimi</th>
            <th scope="col">Vabatahtlike arv</th>
            <th scope="col">Registreerinute arv</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="event in futureEvents">
            <th scope="row">{{ event.seqNr }}</th>
            <td>{{ event.eventName }}</td>
            <td>{{ event.volunteersRequired }}</td>
            <td>{{ event.volunteersAttended }}</td>
            <td v-if="event.status === 'c'">
              <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toChangeEvent">
                Muuda
              </button>
              <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="confirmEvent(event)">
                Kinnita
              </button>
              <button type="button" style="margin: 5px" class="btn btn-danger" v-on:click="toDeleteEvent(event)">Kustuta
              </button>
            </td>

            <td v-if="event.status === 'v'">
              <button type="button" style="margin: 5px" class="btn btn-success">
                Kinnitatud
              </button>
              <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toChangeEvent">
                Muuda
              </button>
              <button type="button" style="margin: 5px" class="btn btn-danger" v-on:click="toDeleteEvent(event)">Kustuta
              </button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <br>
      <h5 align="left" style="margin: 5px"><u><span style="color: #2c3e50">Möödunud üritused</span></u></h5>
      <div v-if="pastEvents.length>0">
        <table class="table table-hover">
          <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Ürituse nimi</th>
            <th scope="col">Vabatahtlike arv</th>
            <th scope="col">Registreerinute arv</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="event in pastEvents">
            <th scope="row">{{ event.seqNr }}</th>
            <td>{{ event.eventName }}</td>
            <td>{{ event.volunteersRequired }}</td>
            <td>{{ event.volunteersAttended }}</td>
          </tr>
          </tbody>
        </table>
      </div>
      <h3 align="center" style="margin: 5px"><span style="color: #2c3e50" v-if="pastEvents.length===0">Möödunuid üritusi pole</span>
      </h3>
    </div>
  </div>
</template>

<script>
import AlertSuccess from "@/alerts/AlertSuccess";

export default {
  name: "AdminView",
  components: {AlertSuccess},
  data: function () {
    return {
      divDisplayConfirmed: true,
      futureEvents: [],
      pastEvents: []
    }
  },

  methods: {
    toHomePage: function () {
      this.$router.push({name: 'homeRoute'})
    },
    toChangeEvent: function () {
      this.$router.push({name: 'updateEventRoute'})
    },
    confirmEvent: function (event) {
      this.$http.patch("/admin/event/valid", {}, {
        params: {
          eventId: event.eventId
        }
      })
          .then(response => {
            console.log(response.data)
          }).catch(error => {
        console.log(error)
      })
      alert(this.successMessage = 'Üritus ' + event.eventName + ' on kinnitatud')
      this.divDisplayConfirmed = false
      location.reload()
    },
    toDeleteEvent: function (event) {
      this.$http.delete("/event/event", {
        params: {
          eventId: event.eventId,
        }
      })
          .then(response => {
            console.log(response.data)
          }).catch(error => {
        console.log(error)
      })
      alert(this.successMessage = 'Üritus kustutatud')
      location.reload()
    },
    toFutureEvents: function () {
      this.$http.get("admin/event/events")
          .then(response => {
            this.futureEvents = response.data
            console.log(response.data)
          })
          .catch(error => {
            console.log(error)
          })
    },

    toPastEvents: function () {
      this.$http.get("admin/event/past")
          .then(response => {
            this.pastEvents = response.data
            console.log(response.data)
          })
          .catch(error => {
            console.log(error)
          })
    }
  },
  mounted() {
    this.toFutureEvents()
    this.toPastEvents()
    this.successMessage = ''
  }
}
</script>

<style scoped>

</style>