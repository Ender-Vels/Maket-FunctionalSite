<script>
export default {
  data(){
    return{
      dataImg:[
        {
          id:1,
          img:require('../../assets/WhyUs/card/1.png'),
          title:'99.9% Uptime',
          description:'We Keep Your Web build Online 24x7x365.\n' +
              'Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.'
        },
        {
          id:2,
          img: require('../../assets/WhyUs/card/2.png'),
          title:'Blazing Fast Web Hosting',
          description: 'We Keep Your Web build Online 24x7x365.\n' +
              'Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.',
        },
        {
          id:3,
          img: require('../../assets/WhyUs/card/3.png'),
          title:'Free SSL Certificates',
          description: 'We Keep Your Web build Online 24x7x365.\n' +
              'Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.',

        },
        {
          id:4,
          img: require('../../assets/WhyUs/card/4.png'),
          title: '24x7 Friendly Support',
          description: 'We Keep Your Web build Online 24x7x365.\n' +
              'Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.',
        },

      ],
      height:100,
      width:100
    }
  }
}
</script>

<template>
<div id="about" class="container mt-5 d-flex ">

  <div class="row">
    <div class="col-5">
        <h1>True Cloud Web  Hosting</h1>
      <p>
        True Cloud Web Hosting All of the hosting packages
        we offer are deployed instantly on our SSD powered cloud.
        We don’t use dedicated servers that operate on single pieces of hardware.
        Our entire infrastructure is built to be reliable, secure, and scalable.
      </p>
    </div>

    <div class="col-7">
      <div class="row">
        <img class="col-3 ms-4" src="../../assets/WhyUs/1.png" alt="">
        <img class="col-3 ms-4" src="../../assets/WhyUs/2.png" alt="">
        <img class="col-3 ms-4" src="../../assets/WhyUs/3.png" alt="">
      </div>
      <div class="row">
        <img class="col-3 ms-4 mt-4" src="../../assets/WhyUs/4.png" alt="">
        <img class="col-3 ms-4  mt-4" src="../../assets/WhyUs/5.png" alt="">
        <img class="col-3 ms-4  mt-2" src="../../assets/WhyUs/6.png" alt="">
      </div>

    </div>

      <div  class="d-flex mt-5 justify-content-center text-center row ">
      <div class="container col" v-for="data in dataImg" :key="data.id">
        <div class="card mt-5">
          <div class="container d-flex justify-content-center mt-5">
          <img class="" :src="data.img" :height="height" :width="width" alt="img">
          </div>
          <div class="card-body">
            <h2>{{data.title}}</h2>
            <p>
              {{data.description}}
            </p>
          </div>
        </div>
      </div>
      </div>



  </div>



</div>
</template>

<style>
@import '../../style/WhyUs/WhyUs.css';
</style>