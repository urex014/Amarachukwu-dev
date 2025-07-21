import resume from '../assets/images/resume.jpg';


export default function Resume(){
    
    function downloadResume( filename="resume.pdf"){
        const url = 'https://drive.google.com/file/d/1d1MFXucufh3hSRbtguaZ7JJUVJr3qxjm/view?usp=drive_link'
        const link = document.createElement("a");
        link.href=url;
        link.setAttribute("download", filename);
        link.setAttribute("target", "_blank");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    return (
        <section className="relative flex lg:flex-col flex-col max-container">
            <h1 className="text-3xl font-bold text-center my-8">Resume</h1>
            <img src={resume} alt="Resume" className="w-full h-auto max-w-2xl mx-auto mb-8 rounded-lg shadow-lg" />
            <button onClick={downloadResume} className="btn text-center b-4">Download my resume here.</button>
            
            <p className="text-center">For more details, feel free to contact me.</p>
        </section>
    );
}