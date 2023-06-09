import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Record = (props: any) =>
  <tr>
    <td>{props.record.username}</td>
    <td>{props.record.fName}</td>
    <td>{props.record.lName}</td>
    <td>{props.record.email}</td>
    <td>{props.record.password}</td>
    <td>{props.record.userType}</td>
    <td>
      <Link className="btn btn-link" to={`/edit/${props.record._id}`}>Edit</Link> |
      <button className="btn btn-link"
        onClick={() => {
          props.deleteRecord(props.record._id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>

export default function RecordList() {
  const [records, setRecords] = useState<any>([]);

  // This method fetches the records from the database.
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:5000/user/`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      setRecords(records);
    }

    getRecords();

    return;
  }, [records.length]);

  // This method will delete a record
  async function deleteRecord(id: any) {
    await fetch(`http://localhost:5000/user/${id}`, {
      method: "DELETE"
    });

    const newRecords = records.filter((el: any) => el._id !== id);
    setRecords(newRecords);
  }

  console.log("Returned string is: " + records.toString());

  // This method will map out the records on the table
  function recordList() {
    return records.map((record: { _id: any; }) => {
      return (
        <Record
          record={record}
          deleteRecord={() => deleteRecord(record._id)}
          key={record._id}
        />
      );
    });
  }

  // This following section will display the table with the records of individuals.
  return (
    <div>
      <h3>Record List</h3>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>User Type</th>
          </tr>
        </thead>
        <tbody>{recordList()}</tbody>
      </table>
    </div>
  );
}
