import React, { useState } from 'react'
// import axios from "axios";

function Register() {
  // const [fullName , setFullName] = useState('');
  // const [phone, setPhone] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const [user, setUser] = useState({
    full_name: "",
    phone: "",
    email: "",
    password: "",
  });

  const handleChange = e => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { full_name, phone, email, password } = user
    if (full_name && phone && email && password) {
      //  fullName.current.focus()
      // console.log(fullName, phone, email, password);
      // alert('A form was submitted: ' + fullName);

      fetch("http://localhost:8000/api/users/register", {
        'method': "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        // We convert the React state to JSON and send it as the POST body
        body: JSON.stringify(user)
      }).then((response) => {
        //console.log(response)
        // alert('A form was submitted: ' + fullName);
        return response.json();
      });
      console.log(user)
    }
    else {
      alert("invalid input")
    };
  }

  // const register = ()=>{
  //   const {full_name, phone, email, password} = user
  //   if (full_name && phone && email && password){
  //    axios.post("http://localhost:8000/api/users/register",user )
  //    .then(res=>console.log(res))
  //   }
  //   else{
  //       alert("invalid input")
  //   };
  // }

  // const handleInputChange = (e) => {
  //   const { id, value } = e.target;
  //   if (id === "fullName") {
  //     setFullName(value)
  //   }
  //   if (id === "phone") {
  //     // console.log(value);
  //     setPhone(value);
  //   }
  //   if (id === "email") {
  //     // console.log(value);
  //     setEmail(value);
  //   }
  //   if (id === "password") {
  //     // console.log(value);
  //     setPassword(value);
  //   }

  // }

  // const handleSubmit = () => {
  //   // fullName.current.focus()
  //   // console.log(fullName, phone, email, password);
  //  // alert('A form was submitted: ' + fullName);

  //     fetch("http://localhost:8000/api/users/register",{

  //       headers: {
  //         'method':"post",
  //         'mode':"cors",
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json'
  //       },
  //       // We convert the React state to JSON and send it as the POST body
  //       body: JSON.stringify(
  //         {"users" :{
  //           full_name:fullName,
  //           phone:phone,
  //           email:email,
  //           password:password
  //         }})
  //     }).then((response) => {
  //       //console.log(response)
  //       alert('A form was submitted: ' + fullName);
  //       return response.json();
  //     });


  // }

  return (
    <section className="h-screen">
      <div className="container px-6 py-12 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="w-full"
              alt="Phone"
            />
          </div>
          <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
            <form onSubmit={handleSubmit}>
              {/* Full name input */}
              <div className="mb-6">
                <input
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Full name"
                  name='full_name'
                  value={user.full_name}
                  onChange={handleChange}
                  id="fullName"
                />
              </div>

              {/* Phone input */}
              <div className="mb-6">
                <input
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Phone number"
                  name='phone'
                  value={user.phone}
                  onChange={handleChange}
                  id="phone"
                />
              </div>

              {/* Email input */}
              <div className="mb-6">
                <input
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Email address"
                  name='email'
                  value={user.email}
                  onChange={handleChange}
                  id="email"
                />
              </div>

              {/* Password input  */}
              <div className="mb-6">
                <input
                  type="password"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Password"
                  name='password'
                  value={user.password}
                  onChange={handleChange}
                  id="password"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register