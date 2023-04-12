import axios from 'axios';
import Vue from 'vue';
import Cookie from '@/service/cookie';

axios.defaults.baseURL = 'http://api.todolist.test/api';

const token = Cookie.getToken();

axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.authorization = token;

Vue.prototype.$axios = axios;
