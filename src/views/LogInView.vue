<template>
  <div>
    <div class="container-xxl">
      <div class="row">
        <div class="col-xl">
          <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toHomePage">Esilehele
          </button>
          <br>
          <br>
        </div>
        <div class="row row-cols-2">
          <div class="col">
            <h3><span style="color: #2c3e50">Logi sisse</span></h3>
            <AlertError :errorMessage="errorMessage2"/>
            <input type="text" style="margin: 5px" placeholder="kasutajanimi" v-model="loginRequest.username"><br>
            <input type="password" style="margin: 5px" placeholder="parool" v-model="loginRequest.password"><br>
            <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="logIn">Logi sisse
            </button>
            <br>
          </div>
          <div class="col">
            <h3><span style="color: #2c3e50">Loo uus konto</span></h3>
            <AlertError :errorMessage="errorMessage"/>
            <table class="table table-hover">
              <tbody>
              <tr>
                <th>Kasutajanimi</th>
                <td>
                  <input type="text" placeholder="Kasutajanimi" v-model="newUserRequest.username">
                </td>
              </tr>
              <tr>
                <th>Parool</th>
                <td><input type="password" placeholder="Parool" v-model="newUserRequest.password"><br></td>
              </tr>
              <tr>
                <th>Eesnimi</th>
                <td><input type="text" placeholder="Eesnimi" v-model="newUserRequest.firstName"><br></td>
              </tr>
              <tr>
                <th>Perekonnanimi</th>
                <td><input type="text" placeholder="Perekonnanimi" v-model="newUserRequest.lastName"></td>
              </tr>
              <tr>
                <th>Email</th>
                <td><input type="text" placeholder="Meiliaadress" v-model="newUserRequest.email"></td>
              </tr>

              <tr>
                <th>Sugu</th>
                <div class="form-check" style="text-align: left">
                  <input class="form-check-input"
                         type="radio"
                         v-model="newUserRequest.sex"
                         name="sex"
                         id="M"
                         value="M">
                  <label class="form-check-label" for="M">
                    Mees
                  </label>
                </div>
                <div class="form-check" style="text-align: left">
                  <input class="form-check-input"
                         type="radio"
                         v-model="newUserRequest.sex"
                         name="sex"
                         id="N"
                         value="N">
                  <label class="form-check-label" for="N">
                    Naine
                  </label>
                </div>
              </tr>

              <tr>
                <th>Vanus</th>
                <div class="form-check" style="text-align: left">
                  <input class="form-check-input"
                         type="radio"
                         v-model="newUserRequest.age"
                         name="age"
                         id="adult"
                         value='adult'>
                  <label class="form-check-label" for="adult">
                    Täisealine
                  </label>
                </div>
                <div class="form-check" style="text-align: left">
                  <input class="form-check-input"
                         type="radio"
                         v-model="newUserRequest.age"
                         name="age"
                         id="notAdult"
                         value='notAdult'>
                  <label class="form-check-label" for="notAdult">
                    Alla 18a
                  </label>
                </div>
              </tr>
              </tbody>
            </table>
            <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="registerNewUser">Loo
              konto
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AlertSuccess from "@/alerts/AlertSuccess";
import AlertError from "@/alerts/AlertError";
import AdminView from "@/views/AdminView";

export default {
  name: "LogInView",
  components: {AlertSuccess, AlertError, AdminView},

  data: function () {
    return {
      example: 'Mari',
      loginRequest: {
        username: '',
        password: '',
      },
      loginResponse: {
        userId: null,
        role: '',
        contactId: null,
        status: null
      },
      newUserRequest: {
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        sex: '',
        age: '',
        email: ''
      },
      successMessage: '',
      errorMessage: '',
      errorMessage2: '',
      errorMessage3: ''
    }
  },
  methods: {
    toHomePage: function () {
      this.$router.push({name: 'homeRoute'})
      location.reload()
    },
    registerNewUser: function () {
      if (this.newUserRequest.age === 'adult') {
        this.$http.post("/register/user", this.newUserRequest
        ).then(response => {
          alert(this.successMessage = 'Konto loodud')
          this.newUserRequest.userId = response.data.userId
          sessionStorage.setItem('userId', this.loginResponse.userId)
          this.$router.push({name: 'homeRoute'})
        }).catch(error => {
          this.errorMessage = error.response.data.detail
        })
      } else {
        alert(this.errorMessage3 = 'Konto loomiseks peab olema täisealine!')
      }
    },
    logIn: function () {
      this.$http.post("/log-in", this.loginRequest
      ).then(response => {
        this.loginResponse = response.data
        if (this.loginResponse.role === 'admin') {
          this.$router.push({name: 'adminRoute'})
          sessionStorage.setItem('userId', this.loginResponse.userId)
        } else {
          this.$router.push({name: 'homeRoute'})
          sessionStorage.setItem('userId', this.loginResponse.userId)
        }
      }).catch(error => {
        this.errorMessage2 = error.response.data.detail
      })
    }
  }
}
</script>

<style scoped>

</style>