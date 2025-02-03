import React from 'react';
import Link from "next/link";
import { socialNetworks } from '@/data';
import MotionTransition from './transition-component';

const Header = () => {
  return (
    <MotionTransition 
      position="bottom" 
      className="absolute z-40 w-full top-5 md:top-10 px-20 bg-darkBg/60"
    >
      <header className="container justify-between items-center max-w-6xl mx-auto md:flex">
        <Link href="/">
          <h1 className="my-3 text-4xl font-bold text-center md:text-left">
            Danie
            <span className="text-secondary">Lo</span>
            {" "} {/* Espacio entre "Danielo" y "Creative" */}
            Creati
            <span className="text-secondary">Ve</span>
          </h1>
        </Link>
        <div className="flex items-center justify-center gap-7 mt-4 md:mt-0">
          {socialNetworks.map(({ logo, src, id }) => (
            <Link
              key={id}
              href={src}
              target="_blank"
              rel="noopener noreferrer" // Seguridad para evitar acceso indebido
              className="transition-all duration-300 hover:text-secondary"
            >
              {logo}
            </Link>
          ))}
        </div>
      </header>
    </MotionTransition>
  );
};

export default Header;
