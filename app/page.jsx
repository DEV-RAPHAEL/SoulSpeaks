import Feed from '@components/Feed'

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Soul Speaks
            <br className="max-md:hidden" />
            <span className="blue_gradient">Confess, Reflect, Grow</span>
        </h1>
        <p className="desc text-center">
        Experience the liberation of sharing your daily confessions. Connect with a community of like-minded individuals on a journey of personal growth, finding strength in vulnerability. Embrace the power of authenticity and discover the path to empowered living.        </p>
        <Feed/>
    </section>
  )
}

export default Home