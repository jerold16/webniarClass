import React, { useState } from 'react'
import banner1 from '../../assets/Home/msBuildersConstructionMission.jpg'


const OurVissionMission = () => {
    let [showData, setShowData] = useState()
    let cards = [
        {
            title: 'Our Mission', heading: 'Turning Spaces into Beautiful Homes Through Quality Construction and Thoughtful Design', img: banner1,
            content: `We believe every home should reflect your personality and feel uniquely yours. Our skilled team combines craftsmanship and innovative design to create inviting spaces that prioritize quality,
            comfort, and reliability. Every project is built with care, so your home feels just right for years to come.`
        },
        {
            title: 'Our Vision', heading: 'Building Strong Foundations That Bring Families Together and Create Lasting Memories.', img: banner1,
            content: `We aim to create homes where you’ll love to live. Our spaces are designed for families to grow, connect, and celebrate life together. Every corner is designed to be warm and welcoming,
            ensuring you can enjoy precious moments with loved ones, in a place that feels like home.`
        },
    ]
    return (
        <div className=' my-4 ' >
            <main className='container mx-auto py-4 ' >
                {
                    cards.map((obj, index) => (


                        <section key={index} className=' row ' >
                            <div onClick={() => setShowData(obj.title)}

                                className='sans text-4xl tracking-wide py-2 border-b-[1.3px] cursor-pointer lg:text-8xl ' >
                                {obj.title}
                            </div>
                            <main className={` ${showData == obj.title ? '   ' : ' max-h-0 overflow-hidden '} duration-500 row `} >
                                <section className=' col-lg-6 my-3 ' >
                                    <img src={obj.img} alt="Banner1"
                                        className=' rounded mx-auto  max-w-[25rem]  ' />
                                </section>
                                <section className=' col-lg-6 my-3 flex ' >
                                    <article className=' my-auto ' >
                                        <div className=' text-lg fw-medium ' >
                                            {obj.heading}
                                        </div>
                                        <div className=' mt-2 ' >
                                            {obj?.content}
                                        </div>
                                    </article>
                                </section>
                            </main>
                        </section>))
                }
            </main>
        </div>
    )
}

export default OurVissionMission
