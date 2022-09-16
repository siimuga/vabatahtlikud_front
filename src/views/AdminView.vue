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

      <table class="table table-hover">
        <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Ürituse nimi</th>
          <th scope="col">Vabatahtlike arv</th>
          <th scope="col">Registreerunute arv</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th scope="row">1</th>
          <td>sündmus</td>
          <td>arv</td>
          <td>arv</td>
          <td>
            <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toChangeEvent">
              Muuda
            </button>
            <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toConfirmEvent">
              Kinnita
            </button>
            <button type="button" style="margin: 5px" class="btn btn-danger" v-on:click="toDeleteEvent">Kustuta
            </button>
          </td>

        </tr>
        <tr>
          <th scope="row">2</th>
          <td>sündmus</td>
          <td>arv</td>
          <td>arv</td>
          <td>
            <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toChangeEvent">
              Muuda
            </button>
            <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toConfirmEvent">
              Kinnita
            </button>
            <button type="button" style="margin: 5px" class="btn btn-danger" v-on:click="toDeleteEvent">Kustuta
            </button>
          </td>
        </tr>
        </tbody>
      </table>
      <br>
      <h5 align="left" style="margin: 5px"><u><span style="color: #2c3e50">Möödunud üritused</span></u></h5>
      <table class="table table-hover">
        <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Ürituse nimi</th>
          <th scope="col">Vabatahtlike arv</th>
          <th scope="col">Registreerunute arv</th>
          <th scope="col"></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="event in pastEvents">
          <th scope="row">{{ event.id }}</th>
          <td>{{ event.eventName }}</td>
          <td>{{ event.volunteersRequired }}</td>
          <td>{{ event.volunteersAttended }}</td>
          <td>
            <button type="submit" v-on:click="deleteEvent(event)">Kustuta</button>
          </td>
        </tr>
        </tbody>
      </table>

    </div>
  </div>
</template>

<script>
export default {
  name: "AdminView",
  data: function () {
    return {
      eventId: sessionStorage.getItem('eventId'),
      eventName: sessionStorage.getItem('eventName'),
      volunteersRequired: sessionStorage.getItem('volunteersRequired'),
      volunteersAttended: sessionStorage.getItem('volunteersAttended'),
      pastEvents: [
        {
          id: 0,
          userRoleName: '',
          eventName: '',
          volunteersRequired: 0,
          volunteersAttended: 0
        }
      ]
    }
  },

  methods: {
    deleteEvent: function (event) {
      this.$http.delete("/some/path", {
        params: {
          eventId: event.id,
          eventName: event.eventName
        }
      })
          .then(response => {
            console.log(response.data)
          }).catch(error => {
        console.log(error)
      })

    },

    toHomePage: function () {
      this.$router.push({name: 'homeRoute'})
    },
    toChangeEvent: function () {

    },
    toConfirmEvent: function () {

    },
    toDeleteEvent: function () {

    },
    toPastEvents: function () {
      this.$http.get("admin/event/past")
          .then(response => {
            this.pastEvents = response.data

            console.log("OLEME SIIN")
            console.log(response.data)

          })
          .catch(error => {
            console.log(error)
          })
    },

  },
  mounted() {
    this.toPastEvents()
  }
}
</script>

<style scoped>

</style>