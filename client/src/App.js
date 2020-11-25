import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TableRow from "./components/TableRow";
import { createPerson, getAllPerson, searchPerson } from "./helper/apiCalls";

export default function App() {
   const [name, setName] = useState("");
   const [dob, setDOB] = useState("");
   const [searchTerm, setSearchTerm] = useState("");
   const [personsData, setPersonsData] = useState([]);

   useEffect(() => {
      getAllData();
   }, []);

   // Add new Person into db and update the state
   const addPerson = (event) => {
      event.preventDefault();
      createPerson(name, dob)
         .then((data) => {
            let newPerson = {
               name: data.person?.name,
               dob: data.person?.dob,
            };
            let addPerson = [...personsData, newPerson];
            setPersonsData(addPerson);
            setName("");
            setDOB("");
         })
         .catch((error) => console.log(error));
   };

   // Search Person Here
   const search = (event) => {
      event.preventDefault();
      searchPerson(searchTerm)
         .then((data) => {
            if (data != null) {
               let result = [data];
               setPersonsData(result);
               console.log(data);
            } else {
               console.log("No data Found");
            }
         })
         .catch((error) => console.log(error));
   };

   const getAllData = () => {
      getAllPerson()
         .then((data) => {
            setPersonsData(data);
            console.log(data);
         })
         .catch((error) => console.log(error));
   };
   return (
      <div className="container">
         <div className="formSection w-50 m-auto">
            <h3 className="my-4 text-center">Add Person</h3>
            <form onSubmit={addPerson} className="mb-5">
               <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                     type="text"
                     name="name"
                     id="name"
                     className="form-control"
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                  />
               </div>
               <div className="form-group">
                  <label htmlFor="name">Date Of Birth</label>
                  <input
                     type="date"
                     name="name"
                     id="name"
                     className="form-control"
                     value={dob}
                     onChange={(e) => setDOB(e.target.value)}
                  />
               </div>
               <button type="submit" className="btn btn-primary form-control">
                  Submit
               </button>
            </form>
         </div>

         <div className="infoSection w-50 m-auto">
            <h4 className="my-4 text-center">Filter Persons</h4>
            <div className="search">
               <form onSubmit={search}>
                  <div className="form-group">
                     <label htmlFor="term">Search by name or dob.</label>
                     <input
                        type="text"
                        name="term"
                        id="term"
                        className="form-control"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Shashank Dubey or 2000-11-30"
                     />
                  </div>
                  <button
                     type="submit"
                     className="btn btn-primary form-control"
                  >
                     Search
                  </button>
               </form>
               <button
                  className="mt-4 btn btn-success form-control"
                  onClick={getAllData}
               >
                  All Persons
               </button>
            </div>

            <div className="showData">
               <h4 className="my-4 text-center">All Persons</h4>
               <table className="table">
                  <thead>
                     <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Date Of Birth</th>
                     </tr>
                  </thead>
                  <tbody>
                     {personsData.map((person, index) => {
                        return (
                           <TableRow
                              index={index + 1}
                              name={person.name}
                              dob={person.dob}
                              key={index}
                           />
                        );
                     })}
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   );
}
