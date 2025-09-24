import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
    component: Index,
})

function Index() {
    return (
        <div className=" flex flex-col h-screen w-full" >
            <div className='grid grid-cols-8 grid-rows-8   h-4/6 mt-auto mx-15'>
                <div className='row-span-3 col-span-5  grid '>
                    <h1 className='text-white text-7xl font-unbounded font-light '>Collaborate. <br />Engineer. Transform.</h1>
                </div>
                <div className='col-start-4 col-span-2 '>
                    <p className='text-white font-unbounded text-xl '>We turn your challenges into solutions.</p>
                </div>
                <div className='row-start-1 row-span-4 col-start-7   flex flex-col gap-5'>
                    <img src='icons/star.svg' className='h-10 self-start' />
                    <p className='text-white '>We believe in the power of technology and innovation to address  real-world challenges and make a positive impact in our community.</p>
                </div>
                <div className='row-start-5 row-span-4 col-span-8 bg-[rgba(0,0,0,0.7)] -mx-15 grid  grid-cols-4 font-unbounded px-15 '>
                    <div className='col-span-1  flex flex-col  justify-center h-full gap-4 mr-30'>

                        <p className='text-white text-lg'>digital branding</p>
                        <div className='w-full border-white border-2 '></div>
                    </div>
                    <div className='col-span-1  flex flex-col  justify-center h-full gap-4 mr-30'>

                        <p className='text-white text-lg'>influence Marketing</p>
                        <div className='w-full border-white border-2 '></div>
                    </div>
                    <div className='col-span-1  flex flex-col  justify-center h-full gap-4 mr-30'>

                        <p className='text-white text-lg'>content creation</p>
                        <div className='w-full border-white border-2 '></div>
                    </div>
                    <div className='col-span-1  flex flex-col  justify-center h-full gap-4 mr-30'>

                        <p className='text-white text-lg'>design</p>
                        <div className='w-full border-white border-2 '></div>
                    </div>
                </div>
            </div>
        </div >
    )
}