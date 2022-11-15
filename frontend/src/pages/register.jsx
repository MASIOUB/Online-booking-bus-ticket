import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Register() {

  const navigate = useNavigate()

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "fullName") {
      setFullName(value)
    }
    if (id === "email") {
      // console.log(value);
      setEmail(value);
    }
    if (id === "password") {
      // console.log(value);
      setPassword(value);
    }

  }

  // const [user, setUser] = useState({
  //   full_name: "",
  //   phone: "",
  //   email: "",
  //   password: "",
  // });

  // const handleChange = e => {
  //   const { name, value } = e.target
  //   setUser({
  //     ...user,
  //     [name]: value
  //   })
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const { full_name, phone, email, password } = user
    const user = {
      full_name: fullName,
      email: email,
      password: password
    }
    if (fullName && email && password) {

      fetch("http://localhost:8000/api/users/register", {
        'method': "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        // We convert the React state to JSON and send it as the POST body
        body: JSON.stringify(user)
      }).then((response) => {
        return response.json();
      });
      navigate('/')
      console.log(user)
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
              {/* Full name input */}
              <div className="mb-6">
                <input
                  id='fullName'
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Full name"
                  name='full_name'
                  value={fullName}
                  onChange={handleInputChange}
                />
              </div>

              {/* Email input */}
              <div className="mb-6">
                <input
                  id='email'
                  type="email"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Email address"
                  name='email'
                  value={email}
                  onChange={handleInputChange}
                />
              </div>

              {/* Password input  */}
              <div className="mb-6">
                <input
                  id='password'
                  type="password"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Password"
                  name='password'
                  value={password}
                  onChange={handleInputChange}
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