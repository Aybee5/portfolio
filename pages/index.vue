<template>
  <div class="container">
    <hero/>
    <links title="Some of the things i know" :links="techs"/>
    <timeline/>
    <links title="Click your favorite medium to reach me below" :links="contacts"/>
    <education/>
    <!-- <references/> -->
    <projects/>
    <links title="What I do in my spare time" :links="hobbies"/>
  </div>
</template>

<script>
  import Logo from '~/components/Logo.vue'
  import Hero from "~/components/Hero.vue";
  import Links from "~/components/Links/index.vue";
  import Timeline from "~/components/Timeline/index.vue";
  import Education from "~/components/Education/index.vue";
  // import References from "~/components/References/index.vue";
  import Projects from "~/components/Projects/index.vue";

  export default {
    components: {
      Projects,
      // References,
      Education,
      Timeline,
      Links,
      Hero,
      Logo
    },
    data() {
      return {
        techs: [
          {
            icon: 'icon-python',
            text: 'Python'
          },
          {
            icon: 'icon-django',
            text: 'Django'
          },
          {
            icon: 'icon-javascript',
            text: 'Javascript'
          },
          {
            icon: 'icon-html5',
            text: 'HTML'
          },
          {
            icon: 'icon-css3',
            text: 'CSS'
          },
          {
            icon: 'icon-bootstrap',
            text: 'Bootstrap'
          },
          // {
          //   icon: 'icon-flask',
          //   text: 'Flask'
          // },
          {
            icon: 'icon-vue-dot-js',
            text: 'Vue JS'
          },
          // {
          //   icon: 'icon-amazonaws',
          //   text: 'AWS'
          // },
          {
            icon: 'icon-git',
            text: 'GIT'
          },
          // {
          //   icon: 'icon-googlecloud',
          //   text: 'GCP'
          // },
          // {
          //   icon: 'icon-java',
          //   text: 'Java'
          // },
          // {
          //   icon: 'icon-c',
          //   text: 'C/C++'
          // },
          // {
          //   icon: 'icon-docker',
          //   text: 'Docker'
          // },
          {
            icon: 'icon-jira',
            text: 'Jira'
          }
        ],
        hobbies: [
          {
            icon: 'icon-audible',
            text: 'Books'
          },
          {
            icon: 'icon-netflix',
            text: 'Movies'
          },
          // {
          //   icon: 'icon-hashnode',
          //   text: 'Blog',
          //   target: ''
          // },
          {
            icon: 'icon-udemy',
            text: 'Learning'
          },
          // {
          //   icon: 'icon-ycombinator',
          //   text: 'Startup School'
          // },
          // {
          //   icon: 'icon-stackoverflow',
          //   text: 'Support others'
          // }
        ],
        contacts: [
          {
            icon: 'icon-gmail',
            text: 'Email',
            target: 'mailto:ibrahimabdul050@gmail.com?body=Hi Ibrahim, '
          },
          {
            icon: 'icon-twitter',
            text: 'Twitter',
            target: 'https://twitter.com/_Aybee05'
          },
          {
            icon: 'icon-linkedin',
            text: 'LinkedIn',
            target: 'https://linkedin.com/in/ibrahim-abdullahi-aliyu'
          },
          {
            icon: 'icon-github',
            text: 'Github',
            target: 'https://github.com/aybee5'
          },
          // {
          //   icon: 'icon-dev-dot-to',
          //   text: 'DEV',
          //   target: 'https://medium.com/@_amustapha'
          // },
        ]
      }
    }
  }
</script>
<style>

  .container {
    padding: 0
  }

  .container-fluid {
    max-width: 1333px;
    display: block;
    margin-top: 64px;
    padding: 1em;
    margin-bottom: 32px;
  }
</style>

