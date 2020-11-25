const API = "http://localhost:5000/bytescrum";

//create todo
export const createPerson = (name, dob) => {
   return fetch(`${API}`, {
      method: "POST",
      headers: {
         Accept: "application/json",
         "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, dob }),
   })
      .then((response) => response.json())
      .catch((err) => console.log(err));
};

export const getAllPerson = () => {
   return fetch(`${API}`, {
      method: "GET",
      headers: {
         Accept: "application/json",
         "Content-Type": "application/json",
      },
   })
      .then((response) => response.json())
      .catch((err) => console.log(err));
};

export const searchPerson = (term) => {
   return fetch(`${API}/${term}`, {
      method: "POST",
      headers: {
         Accept: "application/json",
         "Content-Type": "application/json",
      },
   })
      .then((response) => response.json())
      .catch((err) => console.log(err));
};
