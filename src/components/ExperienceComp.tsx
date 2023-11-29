interface Link{
    descriptor: string;
    link: string;
}
interface ExpProp {
    dates: string;
    title: string;
    company: string;
    blurb: string;
    tech: string[];
    links: Link[];
}


const ExperienceComponent = ({ dates, title, company, blurb, tech, links }: ExpProp) => {
    return (
        <div id={company} className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover:list:opacity-50 hover:bg-slate-700 m-5 p-5 shadow-lg rounded-lg">
            {/* Removed the absolute positioned div here */}
            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-gray-200 sm:col-span-2" aria-label={dates}>{dates}</header>
            <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                        <span className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base" 
                           aria-label={`${title} at ${company}`}>
                            {/* Removed the absolute positioned span here */}
                            <span>{title} · {company}</span>
                        </span>
                    </div>
                </h3>
                <p className="mt-2 text-sm leading-normal">{blurb}</p>
                <ul className="mt-2 flex">
                    {links.map((link, index)=>(
                        <li key={index} className="mr-1.5 mt-2 hover:text-teal-100 text-teal-300">
                            <a href={link.link}>{link.descriptor}</a>
                        </li>
                    ))}
                </ul>
                <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                    {tech.map((item, index) => (
                        <li key={index} className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">{item}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}


export default ExperienceComponent;
