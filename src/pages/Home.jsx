import  heroImg from "../assets/images/heroImg.png"
import Navbar from "../components/common/Navbar";
import Particles from "../components/magicui/Particles";    

const Home = () => {

    const color = '#BCFF9F';  // '#000' pe black ho jayega vo bhi ek baar check kar lena
    return (
        <div className="relative h-screen w-screen rounded-lg border bg-theme md:shadow-xl flex flex-col gap-y-16">
                
            <Particles
                className="absolute inset-0"
                quantity={300}
                ease={30}
                color={color}
                size={2}
            />

            <Navbar />

            {/* HERO SECTION */}

            <div className=" relative mx-auto w-11/12 mt-44 max-w-maxContent text-black flex justify-between">
                
                <div className="w-[50%] flex flex-col gap-y-5">
                    <h2 className=" text-black font-semibold  text-6xl">Unlock Your Academic Potential with Us</h2>
                    <p className="text-md text-black font-normal tracking-wide">Welcome to our notes website, where you can access a wide range of university notes and last year papers. Explore our collection and enhance your learning experience today.</p>
                    <div className="flex gap-x-5">
                      
                        <button className="p-3 bg-[#d9d9d9] rounded-md">Learn More</button>
                        <button className="p-3 bg-[#0F1B09] text-white rounded-md">Learn More</button>
                    </div>
                </div>

                <div className="">
                    <img src={heroImg} width={500} />
                </div>

            </div>
            
        </div>
    );
};

export default Home;