const mutations = {
    detectIntentAPI() {
        return new Promise((resolve, reject) => {
            axios
                .post(`${this.detectIntentURL}${this.projectID}/agent/sessions/${this.sessionID}:detectIntent`, {
                        query_input: {
                            text: {
                                text: /* 원본 텍스트 */'',
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
    }
}