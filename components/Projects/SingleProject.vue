<template>
    <div class="column col my-2">
        <div class="card">

            <div class="card-header">
                <div class="card-title h5">
                    {{title}}
                    <a :href="link" class="icon-share" v-if="link" target="_blank" rel="noopener"></a>
                    <span id="oss" v-if="oss">OSS Contribution</span>
                </div>
                <small class="card-subtitle text-gray">{{ summary }}</small>
            </div>
            <div class="card-body">
                <slot></slot>
            </div>
            <div class="card-footer">
                <div class="columns text-center">
                    <div class="column" v-for="icon in icons" :key="icon">
                        <span :class="icon"> </span>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SingleProject",
        props: ['icons', 'title', 'summary', 'link', 'oss']
    }
</script>

<style>
    .col {
        min-width: 340px;
    }
    #oss {
        background-color: #5755d9;
        font-size: 15px !important;
        margin: 6px;
        color: white;
        padding: 2px;
    }
</style>
