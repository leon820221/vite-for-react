import React from 'react';

const Students = (props) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Hobby</th>
                </tr>
            </thead>
            <tbody>
                {props.stu.map(el => {
                    <tr key={el.id}>
                        <td>{el.id}</td>
                        <td>{el.name}</td>
                        <td>{el.age}</td>
                        <td>{el.gender}</td>
                        <td>{el.hobby}</td>
                    </tr>
                })}
            </tbody>
        </table>
    );
}

export default Students;
