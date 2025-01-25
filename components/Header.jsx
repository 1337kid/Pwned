import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-5 items-center w-full">
        <div className="flex justify-center items-center w-16 min-h-12 bg-our_green rounded-[20px]">
          <Search className="h-5 w-5" />
        </div>
        <Input
          className="border-none text-our_white focus:border-none focus-visible:ring-0 focus-visible:ring-offset-0 bg-gray-950"
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
              <Button className="bg-transparent tetx-white min-h-12 rounded-[20px]">
                Login
              </Button>
              <Button className="bg-our_green text-black hover:bg-our_green/[.6] rounded-[20px] h-12 hover:text-white">
                Sign Up
              </Button>
            </div>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Navbar;
