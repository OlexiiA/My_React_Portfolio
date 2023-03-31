import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import { content } from "../Content"

const Projects = () => {
  const { Projects } = content;

  return <section className="bg-bg_primary" id='projects'>
    <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
      <div>
        <h2 className="title" data-aos="fade-down">{Projects.title}</h2>
        <h4 className="subtitle" data-aos="fade-down" >{Projects.subtitle}</h4>
        <br />
      </div>
      <div className="flex items-center lg:flex-row flex-col-reverse gap-5">
        <img src={Projects.image} alt="..." data-aos="fade-right" className="max-w-[45vw] min-w-[22rem]" />
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          data-aos="fade-left"
          className="rounded-3xl pb-16 max-w-xs drop-shadow-primary self-start"
        >
          {Projects.project_content.map((content, i) => (
            <SwiperSlide key={i} className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit" style={{ borderRadius: "1rem" }}>
              <img src={content.image} alt="..." />
              <div className="flex flex-col gap-1 mt-2">
                <h5 className="font-bold font-Poppins">{content.title}</h5>
                <a href={content.link} alt="..." className="font-bold text-gray self-end">Visit</a>
              </div>
            </SwiperSlide>

          ))}
        </Swiper>
      </div>
    </div>
  </section>;
};

export default Projects;
