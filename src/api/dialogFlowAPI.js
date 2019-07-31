import axios from 'axios';

const ACCESS_DOMAIN = "https://dialogflow.googleapis.com/v2/projects/";
const ACCESS_SESSIONS = "/agent/sessions/123456789:detectIntent";
const ACCESS_TOKEN_PREFIX = "Bearer ";

export const dialogFlow = {
    detectIntent(ACCESS_INFO, question) {
        const ACCESS_PROJECT_NAME = ACCESS_INFO.project_name;
        const ACCESS_TOKEN = ACCESS_INFO.access_token;
        const LANGUAGE_CODE = ACCESS_INFO.language_code;
        const ACCESS_URL = ACCESS_DOMAIN + ACCESS_PROJECT_NAME + ACCESS_SESSIONS;

        return new Promise((resolve, reject) => {
            axios
                .post(ACCESS_URL, {
                        query_input: {
                            text: {
                                text: question,
                                language_code: LANGUAGE_CODE
                            }
                        }
                    },
                    {
                        headers: {
                            Authorization: ACCESS_TOKEN_PREFIX + ACCESS_TOKEN,
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