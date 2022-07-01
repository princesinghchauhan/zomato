import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useState } from 'react';


function Hotelreg() {


    let [hid, setHid] = useState('');
    let [hotel_name, setHname] = useState('');
    let [address, setAddress] = useState('');
    let [city, setCity] = useState('');
    let [state, setState] = useState('');
    let [pin, setPin] = useState('');
    let [hotel_owner, setHowner] = useState('');
    let [contact, setContact] = useState('');
    let [type, setType] = useState('');

    function submitData() {
        // alert("You clicked")
        let userdata = {
            hid: hid,
            hotel_name: hotel_name,
            address: address,
            city: city,
            state: state,
            pin: pin,
            hotel_owner: hotel_owner,
            contact: contact,
            type: type


        };
        let reqData = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userdata)
        }
        fetch("http://localhost:4999/hotelregistration", reqData)
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
                        <label>Hotel Id</label>
                        <input className="form-control" type="text" value={hid} onChange={(e) => setHid(e.target.value)} />
                        <label>Hotel Name</label>
                        <input className="form-control" type="text" value={hotel_name} onChange={(e) => setHname(e.target.value)} />
                        <label>Address</label>
                        <input className="form-control" type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                        <label>City</label>
                        <input className="form-control" type="text" value={city} onChange={(e) => setCity(e.target.value)} />
                        <label>State</label>
                        <input className="form-control" type="text" value={state} onChange={(e) => setState(e.target.value)} />
                        <label>Pin</label>
                        <input className="form-control" type="text" value={pin} onChange={(e) => setPin(e.target.value)} />
                        <label>Hotel Owner</label>
                        <input className="form-control" type="text" value={hotel_owner} onChange={(e) => setHowner(e.target.value)} />
                        <label>Contact</label>
                        <input className="form-control" type="text" value={contact} onChange={(e) => setContact(e.target.value)} />
                        <label>Type</label>
                        <input className="form-control" type="text" value={type} onChange={(e) => setType(e.target.value)} />
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
export default Hotelreg;