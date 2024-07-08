// src/services/auth.js
const axios = require("axios");

export function mockLogin(username, password, success = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!success) {
        reject({ status: 409, response: { data: { message: "Username or password are incorrect", success: false } } });
      } else {
        resolve({ status: 200, response: { data: { message: "Login succeeded", success: true } } });
      }
    }, 500); // Simulate a delay
  });
}

export async function Register1(user_details) {
  console.log(user_details.username);
  return await axios.post(`http://localhost:3000/api/Register`, {
    user_name: user_details.username,
    first_name: user_details.firstName,
    last_name: user_details.lastName,
    country: user_details.country,
    password: user_details.password,
    email: user_details.email,
  });}

  export function mockLogout() {
    return { status: 200, response: { data: { message: "logout succeeded", success: true}} };

  }
  

