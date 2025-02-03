"use client"
import TransitionPage from "@/app/components/transition-page";
import ContainerPage from "@/app/components/container-page";
import Avatar from "@/app/components/avatar";
import CounterServices from "@/app/components/counter-services";
import TimeLine from "@/app/components/time-line";

const AboutMePage = () => {
    return (
        <div className="z-20 w-full bg-darkBg/60"> {/* Aquí aplicamos el fondo */}
            <TransitionPage />
            <ContainerPage>
                <Avatar />
                <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
                    Toda mi{' '}
                    <span className="font-bold text-secondary">
                        trayectoria profesional
                    </span>
                </h1>

                <CounterServices />
                <TimeLine />
            </ContainerPage>
        </div>
    );
}

export default AboutMePage;