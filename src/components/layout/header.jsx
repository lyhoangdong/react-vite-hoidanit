import { Link, NavLink } from 'react-router-dom';
import { HomeOutlined, UsergroupAddOutlined, BookOutlined, SettingFilled } from '@ant-design/icons';
import { Menu } from 'antd';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/auth.context';

const Header = () => {

    const [current, setCurrent] = useState('mail');

    const { user } = useContext(AuthContext)
    console.log(">>>Check data: ", user);

    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    const items = [
        {
            label: <Link to={"/"}>Home</Link>,
            key: 'home',
            icon: <HomeOutlined />
        },
        {
            label: <Link to={"/users"}>Users</Link>,
            key: 'users',
            icon: <UsergroupAddOutlined />
        },
        {
            label: <Link to={"/books"}>Books</Link>,
            key: 'books',
            icon: <BookOutlined />
        },
        {
            key: 'setting',
            label: 'Cài đặt',
            icon: <SettingFilled />,
            children: [
                {
                    key: 'login',
                    label: <Link to={"/login"}>Đăng nhập</Link>,
                },
                {
                    key: 'logout',
                    label: <Link to={"/logout"}>Đăng xuất</Link>,
                }
            ]
        }
    ];

    return (
        <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items} />
    )
}
export default Header;