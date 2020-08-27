<template>
  <div class="container container-fluid">
    <h2 class="text-bold text-uppercase text-center">Some of the things I've done</h2>
    <div class="timeline p-2">
      <single
        :latest="true"
        company="Hooli Technologies Nigeria Limited"
        role="Software Developer"
        dates="December, 2019 - Present"
      >
        As a Software Developer, I:
        <ul>
          <li>Exteneded SaaS PWA functionality to enable working offline which in turn improved software security and UX.</li>
          <li>Worked on product re-enginnering of an existing system there by increasing features delivery by 27%.</li>
          <li>Wrote internal documentation, which increases developers productivity.</li>
        </ul>
      </single>

      <single
        company="Hooli Consults"
        role="Intern"
        dates="April, 2019 - December, 2019"
      >
        As an intern, I:
        <ul>
          <li>
            Collaborated with other developers and product managers to implement a REST-API for an application
          </li>
          <li>Delivered customer support and trained new clients of company</li>
        </ul>
      </single>
      <a
        class="btn btn-primary"
        href="https://drive.google.com/file/d/1CZUfch57hSJ6XewEa-5dTYAWiPO9AoXj/view?usp=sharing"
        target="_blank"
      >Complete Resume</a>
    </div>
  </div>
</template>

<script>
import Single from "./Single";

export default {
  name: "Timeline",
  components: { Single }
};
</script>

<style scoped>
</style>