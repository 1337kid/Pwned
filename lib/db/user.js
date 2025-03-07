import { PrismaClient, Prisma } from '@prisma/client'

export const checkUserFromDB = async (email) => {
    const prisma = new PrismaClient();
    const user = await prisma.users.findUnique({
        where: {
            email: email
        }
    });
    if (!user) return false;
    return true;
}

export const insertUserIntoDB = async (email, name) => {
    const prisma = new PrismaClient();
    await prisma.users.create({
        data: {
            email: email,
            name: name,
        }
    })
}