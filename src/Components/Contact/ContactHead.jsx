import { ArrowRight, ArrowUp, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Navbar } from "../Home/Nav";

export const ContactHead = () => {
    const [view, setview] = useState(false)
    return (
        <section id="home" className="min-h-screen flex flex-col bg-black">

            <div className="w-full flex flex-col items-end md:flex-row md:justify-around md:items-start bg-black pt-20 pb-16 gap-10">
                <img src="../../../src/assets/DROP US A LINE.png" className="max-w-full" />
                <img src="../../../src/assets/head.png" className="max-w-full" />
            </div>

            <img className="hidden md:block w-full" src="../../../src/assets/Vector.png" />
            <img className="md:hidden w-full" src="../../../src/assets/Vector (2).png" />



            <div className="flex px-16 flex-col items-center md:flex-row justify-between gap-1 w-full mt-10">
                <p className="p-8 text-white">
                    JOINUS <br /> hr@unixstudio.agency
                </p>
                <p className="p-8 text-white">
                    hello@unixstudio.agency
                </p>
                <img className="w-20 md:w-28" src="../../../src/assets/Circle Button (Desktop).png" />
            </div>

            <div className="pt-20 w-full flex flex-col md:flex-row justify-around flex-wrap py-12">

                <div className="flex flex-col items-center justify-between px-12 py-12 w-full md:w-[30%] md:h-[520px]">
                    <div className=" flex gap-4  ">
                        <img className=" md:block  mb-4" src="../../../src/assets/Logo.png" />
                        <ArrowRight className="md:hidden py-1 text-white  w-[100px]" onClick={() => { setview(!view) }} />
                    </div>
                    <div className="flex justify-between w-full items-center">
                        <h3 className="text-4xl font-bold mx-8 text-white border-b border-b-white-100">
                            Clutch
                        </h3>
                        <ArrowUpRight className="text-white" />
                    </div>
                </div>
                {view &&  <div className=" md:hidden flex flex-col justify-between px-12 py-12 w-full md:w-1/3 md:h-[520px] bg-[#1a1a1a] rounded-2xl">
                    <h3 className="text-white text-3xl">5.0</h3>
                    <p className="text-white text-3xl mt-4">
                        Their team was great with communication and made sure we were updated with any change to our website.
                    </p>
                    <p className="text-white text-xl mt-4">
                        LAITH MASARWEH <br /> CEO, ASSISTANTLY
                    </p>
                </div> }

                <div className="hidden md:flex flex-col justify-between px-12 py-12 w-full md:w-[30%] md:h-[520px] bg-[#1a1a1a] rounded-2xl">
                    <h3 className="text-white text-3xl">5.0</h3>
                    <p className="text-white text-3xl mt-4">
                        Their team was great with communication and made sure we were updated with any change to our website.
                    </p>
                    <p className="text-white text-xl mt-4">
                        LAITH MASARWEH <br /> CEO, ASSISTANTLY
                    </p>
                </div>


                <div className="hidden md:flex flex-col justify-between px-12 py-12 w-full md:w-[30%] md:h-[520px] bg-[#1a1a1a] rounded-2xl ">
                    <h3 className="text-white text-3xl">5.0</h3>
                    <p className="text-white text-3xl mt-4">
                        Their team was great with communication and made sure we were updated with any change to our website.
                    </p>
                    <p className="text-white text-xl mt-4">
                        LAITH MASARWEH <br /> CEO, ASSISTANTLY
                    </p>
                </div>

                <div className="flex flex-col items-start justify-between px-12 py-12 w-full md:w-[30%] md:h-[363px]">
                    <img className="hidden md:block mb-4 mx-8" src="../../../src/assets/Dribble.png" />
                    <div className="flex justify-between w-full items-center">
                        <h3 className="text-4xl font-bold text-white border-b border-b-white-100 ml-4">
                            Dribbble
                        </h3>
                        <ArrowUpRight className="text-white" />
                    </div>
                </div>

                <div className="flex flex-col items-center justify-between px-12 py-12 w-full md:w-[33%] md:h-[520px]">
                    <img className="md:block mb-4" src="../../../src/assets/1.png" />
                </div>

                <div className="flex flex-col items-center justify-between px-12 py-12 w-full md:w-[33%] md:h-[520px]">
                    <img className="hidden md:block mb-4" src="../../../src/assets/2.png" />
                </div>

            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full py-20 justify-items-center">

                <div className="flex flex-col justify-between items-center w-[183px] h-[183px]">
                    <img className="w-[60px] h-[60px]" src="../../../src/assets/In.png" />
                    <h3 className="text-4xl font-bold text-white">Dribbble</h3>
                </div>

                <div className="flex flex-col justify-between items-center w-[183px] h-[183px]">
                    <img className="w-[60px] h-[60px]" src="../../../src/assets/In.png" />
                    <h3 className="text-4xl font-bold text-white">Dribbble</h3>
                </div>

                <div className="flex flex-col justify-between items-center w-[183px] h-[183px]">
                    <img className="w-[60px] h-[60px]" src="../../../src/assets/In.png" />
                    <h3 className="text-4xl font-bold text-white">Dribbble</h3>
                </div>

                <div className="flex flex-col justify-between items-center w-[183px] h-[183px]">
                    <img className="w-[60px] h-[60px]" src="../../../src/assets/In.png" />
                    <h3 className="text-4xl font-bold text-white">Dribbble</h3>
                </div>

            </div>
            <div className="w-3/4  m-auto h-px bg-white mt-20 opacity-40"></div>


            <div className="w-full bg-black text-white py-16 flex flex-col md:flex-row items-center justify-center gap-8">

                <div className="w-[340px] h-[340px] rounded-full border border-white flex flex-col items-center justify-center text-center cursor-pointer hover:opacity-80 transition">
                    <ArrowUpRight className="mb-2" />
                    <span className="text-sm tracking-wide font-semibold">START<br />A PROJECT</span>
                </div>

                <div className="w-[340px] h-[340px] rounded-full bg-white text-black flex flex-col items-center justify-center text-center cursor-pointer hover:opacity-80 transition">
                    <ArrowUpRight className="mb-2" />
                    <span className="text-sm tracking-wide font-semibold">START YOUR<br />CAREER</span>
                </div>

                <div className="flex flex-col text-left ml-4">
                    <span className="text-sm tracking-wide font-semibold">IN NEW YORK, USA</span>
                    <span className="text-xs tracking-wide text-gray-300">OUR LOCATION</span>
                </div>

            </div>
            <div className="w-3/4 m-auto h-px bg-white mt-20 opacity-40"></div>
            <div className="flex w-full flex-col md:flex-row md:justify-between items-center py-8">
                <div className="mx-12 ">
                    <a href="#home " className=" flex items-center gap-2 ">
                        <ArrowUp className="text-white" />
                        <div className="text-white w-[132px] h-8 ">
                            Back to top

                        </div>
                    </a>

                </div>

                <div className="w-[434px] h-[30px] text-white">
                    © 2023 UnixStudio. — Product Design Agency
                </div>

            </div>

        </section>
    );
}
