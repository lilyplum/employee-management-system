import React from 'react';
import Table from 'react-bootstrap/Table'
import UpdateEmployeeModal from "./UpdateEmployeeModal.jsx";
import DeleteEmployeeModal from "./DeleteEmployeeModal.jsx";


const EmployeeTable = ({employees, handleDelete, handleUpdate}) => {
    return (
        <div>
            <Table striped bordered hover variant="dark">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Year in Company</th>
                    <th>Email</th>
                    <th></th>
                </tr>
                </thead>

                <tbody>
                {employees.content.map((employee, index) => (
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.yearsInCompany}</td>
                        <td>{employee.email}</td>
                        <td>
                            <UpdateEmployeeModal employee={employee} handleUpdate={handleUpdate}/>
                            <DeleteEmployeeModal employee={employee} handleDelete={handleDelete}/>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    );
};

export default EmployeeTable;