import React from 'react'
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const particlesLoaded = (container) => {
    console.log(container);
  };
  
const ParticlesBackground = () => {

   const [ init, setInit ] = useState(false);
   
   useEffect(() => {
        initParticlesEngine(async (engine) => {
        await loadSlim(engine);

    }).then(() => {
        setInit(true);
    });
    }, []);


    //  I Tried with App.css also but not working #tsparticles { height:100px} NOT WORKING

  return (
    <div>

    { 
        init && <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={{
            background: {
                color: {
                    value: "#6b6a51",
                },
            },
            fpsLimit: 100,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                    resize: true,
                },
                modes: {
                    push: {
                        quantity: 5,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: "#64AE08",
                },
                links: {
                    color: "#64AE06",
                    distance: 150,
                    enable: true,
                    opacity: 1,
                    width: 3,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 6,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 5 },
                },
            },
            detectRetina: true,
        }}
    />
  }
</div>
  )
}

export default ParticlesBackground
