import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {

  const navigate = useNavigate()
  const [user, setUser] = useState({
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

  const handleSubmit = async(e) => {
    e.preventDefault();
    const { email, password } = user
    if (email && password) {
      const res=await axios.post("http://localhost:8000/api/users/login",user)
      localStorage.setItem("user", JSON.stringify(res.data));
      if(res.data.user.role==="admin"){
        navigate('/dashboard')
        console.log(res.data.user.email);
        console.log(JSON.stringify(res.data));
      }else{
        navigate('/')
      }
    }
    else {
      alert("invalid input")
    };
  }

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

              {/* Email input */}
              <div className="mb-6">
                <input
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Email address"
                  name='email'
                  value={user.email}
                  onChange={handleChange}
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
                />
              </div>
              <input
                    type="datetime-local"
                    className="block w-full px-4 py-2 bg-white border rounded-full focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    id='date'
                    // onChange={handleInputChange}
                />
              <input type="date" name="" id="" />

              {/* Submit button */}
              <button
                type="submit"
                className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login