<template>
    <div class="container container-fluid">
        <h2 class="text-bold text-uppercase text-center">Education</h2>
        <div class="timeline p-2">
            <single :latest="true" company="Bayero University" role="B. Sc., Computer Science"
                    dates="November, 2016 - July, 2021">
                <ul>
                    <li>
                        Recipient of "Most Dedicated Student" Award.
                    </li>
                    <li>
                        Graduand with a 4.34 CGPA.
                    </li>

                </ul>
            </single>
        </div>
    </div>

</template>

<script>
    import Single from "./Single";

    export default {
        name: "Education",
        components: {Single}
    }
</script>

<style scoped>

</style>