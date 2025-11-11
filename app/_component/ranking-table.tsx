import Image from "next/image";
import { data } from "@/data/ranking";

export default function RankingTable() {
  return (
    <div
      className="overflow-x-auto p-1 rounded-lg lg:p-3 lg:pb-10
      [background-image:linear-gradient(to_right,#D8A42E_0%,#9A490E_50%,#F7D341_75%,#FFF4C8_88%,#FFCE4B_94%,#F9B34F_97%,#D58C22_100%)]
    ">
      <table
        className="min-w-full lg:min-h-[450px] border-collapse [background-image:linear-gradient(to_bottom,#0C1D0A_0%,#287020_50%,#0C1D0A_100%)] text-white rounded-lg shadow-lg
      ">
        <thead>
          <tr className="text-yellow-400 text-center text-sm sm:text-base md:text-[24px] lg:text-[26px] lg:font-[900]">
            <th className="px-1 py-2 md:px-2 md:pt-5 lg:pt-14">DATE</th>
            <th className="px-1 py-2 md:px-2 md:pt-5 lg:pt-14">RANKING</th>
            <th className="px-1 py-2 md:px-2 md:pt-5 lg:pt-14">GAME NAME</th>
            <th className="px-1 py-2 md:px-2 md:pt-5 lg:pt-14">NO. PLAYER</th>
            <th className="px-1 py-2 md:px-2 md:pt-5 lg:pt-14">
              HIGHEST WINNING
            </th>
          </tr>
        </thead>
        <tbody className="text-sm sm:text-base font-[500] lg:text-[24px]">
          {data.map((item, index) => (
            <tr key={index}>
              <td className="px-1 py-2 text-center md:px-2 md:text-center lg:py-0">
                {item.date}
              </td>
              <td className="flex items-center justify-center text-center gap-2 font-bold px-1 py-2 md:px-2 md:justify-center md:items-center md:text-center lg:ml-auto lg:py-0">
                <span className="text-xl hidden md:flex md:items-center md:h-[50px] md:w-[50px] lg:h-[50px] lg:w-[50px]">
                  <Image
                    src={item.icon}
                    width={50}
                    height={50}
                    alt={item.rank}
                    className="inline-block"
                  />
                </span>
                <span>{item.rank}</span>
              </td>
              <td className="px-1 py-2 text-center md:px-2 md:text-center lg:py-0">
                {item.name}
              </td>
              <td className="px-1 py-2 text-center md:px-2 md:text-center lg:py-0">
                {item.number}
              </td>
              <td className="px-1 py-2 text-center md:px-2 md:text-center lg:py-0">
                {item.winning}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
