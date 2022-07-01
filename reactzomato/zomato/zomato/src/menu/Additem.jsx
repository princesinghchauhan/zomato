import React, { useState } from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';


function Additem() {


    let [mid, setMid] = useState('');
    let [item, setItem] = useState('');
    let [price, setPrice] = useState('');
    let [tag, setTag] = useState('');
    let [avl_option, setAoption] = useState('');
    let [hid, setHid] = useState('');


    function submitData() {
        // alert("You clicked")
        let userdata = {
            mid: mid,
            item: item,
            price: price,
            tag: tag,
            avl_option: avl_option,
            hid: hid


        };
        let reqData = {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(userdata)
        }
        fetch("http://localhost:4999/menuitem", reqData)
            .then(response => console.log(`Data Submitted ${response.status}`))
        //.then(data => setPostId(data.id));
        // console.log(userdata);
    }
    return (
        <>
            <Container fluid="md" style={{ backgroundColor: "white", color: "black" }}>
                <h1>Register New User</h1>
                <Row>
                    <Col>
                        <label>Menu Id</label>
                        <input className="form-control" type="text" value={mid} onChange={(e) => setMid(e.target.value)} />
                        <label>Item</label>
                        <input className="form-control" type="text" value={item} onChange={(e) => setItem(e.target.value)} />
                        <label>Price</label>
                        <input className="form-control" type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
                        <label>Tag</label>
                        <input className="form-control" type="text" value={tag} onChange={(e) => setTag(e.target.value)} />
                        <label>Avl Option</label>
                        <input className="form-control" type="text" value={avl_option} onChange={(e) => setAoption(e.target.value)} />
                        <label>Hotel Id</label>
                        <input className="form-control" type="text" value={hid} onChange={(e) => setHid(e.target.value)} />


                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <Button onClick={submitData} className="btn btn-success" >Save </Button>
                    </Col>
                    <Col>
                        <Button className="btn btn-danger">Cancel</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )


}
export default Additem;