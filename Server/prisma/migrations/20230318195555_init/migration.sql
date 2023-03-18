-- CreateTable
CREATE TABLE "toDos" (
    "id" SERIAL NOT NULL,
    "Owner" INTEGER NOT NULL,
    "ownerName" TEXT NOT NULL,
    "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "toDos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "toDoList" INTEGER[],

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
