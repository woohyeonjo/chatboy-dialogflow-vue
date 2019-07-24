<template>
    <div class="chatbot" v-bind:class="{ slideout: isActive }">
        <img class="boy" @click="isActive = !isActive" src="../assets/boy-64.png">
        <div class="card">
            <div class="banner">
                <h1>Chat Boy</h1>
            </div>ㅇ
            <div class="main-text-area">
                <div class="time-stamp"><b>Thursday</b> 6:34 pm</div>
<!--                <div class="message from">-->
<!--                    <p>Hei. Can we meet later this week?</p>-->
<!--                </div>-->
<!--                <div class="message to">-->
<!--                    <p>Sure thing. Friday, 4pm, same place?</p>-->
<!--                </div>-->
<!--                <div class="delivered">Delivered</div>-->
                <component v-for="message in messages" :is="message" :message='text'></component>
            </div>
            <div class="input-bar">
                <div class="input-bar-inner">
                    <input class="input-text" @keyup.enter="ask" v-model="text"
                           value="" placeholder="Message" autocomplete="off" />
                    <h6 @click="ask">Send</h6>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import MessageTo from './MessageTo.vue';
    import MessageFrom from './MessageFrom.vue';

    export default {
        name: "chatbot",
        components: {
            MessageTo,
            MessageFrom,
        },
        data() {
            return {
                isActive: false,
                detectIntentAPI: 'https://dialogflow.googleapis.com/v2/projects/',
                projectID: '',
                sessionID: '',
                authorization: '',
                text: [],
                messages: [],
            }
        },
        methods: {
            scrollBottom(){
                const mainTextArea = document.querySelector('.main-text-area');
                mainTextArea.scrollTop = mainTextArea.scrollHeight;
            },
            clearText(){
                const inputText = document.querySelector('.input-text');
                inputText.value = '';
            },
            async ask() {
                // TODO: 한글 타이핑시 두 번 올라감
                // TODO: 모바일 화면에서 chatboy가 화면을 가린다.
                this.messages.push(MessageTo);
                // this.message = await this.callAPI();
                // this.messages.push(MessageFrom);
                setTimeout(() => {
                    this.clearText();
                    this.scrollBottom();
                }, 0);
            },
            callAPI() {
                return new Promise((resolve, reject) => {
                    axios
                        .post(`${this.detectIntentAPI}${this.projectID}/agent/sessions/${this.sessionID}:detectIntent`, {
                            query_input: {
                                    text: {
                                        text: this.text,
                                        language_code: "ko"
                                    }
                                }
                        },
                        {
                            headers: {
                                Authorization: this.authorization
                            }
                        })
                        .then( response => {
                            resolve(response.data.queryResult.fulfillmentText);
                        })
                        .catch( error => {
                            reject(error);
                        })
                });
            },
        }
    }
</script>

<style scoped>
.chatbot, .boy {
    -webkit-transition: .6s all;
    transition: .6s all;
}
.slideout {
    -webkit-transform: translateY(-410px);
    transform: translateY(-410px)
}
.chatbot {
    position: fixed;
    right: 15px;
    bottom: -395px;
    width: 490px;
    height: 464px;
}
.boy {
    cursor: pointer;
    display: block;
    margin: auto;
}
.card {
    position: relative;
    width: 490px;
    height: 400px;
    background-color: white;
    border-radius: 10px;
    -webkit-box-shadow: 0px 51px 82px -21px rgba(0, 0, 0, 0.61);
    -moz-box-shadow: 0px 51px 82px -21px rgba(0, 0, 0, 0.61);
    box-shadow: 0px 51px 82px -21px rgba(0, 0, 0, 0.61);
}
.banner {
    position: absolute;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    height: 67px;
    width: 100%;
    background-color: #827DCF;
    font-family: 'Quicksand', sans-serif;
}
.banner h1 {
    color: white;
    font-size: 25px;
    margin-top: 17.5px;
    font-weight: bold;
}
.main-text-area {
    position: absolute;
    top: 67px;
    height: 253px;
    width: 100%;
    overflow-y: scroll;
}
.time-stamp {
    position: relative;
    width: 100%;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 19px;
    font-size: 12px;
    font-weight: normal;
    color: #7C7C7C;
}
.delivered {
    float: right;
    display: block;
    clear: both;
    color: #d3d3d3;
    font-weight: 400;
    margin-right: 26px;
    margin-top: 9px;
    font-size: 14px;
}
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