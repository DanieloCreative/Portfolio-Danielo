import AvatarServices from "@/app/components/avatar-services";
import CoverParticles from "@/app/components/cover-particles";
import CircleImage from "@/app/components/circle-image";
import SliderServices from "@/app/components/slider-services";
import TransitionPage from "@/app/components/transition-page";

const ServicesPage = () => {
    return (
        <>

            <TransitionPage />
            <CoverParticles/>
            <CircleImage />
            <AvatarServices />
            <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2">
                <div className="max-w-[450px] mt-20 md:mt-0">

                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">Mis <span className="font-bold text-secondary"> servicios.</span></h1>
                    <p className="mb-3 text-xl text-gray-300">Ofrezco servicios como aplicaciones moviles para android o desarrollo de paginas webs, usando
                        kotlin, bases de datos de diferentes tipos, y varias tecnologias que estoy aprendiendo.
                    </p>
                    
                </div>

                {/* SLIDER */}
                <div>
                    <SliderServices />
                </div>
            </div>
        </>
    );
}

export default ServicesPage;
