import axios from "axios";


export const fetchImg = async (query, page = 1) => {
    const response = await axios.get(`https://pixabay.com/api/?q=${query}&page=${page}&key=14239803-1525d40278084147650a3f538&image_type=photo&orientation=horizontal&per_page=12`);
    console.log(response.data)
    return response.data;
  };
  console.log(fetchImg())






// axios.defaults.baseURL = "https://pixabay.com/api";
// axios.defaults.headers.common['key'] =
// '14239803-1525d40278084147650a3f538';


// // https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
// // https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12

// export const fetchImg = async searchQuery => {
//   const response = axios.get(`/?q=cat&page=1&key=14239803-1525d40278084147650a3f538&image_type=photo&orientation=horizontal&per_page=12`);
//   return response.data.hits;
// };




















// // // const API_KEY = "14239803-1525d40278084147650a3f538";
// // // const BASEURL = "https://pixabay.com/api/";



// // import React, { Component } from "react";
// // import axios from "axios";

// // axios.defaults.baseURL = "https://pixabay.com/api/";
// // // axios.defaults.headers.common['x-api-key'] =
// // // '14239803-1525d40278084147650a3f538';

// // // export const fetchImg = async () => {
// // //   const response = await axios.get('/breeds');
// // //   console.log(response.data)
// // //   return response.data;

// // // };



// // // import axios from 'axios';

// // axios.defaults.baseURL = 'https://api.thedogapi.com/v1';
// // axios.defaults.headers.common['x-api-key'] =
// //   'live_NwvpvYwRpl5OnS2uqOCBBnLgtjvdaSmzFfLn1jguXPtgoDLCbGJxoeZhti9ZCSvm';

// // export const fetchBreeds = async () => {
// //   const response = await axios.get('/breeds');
// //   console.log(response.data)
// //   return response.data;
// // };

// // // export const fetchDogByBreed = async breedId => {
// // //   const response = await axios.get('/images/search', {
// // //     params: {
// // //       breed_id: breedId,
// // //     },
// // //   });
// // //   return response.data[0];
// // // };


