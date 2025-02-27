import hero from "@/assets/hero.png";

const Hero = () => {
    return (
        <div>
            <img 
                src={hero} 
                className="w-full h-full object-cover" />
        </div>
    );
};

export default Hero;