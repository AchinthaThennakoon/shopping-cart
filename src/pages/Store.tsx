import { Col, Row } from "react-bootstrap";
import storeItems from "../data/items.json";
import StoreItems from "../components/StoreItems";

const Store = () => {
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map(item=>(
          <Col>
            <StoreItems {...item}/>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Store
