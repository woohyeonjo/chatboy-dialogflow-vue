<template>
    <div class="nnm__chatboy" v-bind:class="{ nnm__slideout: showBoy }" v-on:keyup.esc=init>
        <div class="nnm__img-box">
            <img class="nnm__mascot" @click=init :src=img_mascot>
        </div>
        <div class="nnm__container">
            <ChatBanner />
            <ChatTextArea v-on:scrollBottom="scrollBottom"/>
            <ChatTextInput />
        </div>
    </div>
</template>

<script>
    import ChatBanner from "./chatboy/ChatBanner";
    import ChatTextArea from "./chatboy/ChatTextArea";
    import ChatTextInput from "./chatboy/ChatTextInput";

    import imgMascot from '../assets/boy-64.png';

    export default {
        name: "Chatboy",
        components: {
            ChatBanner,
            ChatTextArea,
            ChatTextInput
        },
        data() {
            return {
                showBoy: false,
                img_mascot: imgMascot,

            }
        },
        props: [ 'projectName', 'accessToken', 'languageCode'],
        methods: {
            init() {
                this.showBoy = !this.showBoy;
                if (this.showBoy) this.scrollBottom();
            },
        },
        created() {
            this.$store.commit('setAccessKey', {
                project_name: this.projectName,
                access_token: this.accessToken,
                language_code: this.languageCode
            });
        }
    }
</script>
<style scoped>
.nnm__slideout {
    -webkit-transform: translateY(-400px);
    transform: translateY(-400px)
}
.nnm__chatboy {
    position: fixed;
    right: 10px;
    bottom: -390px;
    display: flex;
    justify-content: flex-end;
    align-items: end;
    flex-direction: column;
    width: 490px;
    -webkit-transition: .6s all;
    transition: .6s all;
}

.nnm__img-box {
    display: flex;
    width: 100%;
    justify-content: center;
}

.nnm__mascot {
     cursor: pointer;
 }
.nnm__container {
    width: 490px;
    height: 400px;
    background-color: white;
    border-radius: 10px;
    -webkit-box-shadow: 0px 51px 82px -21px rgba(0, 0, 0, 0.61);
    -moz-box-shadow: 0px 51px 82px -21px rgba(0, 0, 0, 0.61);
    box-shadow: 0px 51px 82px -21px rgba(0, 0, 0, 0.61);
}
</style>