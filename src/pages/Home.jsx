import Particles from "../components/magicui/Particles";    
import Navbar from "../components/Navbar";

const Home = () => {

    const color = '#fff'  // '#000' pe black ho jayega vo bhi ek baar check kar lena


    return (
        <div className="relative h-screen w-screen overflow-hidden rounded-lg border bg-greenGrey md:shadow-xl">
            

            <Particles
                className="absolute inset-0"
                quantity={300}
                ease={30}
                color={color}
            />
            <Navbar/>
        </div>
    );
};

export default Home;