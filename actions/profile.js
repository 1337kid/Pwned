"use server";
import {
  getProfileDataFromDB,
} from "@/lib/db/profile";
import { getUser } from "@/lib/auth";


export const getProfileData = async () => {
  const user = await getUser();
  return getProfileDataFromDB(user?.email);
};
