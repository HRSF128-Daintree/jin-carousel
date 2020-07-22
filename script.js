
import http from 'k6/http';
import { check, group, sleep } from 'k6';

export const options = {
  stages: [
    { target: 10, duration: '1m' },
    { target: 100, duration: '1m' },
    { target: 500, duration: '1m' },
    { target: 1500, duration: '1m' },
    { target: 2000, duration: '1m' },
  ],
};

export default function() {
  const hotelId = Math.floor(Math.random() * 1499999);
  const res = http.get(`http://localhost:3002/api/${hotelId}/hotelphotos`);
  check(res, {
    "status was 200": (r) => r.status == 200
  });
  sleep(1);
}