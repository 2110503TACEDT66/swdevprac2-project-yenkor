import Image from "next/image";

export default function Home() {
  return (
    <main className="w-[100vw] h-[100vh]">
      <Image
        className="absolute top-0 right-64 z-0 h-[100vh]"
        alt="background"
        src="/img/home_background.png"
        width={1000}
        height={1200}
      />
      <div className="flex flex-row p-12 justify-between items-center">
        <Image
          alt="logo"
          src="/img/yenkor_logo_trans.png"
          width={255}
          height={55}
        />

        <div className="flex flex-row space-x-4">
          <button
            className="bg-[#4E5861] px-6 py-2 rounded-md font-bold text-white
          hover:bg-[#2D2D2D] transition duration-300 ease-in-out
          active:bg-[#2D2D2D] active:scale-95 active:shadow-inner"
          >
            Get Start
          </button>
          <button
            className="bg-white px-6 py-2 rounded-md font-bold
          hover:bg-[#F2F2F2] transition duration-300 ease-in-out
          active:bg-[#F2F2F2] active:scale-95 active:shadow-inner"
          >
            Sign in
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center py-8 relative">
        <div className="flex flex-col items-start  ">
          <h1 className="text-3xl font-kiona text-white">DISCOVER YOUR</h1>
          <h1 className="text-9xl font-kiona text-white">RENTAL CAR</h1>
          <div className="flex flex-row w-full justify-center h-[10vh]">
            <Image
              className="absolute top-[-100px] w-[65vw] mt-3"
              alt="car"
              src="/img/porsche-model.png"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-row p-12 justify-between items-center pt-[22rem] z-50">
        <div className="flex flex-row pl-5 space-x-5 items-center z-50">
          <Image
            alt="logo"
            src="/img/explore_icon.png"
            width={73}
            height={70}
          />
          <div className="flex flex-col">
            <h1 className="text-white text-lg">Explore the </h1>
            <h1 className="text-white text-lg">new travel experience</h1>
          </div>
        </div>

        <div className="flex flex-row space-x-4">
          <Image alt="dec" src="/img/dec_1.png" width={100} height={100} />
        </div>
      </div>
    </main>
  );
}
