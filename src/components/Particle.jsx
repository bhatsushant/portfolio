import React from 'react';
import Particles from 'react-tsparticles';

export default function Particle() {
  return (
    <Particles
      options={{
        autoPlay: true,
        fullScreen: {
          enable: true,
          zIndex: -1,
        },

        detectRetina: true,
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: 'push',
            },
            onDiv: {
              elementId: 'repulse-div',
              enable: true,
              mode: 'connect',
            },
            onHover: {
              enable: true,
              mode: ['repulse', 'bubble'],
              parallax: {
                enable: true,
                force: 60,
                smooth: 10,
              },
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 10,
              speed: 3,
            },
            connect: {
              distance: 80,
              lineLinked: {
                opacity: 0.5,
              },
              radius: 60,
            },
            grab: {
              distance: 400,
              lineLinked: {
                opacity: 1,
              },
            },
            push: {
              quantity: 4,
            },
            remove: {
              quantity: 2,
            },
            repulse: {
              distance: 100,
              duration: 100,
            },
          },
          detectsOn: 'window',
        },
        particles: {
          color: {
            value: '#DCD7C9',
          },
          lineLinked: {
            blink: false,
            color: '#DCD7C9',
            consent: false,
            distance: 300,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            attract: {
              enable: false,
              rotate: {
                x: 600,
                y: 1200,
              },
            },
            bounce: true,
            direction: 'none',
            enable: true,
            outMode: 'out',
            random: true,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 650,
            },
            limit: 500,
            value: 20,
          },
          opacity: {
            animation: {
              enable: false,
              minimumValue: 0.1,
              speed: 1,
              sync: false,
            },
            random: false,
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            animation: {
              enable: false,
              minimumValue: 0.1,
              speed: 40,
              sync: false,
            },
            random: true,
            value: 5,
          },
        },
        polygon: {
          draw: {
            enable: false,
            lineColor: '#ffffff',
            lineWidth: 0.5,
          },
          move: {
            radius: 10,
          },
          scale: 1,
          type: 'none',
          url: '',
        },
        background: {
          color: '#000',
          opacity: '1',
          image: '',
          position: '50% 50%',
          repeat: 'no-repeat',
          size: 'cover',
        },
      }}
    />
  );
}
