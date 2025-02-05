import Image from "next/image";
import { MotionTransition } from "./transition-component";

const AvatarServices = () => {
    return (
        <MotionTransition position='right' className="bottom-0 left-2 hidden md:inline-block md:absolute">
            <Image src="/avatar-serv.png" width="300" height="300" className="w-[350px] h-full " alt="Particles " />
        </MotionTransition>
    );
}

export default AvatarServices;