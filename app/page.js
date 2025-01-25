import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import LandingBg from "@/assets/landingbg.png";
import Image from "next/image";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import LandPlay from "@/assets/landplay.png";
import BgGame from "@/assets/bggame.png";
import { ChevronRight } from "lucide-react";
import { getUser } from "@/lib/auth";

export default async function Home() {
  const user = await getUser();
  return (
    <div className="min-h-screen flex">
      {/* <Button onClick={() => handleSignIn('google')}>Login</Button> */}
      <div className="w-2/12 min-h-screen justify-between flex flex-col border-r border-[#3D3D3D]/[.2]">
        <Navbar />
      </div>
      <div className="w-10/12 h-full px-5 py-4 flex flex-col justify-between">
        <Header auth={user} />
        <div className="py-16 px-[50px] items-center flex flex-col gap-16">
          {/* landing */}
          <div className="flex gap-6">
            <div className="relative">
              <Image src={LandingBg} alt="lbg" />
              <div className="absolute bottom-12 left-12 flex flex-col text-white">
                <span className="font-medium mb-2">EXCEL PLAY 2024</span>
                <p className="w-[312px] font-medium mb-6">
                  Nova Dash is a ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor
                </p>
                <a href="https://play.excelmec.org/novadash" className="w-[156px]">
                  <Button className="bg-our_green text-black max-w-[156px] hover:bg-our_green/[.6] rounded-[20px] h-12 hover:text-white">
                    Start Playing
                  </Button>
                </a>
              </div>
            </div>
            <ScrollArea className="w-[220px] h-[480px]">
              <div className="flex flex-col gap-2">
                {Array.from({ length: 20 }, (_, i) => i + 1).map(
                  (num, index) => (
                    <div
                      key={index}
                      className="flex items-center w-[200px] p-[9px] px-3 gap-2 hover:cursor-pointer hover:bg-[#161615] text-sm rounded-lg text-[#F5F5F5]"
                    >
                      <Image src={LandPlay} alt="lp" />
                      Excel Kryptos &apos;24
                    </div>
                  )
                )}
              </div>
            </ScrollArea>
          </div>
          {/* popular games */}
          <h4 className="text-white text-[21px] font-medium items-center text-left flex w-full">
            Popular Games <ChevronRight />
          </h4>
          <ScrollArea className="w-full h-[346px] px-2 -mt-10">
            <div className="flex gap-8">
              {Array.from({ length: 20 }, (_, i) => i + 1).map((num, index) => (
                <div
                  className="flex flex-col items-center w-[186px] hover:cursor-pointer hover:bg-[#161615] rounded-lg text-[#F5F5F5]"
                  key={index}
                >
                  <Image src={BgGame} alt="lp" />
                  <div className="flex flex-col gap-1 mt-1">
                    Tiny Tina's Wonderlands
                    <div className="flex gap-1">
                      <span className="bg-[#d9ff97] px-2 rounded-[4px] text-black">
                        -20%
                      </span>
                      <span className="line-through text-[#F5F5F5]/[.6]">
                        ¥199
                      </span>
                      <span className="text-[#F5F5F5]">¥159.20</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />{" "}
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
