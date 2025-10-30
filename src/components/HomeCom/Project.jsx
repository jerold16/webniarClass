import React, { useState } from 'react'

const Project = () => {
    let [selectedContent, setSelectedContent] = useState(0)
    let projects = [
        {
            heading: 'Home counstruction', content: `
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolore consequatur ipsa voluptas dignissimos accusantium ad doloribus fugiat nesciunt quae?
            ` },
        {
            heading: 'Home building', content: `
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolore consequatur ipsa voluptas dignissimos accusantium ad doloribus fugiat nesciunt quae?
            ` },
        {
            heading: ' counstruction', content: `
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolore consequatur ipsa voluptas dignissimos accusantium ad doloribus fugiat nesciunt quae?
            ` },
        {
            heading: 'Home Cleaning', content: `
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolore consequatur ipsa voluptas dignissimos accusantium ad doloribus fugiat nesciunt quae?
            ` },
        {
            heading: 'Cleaning counstruction', content: `
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolore consequatur ipsa voluptas dignissimos accusantium ad doloribus fugiat nesciunt quae?
            ` },
        {
            heading: 'Home Equipment', content: `
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolore consequatur ipsa voluptas dignissimos accusantium ad doloribus fugiat nesciunt quae?
            ` },
        {
            heading: 'COllege counstruction', content: `
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolore consequatur ipsa voluptas dignissimos accusantium ad doloribus fugiat nesciunt quae?
         ` },
    ]
    
    return (
        <div className=' py-4 ' >
            <main className=' container mx-auto rounded-xl flex fixedimg min-h-[80vh] ' >

                <section className=' w-[90%] mx-auto mt-auto row relative ' >
                    <article className=' rounded-t-2xl bg-slate-800/70 text-white min-h-[40vh] p-3 col-lg-6 mt-auto ' >
                        <div className=' '>
                            <div className=' text-3xl lg:text-4xl ' >
                                Our Project
                            </div>
                            <div className=' h-[50vh] overflow-y-auto ' >
                                {
                                    projects?.map((proj, index) => (
                                        <div key={index} onClick={() => setSelectedContent(index)}

                                            className={` ${selectedContent == index ? ' bg-white text-slate-800 ' : ''}
                                             duration-300 py-3 rounded-t-xl my-2 border-b-[1.4px] border-slate-50 cursor-pointer `} >
                                            <div className=' px-2 ' >
                                                {proj.heading}
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </article>
                    <article className='h-[40vh] col-lg-6 mt-auto bg-white p-3 rounded-tr-2xl ' >
                        <div>
                            <h5 className=' text-blue sans '>{projects[selectedContent]?.heading || " Hellow tehre "}</h5>
                            <p className=' text-slate-700 ' >
                                {projects[selectedContent]?.content || `    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae fugit temporibus est, beatae dicta eaque deserunt expedita,
                                cupiditate exercitationem optio eligendi quasi necessitatibus nemo aliquam molestiae illum dolor debitis voluptas?
                            `}</p>
                        </div>
                    </article>
                </section>
            </main>
        </div>
    )
}

export default Project
