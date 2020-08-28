<template>
    <div class="container container-fluid">
        <h2 class="text-center text-uppercase text-bold">Some of my projects</h2>
        <div class="columns">
            <single-project
                    v-for="project in projects"
                    :key="project.title"
                    :title="project.title"
                    :link="project.link"
                    :summary="project.summary"
                    :icons="project.icons">
                <p>
                   {{project.description}}
                </p>
            </single-project>
        </div>

        <div class="column">
            <span class=""> </span>
        </div>
        <div class="column">
            <span class=""> </span>
        </div>
        <div class="column">
            <i class=""> </i>
        </div>
        <div class="column">
            <i class=""> </i>
        </div>
    </div>


</template>

<script>
    import SingleProject from "./SingleProject";

    export default {
        name: "Projects",
        components: {SingleProject},
        data() {
            return {
                projects: [
                    {title:'Lissafi', link: 'https://app.lissafi.com', summary: 'Accounting software for small & medium businesses', description: `Building an accounting software for small and medium scale businesses, including accessibility features for people with little educational background.`, icons: ['icon-django', 'icon-vue-dot-js', 'icon-amazonaws', 'icon-mysql', 'icon-node-dot-js', 'icon-flask']},
                    {title:'Remindo', link: 'https://remindo.netlify.app', summary: 'An interactive task management software', description: 'Building an task management(todo-like) software with the power of PWA and Notification API', icons: ['icon-vue-dot-js', 'icon-couchdb-icon', 'icon-googlecloud' ]},
                    {title:'Pipersoft', link: 'https://piper.com.ng', summary: 'Bookkeeping & Inventory management software', description: 'Testing software and reports back issues and bugs to improve software performance', icons: ['icon-django', 'icon-vue-dot-js', 'icon-couchdb-icon']},
                    
                ]
            }
        }
    }
</script>

<style>
    .card {
        height: 100%;
    }
</style>