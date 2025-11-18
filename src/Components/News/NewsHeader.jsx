export const NewsHeader =()=>
{
    return(
        <section className="min-h-screen flex flex-col bg-black" >
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

        </section>
    )
    

}