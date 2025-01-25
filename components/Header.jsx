import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaGoogle } from "react-icons/fa";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import Logo from "@/assets/mainlogo.svg";
import { loginAction } from "@/actions/users";
import { useTransition } from "react";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [pending, startTransition] = useTransition();
  const router = useRouter();

  const handleSignIn = (provider) => {
    startTransition(async () => {
      const { error, url } = await loginAction(provider);
      if (!error && url) router.push(url);
      else console.log("not loggedin");
    });
  };

  return (
    <div className="flex justify-between">
      <div className="flex gap-5 items-center w-full">
        <div className="flex justify-center items-center w-16 min-h-12 bg-our_green rounded-[20px]">
          <Search className="h-5 w-5" />
        </div>
        <Input
          className="border-none text-our_white focus:border-none focus-visible:ring-0 focus-visible:ring-offset-0 bg-[#0f0f0f]"
          placeholder="Search"
        />
      </div>
      <div className="flex gap-5 items-center">
        <DropdownMenu className="text-our_white">
          <DropdownMenuTrigger className="flex items-center px-6 py-3 text-our_white font-medium gap-2">
            EN <ChevronDown className="h-5 w-5" />{" "}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>EN</DropdownMenuItem>
            <DropdownMenuItem>FR</DropdownMenuItem>
            <DropdownMenuItem>ES</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Dialog>
          <DialogTrigger asChild>
            <div className="flex gap-5 items-center">
              <Button className="bg-our_green text-black hover:bg-our_green/[.6] rounded-[20px] h-12 hover:text-white">
                Sign Up
              </Button>
            </div>
          </DialogTrigger>
          <DialogContent className="bg-[#0f0f0f] scale-125 rounded-[12px] py-8 px-6 flex flex-col justify-center max-w-[321px] items-center gap-6 border-none outline-none [&>button]:hidden">
            <DialogTitle className="flex flex-col gap-6 items-center">
              <Image src={Logo} alt="l;ogo" />
              <Button
                className="bg-white/[.12] text-white rounded-[10px] w-[281px] h-12 border border-zinc-500"
                onClick={() => handleSignIn("google")}
              >
                <FaGoogle /> Sign Up with Google
              </Button>
              <Button
                className="bg-white/[.12] -mt-4 text-white rounded-[10px] w-[281px] h-12 border border-zinc-500"
                onClick={() => handleSignIn("google")}
              >
                <FaGoogle /> Sign Up with GitHub
              </Button>
            </DialogTitle>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Navbar;
