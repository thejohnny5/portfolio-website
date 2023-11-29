import ExperienceComponent from "@/components/ExperienceComp";
import ResumeLink from "@/components/ResumeLink";
const Experience = () => {
    return (
        <div>
            <ul>
                <li>
                <ExperienceComponent 
                    dates="October 2023 - Present"
                    title="Software Engineer"
                    company="Docketeer (Open Source Product)"
                    blurb={`I had the opportunity to work on Docketeer, an Open Source Product available through Docker Hub
                    as an extension for Docker Desktop. On the frontend, I reduced unnecessary state rerenders by 80% for an improved user experience and 
                    implemented a log search feature.
                    On the backend, I configured scraping for Kubernetes instances and modularized and documented the RestAPI. I also improved the 
                    logic for log parsing, reducing time taken to render container logs by 70x.
                    `}
                    tech={["Typescript", "React", "Docker"]}
                    links={[]}
                    />
                </li>
                <li>
                <ExperienceComponent 
                    dates="November 2021 - May 2023"
                    title="Research Associate II"
                    company="Paratus Sciences"
                    blurb={`I quite literally helped build the lab at this startup. Being one of the first employees, I volunteered to take
                    on the task of setting up our metadata tracking of samples, involving good database design principles for PostreSQL. 
                    I automated data transfer from laboratory sequencing machines to the database, using BenchlingSDK and SMRTLink API and Python. 
                    `}
                    tech={["Python", "Bash", "PostgreSQL", "R", "AWS S3"]}
                    links={[]}
                    />
                </li> 
                <li>
                <ExperienceComponent 
                    dates="August 2020 - October 2021"
                    title="Research Assistant III"
                    company="Icahn School of Medicine"
                    blurb={`I built a pipeline in Snakemake for processing RNAseq data, reducing the number of manual
                    steps by 80%. Using Python and R, I also analyzed and visualized the results. See below for the publication!`}
                    links={[]}
                    tech={["Python", "R", "Bash", "Snakemake"]}
                    />
                </li>
                <li>
                <ExperienceComponent 
                    dates="September 2018 - May 2020"
                    title="Research Assistant"
                    company="University of South Carolina"
                    blurb={`Where it all began! I built a Matlab app for processing of signal data from a biological nanopore and
                    used python to visualize the results.`}
                    tech={["Python", "Matlab"]}
                    links={[]}
                    />
                </li>
                <li>
                    <ResumeLink />
                </li>
            </ul>
           
        </div>
    )
}

export default Experience;