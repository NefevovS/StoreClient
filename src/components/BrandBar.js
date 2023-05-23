import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import {Card, Row} from "react-bootstrap";

const BrandBar = observer(() => {
    const { device } = useContext(Context);
    return (
        <Row className="d-flex mt-2" >
            {device.brands.map((brand) => (
                <Card

                    className="mt-2"
                    style={{cursor:"pointer",width:"unset",marginLeft:"3px"}}
                    border={brand.id ===device.selectedBrand.id?"danger":"light"}
                    key={brand.id}
                    onClick={() =>device.setSelectedBrand(brand)}
                >
                    {brand.name}
                </Card>
            ))}
        </Row>
    );
});

export default BrandBar;
