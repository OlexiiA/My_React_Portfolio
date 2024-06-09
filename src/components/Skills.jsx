import { createElement, useState } from "react";
import Modal from 'react-modal';
import { content } from "../Content";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '23rem',
    width: '90%',
  },
  overlay: {
    padding: '2rem'
  }
};

Modal.setAppElement('#root');

const Skills = () => {
  const { skills } = content;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectSkill, setSelectSkill] = useState(null);

  function openModal() {
    setIsOpen(true);
  };

  function closeModal() {
    setIsOpen(false);
  };

  return (
    <section className="min-h-fit bg-bg_light_primary pb-20" id="skills">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="flex items-center gap-2">
          <img className="h-10" src={selectSkill?.logo} alt="..." />
          <h6>{selectSkill?.name}</h6>
        </div>
        
        <ul className="list-decimal px-4 font-Poppins sm:text-sm text-xs !leading-7" >
          <li>I regularly familiarize myself with best practice recommendations to stay abreast of current trends.</li>
          <li>I devote a lot of time to honing my programming skills, but I also make time for other interests.</li>
          <li>I strive to write clean and understandable code that would be easy to maintain and expand.</li>
        </ul>
       
        <div className="flex justify-end">
          <button onClick={closeModal} className="btn">Close</button>
        </div>
      </Modal>

      {/* Content */}
      <div className="md:container px-5 py-14 ">
        <h2 className="title" data-aos="fade-down">{skills.title}</h2>
        <h4 className="subtitle" data-aos="fade-down">{skills.subtitle}</h4>
      </div>
      <br />
      <div className="flex flex-wrap gap-4 justify-center ">
        {skills.skills_content.map((skill, i) => (
          <div
          data-aos="fade-up" data-aos-delay={i * 400}
            key={i}
            className="bg-white sm:cursor-pointer relative group w-full flex items-center gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200"
          >
            <div>
              <img
                src={skill.logo}
                alt="..."
                className="w-10 group-hover:scale-125 duration-200 "
              />
            </div>
            <div>
              <h3 className="text-4xl">{skill.name}</h3>
              <p className="italic">{skill.para}</p>
              <div onClick={() => {
                setSelectSkill(skill);
                openModal();
              }}
                className="text-xl absolute top-3 right-3">
                {createElement(skills.icon)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
