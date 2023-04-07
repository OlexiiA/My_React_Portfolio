import { content } from "../Content"

const Hero = () => {
  
  const { hero } = content;

  const handleDownload = () => {
    fetch("./src/assets/Olexii_CV.pdf")
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "Olexii_CV.pdf");
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      });
  };

  return <section id="home">
    <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
      <div data-aos="slide-left" data-aos-delay="1200" className="absolute h-full md:w-4/12 
      w-8/12 
      top-0 
      right-0 
      bg-primaryLinear 
      bottom-0 -z-10">
        <h1 className="md:rotate-90 sm:rotate-0 absolute sm:top-[5%] sm:right-[20%] md:top-[43%] md:right-[-40%]  text-[#EAF2FA]">{hero.firstName}{" "}
          <span className="text-dark_primary">{hero.LastName}</span>
        </h1>
      </div>

      {/* first colone */}
      <div className="pb-16 px-6 pt-5" data-aos="fade-down">
        <h2>{hero.title}</h2>
        <br />
        <div className="flex justify-end">
          {/* <a href="https://t.me/OlexiiA" alt="..." className="btn">{hero.btnText}</a> */}
         
          <button onClick={handleDownload} className="btn hover:bg-dark_primary hover:text-[#EAF2FA]">Download CV</button>
          
        </div>
        <div className="flex flex-col gap-10 mt-10">
          {hero.hero_content.map((content, i) => (
            <div key={i} data-aos="fade-down" data-aos-delay={i * 300} className={`flex items-center w-80 gap-5 ${i === 1 && "flex-row-reverse text-right"}`}>
              <h3>{content.count}</h3>
              <p>{content.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* second colone */}
      <div className="md:h-[37rem] h-96">
        <img src={hero.image} alt="..." className="h-full object-cover " data-aos="slide-up" />
      </div>
    </div>
  </section>;
};

export default Hero;
