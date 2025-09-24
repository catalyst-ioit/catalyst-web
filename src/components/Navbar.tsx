export default function Navbar() {

    return <div className="flex flex-row mx-15 my-10 border-white border-2 backdrop-blur-2xl">
        <div className="border-white border-r-2 p-12 flex flex-row gap-20 items-center">
            <img src="catalysts_text.svg" alt="Catalysts" className="h-10" />
            <p className="font-unbounded w-80 font-semibold text-white grow text-sm">Changing the world <br />
                one step at a time.</p>
        </div>
        <div className="grid grid-rows-2 font-inter-tight text-white w-full">
            <div className="grid grid-cols-10 row-span-1 items-center  border-b-2 w-full border-white ">
                <div className="col-span-2 text-center  h-full flex border-r-2 border-white ">
                    <p className="my-auto mx-auto">ABOUT</p>
                </div>
                <div className="col-span-3 text-center  h-full flex border-r-2 border-white ">
                    <p className="my-auto mx-auto">SERVICES</p>
                </div>
                <div className="col-span-2 text-center  h-full flex border-r-2 border-white  ">
                    <p className="my-auto mx-auto">CONTACT</p>
                </div>
                <div className="col-span-2 text-center  h-full flex border-r-2 border-white ">
                    <p className="my-auto mx-auto">TEAM</p>
                </div>
                <div className="col-span-1 text-center  h-full flex  ">
                    <img className="my-auto mx-auto h-6" src="icons/globe.svg" />
                </div>
            </div>
            <div className="grid grid-cols-10 row-span-1 items-center  w-full border-white ">
                <div className="col-span-4 text-center  h-full flex border-r-2 border-white ">
                    <p className="my-auto mx-auto">PARTNERS</p>
                </div>
                <div className="col-span-2 text-center  h-full flex border-r-2 border-white ">
                    <p className="my-auto mx-auto">PROJECTS</p>
                </div>
                <div className="col-span-2 text-center  h-full flex border-r-2 border-white  ">
                    <p className="my-auto mx-auto">JOIN US</p>
                </div>
                <div className="col-span-2 text-center  h-full flex border-white ">
                    <p className="my-auto mx-auto">GALLERY</p>
                </div>
            </div>
        </div>
    </div>
}