import axios from 'axios';

const TestAxios = () => {
  const baseURL = 'https://jsonplaceholder.typicode.com/posts/1';
  axios
    .get(baseURL)
    .then((res) => {
      console.log(res.status);
      console.log(res.data);
      return res.data;
    })
    .then((data) => {
      const dataType = Object.prototype.toString.call(data);
      console.log(dataType);
    });
};

export default TestAxios;
