import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      options={{
        fpsLimit: 60,
        interactivity: {
          detectsOn: "canvas",
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              quantity: 1,
            },
          },
        },
        particles: {
          color: {
            value: "#000000",
          },
          links: {
            enable: false,
            opacity: 0.03,
          },
          move: {
            direction: "right",
            speed: 0.05,
          },
          number: {
            density: {
              enable: true,
              area: 1500,
            },
            value: 160,
          },
          opacity: {
            animation: {
              enable: true,
              minimumValue: 0.05,
              speed: 1,
            },
            value: 1,
          },
          size: {
            value: 1,
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
