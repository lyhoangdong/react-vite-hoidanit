import { Input, message, notification } from 'antd';
import { Button } from "antd";
import { useState } from 'react';
import { createUserAPI } from '../../services/api.service';

const UserForm = () => {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    const handleClickBtn = async () => {
        const res = await createUserAPI(fullName, email, password, phone);
        if (res.data) {
            notification.success({
                message: "create user",
                description: "Tao user thanh cong"
            })
        } else {
            notification.error({
                message: "Error create user",
                description: JSON.stringify(res.message)
            })
        }
        //console.log(">>> Chesk res: ", res.data.data);
    }

    return (
        <div className="user-form" style={{ margin: "20px 10px" }}>
            <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
                <div>
                    <span>FullName</span>
                    <Input
                        onChange={(event) => { setFullName(event.target.value) }}
                        value={fullName}
                    />
                </div>
                <div>
                    <span>Email</span>
                    <Input
                        onChange={(event) => { setEmail(event.target.value) }}
                        value={email}
                    />
                </div>
                <div>
                    <span>Password</span>
                    <Input.Password
                        onChange={(event) => { setPassword(event.target.value) }}
                        value={password}
                    />
                </div>
                <div>
                    <span>Phone number</span>
                    <Input
                        onChange={(event) => { setPhone(event.target.value) }}
                        value={phone}
                    />
                </div>
                <div>
                    <Button
                        onClick={() => handleClickBtn()}
                        type="primary"> Create User </Button>
                </div>
            </div>

        </div>
    )
}
export default UserForm;