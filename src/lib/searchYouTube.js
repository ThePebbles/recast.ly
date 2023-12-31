
import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';


$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {

  // TODO
  //https://app-hrsei-api.herokuapp.com/api/recastly/videos

  $.ajax({
    url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos?q=' + query,
    type: 'GET', //send it through get method
    contentType: 'application/json; charset=utf-8',
    success: (data) => {
      callback(data);
    },
    error: (status) => {
      console.error('recast.ly: could not search');
    }
  });


  // var data = {q: query};

  // $.get('https://app-hrsei-api.herokuapp.com/api/recastly/videos', data, callback);



};




// console.log(searchYouTube());



export default searchYouTube;
