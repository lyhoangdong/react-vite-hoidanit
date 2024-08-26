import { Input, message, notification, Modal } from 'antd';
import { Button } from "antd";
import { useState } from 'react';
import { createUserAPI } from '../../services/api.service';

const UserForm = (props) => {

    const { loadUser } = props;

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmitBtn = async () => {

        const res = await createUserAPI(fullName, email, password, phone);
        if (res.data) {
            notification.success({
                message: "create user",
                description: "Tao user thanh cong"
            })
            resetAndCloseModal()
            await loadUser();

        } else {
            notification.error({
                message: "Error create user",
                description: JSON.stringify(res.message)
            })
        }
        console.log(">>> Chesk res: ", res.data.data);
    }

    const resetAndCloseModal = () => {
        setIsModalOpen(false);
        setFullName("");
        setEmail("");
        setPassword("");
        setPhone("");
    }

    return (
        <div className="user-form" style={{ margin: "20px 10px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3>Table Users</h3>
                <Button
                    onClick={() => setIsModalOpen(true)}
                    type="primary"> Create User
                </Button>
            </div>
            <Modal
                title="Create User"
                open={isModalOpen}
                onOk={() => handleSubmitBtn()}
                onCancel={() => resetAndCloseModal()}
                maskClosable={false}
                okText={"CREATE"}
            >
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
                </div>
            </Modal>
        </div >)
}
export default UserForm;