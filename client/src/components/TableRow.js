import React from "react";

export default function TableRow({ index, name, dob }) {
   return (
      <tr>
         <th scope="row">{index}</th>
         <td>{name}</td>
         <td>{dob}</td>
      </tr>
   );
}
