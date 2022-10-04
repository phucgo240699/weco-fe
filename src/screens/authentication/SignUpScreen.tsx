import { Button, Checkbox, Form, Input, Col, Row } from 'antd';
import { SignUpRequestType } from 'types/authenticationTypes'
import styled from "styled-components"
import React from 'react';
import { useState } from "react"
import { dispatch } from 'store';
import actions from 'store/actions';

interface Props {}
const SignUpScreen : React.FC<Props> = () => {
  const [user, setUser] = useState<SignUpRequestType>({
    email: '',
    name: '',
    password: ''
  });

  const onFormSubmit = (e: any) => {
    dispatch(actions.authentication.signUp({
      email: e.email,
      name: e.name,
      password: e.password
    }))
  }
    return (
      <Container gutter={1} align="middle" justify="center">
        <Col className="gutter-row" span={10}>
          <h1 >Sign up</h1>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            autoComplete="off"
            onFinish={onFormSubmit}
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: 'Please input your email!' }, { type: 'email', message: 'Please input valid email!'}]}
            >
              <Input/>
            </Form.Item>

            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: 'Please input your name!' }]}
            >
              <Input/>
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password/>
            </Form.Item>
            
            <Form.Item
              label="Confirm password"
              name="passwordConfirm"
              rules={[{ required: true, message: 'Please input your password again!' }]}
            >
              <Input.Password />
            </Form.Item>
      
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Container>
    );
}

const Container = styled(Row)`
  height: 100%;
`
export default SignUpScreen;