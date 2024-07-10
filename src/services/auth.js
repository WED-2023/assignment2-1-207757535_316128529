const axios = require("axios");


// Function to handle login
export async function Login(username, password) {
  try {
    const response = await axios.post("http://localhost:3000/api/Login", {
      user_name: username,
      password: password,
    });
    return response;
  } catch (error) {
    // Handle error response from server
    if (error.response) {
      return { status: error.response.status, message: error.response.data.message, success: error.response.data.success };
    } else {
      return { status: 500, message: "Server error", success: false };
    }
  }
}

// Function to handle register
export async function Register(user_details) {
  try {
    const response = await axios.post("http://localhost:3000/api/Register", {
      user_name: user_details.username,
      first_name: user_details.firstName,
      last_name: user_details.lastName,
      country: user_details.country,
      password: user_details.password,
      email: user_details.email,
    });
    // Check response from server
    if (response.status === 201 && response.data.success) {
      return { status: response.status, message: response.data.message, success: response.data.success };
    } else {
      throw { status: response.status, message: response.data.message, success: response.data.success };
    }
  } catch (error) {
    // Handle error response from server
    if (error.response) {
      return { status: error.response.status, message: error.response.data.message, success: error.response.data.success };
    } else {
      return { status: 500, message: "Server error", success: false };
    }
  }
}

// Function to handle logout
export function Logout() {
  try {
    const response = axios.post("http://localhost:3000/api/Logout");
    // Check response from server
    if (response.status === 200 && response.data.success) {
      return { status: response.status, message: response.data.message, success: response.data.success };
    } else {
      throw { status: response.status, message: response.data.message, success: response.data.success };
    }
  } catch (error) {
    // Handle error response from server
    if (error.response) {
      return { status: error.response.status, message: error.response.data.message, success: error.response.data.success };
    } else {
      return { status: 500, message: "Server error", success: false };
    }
  }
}
