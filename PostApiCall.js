//var urlString = 'https://api.beatmysugar.com/BackofficeApi/';
var urlString = 'http://localhost:5000/';

const PostApiCall = {
  postRequest(userData, url) {
    return fetch(urlString + url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        // console.log(response)
        return response;
      })
      .catch((error) => {
        console.log('request failed', error);
        return error;
      });
  },
};

export default PostApiCall;
