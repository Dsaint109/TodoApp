<template>
    <div v-if="loading" class="preloader-container">
        <div  class="progress">
            <div class="indeterminate"></div>
        </div>
    </div>

</template>

<script>
    export default {
        computed: {
            loading() {
                return this.$store.getters.loading;
            }
        }
    }
</script>

<style>

</style>