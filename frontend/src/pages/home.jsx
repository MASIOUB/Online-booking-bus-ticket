import React from 'react'

function Home() {
  return (
    <div>
      <section
      style={{backgroundImage: `url(${process.env.PUBLIC_URL+"/images/photo-1544620347-c4fd4a3d5957.jpeg"})`, width: "100vw",}}
        className="relative bg-cover bg-center bg-no-repeat"
      >
        <div
          className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"
        ></div>

        <div
          className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
        >
          <div className="max-w-xl text-center sm:text-left">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Let us find your

              <strong className="block font-extrabold text-blue-600">
                Forever Home.
              </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
              tenetur fuga ducimus numquam ea!
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="/register"
                className="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-600 focus:outline-none focus:ring sm:w-auto"
              >
                SIGN UP
              </a>

              <a
                href="/login"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-blue-600 shadow hover:text-blue-600 focus:outline-none focus:ring sm:w-auto"
              >
                SIGN IN
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home