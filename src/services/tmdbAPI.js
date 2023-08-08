import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'ec6aeb01072473920e275737afa70400';

//curl --request GET \
//--url https://api.themoviedb.org/3/authentication 
//--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzZhZWIwMTA3MjQ3MzkyMGUyNzU3MzdhZmE3MDQwMCIsInN1YiI6IjY0ZDI2MmFiYzNiZmZlMGYwMjg2N2NkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ak4ysbLjBJTalYzsYWQkuamX-ttKVaPC86KyFzbLchk' \
//--header 'accept: application/json'