import Image from "next/image";
import RankingTable from "./ranking-table";
import BlogGrid from "./blog-grid";
// import Link from "next/link";
// import VisualizeChart from "./visualize-chart";
// import Conquer from "./conquer";

export default function Visualization() {
  return (
    <div className="bg-[url(/img/PBC_BG-2.png)] bg-no-repeat bg-cover w-full">
      <section className="pb-12 pt-16 lg:pb-20 lg:pt-42">
        <div className="max-w-[1200px] mx-auto relative p-1">
          <div className="bg-[url(/img/TITLE_v2.webp)] bg-center bg-no-repeat bg-contain left-0 right-0 mx-auto w-[322px] h-[61px] absolute -top-10 lg:-top-30 lg:w-full lg:h-[200px]"></div>
          <RankingTable />
        </div>
      </section>
      <section className="max-w-[1200px] mx-auto flex gap-5 items-center flex-col-reverse md:flex-row md:justify-center md:items-center pb-2 md:pb-15">
        <div className="w-full md:w-[50%]">
          <p className="text-center text-white lg:text-left lg:text-[18px]/7 font-bold ">
            PBC88 Highest Winning Slot Game Ranking brings you an up-to-date
            list of the top-performing slot games on the PBC88 platform, ranked
            by payout rates, jackpot frequency, and player winnings. Whether
            you&apos;re a seasoned player or new to online slots, this ranking
            helps you identify the most profitable games with the best
            return-to-player (RTP) percentages. Discover which titles are
            dominating the charts, featuring exciting gameplay, high volatility,
            and massive win potential. Updated regularly to reflect the latest
            trends and player experiences, this guide is your go-to resource for
            maximizing your chances at big wins on PBC88!
          </p>
        </div>
        <div className="w-full md:w-[50%]">
          <Image
            src="/img/pbc-88-slot.jpg"
            width="500"
            height="200"
            alt="Placeholder"
            className="rounded-md"
          />
        </div>
      </section>{" "}
      <BlogGrid />
      {/* <section className="max-w-[1200px] mx-auto flex gap-5 items-center flex-col-reverse md:mt-10 md:flex-row md:items-center md:pb-15">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/blogs/money-pot-join-the-thrill-and-win-up-to-2999-on-pbc88-bangladesh"
            className="overflow-hidden rounded-lg shadow-md bg-[#166534] hover:shadow-xl transition
          transition-transform transform hover:scale-110 duration-300
          ">
            <div className="p-2 cursor-pointer">
              <Image
                src="/img/blog/Money_Pot_Join_the_Thrill_and_Win_Up_to_2999_on_PBC88_Bangladesh.webp"
                width="500"
                height="200"
                alt="Placeholder"
                className="rounded-md"
              />
              <div>
                <h3 className="text-lg font-semibold text-white mt-2 mb-2 line-clamp-2">
                  Money Pot: Join the Thrill and Win Up to ৳2999 on PBC88
                  Bangladesh!
                </h3>
                <p className="text-sm text-white line-clamp-3">
                  Discover the PBC88 Bangladesh Money Pot promotion and win up
                  to ৳2999. Join over 1,400 players enjoying this exciting
                  chance to test their luck and earn real cash rewards. Perfect
                  for both new and seasoned gamers in Bangladesh.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="/blogs/crazy777-win-up-to-1665.666667-with-pbc88-bangladesh-promotions"
            className="overflow-hidden rounded-lg shadow-md bg-[#166534] hover:shadow-xl transition
          transition-transform transform hover:scale-110 duration-300
          ">
            <div className="p-2 cursor-pointer">
              <Image
                src="/img/blog/Crazy777_Win_Up_to_1665.666667_with_PBC88_Bangladesh_Promotions!.webp"
                width="500"
                height="200"
                alt="Placeholder"
                className="rounded-md"
              />
              <div>
                <h3 className="text-lg font-semibold text-white mt-2 mb-2 line-clamp-2">
                  Crazy777: Win Up to 1665.666667 with PBC88 Bangladesh
                  Promotions!
                </h3>
                <p className="text-sm text-white line-clamp-3">
                  Experience the excitement of Crazy777 at PBC88 Bangladesh,
                  where over 1,300 players compete for big rewards and prizes
                  reaching up to 1665.66. Join the thrill, explore PBC88
                  promotions, and discover why Crazy777 is one of Bangladesh’s
                  most popular online gaming attractions.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="/blogs/fortunePig-pbc88-bangladesh-biggest-promotion-ever"
            className="overflow-hidden rounded-lg shadow-md bg-[#166534] hover:shadow-xl transition
          transition-transform transform hover:scale-110 duration-300
          ">
            <div className="p-2 cursor-pointer">
              <Image
                src="/img/blog/FortunePig_PBC88_Bangladesh_Biggest_Promotion_Ever.webp"
                width="500"
                height="200"
                alt="Placeholder"
                className="rounded-md"
              />
              <div>
                <h3 className="text-lg font-semibold text-white mt-2 mb-2 line-clamp-2">
                  FortunePig – PBC88 Bangladesh Biggest Promotion Ever
                </h3>
                <p className="text-sm text-white line-clamp-3">
                  Join the FortunePig promotion at PBC88 Bangladesh and win up
                  to ৳1147.32 per spin. Over 1,295 players are already enjoying
                  this exciting gaming festival—spin, break the piggy bank, and
                  win real cash rewards today!
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="/blogs/crazy777-pbc88-bangladesh-biggest-promotion-ever"
            className="overflow-hidden rounded-lg shadow-md bg-[#166534] hover:shadow-xl transition
          transition-transform transform hover:scale-110 duration-300
          ">
            <div className="p-2 cursor-pointer">
              <Image
                src="/img/blog/Crazy777_PBC88_Bangladesh_Biggest_Promotion_Ever.webp"
                width="500"
                height="200"
                alt="Placeholder"
                className="rounded-md"
              />
              <div>
                <h3 className="text-lg font-semibold text-white mt-2 mb-2 line-clamp-2">
                  Crazy777 – PBC88 Bangladesh Biggest Promotion Ever!
                </h3>
                <p className="text-sm text-white line-clamp-3">
                  Discover Crazy777, the hottest promotion on PBC88 Bangladesh,
                  offering winning prizes up to ৳1,665.66. Join over 1,342
                  players from Dhaka, Chittagong, Sylhet, Khulna, Rajshahi,
                  Barisal, and across Bangladesh in this exciting 2025 slot
                  gaming event.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="/blogs/pirate-queen-2-slot-review-2026-best-tips-for-big-wins-in-bangladesh"
            className="overflow-hidden rounded-lg shadow-md bg-[#166534] hover:shadow-xl transition
          transition-transform transform hover:scale-110 duration-300
          ">
            <div className="p-2 cursor-pointer">
              <Image
                src="/img/slot-machines_resized.webp"
                width="500"
                height="200"
                alt="Placeholder"
                className="rounded-md"
              />
              <div>
                <h3 className="text-lg font-semibold text-white mt-2 mb-2 line-clamp-2">
                  Pirate Queen 2 Slot Review 2026: Best Tips for Big Wins in
                  Bangladesh
                </h3>
                <p className="text-sm text-white line-clamp-3">
                  Jump on PBC88, grab that signup bonus, and start spinning.
                  Play smart, stay responsible, and good luck out there.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="/blogs/fortune-gems-500-slot-guide-2026-big-multipliers-and-wins-in-bangladesh"
            className="overflow-hidden rounded-lg shadow-md bg-[#166534] hover:shadow-xl transition
          transition-transform transform hover:scale-110 duration-300
          ">
            <div className="p-2 cursor-pointer">
              <Image
                src="/img/slot-machines_resized.webp"
                width="500"
                height="200"
                alt="Placeholder"
                className="rounded-md"
              />
              <div>
                <h3 className="text-lg font-semibold text-white mt-2 mb-2 line-clamp-2">
                  Fortune Gems 500 Slot Guide 2026: Big Multipliers and Wins in
                  Bangladesh
                </h3>
                <p className="text-sm text-white line-clamp-3">
                  In this post, we&apos;ll cover the basics, how it works, tips
                  from players, and why it&apos;s popular in 2026. Let&apos;s
                  dive right in!
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="/blogs/why-fa-fa-fa-is-still-bangladeshs-go-to-classic-slot-on-pbc88-in-2026"
            className="overflow-hidden rounded-lg shadow-md bg-[#166534] hover:shadow-xl transition
          transition-transform transform hover:scale-110 duration-300
          ">
            <div className="p-2 cursor-pointer">
              <Image
                src="/img/slot-machines_resized.webp"
                width="500"
                height="200"
                alt="Placeholder"
                className="rounded-md"
              />
              <div>
                <h3 className="text-lg font-semibold text-white mt-2 mb-2 line-clamp-2">
                  Why Fa Fa Fa is Still Bangladesh&apos;s Go-To Classic Slot on
                  PBC88 in 2026
                </h3>
                <p className="text-sm text-white line-clamp-3">
                  In this post, we&apos;re gonna chat about what makes Fa Fa Fa
                  so special. We&apos;ll look at that epic New Year&apos;s win,
                  share some tips for beginners, explain why it&apos;s always on
                  the leaderboards, compare it to newer slots, and tell real
                  stories from players like you. If you&apos;re into online
                  gaming, casino fun, or just chasing that next big payout,
                  stick around. Let&apos;s jump in!
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="/blogs/fortune-gems-3-slot-review-2026-big-wins-guide-for-bangladesh-players"
            className="overflow-hidden rounded-lg shadow-md bg-[#166534] hover:shadow-xl transition
          transition-transform transform hover:scale-110 duration-300
          ">
            <div className="p-2 cursor-pointer">
              <Image
                src="/img/slot-machines_resized.webp"
                width="500"
                height="200"
                alt="Placeholder"
                className="rounded-md"
              />
              <div>
                <h3 className="text-lg font-semibold text-white mt-2 mb-2 line-clamp-2">
                  Fortune Gems 3 Slot Review 2026: Big Wins Guide for Bangladesh
                  Players
                </h3>
                <p className="text-sm text-white line-clamp-3">
                  Here, we&apos;ll break down what makes Fortune Gems 3 fun,
                  share some player tips, a honest review, and how it improved
                  from the older versions. By the end, you&apos;ll know if
                  it&apos;s your next go-to on PBC88.
                </p>
              </div>
            </div>
          </Link>
          <div className="overflow-hidden rounded-lg shadow-md bg-[#166534] hover:shadow-xl transition">
            <div className="p-2">
              <Image
                src="/img/slot-machines_resized.webp"
                width="500"
                height="200"
                alt="Placeholder"
                className="rounded-md"
              />
              <div className="mt-2">
                <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                  possimus nostrum explicabo nulla fugiat ratione?
                </h3>
                <p className="text-sm text-white line-clamp-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Natus, incidunt iste sapiente voluptas expedita quo laboriosam
                  quidem repellat fugit exercitationem maiores. Hic ex cumque
                  cupiditate, iusto incidunt error nemo explicabo saepe? Maiores
                  quibusdam illum doloremque quos eaque qui, aperiam cupiditate
                  mollitia aliquam non, quia aliquid! Sed omnis labore corporis
                  dolorum eaque repudiandae officia ea voluptatibus quaerat
                  dolorem. Sed, suscipit nesciunt reprehenderit, at minus et
                  minima ad a doloremque sit dolorem vel voluptatibus vero,
                  dolores sequi deserunt iure quasi. Eum non dignissimos
                  reiciendis nihil quos totam dolore nemo impedit laboriosam,
                  aut laborum, eligendi mollitia. Obcaecati, odio. Alias sint in
                  voluptates corporis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <section className="pb-12 lg:pb-20">
				<div className="bg-[url(/img/PBC_CHART_TITLE.png)] mx-auto bg-center bg-no-repeat bg-contain  w-[322px] h-[61px] lg:w-full lg:h-[200px]"></div>
				<div className="p-4">
					<div
						className="max-w-[1200px] mx-auto 
            [background-image:linear-gradient(to_right,#D8A42E_0%,#9A490E_50%,#F7D341_75%,#FFF4C8_88%,#FFCE4B_94%,#F9B34F_97%,#D58C22_100%)] p-1
          lg:p-3 rounded-lg
          "
					>
						<VisualizeChart />
					</div>
				</div>
			</section> */}
      {/* <section className="pb-12 lg:pb-20">
				<div className="p-4">
					<div className="max-w-[1200px] mx-auto bg-[#12390D] rounded-[23px] border-2 border-[#27DD12] px-2 py-8 lg:py-15">
						<h3 className="text-[#FFE207] text-center font-bold mb-2 lg:text-[30px]/9 text-balance lg:w-[80%] lg:mx-auto lg:mb-8">
							HOW TO CONQUER THE TIGER RANKING — PLAY SMART, WIN BIG!
						</h3>
						<p className="text-white mb-5 text-center text-[12px] lg:text-[18px]/6">
							Want to break into the Tiger Ranking and claim the crown? Here’s
							how to boost your chances:
						</p>
						<div>
							<Conquer />
						</div>
						<div className="w-[80%] mx-auto lg:mt-4">
							<p className="text-[#FFE207] text-center lg:text-[18px]/6">
								The Tiger Ranking isn’t about who bets the most — it’s about who
								hits the hardest. One spin is all it takes. Are you ready?
							</p>
						</div>
					</div>
				</div>
			</section> */}
    </div>
  );
}
