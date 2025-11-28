import Image from "next/image";
import RankingTable from "./ranking-table";
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
          <p className="text-center lg:text-left lg:text-[18px]/7 font-bold ">
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
      </section>
      <section className="max-w-[1200px] mx-auto flex gap-5 items-center flex-col-reverse md:mt-10 md:flex-row md:items-center md:pb-15">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="overflow-hidden rounded-lg shadow-md bg-[#166534] hover:shadow-xl transition">
            <div className="p-2">
              <Image
                src="/img/slot-machines_resized.webp"
                width="500"
                height="200"
                alt="Placeholder"
                className="rounded-md"
              />
              <div>
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
      </section>
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
