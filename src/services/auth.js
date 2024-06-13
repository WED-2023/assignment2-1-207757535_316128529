// src/services/auth.js


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
  

  export function mockRegister(userDetails, success = true) {

    if (!success) {
      throw { status: 409, response: { data: { message: "Username taken", success: false } } };
    }
  
    return { status: 200, response: { data: { message: "user created", success: true}} };
  }
  


  export function mockLogout() {
    return { status: 200, response: { data: { message: "logout succeeded", success: true}} };

  }
  

