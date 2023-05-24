import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {DEVICE_ROUTE} from "../utils/consts";
import star from "../assets/star.png"

const DeviceItem = ({ device }) => {
  const navigate=useNavigate();

  return (
    <Col md={3} className="mt-3" onClick={()=>navigate(DEVICE_ROUTE+`/`+device.id)}>
      <Card style={{ width: 150, cursor: "pointer" }} border={"light"}>
        <Image width={150} height={150} src={process.env.REACT_APP_API_URL+device.img}></Image>
        <div className="d-flex justify-content-between align-items-center mt-1 text-black-50">
          <div >Samsung</div>
          <div className="d-flex align-items-center">
            {device.rating}
            <Image width={20} height={20} src={star} />
          </div>
        </div>
          <div>
              {device.name}
          </div>
      </Card>
    </Col>
  );
};

export default DeviceItem;
