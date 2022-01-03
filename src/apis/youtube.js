import axios from 'axios';

const KEY = 'AIzaSyAnpDLQ-uFjOwdhBWEnA5VcvaZ-WymrWF0';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    key: KEY,
    type: 'video',
    maxResults: 5,
  },
});
