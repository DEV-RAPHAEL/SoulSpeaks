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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero facere ea porro iste explicabo ut nobis voluptatibus sequi quidem ducimus.
        </p>
        <Feed/>
    </section>
  )
}

export default Home