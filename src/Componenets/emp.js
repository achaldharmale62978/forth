import Empl from "./empl";


const Emp =()=>{
    return (
        <>
        <h1>Emp Details</h1>
            <table id="t3">
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Salary</th>
                    <th>Mobile No</th>
                    <th>Pincode</th>
                </tr>
                {
                    Empl.map(emp=>{     
                        return (
                            <>
                                <tr>
                                    <td>{emp.id}</td>
                                    <td>{emp.name}</td>
                                    <td>{emp.salary}</td>
                                    <td>{emp.mobileNo}</td>
                                    <td>{emp.Pincode}</td>
                                </tr>
                            </>
                        )
                    })
                }
            </table>
        </>
    )
}
export default Emp;