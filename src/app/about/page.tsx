import Image from "next/image";

const About = () => {
    return (
        <div className="flex items-start space-x-8 max-w-8xl mx-auto">
            <div className="rounded-full overflow-hidden w-192 h-192">
                <Image
                    src="/headshot.jpg"
                    alt="Jonathan"
                    width={768}
                    height={768}
                    priority
                /> 
            </div>
            <div>
                <h1 className="text-2xl font-bold mb-4">Jonathan Gray</h1>
                <div>
                    <div>
                    <h2 className="text-xl font-semibold mb-2">Education</h2>
                        <p className="mb-1">CodeSmith Software Engineering Immersive</p>
                        <br />
                        <p className="mb-1">BS Biomedical Engineering (Minor Chemistry)</p>
                        <p className="mb-4">University of South Carolina</p>
                    </div>
                    <br />
                    <div>
                        <h2 className="text-xl font-semibold mb-2">About Me</h2>
                            <p>{`Greetings! I'm a Software Engineer with 3 years of experience in the research and healthcare space. Take a look at some of `}<a href="#projects" className="text-teal-300 hover:text-teal-100">my projects</a>{` or connect with me to talk about Software Engineering or Muay Thai.`}</p>
                            <br />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
