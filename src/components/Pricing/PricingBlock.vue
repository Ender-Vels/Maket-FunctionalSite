<script>
  import DB from '../../DB/db.js'
  export default {
    data(){
      return{
        db:DB
      }
    }
  }
</script>

<template>
  <div class="container-lg ">
    <div class="container-lg text-center">
      <div>
          <h1 class="mt-3">Ready to get started with
            Lemon Wares?</h1>
          <h5 class="m-5">Choose the package that suits you</h5>
      </div>
    </div>


    <div>
    <div class="container-lg d-flex justify-content-center">
      <div class=" d-flex text-center justify-content-center align-middle col-3 ms-5">
        <div class="">
          <span class="fw-bold fs-2" >Monthly</span>
        </div>
        <div class="form-switch ms-2 fs-1">
          <input class="form-check-input bg-danger" type="checkbox">
        </div>

        <div class="col-2">
          <span class="fw-bold fs-2" >Yearly</span>
        </div>
        <div class="mt-2 ms-5 p-2 col-6">
          <span class="bg-warning  p-1 rounded-pill p-2 ">20%  discount</span>
        </div>
      </div>
      </div>
      
      <div class="mt-5 fs-2 d-flex justify-content-center text-center ">
        <div class="col-5 mx-2 " >
        <a class="m-5 text-black fw-bold text-decoration-none link-danger" href="#">Basic</a>
          <hr class="">
        </div>
        <div class="col-5">
        <a class="m-5 text-black fw-bold text-decoration-none link-danger" href="#">Premium</a>
          <hr>
        </div>
      </div>
      
    </div>

      <div class="container-fluid d-flex align-middle justify-content-center row"  >
        <div class=" col ms-5 mx-5 col mt-3"  v-for="data in db" :key="data.id">
          <div class="card rounded p-1">
            <div class="p-2">
              <h1>{{data.name}}</h1>
              <p>{{data.title}}</p>
              <h1>{{data.price}}</h1><span>per Month</span>
              <div class="text-center mt-4">
                <button class="btn btn-outline-dark p4 ps-5 px-5 fw-bold ">Choose this Plan</button>
              </div>
            </div>
            <div class="card-body" v-for="setting in data.setting" :key="setting">
              <div>
                <i class="bi bi-check2"></i> <span>{{setting}}</span>
              </div>
            </div>


          </div>

        </div>
      </div>


  </div>
</template>

<style>

</style>