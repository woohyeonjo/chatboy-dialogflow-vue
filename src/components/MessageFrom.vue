<template>
    <div class="message from">
        <p>{{msg}}</p>
    </div>
</template>

<script>
    export default {
        name: "MessageFrom",
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