import Image from "next/image";
import Link from "next/link";
import { dataPortfolio } from "@/data";
import AvatarPortfolio from "@/app/components/avatar-portfolio";
import CircleImage from "@/app/components/circle-image";
import TransitionPage from "@/app/components/transition-page";
import ContainerPage from "@/app/components/container-page";
import PortfolioBox from "@/app/components/portfolio-box";

const PortfolioPage = () => {
    return (
        <ContainerPage>
            <TransitionPage />
            <AvatarPortfolio />
            <CircleImage />
            
            {/* Contenedor principal centrado */}
            <div className="flex flex-col justify-center items-center h-full w-full text-center">
                <h1 className="text-2xl leading-tight md:text-4xl md:mb-2">
                    Mis últimos <span className="font-bold text-secondary">trabajos realizados</span>
                </h1>
            </div>

            {/* Contenedor para los elementos de PortfolioBox */}
            <div className="w-full max-w-7xl mx-auto mt-8 px-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center justify-center">
                {dataPortfolio.map((data) => (
                    <PortfolioBox key={data.id} data={data} />
                ))}
            </div>
        </ContainerPage>
    );
}

export default PortfolioPage;

