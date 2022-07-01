import { useEffect } from "react";
import { useState } from "react";
import { Table, Button, Modal } from 'react-bootstrap';
import swal from 'sweetalert'
// import './App1.css'
function Hotellist() {
    let [data, setData] = useState([]);
    let [show, setShow] = useState(false);
    let handleClose = () => setShow(false);

    let [hid, setHid] = useState('');
    let [hotel_name, setHname] = useState('');
    let [address, setAddress] = useState('');
    let [city, setCity] = useState('');
    let [state, setState] = useState('');
    let [pin, setPin] = useState('');
    let [hotel_owner, setHowner] = useState('');
    let [contact, setContact] = useState('');
    let [type, setType] = useState('');

    const handleShow = ( hid, hotel_name, address, city, state, pin, hotel_owner, contact, type) => {
        setShow(true);
        setHid(hid);
        setHname(hotel_name);
        setAddress(address);
        setCity(city);
        setState(state);
        setPin(pin);
        setHowner(hotel_owner);
        setContact(contact);
        setType(type);
        console.log(hid);
    }
    useEffect(() => {
        async function dataFetch() {
            let Response = await fetch("http://localhost:4999/hotellist")
            let udata = await Response.json()
            setData(udata.Response);
        }
        dataFetch();
    }, []);

    function deleteUser(hid) {
        // alert("I am in delete function")
        fetch(`http://localhost:4999/hotellist/${hid}`, { method: "DELETE" })
            .then((res) => {
                if (res.status === 200) {
                    // alert("User Deleted");
                    swal({
                        title: "Good job!",
                        text: "You clicked the button!",
                        icon: "success",
                        button: "Aww yiss!",
                    });
                }
            })

    }

    function updateData(hid) {
        // alert("I am in delete function")
        fetch(`http://localhost:4999/hotellist/${hid}`, { method: "PUT" })
            .then((res) => {
                if (res.status === 200) {
                    // alert("User Deleted");
                    swal({
                        title: "Good job!",
                        text: "You clicked the button!",
                        icon: "success",
                        button: "Aww yiss!",
                    });
                }
            })

    }
    // this.state = {
    //     hasBeenClicked: false,
    //   };

    //   handleClick = () => {
    //     this.setState({
    //         hasBeenClicked: true
    //       },()=>
    //       console.log(this.state.hasBeenClicked))
    //   };
    // function updateData(hid) {
    //     // const handleShow = { hid, hotel_name, address, city, state, pin, hotel_owner, contact, type }
    //     fetch(`http://localhost:4999/hotellist/${hid}`, {
    //          method: "PUT", 
    //     headers: {
    //         'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(handleShow)
    // })  .then((res) => {
    //             if (res.status === 200) {
    //                 swal("Are you sure you want to do this?", {
    //                     buttons: ["Oh noez!", true],
    //                   });
    //             }
    //         })

    // }
    function Display() {


        return (
            <>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th> #Id </th>
                            <th> Hotel Name </th>
                            <th> Address </th>
                            <th> City </th>
                            <th> State </th>
                            <th> Pin </th>
                            <th> Hotel Owner </th>
                            <th> Contact </th>
                            <th> Type </th>
                            <th> Delete</th>
                            <th> Update </th>

                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.hid}</td>
                                    <td>{item.hotel_name}</td>
                                    <td>{item.address}</td>
                                    <td>{item.city}</td>
                                    <td>{item.state}</td>
                                    <td>{item.pin}</td>
                                    <td>{item.hotel_owner}</td>
                                    <td>{item.contact}</td>
                                    <td>{item.type}</td>
                                    <td><Button onClick={() => deleteUser(item.hid)} className="btn btn-danger">Delete</Button></td>
                                    <td><Button onClick={() => handleShow(item.hid, item.hotel_name, item.address, item.city, item.state, item.pin, item.hotel_owner, item.contact, item.type)} className="btn btn-success">Update</Button></td>

                                </tr>
                            )
                        })

                        }
                    </tbody>
                </Table>
            </>
        )
    }

    return (
        <>
            <Display />
            <Modal show={show} onHide={handleClose}>
            {/* <Modal show={show} onHide={hasBeenClicked}> */}
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
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
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    {/* <Button variant="secondary" onClick={this.state.hasBeenClicked}>Close</Button>
                    <Button variant="primary" onClick={this.handleClick}>Save changes</Button> */}
                    <Button variant="primary" onChange={updateData}>Save changes</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default Hotellist;