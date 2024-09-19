import { Particles } from 'react-tsparticles'
import { loadFull } from 'tsparticles';
import React, { useCallback } from 'react';

const NotFoundParticales = () => {

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async () => { }, [])

  return (
    <Particles
      className='w-full h-full absolute translate-z-0 '
      id='tsparticles'
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: false },
        background: {
          color: {
            value: ''
          },
        },
        fps_limit: 120,
        interactivity: {
          events: {
            onclick: {
              enable: true, // Particles will be attracted to the mouse click position
              mode: 'repulse'
            },
            onhover: {
              enable: true,
              mode: 'repulse' // Particles are attracted to the cursor on hover
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 90
            },
            attract: {
              distance: 200,
              duration: 0.4
            }
          }
        },
        particles: {
          color: {
            value: '#F9F9F9' // Change the color of the particles
          },
          links: {
            color: "transparent",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1
          },
          collisions: {
            enable: true,
          },
          move: {
            directions: 'none',
            enable: true,
            outModes: {
              default: 'bounce'
            },
            random: false,
            speed: 1, // Increase speed
            straight: false
          },
          number: {
            density: {
              enable: true,
              area: 800
            },
            value: 15
          },
          opacity: {
            value: 0.8,
          },
          shape: {
            // type: 'star' ,
            type: 'image',  // Use 'image' as the type
            image: {
              src: '/404notFound.png',  // Replace with your image URL
              width: 100,
              height: 100
            }
          },
          size: {
            value: { min: 30, max:35 } // Increase the size range
          },
        },
        detectRetina: true
      }}
    />
  )
};

export default NotFoundParticales;
