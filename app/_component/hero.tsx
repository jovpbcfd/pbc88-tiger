import Image from "next/image";

export default function Hero() {
  return (
    <>
      <section className=" bg-black py-5 px-4 lg:px-2">
        <div className="max-w-[1200px] mx-auto md:my-10">
          <h1 className="text-[#FFE207] text-xl text-center lg:text-[40px]/9 lg:text-balance font-bold mb-2 lg:mb-5">
            PBC88 Highest Winning Slot Game Ranking
          </h1>
        </div>
        <div className="max-w-[1200px] mx-auto flex flex-col-reverse justify-between items-center lg:flex-row">
          <div className="text-white w-full md:mt-10 lg:w-[50%]">
            <p className="text-center lg:text-left lg:text-[18px]/7 font-bold mb-2 lg:mb-5">
              PBC88 Highest Winning Slot Game Ranking is your ultimate guide to
              the most rewarding slot games available on the PBC88 platform.
              Updated regularly, this ranking highlights the top slots based on
              payout rates, RTP (Return to Player), bonus features, and player
              winnings. Whether youPBC88 Highest Winning Slot Game Ranking is
              your ultimate guide to the most rewarding slot games available on
              the PBC88 platform.
            </p>
            <div>
              <p className="text-center lg:text-[18px]/6 lg:text-left text-[#FFE207] mb-2 lg:mb-5">
                Updated regularly, this ranking highlights the top slots based
                on payout rates, RTP (Return to Player), bonus features, and
                player winnings. Whether you&apos;re aiming for high volatility
                thrills or steady payouts, our list helps you choose the best
                slots to maximize your chances of winning big.
              </p>
              <p className="text-center lg:text-[18px]/6 lg:text-left mb-2 lg:mb-5">
                Explore trending titles, jackpot hits, and hidden gems — all in
                one trusted ranking by PBC88.re aiming for high volatility
                thrills or steady payouts, our list helps you choose the best
                slots to maximize your chances of winning big. Explore trending
                titles, jackpot hits, and hidden gems — all in one trusted
                ranking by PBC88.
              </p>
            </div>
          </div>
          <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] border-dashed border-gray-500 rounded-md flex items-center justify-center">
            <Image
              src="/img/PBC_Image.webp"
              width={450}
              height={450}
              alt="Hero"
            />
          </div>
        </div>
      </section>
      <section className="bg-black pb-5 md:pb-10">
        <div
          className="relative  max-w-[1200px] mx-auto bg-[url(/img/jackpot-background_upper2.webp)] bg-center bg-no-repeat bg-contain w-full h-[100px] mb-[-53px] 
			md:mb-[-90px] md:h-[168px]"
        ></div>
        <div className="bg-[url(/img/PBC_Banner3.webp)] bg-center bg-cover md:bg-contain bg-no-repeat w-full h-[200px] md:h-[435px]"></div>
        <div className="max-w-[1200px] mx-auto bg-[url(/img/jackpot-background_bottom.webp)] bg-center bg-contain bg-no-repeat w-full h-[20px] mt-[-20px] md:mt-[-50px] md:h-[60px]"></div>
      </section>
      {/* bg-[url(/img/PBC_SECTION_BG.png)] bg-cover */}
    </>
  );
}
