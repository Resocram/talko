import axios from 'axios';

const SERVER_ENDPOINT = 'https://cors-anywhere.herokuapp.com/http://talko-301223.wl.r.appspot.com/api';

/**
 * Get speech audio analysis result back from backend service.
 * 
 * @return {Promise<any>}
 */
const analyzeAudio = (audioBlob) => {
    return new Promise((resolve, reject) => {

        // Send audio file in FormData format then embed it inside of request body
        let formData = new FormData();
        let textBlob = new Blob(["string"], { type: "text/xml" });

        formData.append('audio', audioBlob.blob);
        formData.append('text', textBlob);

        // Send a POST request to backend server to get audio analysis result
        axios
            .post(SERVER_ENDPOINT, formData, { timeout: 300000 })
            .then(res => {
                // Check status code: Only status code 202 from server indicates a valid result
                if (res.status !== 202)
                    reject(`analyzeAudio::error - Server returns invalid status code ${res.status}`)
                else
                    resolve(res.data);
            })
            .catch(err => reject(`analyzeAudio::error - ${JSON.stringify(err)}`));

    });
};

export default analyzeAudio;