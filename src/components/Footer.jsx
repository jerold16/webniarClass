import React from 'react'
import RightChevIcon from '../Icons/RightChevIcon'
import FacebookIcon from '../Icons/FacebookIcon'

const Footer = () => {
    return (
        <div className=' min-h-[40vh] bg-[#222222] text-white '>
            <main className=' row py-3 container mx-auto ' >
                <section className=' col-md-6 ' >
                    <div className=' flex items-center gap-2 ' >
                        <RightChevIcon />
                        <div className=' text-xl fw-medium text-[#8cad28] ' >
                            Let's Talk
                        </div>
                    </div>
                    <div>
                        <h6 className=' text-3xl! lg:text-5xl! my-2 ' > We're just a click away! </h6>
                        <p className=' text-slate-400 text-lg ' >
                            Need to know more about our services? Feel free to contact us anytime. We’re here to help you build your dream space!
                        </p>
                    </div>
                    {/* Numbers */}
                    <div className=' text-slate-400 flex gap-3 items-center ' >
                        <a href="tel:+919797979797" target='_blank' className=' text-decoration-none text-white text-2xl ' > +919797979797 </a>
                        or
                        <a href="https://wa.me/+919797979797" target='_blank' className=' text-decoration-none text-white text-2xl '  > Chat Now </a>
                    </div>
                    {/* Social media links */}
                    <div className=' flex items-center gap-2 ' >
                        <div className=' rounded-full! p-1 bg-[#2b2b2b] text-white  cursor-pointer 
                        w-[3rem] flex items-center justify-content-center h-[3rem] pb-0 ' >
                            <a href='https://facebook.com' target='_blank' className=' text-white! ' >
                                <FacebookIcon />
                            </a>
                        </div>
                    </div>
                </section>
                <section className=' col-md-3 ' >
                    <h6 className=' text-3xl! ' >Office Address</h6>
                    <p className=' text-slate-400 ' >
                        9A, Tamilnadu Grama Bank 1st Floor,
                        Trichy -Karur Main Road,
                        Kadambar Kovil,
                        Kulithalai- 639104
                    </p>
                </section>

            </main>

        </div>
    )
}

export default Footer
