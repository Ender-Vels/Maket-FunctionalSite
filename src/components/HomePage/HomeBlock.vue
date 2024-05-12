<script>
import WhyUs from '../WhyUs/WhyUs.vue'
import PricingBlock from '../Pricing/PricingBlock.vue'
export default {
  components:{
    WhyUs,
    PricingBlock
  }
}
</script>

<template>
<div class="container d-flex">

  <div class="container ms-auto mb-auto mt-5">
      <nav class="nav">
          <ul class="navbar list-unstyled">
              <li><a class="nav-item ms-1 text-muted text-decoration-none link-danger fs-5" href="#"><ins>Hosting</ins></a></li>
              <li><a class="nav-item ms-1 text-muted text-decoration-none link-danger fs-5" href="#"><ins>Domain</ins></a></li>
              <li><a class="nav-item ms-1 text-muted text-decoration-none link-danger fs-5" href="#"><ins>SEO</ins> </a></li>
              <li><a class="nav-item ms-1 text-muted text-decoration-none link-danger fs-5" href="#"><ins>Email</ins></a></li>
          </ul>
      </nav>

      <div class="d-flex justify-content-between">
    <div class="col-5 d-flex flex-column  justify-content-center">
    <div class="container mt-5 ">
        <p  class="fs-1 fw-bold ">Premium Web Hosting for Your Website</p>
      <p class="text-muted fs-6 mt-5" >Blazing fast web hosting for individuals and businesses of all sizes backed by 24x7x365 Support.</p>
    </div>

      <div class=" container ms-auto mt-md-5">
        <button class="btn btn-danger">Create an Account</button>
        <button class="btn btn-light ms-3" >Choose your plan</button>
      </div>

  </div>

        <div class="container ms-5">
    <img class="ms-5 " src="../../assets/hero/photo.png" alt="img">
        </div>

  </div>
  </div>
</div>
  <WhyUs/>
  <PricingBlock/>
  <div class="container-fluid mt-5">
    <img class="container-fluid" src="../../assets/header/Background.png" alt="">
  </div>
</template>

<style>

</style>