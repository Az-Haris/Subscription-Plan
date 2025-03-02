import { assets } from "../assets/assets";


const Banner = () => {
  return (
    <header style={{backgroundImage: `url(${assets.CinemaHall})`}} className="relative min-h-[500px] bg-cover h-full bg-center flex justify-center items-center">


      <div className="container mx-auto px-3 flex flex-col md:flex-row gap-10">
        <div>
          <h1 className="text-5xl font-bold">Best Subscription Plans</h1>
          <p className="text-lg">Find all the subscription plans you need.</p>
          <div>
            <img src="" alt="hoichoi" />
          </div>
        </div>
        <div>
          <img src="" alt="hero image" />
        </div>
      </div>
    </header>
  );
};

export default Banner;
