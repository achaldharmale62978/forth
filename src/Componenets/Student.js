import Studentlist from "./Studentlist";

const StudentElement = ()=>{
    return (
        <>
            <h2>Student Details</h2>
                <table id="t2">
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>ROLLNO</th>
                    </tr>
                    {
                        Studentlist.map(Student=>{
                        return (
                            <tr>
                                <td>{Student.Id}</td>
                                <td>{Student.Name}</td>
                                <td>{Student.RollNo}</td>
                            </tr>

                        )
                        })
                    }
                    
                </table>

        </>
    )
}
export default StudentElement;