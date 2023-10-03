import React from "react";
import IntlMessages from "@crema/helpers/IntlMessages";
import { useIntl } from "react-intl";
import AppAnimate from "@crema/components/AppAnimate";
import { Button, Checkbox, Form, Input } from "antd";
import { FaFacebookF } from "react-icons/fa";
import AppImage from "@crema/components/AppImage";
import { GithubOutlined, TwitterOutlined } from "@ant-design/icons";

import AppPageMeta from "@crema/components/AppPageMeta";
import {
  StyledUserCard,
  StyledUserCardFooter,
  StyledUserCardFooterAction,
  StyledUserCardFooterLink,
  StyledUserCardHeader,
  StyledUserCardLogo,
  StyledUserContainer,
  StyledUserFieldAction,
  StyledUserFieldActionLink,
  StyledUserForm,
  StyledUserFormBtn,
  StyledUserPages,
  StyledUserSocialLink
} from "../index.styled";

const onFinish = (values) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const Signin = () => {
  const {messages} = useIntl();
  return (
    <StyledUserPages>
      <AppPageMeta title='Signin' />
      <AppAnimate animation='transition.slideUpIn' delay={200}>
        <StyledUserContainer key='a'>
          <StyledUserCard>
            <StyledUserCardHeader>
              <StyledUserCardLogo>
                <AppImage
                  src={'/assets/images/logo.png'}
                  alt='crema'
                  title='crema'
                />
              </StyledUserCardLogo>
              <h3>
                <IntlMessages id='common.login' />
              </h3>
            </StyledUserCardHeader>

            <StyledUserForm
              name='basic'
              initialValues={{remember: true}}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}>
              <Form.Item
                name='email'
                className='form-field'
                rules={[{required: true, message: 'Please input your Email!'}]}>
                <Input placeholder={messages['common.email']} />
              </Form.Item>

              <Form.Item
                name='password'
                className='form-field'
                rules={[
                  {required: true, message: 'Please input your Password!'},
                ]}>
                <Input
                  type='password'
                  placeholder={messages['common.password']}
                />
              </Form.Item>

              <StyledUserFieldAction name='remember' valuePropName='checked'>
                <>
                  <Checkbox>
                    <IntlMessages id='common.rememberMe' />
                  </Checkbox>
                  <StyledUserFieldActionLink className='user-field-action-link ml-auto'>
                    <IntlMessages id='common.forgetPassword' />
                  </StyledUserFieldActionLink>
                </>
              </StyledUserFieldAction>

              <StyledUserFormBtn type='primary' htmlType='submit'>
                <IntlMessages id='common.login' />
              </StyledUserFormBtn>
            </StyledUserForm>

            <StyledUserCardFooterAction>
              <span>
                <IntlMessages id='common.orLoginWith' />
              </span>
              <StyledUserSocialLink>
                <Button>
                  <FaFacebookF />
                </Button>
                <Button>
                  <GithubOutlined />
                </Button>
                <Button>
                  <TwitterOutlined />
                </Button>
              </StyledUserSocialLink>
            </StyledUserCardFooterAction>

            <StyledUserCardFooter>
              <span>
                <IntlMessages id='common.dontHaveAccount' />
              </span>
              <StyledUserCardFooterLink>
                <IntlMessages id='common.signup' />
              </StyledUserCardFooterLink>
            </StyledUserCardFooter>
          </StyledUserCard>
        </StyledUserContainer>
      </AppAnimate>
    </StyledUserPages>
  );
};

export default Signin;
