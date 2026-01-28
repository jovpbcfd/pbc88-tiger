import Image from "next/image";

export default function BlogImageMainBanner({ link }: { link: string }) {
  return (
    <div className="w-full max-w-[827px] md:w-[827px] rounded-md mb-5">
      <Image
        src={link}
        width={827}
        height={435}
        alt="Main Banner"
        className="w-full md:w-[827px] h-auto rounded-md border-2 border-[#15803d]"
      />
    </div>
  );
}
