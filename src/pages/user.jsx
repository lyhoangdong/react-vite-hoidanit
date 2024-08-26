import UserForm from "../components/user/user.form"
import UserTable from "../components/user/user.table"
import { useEffect, useState } from 'react';
import { fetchAllUSerAPI } from '../services/api.service';

const UserPage = () => {
    const [dataUser, setDataUser] = useState([]);
    //empty array => run once
    useEffect(() => {
        console.log("Run useffect 111");
        loadUser();
    }, []);

    const loadUser = async () => {
        const res = await fetchAllUSerAPI();
        setDataUser(res.data);
    }

    return (
        <div>
            <UserForm loadUser={loadUser} />
            <UserTable
                dataUser={dataUser}
                loadUser={loadUser}
            />
        </div>
    )
}
export default UserPage