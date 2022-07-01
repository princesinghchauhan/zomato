// import React from "react";

// class User  {

//     // useEffect(() => {
//     //     async function dataFetch() {
//     //         let Response = await fetch("http://localhost:4999/hotellist")
//     //         let udata = await Response.json()
//     //         setData(udata.Response);
//     //     }
//     //     dataFetch();
//     // }, []);

//     state = {
//       name: "Mike"
//     };
  
//     handleChange = (event) => {
//       const value = event.target.value;
//       this.setState({ name: value });
//     };
  
//     render() {
//       const { name } = this.state;
  
//       return (
//         <div>
//           <input
//             type="text"
//             onChange={this.handleChange}
//             placeholder="Enter your name"
//             value={name}
//           />
//           <div>Hello, {name}</div>
//         </div>
//       );
//     }
//   }
//   export default User;