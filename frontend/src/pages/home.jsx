import SearchBar from '../components/SearchBar'
import Background from '../images/bg-home.jpeg'

function Home() {
  return (
    <div>
      <section className="relative bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${Background})` }}>
        <div
          className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:content-center lg:px-8"
        >
          <SearchBar />
        </div>
      </section>
    </div>
  )
}

export default Home