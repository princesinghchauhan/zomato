const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 4999;

app.use(express.json())
app.use(cors())

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "",
    database: 'zomato'

})

con.connect((err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("Connected")
    }
}
)

app.get('/hotellist', (req, res) => {

    const q1 = "select * from hotel";

    con.query(q1, (err, result) => {
        if (err) {
            res.send(err.sqlMessage)
        } else {
            res.json({ "status": 200, "Response": result })
        }
    })

})


app.post('/hotelregistration', (req, res) => {
    const data = {
        hid: req.body.hid,
        hotel_name: req.body.hotel_name,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        pin: req.body.pin,
        hotel_owner: req.body.hotel_owner,
        contact: req.body.contact,
        type: req.body.type
    }


    const q1 = "insert into hotel SET ?";
    con.query(q1, data, (err, result) => {
        if (err) {
            console.log(err.sqlMessage)
        } else {
            res.json(result)
        }
    })


})



app.get('/menulist', (req, res) => {

    const q1 = "select * from menu";

    con.query(q1, (err, result) => {
        if (err) {
            res.send(err.sqlMessage)
        } else {
            res.json({ "status": 200, "Response": result })
        }
    })

})


app.post('/menuitem', (req, res) => {
    const data = {
        mid: req.body.mid,
        item: req.body.item,
        price: req.body.price,
        tag: req.body.tag,
        avl_option: req.body.avl_option,
        hid: req.body.hid,

    }


    const q1 = "insert into menu SET ?"
    con.query(q1, data, (err, result) => {
        if (err) {
            console.log(err.sqlMessage)
        } else {
            res.json(result)
        }
    })


})

app.delete('/hotellist/:hid',  (req, res) => {
    const id = req.params.hid
    const q1 = "delete from hotel where hid = ?"
    con.query(q1,id,(err,result)=>{
        if(err){
            res.send(err.sqlMessage)
        }else{
            res.json({status:200,Response:result})
        }
    })
})

app.delete('/menulist/:id',  (req, res) => {
    const id = req.params.id
    const q1 = "delete from menu where mid = ?"
    con.query(q1,id,(err,result)=>{
        if(err){
            res.send(err.sqlMessage)
        }else{
            res.json({status:200,Response:result})
        }
    })
})

app.put('/hotellist/:id', (req, res) => {
    const data = [req.body.hotel_name, req.body.address, req.body.city, req.body.state, req.body.pin, req.body.hotel_owner, req.body.contact, req.body.type, req.params.id];
    con.query("UPDATE hotel SET hotel_name=?, address=?, city=?, state=?, pin=?, hotel_owner=?, contact=?, type=? WHERE hid=?", data, (err, result, field)=>{
        if(err)
            res.send(err.sqlMessage);
        else
            res.json({status:200,Response:result});
    })
	});

    app.put('/menulist/:mid', (req, res) => {
        const data = [req.body.item, req.body.price, req.body.tag, req.body.avl_option,req.body.hid, req.params.mid];
        con.query("UPDATE menu SET item=?, price=?, tag=?, avl_option=?, hid=? WHERE mid=?", data, (err, result, field)=>{
            if(err)
                res.send(err.sqlMessage);
            else
                res.json({status:200,Response:result});
        })
        });

app.listen(port, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log(`Server started on http://localhost:${port}`)
    }
})