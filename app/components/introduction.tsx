"use client"
import React, { useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
    const [showModal, setShowModal] = useState(false); // Estado para mostrar/ocultar el modal

    return (
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                <Image
                    src="/avatar-int.png"
                    priority
                    width="600"
                    height="600"
                    alt="Profile pic"
                    className="ml-40"
                />

                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">
                        Si puedes pensarlo, <br />
                        <TypeAnimation
                            sequence={[
                                "puedes programarlo",
                                1000,
                                "puedes optimizarlo",
                                1000,
                                "puedes implementarlo",
                                1000,
                                "puedes desarrollarlo",
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-bold text-secondary text-blue-500"
                        />
                    </h1>

                    <p className="mx-auto mb-2 text-xl md:mx-0 md:mb-8">
                        Desarrollador android y técnico de desarrollo de aplicaciones multiplataforma
                    </p>
                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
                        <a
                            href="/portfolio"
                            className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50"
                        >
                            Ver proyectos
                        </a>
                        <a
                            onClick={() => setShowModal(true)} // Muestra el modal al hacer clic
                            className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary"
                        >
                            Contacta conmigo
                        </a>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                    <div className="w-80 p-6 bg-gray-700 rounded-2xl shadow-xl text-orange-500">
                        <h2 className="mb-4 text-xl font-bold">Contacto</h2>
                        <p className="mb-2">Teléfono: +34 644 430 473</p>
                        <p className="mb-4">Correo: danieloctubre93@gmail.com</p>
                        <button
                            onClick={() => setShowModal(false)} // Cierra el modal
                            className="px-4 py-2 text-white bg-blue-500 rounded-xl hover:bg-blue-600"
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Introduction;
