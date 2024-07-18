import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { login } from '../../../services/authSevice';
import Password from 'antd/es/input/Password';
import { useNavigate } from 'react-router-dom';


function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const handleSumit = () => {
        dispatch(login({ userName: "Admin", password: "123456" }))
            .unwrap().then((res) => {
                let roles = res.data.roles;

                if (roles.some((role) => role.roleName === "ADMIN")) {
                    navigate("/admin");
                    console.log("HOHO");
                } else {
                    navigate("/")
                }

            }).catch((err) => {
                console.log(err);
            })
    }
    return (
        <>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
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
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit" onClick={handleSumit}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}
export default Login;