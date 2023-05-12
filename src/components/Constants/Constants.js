// const API_KEY = "14239803-1525d40278084147650a3f538";
// const BASEURL = "https://pixabay.com/api/";

// const query = "cat"



// const aqw = `  ${BASEURL}?q=${query}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`

// console.log(aqw)



// fetch(aqw)
//   .then(response => response.json())
//   .then(data => console.log(data));

import React, { Component } from "react";
import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api/";


