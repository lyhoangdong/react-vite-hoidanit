import { Table } from 'antd';
import { fetchAllUSerAPI } from '../../services/api.service';
import { useEffect, useState } from 'react';


const UserTable = () => {

    const [dataUser, setDataUser] = useState([]);
    //empty array => run once
    useEffect(() => {
        console.log("Run useffect 111");
        loadUser();
    }, []);
    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',

        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',

        },
        {
            title: 'Email',
            dataIndex: 'email',

        }

    ];

    const loadUser = async () => {
        const res = await fetchAllUSerAPI();
        setDataUser(res.data);
    }

    console.log("Run render 000");
    return (
        <Table columns={columns} dataSource={dataUser} rowKey={"_id"} />
    )
}
export default UserTable;