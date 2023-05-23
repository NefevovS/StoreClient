import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import bigStar from "../assets/big_star.png";
const DevicePage = () => {
  const device = {
    id: 2,
    name: "Iphone 12 pro",
    price: 25000,
    rating: 5,
    img: "https://spb-apple.ru/image/cache/catalog/apple12/apple%2012%20pro%20max/apple12promax_grey_1-350x450.jpg",
  };
  const description = [
    {
      id: 1,
      title: "Оперативная память",
      description: "5 Гб",
    },
    {
      id: 2,
      title: "Оперативная память",
      description: "5 Гб",
    },
    {
      id: 3,
      title: "Оперативная память",
      description: "5 Гб",
    },
    {
      id: 4,
      title: "Оперативная память",
      description: "5 Гб",
    },
    {
      id: 5,
      title: "Оперативная память",
      description: "5 Гб",
    },
    {
      id: 6,
      title: "Оперативная память",
      description: "5 Гб",
    },
    {
      id: 7,
      title: "Оперативная память",
      description: "5 Гб",
    },
  ];
  return (
    <Container className="mt-2">
        <Row>
            <Col md={4}>
                <Image src={device.img} width={300} height={300} />
            </Col>
            <Col md={4}>
                <Row className="d-flex flex-column align-items-center">
                    <h2>{device.name}</h2>
                    <div
                        className="d-flex align-items-center justify-content-center"
                        style={{
                            background: `url(${bigStar}) no-repeat center center`,
                            width: 240,
                            height: 240,
                            backgroundSize: "cover",
                            color: "white",
                            fontSize: 45,
                        }}
                    >
                        {device.rating}
                    </div>
                </Row>
            </Col>
            <Col md={4}>
                <Card
                    className="d-flex flex-column align-items-center justify-content-around"
                    style={{
                        width: 300,
                        height: 300,
                        fontSize: 32,
                        border: "solid black 5px",
                    }}
                >
                    <h3>От: {device.price} руб.</h3>
                    <Button variant={"outline-dark"} a>
                        Добавить в корзину
                    </Button>
                </Card>
            </Col>

        </Row>

      <Row className="d-flex flex-column m-3">
          <h1>Характеристики:</h1>
        {description.map((des,index) => (
          <Row key={des.id} style={{background:index%2===0&&"lightgray",padding:10}}>
            {des.title}:{des.description}
          </Row>
        ))}
      </Row>
    </Container>
  );
};

export default DevicePage;
