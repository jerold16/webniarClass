import React from 'react'
import homeBanner from '../../assets/Home/homeBanner.jpg'
import RightArrowIcon from '../../Icons/RightArrowIcon'
const HomeBanner = () => {
    return (
        <div className=' overflow-hidden ' >
            <main className='  relative h-[80vh] ' >
                <img src={homeBanner} alt="Home Banner"
                    className=' w-full absolute object-fit-cover h-full ' />
                <section className=' relative w-full h-full bg-white bg-opacity-25 ' >
                    <article className=' w-full h-full container mx-auto row relative ' >
                        <section className=' flex col-lg-10 col-xl-7  ' >
                            <div className=' my-auto ' >
                                <h2 className=' text-5xl! lg:text-7xl! ' >
                                    Building Better Homes <br />
                                    <span className=' text-blue  ' > for a Better Living </span>
                                </h2>
                                <div className=' flex gap-3 items-center' >
                                    {/* Message us */}
                                    <a className='cursor-pointer jakarta border-[2px] br-blue text-white p-3 px-3 bg-blue text-decoration-none flex w-fit items-center gap-3 ' >
                                        <span className=' -rotate-45 ' >
                                            <RightArrowIcon />
                                        </span>
                                        MESSAGE US
                                    </a>
                                    {/* Call us */}
                                    <a className='cursor-pointer jakarta text-slate-800! p-3 px-3 bg-white border-[2px] border-slate-800 text-decoration-none flex w-fit items-center gap-3 ' >
                                        <span className=' -rotate-45 ' >
                                            <RightArrowIcon />
                                        </span>
                                        CALL US
                                    </a>
                                </div>
                            </div>
                        </section>
                    </article>
                </section>
            </main>
        </div>
    )
}

export default HomeBanner
