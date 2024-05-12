<script>

</script>

<template>
<div class="container mt-3">
    <nav class="navbar navbar-expand-lg  row">
      <div class="container d-inline-flex col-5">
        <RouterLink class="text-decoration-none navbar-brand row" to="/"><img class="col" src="../../assets/header/Rectangle%203.png" alt="logo"><span class="fs-5 mt-5 ms-5 align-middle text-dark fs-5 col">Our Services</span></RouterLink>


        <div class="">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        </div>

      </div>


      <div class="collapse navbar-collapse ms-auto mt-5   col-4" id="navbarNav" >
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink :to="{hash:'# about'}" class="nav-link fs-5">About </RouterLink>
            </li>
            <li class="nav-item">
            <RouterLink to="/" class="nav-link fs-5">Blog&News </RouterLink>
          </li>
            <li class="nav-item">
              <RouterLink to="/" class="nav-link fs-5">Contact </RouterLink>
            </li>

          </ul>
      </div>
      <div class=" navbar-collapse mt-5" id="navbarNav" >
        <ul class="navbar-nav mt-2">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link fs-5">Account </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/" class="d-flex nav-link fs-5 " >
              <img  src="../../assets/header/phone.png"  alt="phone">
              <p class="">+2349067322844</p>
            </RouterLink>

          </li>
        </ul>
      </div>
    </nav>
</div>
</template>

<style>

</style>