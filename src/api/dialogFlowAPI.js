import axios from 'axios';

const ACCESS_TOKEN =
    "Bearer " +
    "";

export const dialogFlow = {
    detectIntent(question) {
        return new Promise((resolve, reject) => {
            axios
                .post('https://dialogflow.googleapis.com/v2/projects/ssafy-house/agent/sessions/123456789:detectIntent', {
                        query_input: {
                            text: {
                                text: question,
                                language_code: "ko"
                            }
                        }
                    },
                    {
                        headers: {
                            Authorization: ACCESS_TOKEN,
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
};