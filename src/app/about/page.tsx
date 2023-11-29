import Image from "next/image";

const About = () => {
    return (
        <div className="flex items-start space-x-8">
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
                    <div>
                        <h2 className="text-xl font-semibold mb-2">About Me</h2>
                            <p>{`I started dabbling in software engineering during college, mostly when working in a research lab. There, I got my hands dirty with application development, mainly focused on signal processing and visualization, using tools like Matlab and Python. After college, I moved to New York City and joined a startup. My work there was a mix of lab stuff and more techy tasks like developing SQL schema for tracking metadata.`}</p>
                            <br />
                            <p>{`My career path shifted over time, moving from lab work to full-blown software development. This change led me to work on some cool Open Source projects, like `}<a href="#Docketeer (Open Source Product)" className="text-teal-300 hover:text-teal-100">Docketeer</a>.</p>
                            <br />
                            <p>{`When I'm not coding, I keep things balanced with physical and creative hobbies. I'm into Muay Thai and playing guitar – they're great ways to unwind and balance out my work life.`}</p>
                            <br />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
