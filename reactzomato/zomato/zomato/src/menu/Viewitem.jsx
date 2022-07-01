import { useEffect } from "react";
import { useState } from "react";
import { Table, Button, Modal } from 'react-bootstrap';
import swal from 'sweetalert';

function Viewitem() {
    let [data, setData] = useState([]);
    let [show, setShow] = useState(false);
    let handleClose = () => setShow(false);

    let [mid, setMid] = useState('');
    let [item, setItem] = useState('');
    let [price, setPrice] = useState('');
    let [tag, setTag] = useState('');
    let [avl_option, setAoption] = useState('');
    let [hid, setHid] = useState('');


    const handleShow = (mid, item, price, tag, avl_option, hid) => {
        setShow(true);
        setMid(mid);
        setItem(item);
        setPrice(price);
        setTag(tag);
        setAoption(avl_option);
        setHid(hid);

        console.log(mid);
    }

    useEffect(() => {
        async function dataFetch() {
            let response = await fetch("http://localhost:4999/menulist")
            let udata = await response.json()
            setData(udata.Response);
        }
        dataFetch();
    }, []);

    function deleteUser(uid) {
        // alert("I am in delete function")
        fetch(`http://localhost:4999/menulist/${uid}`, { method: "DELETE" })
            .then((res) => {
                if (res.status === 200) {
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
        fetch(`http://localhost:4999/menulist/${hid}`, { method: "PUT" })
        .then((res) => {
            if (res.status === 200) {
                swal({
                    title: "Good job!",
                    text: "You clicked the button!",
                    icon: "success",
                    button: "Aww yiss!",
                });
            }
        })
        // alert("I am in delete function")
        // const handleShow = {mid, item, price, tag, avl_option, hid}
        // fetch(`http://localhost:4999/menulist/${hid}`, { method: "PUT" })
        //     .then((res) => {
        //         if (res.status === 200) {
        //             // alert("User Update");
        //         }
        //     })

    }
    function Display() {
        return (
            <>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th> #Id </th>
                            <th> Item </th>
                            <th> Price </th>
                            <th> Tag </th>
                            <th> Available Option </th>
                            <th> Hotel Id </th>
                            <th> Delete </th>
                            <th> Update </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.mid}</td>
                                    <td>{item.item}</td>
                                    <td>{item.price}</td>
                                    <td>{item.tag}</td>
                                    <td>{item.avl_option}</td>
                                    <td>{item.hid}</td>

                                    <td><Button onClick={() => deleteUser(item.mid)} className="btn btn-danger">Delete</Button></td>
                                    <td><Button onClick={() => handleShow(item.mid, item.item, item.price, item.tag, item.avl_option, item.hid)} className="btn btn-success">Update</Button></td>

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
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {/* <label>Menu Id</label>
                    <input className="form-control" type="text" value={mid} onChange={(e) => setMid(e.target.value)} /> */}
                    <label>Item</label>
                    <input className="form-control" type="text" value={item} onChange={(e) => setItem(e.target.value)} />
                    {/* <label>Price</label>
                    <input className="form-control" type="text" value={price} onChange={(e) => setPrice(e.target.value)} /> */}
                    <label>Tag</label>
                    <input className="form-control" type="text" value={tag} onChange={(e) => setTag(e.target.value)} />
                    <label>Available Option</label>
                    <input className="form-control" type="text" value={avl_option} onChange={(e) => setAoption(e.target.value)} />
                    {/* <label>Hid</label>
                    <input className="form-control" type="text" value={hid} onChange={(e) => setHid(e.target.value)} /> */}

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={updateData}>Save changes</Button>
                </Modal.Footer>
            </Modal>
        </>
    )

}

export default Viewitem;