-- CreateTable
CREATE TABLE "Pasaporte" (
    "NroPasaporte" INTEGER NOT NULL,

    CONSTRAINT "Pasaporte_pkey" PRIMARY KEY ("NroPasaporte")
);

-- CreateTable
CREATE TABLE "User" (
    "Dni" INTEGER NOT NULL,
    "Nombres" TEXT NOT NULL,
    "Correo" TEXT NOT NULL,
    "Telefono" INTEGER NOT NULL,
    "Distrito" TEXT NOT NULL,
    "FechaNac" TIMESTAMP(3) NOT NULL,
    "FechaReg" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "NroPasaporte" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("Dni")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_NroPasaporte_key" ON "User"("NroPasaporte");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_NroPasaporte_fkey" FOREIGN KEY ("NroPasaporte") REFERENCES "Pasaporte"("NroPasaporte") ON DELETE RESTRICT ON UPDATE CASCADE;
