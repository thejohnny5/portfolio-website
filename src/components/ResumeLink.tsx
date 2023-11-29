const ResumeLink = () => {
    return (
        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover:list:opacity-50">
            <a href="/Jonathan_Gray_resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">
            Full Resume
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24" className="ml-2">
                <path d="M9 18l6-6-6-6v12z"/>
            </svg>
            </a>
        </div>
    );
}

export default ResumeLink;
