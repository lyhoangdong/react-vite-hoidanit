import { Button, Input, Form, notification } from "antd";
import { formToJSON } from "axios";
import { registerUserAPI } from "../services/api.service";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const onFinish = async (value) => {
        console.log(">>> Check value", value);

        //call API
        const res = await registerUserAPI(
            value.fullName,
            value.email,
            value.password,
            value.phone);

        if (res.data) {
            notification.success({
                message: "Register success user",
                description: "Đăng ký user thành công"
            });
            navigate("/login");
        } else {
            notification.error({
                message: "Register error user",
                description: JSON.stringify(res.message)
            })
        }

    }

    return (
        <Form
            layout="vertical"
            form={form}
            onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        >
            <div style={{ display: "flex", flexDirection: "column", margin: "50px" }}>
                <Form.Item
                    label="Full Name"
                    name="fullName"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Full Name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    label="Phone Number"
                    name="phone"
                    rules={[
                        {
                            required: true,
                            pattern: new RegExp(/\d+/g),
                            message: "Wrong format!"
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <div>
                    <Button onClick={() => form.submit()} type="primary">Register</Button>
                    {/* <Button onClick={() => {
                        form.setFieldsValue({
                            email: "hoidanit123@gmail.com",
                            fullName: "eric123"
                        })
                        //console.log(">>>Check value: "),form.getFieldsValue());
                    }}>Test</Button> */}
                </div>
            </div>
        </Form>
    )
}
export default RegisterPage;