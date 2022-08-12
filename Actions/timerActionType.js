export const timer = () => {
    return {
        type : 'TIMER'
    };
}


//----------------------- LOGIN -----------------------
export const setusername = username => {
    return {
      type: "SET_USERNAME",
      payload: username
    };
  };
  
  export const setpassword = password => {
    return {
      type: "SET_PASSWORD",
      payload: password
    };
  };


