<template>
    <div class="message to">
        <p>{{msg}}</p>
    </div>
</template>

<script>
    export default {
        name: "MessageTo",
        props: ['message'],
        data() {
            return {
                msg: this.message,
            }
        }
    }
</script>

<style scoped>

</style>