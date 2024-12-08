import React, { useState, useEffect } from "react";
import EmployeeService from "./EmployeeService";
import "./EmployeeList.css"; // Create this CSS file to hold the new styles

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [employee, setEmployee] = useState({
    id: "",
    name: "",
    email: "",
    position: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [searchId, setSearchId] = useState("");

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = () => {
    EmployeeService.getEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error("Error fetching employee data: ", error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const saveEmployee = () => {
    if (isEditing) {
      EmployeeService.updateEmployee(employee.id, employee).then(() => {
        setIsEditing(false);
        setEmployee({ id: "", name: "", email: "", position: "" });
        fetchEmployees();
      });
    } else {
      EmployeeService.createEmployee(employee).then(() => {
        setEmployee({ id: "", name: "", email: "", position: "" });
        fetchEmployees();
      });
    }
  };

  const editEmployee = (emp) => {
    setEmployee(emp);
    setIsEditing(true);
  };

  const deleteEmployee = (id) => {
    EmployeeService.deleteEmployee(id).then(() => {
      setEmployees(employees.filter((employee) => employee.id !== id));
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Prevent the default form submission behavior
    // Validate that all fields are filled (this is already handled by 'required' attribute)
    if (!employee.name || !employee.email || !employee.position) {
      alert("All fields are required!");
      return;
    }
    // Call saveEmployee function if validation passes
    saveEmployee();
  };
  const searchEmployeeById = () => {
    EmployeeService.getEmployeeById(searchId)
      .then((response) => {
        setEmployees([response.data]);
      })
      .catch((error) => {
        console.error("Error fetching employee by ID: ", error);
        alert("Employee not found!");
      });
  };

  return (
    <div className="employee-container">
      <h2 className="title">Employee Management</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by ID"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          className="input-field"
        />
        <button onClick={searchEmployeeById} className="btn search-btn">
          Search
        </button>
        <button onClick={fetchEmployees} className="btn view-all-btn">
          View All Employees
        </button>
      </div>
      <form className="employee-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={employee.name}
          onChange={handleInputChange}
          className="input-field"
          required
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={employee.email}
          onChange={handleInputChange}
          className="input-field"
          required
        />
        <input
          type="text"
          name="position"
          placeholder="Position"
          value={employee.position}
          onChange={handleInputChange}
          className="input-field"
          required
        />
        <button type="submit" className="btn save-btn">
          {isEditing ? "Update" : "Create"}
        </button>
      </form>
      <table className="employee-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Position</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.position}</td>
              <td>
                <button
                  onClick={() => editEmployee(employee)}
                  className="btn edit-btn"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteEmployee(employee.id)}
                  className="btn delete-btn"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
