import emplist from "./emplist";

const Employees =()=>{
    return (
        <>
        <h1>Employees Details</h1>
            <table id="t1">
                <tr>
                    <th>Name</th>
                    <th>City</th>
                    <th>Mobile No</th>
                </tr>
                {
                    emplist.map(emp=>{
                        return (
                            <>
                                <tr>
                                    <td>{emp.name}</td>
                                    <td>{emp.city}</td>
                                    <td>{emp.mobileNo}</td>
                                </tr>
                            </>
                        )
                    })
                }
            </table>
        </>
    )
}
export default Employees;