import Image from "next/image";

export default function Hero() {
	return (
		<section className="bg-[url(/img/PBC_SECTION_BG.png)] bg-cover py-5 px-4 lg:px-2">
			<div className="max-w-[1200px] mx-auto flex flex-col-reverse justify-between items-center lg:flex-row">
				<div className="text-white w-full md:mt-10 lg:w-[50%]">
					<h1 className="text-[#FFE207] text-xl text-center lg:text-left lg:text-[30px]/9 lg:text-balance font-bold mb-2 lg:mb-5">
						🎯 PBC88 Highest Winning Slot Game Ranking
					</h1>
					<p className="text-center lg:text-left lg:text-[18px]/7 font-bold mb-2 lg:mb-5">
						PBC88 Highest Winning Slot Game Ranking is your ultimate guide to
						the most rewarding slot games available on the PBC88 platform.
						Updated regularly, this ranking highlights the top slots based on
						payout rates, RTP (Return to Player), bonus features, and player
						winnings. Whether youPBC88 Highest Winning Slot Game Ranking is your
						ultimate guide to the most rewarding slot games available on the
						PBC88 platform.
					</p>
					<div>
						<p className="text-center lg:text-[18px]/6 lg:text-left text-[#FFE207] mb-2 lg:mb-5">
							Updated regularly, this ranking highlights the top slots based on
							payout rates, RTP (Return to Player), bonus features, and player
							winnings. Whether you&apos;re aiming for high volatility thrills
							or steady payouts, our list helps you choose the best slots to
							maximize your chances of winning big.
						</p>
						<p className="text-center lg:text-[18px]/6 lg:text-left mb-2 lg:mb-5">
							Explore trending titles, jackpot hits, and hidden gems — all in
							one trusted ranking by PBC88.re aiming for high volatility thrills
							or steady payouts, our list helps you choose the best slots to
							maximize your chances of winning big. Explore trending titles,
							jackpot hits, and hidden gems — all in one trusted ranking by
							PBC88.
						</p>
					</div>
				</div>
				<div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] border-dashed border-gray-500 rounded-md flex items-center justify-center">
					<Image
						src="/img/PBC_MILESTONE_CHALLENGE.png"
						width={450}
						height={450}
						alt="Hero"
					/>
				</div>
			</div>
		</section>
	);
}
