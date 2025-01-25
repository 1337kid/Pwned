import { PrismaClient } from "@prisma/client";

export const getProfileDataFromDB = async (email) => {
  const prisma = new PrismaClient();
  const profile = await prisma.users.findFirst({
    where: {
      email: email,
    },
    select: {
      name: true,
    },
  });
  return profile;
};
