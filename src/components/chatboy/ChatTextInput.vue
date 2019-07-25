<template>
    <div class="input-bar">
        <div class="input-bar-inner">
            <input class="input-text" v-on:keyup.enter="sendChat" v-model="inputText"
                   placeholder="Message" autocomplete="off" />
            <h6 @click="sendChat">Send</h6>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ChatTextInput",
        data () {
            return {
                inputText: '',
            }
        },
        methods: {
            clearInput() {
                this.inputText = '';
            },
            sendChat() {
                if(inputText === '') return;
                 //TODO: 뮤테이션 호출

                clearInput();
            }
        }
    }
</script>

<style scoped>
.input-bar {
    position: absolute;
    bottom: 0;
    height: 80px;
    width: 100%;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: #F1F1F1;
}
.input-bar-inner {
    margin: 15px;
    height: 49px;
    border-radius: 7px;
    background-color: white;
}
.input-bar-inner h6 {
    float: right;
    font-size: 20px;
    margin-top: 14px;
    margin-right: 27px;
    color: #827DCF;
    font-weight: 400;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
}
.input-bar-inner h6{
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
}
.input-bar-inner h6:hover{
    opacity: 0.3;
    cursor: pointer;
}
.input-text {
    font-size: 17px;
    text-align: center;
    margin-left: 10px;
    margin-top: 14px;
    width: 300px;
    font-family: inherit;
    font-weight: 400;
    border: none;
    border-right: solid 2px #F1F1F1;
}
.input-text:focus {
    outline: none;
}
</style>