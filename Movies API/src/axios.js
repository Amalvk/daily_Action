import React, {useState, useCallback} from 'react';
import axios from 'axios';

const accessToken= 'Wookie2019';
const apiUrl = 'https://wookie.codesubmit.io/movies';

const authAxios = axios.create({
  baseURL : apiUrl,
  headers : {
    Authorization : `Bearer ${accessToken}`,
  },
});



  


export default Axios;