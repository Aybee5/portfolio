<template>
  <div class="hero hero-lg bg-primary  px-2">
    <div class="hero-body text-center px-2 mx-2">
      <img src="my-pic-no-bg.webp" class="me" alt="Ibrahim Abdullahi Aliyu's Picture"/>
      <h1 class="text-bold front">Ibrahim Abdullahi Aliyu</h1>
      <p class="my-about front mb-2 pb-2">I'm creative and self-motivated software developer, an open-source hobbyist, and a great team player with experience leading and or co-leading tech communities in campus. I love working with creative and awesome people to create great softwares and solutions </p>
      <p class="text-warning text-large text-bold my-about">I'm looking for remote opportunities to join a diverse team building
        an awesome product. I'm open to fulltime, contract or freelance engagement.</p>
      <a href="https://docs.google.com/document/d/1v53a_qIHBlc4QKJeLXkkCIT_2j_qm6QFxR1Y8Hp8IbE/edit?usp=sharing"
         target="_blank"
         rel="noreferrer"
         class="btn mt-2 text-uppercase text-bold bg-dark btn-primary">Checkout my resume</a>

      <a href="mailto:ibragimabdul050@gmail.com?subject=I've a Project for you&body=Hi Ibrahim,"
         class="btn mt-2 text-bold mx-2 text-uppercase" target="_blank" rel="noopener">
        Hire Me
      </a>
      <div class="lnks">
        <a href="mailto:ibragimabdul050@gmail.com" class="text-light" rel="noopener">
          ibragimabdul050@gmail.com
        </a>
        <a href="tel:+2348139349936" class="text-light  hide-md">+234 813 934 9336</a>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "Hero",
  }
</script>

<style scoped>
  .my-about {
    max-width: 680px;
    margin: auto;
  }

  .me {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
  }

  .lnks {
    position: absolute;
    top: 0;
    right: 0;
    padding: 24px;
  }

  .lnks a {
    padding: 16px;
  }

  .front {
    z-index: 20;
  }

  .hero {
    position: relative;
  }

  @media (min-width: 1146px) {
    .hero-body {
      margin-left: 256px !important;
    }
  }

  @media (min-width: 800px) {
    .hero-body {
      margin-left: 400px !important;
    }
  }

  @media (max-width: 800px) {
    .hero-body img {
      display: none;
    }
  }

</style>
