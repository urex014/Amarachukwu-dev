import resume from '../assets/images/resume.jpg';


export default function Resume(){
    return (
        <section className="relative flex lg:flex-row flex-col max-container">
            <h1 className="text-3xl font-bold text-center my-8">Resume</h1>
            <img src={resume} alt="Resume" className="w-full h-auto max-w-2xl mx-auto mb-8 rounded-lg shadow-lg" />
            <button onClick={()=>{
                window.open('src/assets/resume.pdf','_blank')
            }} className="btn">Download my resume here</button>
            <p className="text-center pt-5">For more details, feel free to contact me.</p>
        </section>
    );
}