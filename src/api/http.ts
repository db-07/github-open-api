import { API_URL, BASE64_KEY } from '@/config';
import { Axios } from './axios';

// github开放接口网络实例
export const github = new Axios({
  headers: {
    Accept: ' application/vnd.github+json',
    Authorization: `Bearer ${atob(BASE64_KEY)}`
  }
})