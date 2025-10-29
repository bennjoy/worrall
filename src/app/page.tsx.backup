"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  const services = [
    { name: "WEDDINGS", href: "/properties/marle-hall" },
    { name: "CONFERENCES", href: null },
    { name: "EVENTS", href: null },
    { name: "WEDDINGS", href: null },
    { name: "CONFERENCES", href: null },
    { name: "EVENTS", href: null }
  ];

  useEffect(() => {
    let bubbleCount = 0;
    let inactivityTimeout: NodeJS.Timeout;
    
    // Set initial timeout when page loads
    const setInactivityTimer = () => {
      clearTimeout(inactivityTimeout);
      inactivityTimeout = setTimeout(() => {
        const holochrome = document.querySelector('.holochrome-background') as HTMLElement;
        if (holochrome) {
          holochrome.classList.add('inactive');
          console.log('Added inactive class, element:', holochrome);
        } else {
          console.log('Could not find holochrome element');
        }
        

      }, 1000);
    };
    
    // Start the initial timer
    setInactivityTimer();
    
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      document.documentElement.style.setProperty('--mouse-x', x.toString());
      document.documentElement.style.setProperty('--mouse-y', y.toString());
      
      // Reactivate holochrome colors
      const holochrome = document.querySelector('.holochrome-background') as HTMLElement;
      if (holochrome) {
        holochrome.classList.remove('inactive');
        console.log('Removed inactive class');
      }
      
      // Reset the inactivity timer
      setInactivityTimer();
      
      // Create cursor trail bubbles
      bubbleCount++;
      if (bubbleCount % 1 === 0) { // Create bubble on every mouse move for maximum frequency
        const bubble = document.createElement('div');
        bubble.className = 'cursor-bubble';
        bubble.style.left = `${e.clientX - 12}px`; // Center the 24px bubble
        bubble.style.top = `${e.clientY - 12}px`;
        
        document.body.appendChild(bubble);
        
        // Remove bubble after animation completes
        setTimeout(() => {
          if (bubble.parentNode) {
            bubble.parentNode.removeChild(bubble);
          }
        }, 500);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(inactivityTimeout);
      // Clean up any remaining bubbles
      const bubbles = document.querySelectorAll('.cursor-bubble');
      bubbles.forEach(bubble => bubble.remove());
    };
  }, []);

  return (
    <div className="h-screen bg-gray-300 flex flex-col justify-center overflow-hidden">
      {/* Main Logo - positioned left and cut off with holochrome effect */}
      <div className="flex items-center justify-start -ml-8 mb-8">
        <div className="holochrome-logo-container">
          {/* Size reference - keeps container dimensions */}
          <Image
            src="/assets/worrallmask.svg"
            alt="Worrall"
            width={1200}
            height={600}
            className="holochrome-logo-reference w-auto h-80 md:h-96 lg:h-[30rem] xl:h-[36rem]"
            priority
          />
          
          {/* Holographic background */}
          <div className="holochrome-background"></div>
          
          {/* Dynamic shadow that follows mouse as light source */}
          {/* <Image
            src="/assets/worrallmask.svg"
            alt="Worrall Shadow"
            width={1200}
            height={600}
            className="holochrome-logo-shadow w-auto h-80 md:h-96 lg:h-[30rem] xl:h-[36rem]"
            priority
          />
           */}
          {/* Negative mask logo in original color - sits over holochrome */}
          <Image
            src="/assets/worrallmask.svg"
            alt="Worrall"
            width={1200}
            height={600}
            className="holochrome-logo-mask w-auto h-80 md:h-96 lg:h-[30rem] xl:h-[36rem]"
            priority
          />
          
          {/* Border overlay to hide shadow bleed outside logo area */}
          <div className="holochrome-border-overlay"></div>
        </div>
      </div>

      {/* Horizontally Scrolling service Names */}
      <div className="pb-20 overflow-hidden">
        <div className="flex items-center space-x-8 animate-scroll">
          {[...services, ...services, ...services, ...services].map((service, index) => (
            <div key={index} className="flex items-center space-x-8">
              {service.href ? (
                <Link href={service.href}>
                  <div className="text-white text-3xl font-playfair-display font-bold tracking-[0.3em] whitespace-nowrap hover:opacity-80 transition-opacity cursor-pointer">
                    {service.name}
                  </div>
                </Link>
              ) : (
                <div className="text-white text-3xl font-playfair-display font-bold tracking-[0.3em] whitespace-nowrap">
                  {service.name}
                </div>
              )}
              {/* White dot separator */}
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
