import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import pic from '../Assets/ai-visual-inspection.webp'
import SmallHeading from './SmallHeading'
import SmallHeading2 from './SmallHeading2'
import Carousel from './Carousel'
import CustomerCarousel from './CustomerCarousel'


function Home() {

    const carouselImages = ["https://www.ombrulla.com/best-western.webp", "https://www.ombrulla.com/dubai-festival-city.webp", "https://www.ombrulla.com/wild-leaf.webp", "https://www.ombrulla.com/emirates.webp", "https://www.ombrulla.com/burger-king.webp", "https://www.ombrulla.com/damac.webp", "https://www.ombrulla.com/planet-fitness.webp", "https://www.ombrulla.com/suja.webp", "https://www.ombrulla.com/azelit.webp"]


    return (
        <>
            {/* Section 1 */}
            <div className='container px-24 h-screen grid grid-cols-2'>
                <div className='flex flex-col items-start justify-center pb-14'>
                    <h1 className='text-6xl font-bold'>Manual</h1>
                    <h1 className='text-6xl font-bold'>Inspection is</h1>
                    <h1 className='text-6xl font-normal text-blue-600'>Slow & Error-</h1>
                    <h1 className='text-6xl font-normal text-blue-600'>Prone</h1>
                    <p className='text-gray-500 text-lg mt-8 font-normal leading-6'>AI visual inspection, powered by computer vision, revolutionises the inspection process in manufacturing, enhancing precision and cost-effectiveness, all the while maintaining product excellence</p>
                    <div className='flex justify-start items-center mt-7'>
                        <button className="px-7 py-4 rounded-full  hover:border border-black  bg-blue-600 text-white  hover:bg-white hover:text-blue-600 font-semibold">Schedule Call</button>
                        <button className="size-14 rounded-full  bg-blue-600 text-white  hover:bg-white hover:text-blue-600 ml-11 hover:shadow-sm">
                            <i className="fa-solid fa-play fa-xl"></i>
                        </button>
                        <Link className='hover:text-blue-600 ml-5' to={''}>Watch Video</Link>
                    </div>
                </div>
                <div className='mask flex justify-center items-start'>
                    <img src={pic} alt="AI inspection" />
                </div>
            </div>
            {/* Section 2 */}
            <div className='section2 flex items-center justify-center mx-auto bg-cover w-11/12 rounded-3xl mb-36'>
                <div className='m-44 text-left'>
                    <SmallHeading value={'The Best AI Service Provider'} />
                    <h1 className='text-5xl font-normal mt-6'>Crafting Tomorrow's World with <span className='text-blue-600'>AI Excellence</span></h1>
                    <p className='text-gray-500 mr-20 mt-6'>The majority of customers lack data-driven insights and automation. Using AI, Ombrulla assist clients in extracting data from diverse sources such as photos, videos, and data lakes, which can assist businesses in making data-driven insights and improving their bottom line. </p>
                    <div className='flex justify-start items-center mt-5'>
                        <button className="size-14 rounded-full  bg-blue-600 text-white  hover:bg-white hover:text-blue-600  hover:shadow-sm">
                            <i className="fa-solid fa-play fa-xl"></i>
                        </button>
                        <Link className='hover:text-blue-600 ml-5' to={''}>Watch Corporate Video</Link>
                    </div>
                </div>
            </div>
            {/* Section 3 */}
            <div className='section3 container grid grid-cols-2 pb-36 px-20'>
                {/* Col 1 */}
                <div className='pr-10'>
                    <SmallHeading value={'AI INFRASTRUCTURE INSPECTION'} />
                    <h1 className='text-5xl leading-tight mb-6'>Enhances Efficiency, Safety, and Cost-Effectiveness</h1>
                    <ul className='list-disc pl-4 text-lg text-slate-800 space-y-2'>
                        <li>Cutting-Edge Solution: Ombrulla leverages AI, drones, and IoT technologies to transform infrastructure inspection.</li>
                        <li>Real-Time Insights: Real-time insights enhance inspection efficiency, safety, and reduce conventional challenges.</li>
                        <li>Longevity and Cost-Effectiveness: Ombrulla ensures the longevity and safety of critical infrastructure while offering a cost-effective solution.</li>
                        <li>Responsive Maintenance: Enhances infrastructure management, increasing reliability and responsiveness, and reducing risks.</li>
                    </ul>
                    <div className='flex justify-start items-center mt-7'>
                        <button className="px-7 py-4 rounded-full  hover:border border-black  bg-blue-600 text-white  hover:bg-white hover:text-blue-600 font-semibold">Schedule Call</button>
                        <Link className='hover:text-blue-600 ml-7 flex' to={''}>Read more
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#0000FF" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 md:w-5 md:h-5 font-bold text-[#0000FF]" data-astro-cid-ziqbhiws=""><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" data-astro-cid-ziqbhiws=""></path></svg>

                        </Link>
                    </div>
                </div>
                {/* Col 2 */}
                <div className='flex items-center justify-end'>
                    <img className='h-5/6 w-11/12 mr-2 rounded-md' src="https://www.ombrulla.com/_astro/ai-infrastructure-inspection.c8f30cbf_ZEO7he.webp" alt="" />
                </div>
            </div>
            {/* Section 4 */}
            <div className='section3 container grid grid-cols-2 pb-36 px-20'>
                {/* Col 1 */}
                <div className='flex items-center justify-start'>
                    <img className='h-5/6 w-11/12 ml-2 rounded-md' src="https://www.ombrulla.com/_astro/ai-visual-inspection.7625d432_2nYhqo.webp" alt="" />
                </div>
                {/* Col 2 */}
                <div className='pr-10'>
                    <SmallHeading value={'AI VISUAL INSPECTION'} />
                    <h1 className='text-5xl leading-tight mb-6'>Improving Quality with Greater Precision</h1>
                    <ul className='list-disc pl-4 text-lg text-slate-800 space-y-2'>
                        <li>AI Defect Detection: Utilizes computer vision and machine learning to identify and recognise defects during visual inspections autonomously.</li>
                        <li>Eagle-Eyed Vision: AI algorithms can identify even the most subtle defects, including microscopic cracks, colour variations, and misalignments.</li>
                        <li>Informed Decision-Making: Valuable data is extracted from images and videos, empowering users to make informed, data-driven decisions.</li>
                        <li>Real-Time Insights: AI defect detection provides immediate feedback, enabling proactive interventions and adjustments to production processes.</li>
                    </ul>
                    <div className='flex justify-start items-center mt-7'>
                        <button className="px-7 py-4 rounded-full  hover:border border-black  bg-blue-600 text-white  hover:bg-white hover:text-blue-600 font-semibold">Schedule Call</button>
                        <Link className='hover:text-blue-600 ml-7 flex' to={''}>Read more
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#0000FF" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 md:w-5 md:h-5 font-bold text-[#0000FF]" data-astro-cid-ziqbhiws=""><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" data-astro-cid-ziqbhiws=""></path></svg>

                        </Link>
                    </div>
                </div>
            </div>
            {/* Section 5 */}
            <div className='section3 container grid grid-cols-2 pb-36 px-20'>
                {/* Col 1 */}
                <div className='pr-10'>
                    <SmallHeading value={'AI DATA ANALYTICS'} />
                    <h1 className='text-5xl leading-tight mb-6'>Empowers Businesses to Make Insightful Decisions</h1>
                    <ul className='list-disc pl-4 text-lg text-slate-800 space-y-2'>
                        <li>Actionable Insights: AI data analysis enhances decisions, personalizes customer experiences and improve operations.</li>
                        <li>Increased Customer Loyalty: AI predictive analytics for personalized recommendations & increased customer loyalty.</li>
                        <li>Quality Assurance: AI analytics identifies and mitigates potential issues, ensuring the quality and reliability of products and services.</li>
                        <li>Efficiency and Responsiveness: Customers benefit from increased efficiency, improved product quality, and more responsive interactions with businesses.</li>
                    </ul>
                    <div className='flex justify-start items-center mt-7'>
                        <button className="px-7 py-4 rounded-full  hover:border border-black  bg-blue-600 text-white  hover:bg-white hover:text-blue-600 font-semibold">Schedule Call</button>
                        <Link className='hover:text-blue-600 ml-7 flex' to={''}>Read more
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#0000FF" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 md:w-5 md:h-5 font-bold text-[#0000FF]" data-astro-cid-ziqbhiws=""><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" data-astro-cid-ziqbhiws=""></path></svg>

                        </Link>
                    </div>
                </div>
                {/* Col 2 */}
                <div className='flex items-center justify-end'>
                    <img className='h-5/6 w-11/12 mr-2 rounded-md' src="https://www.ombrulla.com/_astro/ai-data-analytics.ef51a904_1g36GR.webp  " alt="" />
                </div>
            </div>
            {/* Section 6 */}
            <div className='h-screen'>
                <div className='h-[85%] bg-blue-700 py-24'>
                    <div className='grid grid-cols-2 text-left w-[85%] mx-auto'>
                        {/* Col 1 */}
                        <div className='text-white'>
                            <img className='h-6 w-28' src="https://www.ombrulla.com/_astro/petran-logo.99970d82_1t8FzR.webp" alt="petran logo" />
                            <h1><span className='font-bold'>PE</span >rformance - <span className='font-bold'>TR</span>acking - <span className='font-bold'>AN</span>alytics
                            </h1>
                            <h1 className='text-4xl font-normal mt-4'>AI & IoT Enabled</h1>
                            <h1 className='text-4xl font-normal'>Asset Performance Management</h1>
                            <p className='text-lg mt-4 font-normal'>Petran offers an Asset Performance Management (APM) system that harnesses the power of artificial intelligence and the Internet of Things (IoT) to empower data-driven decision-making and enable proactive maintenance strategies. </p>
                            <div className='flex justify-start items-center mt-7'>
                                <button className="px-7 py-4 rounded-full   bg-blue-700 border border-white text-white   hover:text-black font-semibold">Schedule Call</button>
                                <button className="size-14 rounded-full  bg-blue-700 text-white border border-white ml-9 hover:shadow-sm">
                                    <i className="fa-solid fa-play fa-xl"></i>
                                </button>
                                <Link className='hover:text-blue-600 ml-5 font-semibold' to={''}>Watch Video</Link>
                            </div>
                        </div>
                        {/* Col 2 */}
                        <div>
                            <div className='flex justify-end items-center'>
                                <img src="https://www.ombrulla.com/_astro/asset-performance-management-software.82e2a11d_29kMe4.webp" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Section 7 */}
            <div className='grid grid-cols-3 space-x-7 w-[90%] mx-auto mb-40'>
                {/* Col 1 */}
                <div className='p-10'>
                    <SmallHeading value={'PRODUCTS'} />
                    <h1 className='text-5xl font-medium mt-10'>Our HR Tools </h1>
                    <p className='text-gray-500'>Our job grading and evaluation tool, combined with the compensation management tool, is a highly effective SaaS-based solution. It greatly assists HR consultants and managers in carrying out their roles with efficiency and precision.</p>
                </div>
                {/* Col 2 */}
                <div className='p-10 bg-slate-100 rounded-2xl'>
                    <h1 className='text-2xl'>Job Grading and Evaluation</h1>
                    <p className='text-gray-500 mt-5'>Job evaluation assesses and ranks job roles in an organization based on responsibilities and skills, often for compensation and structuring purposes.</p>
                    <div className='w-3/4 mx-auto mt-10'>
                        <img src="https://www.ombrulla.com/_astro/job-profiler.bfa7dd2f_Z10oyMd.webp" alt="" />
                    </div>
                    <Link className='flex mt-10' to={''}>Free Trial
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#0000FF" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 md:w-5 md:h-5 font-bold text-[#0000FF]" data-astro-cid-ziqbhiws=""><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" data-astro-cid-ziqbhiws=""></path></svg>
                    </Link>
                </div>
                {/* Col 3 */}
                <div className='p-10 bg-slate-100 rounded-2xl'>
                    <h1 className='text-2xl'>Compensation Management</h1>
                    <p className='text-gray-500 mt-5'>Compensation management software automates salary planning, budget management, and equity analysis, ensuring fair and competitive pay practices.</p>
                    <div className='w-3/4 mx-auto mt-10'>
                        <img src="https://www.ombrulla.com/_astro/Comp360.5e1e772f_23KQc0.webp" alt="" />
                    </div>
                    <Link className='flex mt-10' to={''}>Book For Demo
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#0000FF" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 md:w-5 md:h-5 font-bold text-[#0000FF]" data-astro-cid-ziqbhiws=""><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" data-astro-cid-ziqbhiws=""></path></svg>
                    </Link>
                </div>
            </div>
            {/* Section 8 */}
            <div className='mb-40'>
                <div className='flex items-center justify-center flex-col mb-16'>
                    <SmallHeading2 value={'OUR CUSTOMERS'} />
                    <h1 className='text-5xl'>They Trust Us</h1>
                </div>
                <div>
                    <Carousel images={carouselImages} />
                </div>
            </div>
            {/* Section 9 */}
            <div className='h-screen'>
                <div className='h-[92%] bg-blue-950'>
                    <div className='w-[87%] h-full flex justify-center items-start flex-col mx-auto text-left'>
                        <SmallHeading value={'OUR TESTIMONIALS'} add={'text-white'} />
                        <h1 className='text-4xl text-white'>What Customers Say About Us</h1>
                        <CustomerCarousel />
                    </div>
                </div>
            </div>
            {/* Section 10 */}
            <div className='h-screen flex flex-col justify-center items-center'>
                <SmallHeading2 value={'BRANDS WE WORK WITH'} />
                <h1 className='text-5xl mb-10'>Trusted by Thousands of Businesses </h1>
                <div className='grid grid-cols-3 w-4/5 gap-0.5'>
                    <div className='bg-slate-50 px-8 py-8 flex justify-center'>
                        <img className='h-32 w-32' src="https://www.ombrulla.com/_astro/unv.85d8fa6f_1oWCsP.webp" alt="" />
                    </div>
                    <div className='bg-slate-50 px-8 py-8 flex justify-center'>
                        <img className='h-32 w-32' src="https://www.ombrulla.com/_astro/dahua.d9dec1a0_1788pM.webp" alt="" />
                    </div>
                    <div className='bg-slate-50 px-8 py-8 flex justify-center'>
                        <img className='h-32 w-32' src="https://www.ombrulla.com/_astro/nvidia.8ba96db4_Z1BLchq.webp" alt="" />
                    </div>
                    <div className='bg-slate-50 px-8 py-8 flex justify-center'>
                        <img className='h-32 w-32' src="https://www.ombrulla.com/_astro/amazon.8aa611f6_Zkubpr.webp" alt="" />
                    </div>
                    <div className='bg-slate-50 px-8 py-8 flex justify-center'>
                        <img className='h-32 w-32' src="https://www.ombrulla.com/_astro/hikvision.2a55c6c2_Z1UqjJV.webp" alt="" />
                    </div>
                    <div className='bg-slate-50 px-8 py-8 flex justify-center'>
                        <img className='h-24 w-24' src="https://www.ombrulla.com/_astro/azure.3a96288f_ZDjkY6.webp" alt="" />
                    </div>
                </div>
            </div>
            {/* Section 11 */}
            <div className='h-screen mb-20'>
                <div className='w-10/12 flex flex-col justify-center items-center  mx-auto'>
                    <SmallHeading2 value={'BLOG UPDATES'} />
                    <h1 className='text-5xl'>To Read</h1>
                    <div className='w-full border-t-2 grid grid-cols-3 px-2 mt-10 gap-20 h-112'>
                        <div className='relative mt-16'>
                            <img className='rounded-lg h-52' src="https://blog.ombrulla.com/wp-content/uploads/2023/12/AI-in-Logisics-and-Supply-chain.webp" alt="" />
                            <Link to={''}>
                                <h1 className='text-lg font-medium pt-8'>AI Revolutionizes Logistics and Supply Chain Management</h1>
                                <p className='text-slate-500 pt-4'>AI takes huge leaps in areas like Logistics and Supply chain management with AI Visual Inspection, AI Data Analytics, Predictive Maintenance etc.</p>
                            </Link>
                            <div className='flex justify-start items-center absolute bottom-0'>
                                <Link to={''}>
                                    <img className='rounded-full h-10 w-10' src="https://secure.gravatar.com/avatar/1ed886cb123f0f55aba0afe6ecc7f56c?s=96&d=mm&r=g" alt="" />
                                </Link>
                                <div className='ml-3 self-end'>
                                    <Link className='font-light' to={''}>Zara Elizabeth</Link>
                                    <p className='font-light text-slate-500 text-sm'>December 21, 2023 · 4 min read</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative mt-16'>
                            <img className='rounded-lg h-52' src="https://blog.ombrulla.com/wp-content/uploads/2023/12/Google-io-2023.webp" alt="" />
                            <Link to={''}>
                                <h1 className='text-lg font-medium pt-8'>Google I/O 2023: A Deeper Look at the Future of AI</h1>
                                <p className='text-slate-500 pt-4'>Google I/O 2023 envisions a future where helpful AI integrates seamlessly into our lives, breaking down barriers, empowering individuals, and tackling global challenges. By developing AI responsibly, we can shape a future where everyone benefits.</p>
                            </Link>
                            <div className='flex justify-start items-center absolute bottom-0'>
                                <Link to={''}>
                                    <img className='rounded-full h-10 w-10' src="https://secure.gravatar.com/avatar/1ed886cb123f0f55aba0afe6ecc7f56c?s=96&d=mm&r=g" alt="" />
                                </Link>
                                <div className='ml-3 self-end'>
                                    <Link className='font-light' to={''}>Zara Elizabeth</Link>
                                    <p className='font-light text-slate-500 text-sm'>December 8, 2023 · 5 min read</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative mt-16'>
                            <img className='rounded-lg h-52' src="https://blog.ombrulla.com/wp-content/uploads/2023/11/Blog-Images.png" alt="" />
                            <Link to={''}>
                                <h1 className='text-lg font-medium pt-8'>A Deep Understanding of AI Visual Inspection</h1>
                                <p className='text-slate-500 pt-4'>The primary objective of this blog is to offer a foundational comprehension of automated visual evaluation and elucidate how AI Visual Inspection techniques contributes to significant time and effort savings.</p>
                            </Link>
                            <div className='flex justify-start items-center absolute bottom-0'>
                                <Link to={''}>
                                    <img className='rounded-full h-10 w-10' src="https://secure.gravatar.com/avatar/1ed886cb123f0f55aba0afe6ecc7f56c?s=96&d=mm&r=g" alt="" />
                                </Link>
                                <div className='ml-3 self-end'>
                                    <Link className='font-light' to={''}>Zara Elizabeth</Link>
                                    <p className='font-light text-slate-500 text-sm'>November 28, 2023 · 5 min read</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home