import React from 'react'
import PhoneIcon from '../Icons/PhoneIcon'
import MailIcon from '../Icons/MailIcon'
import InstagramIcon from '../Icons/InstagramIcon'
import YoutubeIcon from '../Icons/YoutubeIcon'

const MiniNavbar = () => {
    return (
        <div className=' d-none d-sm-block  ' >
            <main className=' row px-3 border-b-[1.4px] border-slate-200 py-2 ' >
                <section className=' col-sm-8 flex-wrap flex gap-3 items-center ' >
                    <div className=' flex items-center gap-2 text-decoration-none  ' >
                        <span className=' text-blue ' >  <PhoneIcon /> </span>
                        <a href="tel:+919898989898" className=' text-decoration-none text-[14px] text-slate-800! ' > +91 9898989898 </a>
                    </div>

                    {/* Mail */}
                    <div className=' flex items-center gap-2 text-decoration-none  ' >
                        <span className=' text-blue ' >  <MailIcon /> </span>
                        <a href="mailto:jeroldraja1@gmail.com" className=' text-decoration-none text-[14px] text-slate-800! ' > jeroldraja@gmail.com </a>
                    </div>
                    {/* Timing */}
                    <div className=' flex items-center gap-2 text-decoration-none  ' >
                        <span className=' text-blue ' >  <PhoneIcon /> </span>
                        <a href="+919898989898" className=' text-decoration-none text-[14px] text-slate-800! ' > +91 9898989898 </a>
                    </div>
                </section>
                <section className=' col-sm-4 flex items-center gap-3 justify-content-end ' >

                    <a href="">
                        <InstagramIcon size={25} />
                    </a>
                    <a href="">
                        <YoutubeIcon size={30} />
                    </a>
                </section>
            </main>
        </div>
    )
}

export default MiniNavbar
