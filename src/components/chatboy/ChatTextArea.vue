<template>
    <div class="main-text-area">
        <!-- Message component -->
    </div>
</template>

<script>
    export default {
        name: "ChatTextArea",
        methods: {
            scrollBottom(){
                const mainTextArea = document.querySelector('.main-text-area');
                mainTextArea.scrollTop = mainTextArea.scrollHeight;
            },
        }
    }
</script>

<style scoped>
.main-text-area {
    position: absolute;
    top: 67px;
    height: 253px;
    width: 100%;
    overflow-y: scroll;
}
</style>