<script>

</script>

<template>
<div class="container mt-3">
    <nav class="navbar navbar-expand-lg col-9 row-cols-2">
      <div class="container">
        <RouterLink class="text-decoration-none" to="/"><img src="../../assets/header/Rectangle%203.png" alt="logo"><span class="fs-5 mt-auto ms-5 align-middle text-dark fs-5">Our Services</span></RouterLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse ms-auto mt-auto m-lg-auto mb-auto  " id="navbarNav" >
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink to="/" class="nav-link fs-5">About </RouterLink>
            </li>
            <li class="nav-item">
            <RouterLink to="/" class="nav-link fs-5">Blog&News </RouterLink>
          </li>
            <li class="nav-item">
              <RouterLink to="/" class="nav-link fs-5">Contact </RouterLink>
            </li>
          </ul>
      </div>

      <div class="collapse navbar-collapse ms-auto mt-auto  mb-auto  " id="navbarNav" >
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link fs-5">Account </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/" class="nav-link fs-5  ">
              <img src="../../assets/header/phone.png" alt="phone">
              +2349067322844
            </RouterLink>
          </li>
        </ul>
      </div>
    </nav>
</div>
</template>

<style>

</style>