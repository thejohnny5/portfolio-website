import Image from "next/image";

const About = () => {
    return (
    <div className="max-w-4xl mx-auto flex flex-col md:flex-flex-row">

    <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8 max-w-8xl mx-auto">
        <div className="rounded-full overflow-hidden w-192 h-192 md:w-192 md:h-192"> {/* Adjust size as needed */}
            <Image
                src="/headshot.jpg"
                alt="JonathanGray"
                width={192}  // Corresponds to the size of the container
                height={192} // Corresponds to the size of the container
                priority
            /> 
        </div>
            <div>
                <h1 className="text-2xl font-bold mb-4">Jonathan Gray</h1>
                <div>
                    <div>
                    <h2 className="text-xl font-semibold mb-2">Education</h2>
                        <p className="mb-1">CodeSmith Software Engineering Immersive (2023)</p>
                        <br />
                        <p className="mb-1">BS Biomedical Engineering Minor Chemistry (2016-2020)</p>
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
        </div>
    )
}

export default About;
