import { Link } from "react-router-dom";

import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Projects
        </span>
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed'>
        I have embarked on projects that have challenged me and helped me grow as a
        developer in one year<b>(SOME OF THEM ARE STILL A WORK IN PROGRESS SO THE LINK WONT WORK!)</b>. Here are some of my favorites:
      </p>

      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt='threads'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl flex flex-row font-poppins font-semibold'>
                {project.name}
                <span className="mx-3 justify-center items-center flex">
                  {
                    project.status?(
                      <p className="blue-gradient_text">Completed</p>
                    ):(
                      <p className="text-red-500 font-semibold text-sm">Work in progress...</p>
                    )
                  }
                </span>
              </h4>
              <p className='mt-2 text-slate-500'>{project.description}</p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <Link
                  to={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600'
                >
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt='arrow'
                  className='w-4 h-4 object-contain'
                />
              </div>
            </div>
          </div>
        ))}
        <p className="text-red-500 mt-2 leading-relaxed"><b>SOME OF THESE PROJECTS ARE STILL A WORK IN PROGESS SO THE LINKS WONT WORK</b> because its in a private repository</p>
        
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default Projects;
