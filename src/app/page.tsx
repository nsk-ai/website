import Image from "next/image";
import Logo from "../../public/logo/NSK.AI Letters.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-pink-50 to-red-500 flex flex-col items-center">
      <div className="w-full max-w-7xl mx-auto px-4 py-8">
        <Image
          src={Logo}
          alt="NSK.AI Logo"
          width={100}
          height={50}
          className="mx-auto"
        />
      </div>
      <div className="flex-1 flex items-center justify-center">
        <h1 className="text-[8rem] font-black tracking-tight leading-none text-black">
          COMING SOON
        </h1>
      </div>
    </div>
  );
}
