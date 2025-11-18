export const Head =()=>
{
    return(
        <div>
         <div className="relative h-full max-h-full ">
        <div className="w-full flex flex-col items-end md:flex-row md:justify-around md:items-start  bg-black py-20 mb-0 gap-10">
          <img src="../../../src/assets/OUR SERVICE.png" className="max-w-full" />
          <img src="../../../src/assets/head.png" className="" />
        </div>
        
        <img className="absolute  top-[80%] lg:top-[60%] z-10 " src="../../../src/assets/Graphic.png" />
        <img className=" absolute  w-full top-[80%] lg:top-[85%] bg-black " src="../../../src/assets/Vector.png" />
           <p className="absolute lg:top-[150%] left-12 z-20">
            We won 50+ design awards in 2022 stand alone,
            <br /> some of which had us share the stage with
            <br /> Google, Netflix, and Spotify
          </p>
        <img className="absolute w-20 lg:top-[140%] md:w-30 right-8 z-20" src="../../../src/assets/Circle Button (Desktop).png"/>
        </div>
        </div>
    );
}