<template>
<!--  <div>-->
<!--    <br>-->
<!--    <h2><span style="color: #2c3e50">Minu konto</span></h2>-->
<!--    <br>-->
<!--    <div>-->
<!--    <tr>-->
<!--      <h2><span style="color: #2c3e50">Profiil</span></h2>-->

<!--      <td>-->
<!--        <h2><span style="color: #2c3e50">Üritused</span></h2>-->
<!--        <br>-->
<!--        <h2><span style="color: #2c3e50">Möödunud üritused</span></h2>-->
<!--      </td>-->
<!--      </tr>-->
<!--  </div>-->
<!--  </div>-->

<div>
  <div class="container">
    <div class="row">
      <div class="col-sm">
        Esilehele
      </div>
      <div class="col-sm">
        <h2><span style="color: #2c3e50">Minu konto</span></h2>
      </div>
      <div class="col-sm">
        <button type="button" style="margin: 5px" class="btn-outline-primary" v-on:click="toLogInPage">Sisene</button>
        <button type="button" style="margin: 5px" class="btn-outline-primary" v-on:click="toLogInPage">Loo konto</button>
      </div>
    </div>
  </div>

</div>



</template>

<script>
export default {
  name: "AccountView"
}
</script>

<style scoped>

</style>