"use client"

import MotionTransition from "./transition-component";
import Image from "next/image";

const Avatar = () => {
    return (
        <MotionTransition position="bottom" className="bottom-0 left-0 hidden md:inline-block md:absolute">

              <Image src ="/pruebaa.png" width={400} height={400}
                className="w-full h-full" alt="Avatar"/>

        </MotionTransition>

    );
}

export default Avatar;