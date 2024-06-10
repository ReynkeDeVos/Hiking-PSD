const Webpage = () => {
  return (
    <div className="relative overflow-hidden">
      <img
        src="./src/assets/Group02/02_shadow.png"
        alt="Shadow"
        className="absolute bottom-0 left-0 h-1/2 w-1/2 -translate-x-1/10 scale-x-[-1] transform opacity-50"
      />

      <div className="flex h-1/2 flex-col items-center justify-between space-y-6 md:h-auto md:flex-row md:space-x-6 md:space-y-0">
        <div className="flex flex-col items-center justify-between space-y-6 py-10 md:space-y-14 md:py-20">
          <h1 className="font-OpenSans text-3xl font-extrabold uppercase text-custom-yellow md:text-5xl">
            LET&apos;S GO
          </h1>
          <p className="h-52 w-1/2 text-center font-OpenSans text-xl font-normal text-custom-gray md:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
          </p>

          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3 md:gap-24">
            <div className="flex flex-col rounded-sm">
              <img
                src="./src/assets/Group02/02_01.png"
                alt="Image 1"
                className="mt-[-120px] w-full rounded-sm object-cover"
              />
              <div className="flex h-56 w-full items-center justify-center rounded-sm bg-[#7f7770]">
                <div className="ml-4 text-left font-OpenSans text-white">
                  <p className="text-2xl font-semibold">Lorem ipsum</p>
                  <p className="pt-2 font-OpenSans text-xl font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipisicing...
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-sm">
              <img
                src="./src/assets/Group02/02_02.png"
                alt="Image 2"
                className="mt-[-120px] w-full rounded-sm object-cover"
              />
              <div className="flex h-56 w-full items-center justify-center rounded-sm bg-[#7f7770]">
                <div className="ml-4 text-left font-OpenSans text-white">
                  <p className="text-2xl font-semibold">Lorem ipsum</p>
                  <p className="pt-2 font-OpenSans text-xl font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipisicing...
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-sm">
              <img
                src="./src/assets/Group02/02_03.png"
                alt="Image 3"
                className="mt-[-120px] w-full rounded-sm object-cover"
              />
              <div className="flex h-56 w-full items-center justify-center rounded-sm bg-[#7f7770]">
                <div className="ml-4 text-left font-OpenSans text-white">
                  <p className="text-2xl font-semibold">Lorem ipsum</p>
                  <p className="pt-2 font-OpenSans text-xl font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipisicing...
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button className="focus:border-brown-500 h-20 w-80 rounded-full bg-[#7f7770] font-OpenSans text-2xl font-extrabold uppercase leading-5 tracking-widest text-white focus:outline-none focus:ring-2 focus:ring-[#776c64]">
            SHOW MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Webpage;
