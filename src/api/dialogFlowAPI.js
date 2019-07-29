import axios from 'axios';

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
                            Authorization: 'Bearer ya29.c.ElpUB3MlKnBXIoCoMsszmPcYuX849PybSgOzdx8O9n5IacL_LY_50luK-o69C642sjQJ_SUcxkh0glw6mytx7c2HhZjxM3p4q3cRACgSkd14v53svXSZXbK4rPs'
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