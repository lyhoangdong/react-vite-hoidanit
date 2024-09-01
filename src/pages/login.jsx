import { Button, Input, Form, notification, Row, Col, Divider, message } from "antd";
import { loginAPI } from "../services/api.service";
import { Link, useNavigate } from "react-router-dom";
import FormItem from "antd/es/form/FormItem";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useState, useContext } from "react";
import { AuthContext } from "../components/context/auth.context";

const LoginPage = () => {

    const [form] = Form.useForm();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)

    const { setUser } = useContext(AuthContext);

    const onFinish = async (value) => {
        setLoading(true);
        const res = await loginAPI(value.email, value.password);
        if (res.data) {
            message.success("Đăng nhập thành công");
            localStorage.setItem("access_token", res.data.access_token);
            setUser(res.data.user);
            navigate("/");
        } else {
            notification.error({
                message: "Error login",
                description: JSON.stringify(res.message)
            })
        }
        setLoading(false);
    }

    return (
        <Row justify={"center"} style={{ marginTop: "30px" }}>
            <Col xs={24} md={16} lg={8}>
                <fieldset style={{
                    padding: "15px",
                    margin: "5px",
                    border: "1px solid #ccc",
                    borderRadius: "5px"
                }}>
                    <legend>Đăng nhập</legend>
                    <Form
                        layout="vertical"
                        form={form}
                        onFinish={onFinish}
                        style={{ margin: "30px" }}
                    // onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your email!',
                                },
                                {
                                    type: "email",
                                    message: "Email không đúng định dạng!",
                                }
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
                        <FormItem>
                            <div style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center"

                            }}>
                                <Button
                                    loading={loading}
                                    onClick={() => form.submit()}
                                    type="primary"
                                >Login
                                </Button>
                                <Link to={"/"}>Go to home page <ArrowRightOutlined /></Link>
                            </div>
                        </FormItem>
                    </Form>
                    <Divider />
                    <div style={{ textAlign: "center" }}>Chưa có tài khoản? <Link to={"/register"} style={{ marginLeft: "20px" }}>Đăng ký tại đây</Link></div>
                </fieldset>
            </Col>
        </Row>
    )
}
export default LoginPage