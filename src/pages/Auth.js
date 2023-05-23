import React, {useState} from "react";
import { Button, Card, Container, Form, Row } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import {login, registration} from "../http/userApi";

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const click = async () => {
    if (isLogin){
      const responce = login();
    }else {
      const responce = registration(email,password);
      console.log(responce)
    }

  };
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: "600px" }} className="p-5">
        <h2 className="m-lg-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
        <Form className="d-flex flex-column">
          <Form.Control placeholder="Введите email..." className="mt-3" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <Form.Control
            placeholder="Введите пароль..."
            className="mt-3"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <Row className="mt-3 d-flex justify-content-between pr-3 pl-3">
            {isLogin ? (
              <div>
                Нет аккаунта?
                <NavLink to={REGISTRATION_ROUTE}>зарегестрируйтесь</NavLink>
              </div>
            ) : (
              <div>
                Есть аккаунт?
                <NavLink to={LOGIN_ROUTE}>войдите</NavLink>
              </div>
            )}

            <Button variant="outline-success" onClick={click}>
              {isLogin ? "Войти" : "Регистрация"}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
