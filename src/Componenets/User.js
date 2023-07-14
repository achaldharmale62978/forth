import Userlist from "./Userlist";

const User = () => {
    return (
        <>
            <h2>User Details</h2>

            <table id="d">
                <tr>
                    <th>Product</th>
                    <th>ProductName</th>
                    <th>Price</th>
                </tr>
               {
                Userlist.map(user=>{
                    return (
                        <>
                            <tr>
                                <td>{user.product}</td>
                                <td>{user.ProductName}</td>
                                <td>{user.Price}</td>
                            </tr>
                        </>
                    )
                })
               }
            </table>
        </>
    )
}
export default User;