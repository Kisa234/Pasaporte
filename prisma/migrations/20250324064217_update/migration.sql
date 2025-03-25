-- AlterTable
ALTER TABLE "User" ADD COLUMN     "Nivel" TEXT NOT NULL DEFAULT 'Explorador del Café',
ADD COLUMN     "Puntaje" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "Visita" (
    "idVisita" TEXT NOT NULL,
    "NroBoleta" INTEGER NOT NULL,
    "FechaVisita" TIMESTAMP(3) NOT NULL,
    "Comentario" TEXT NOT NULL,
    "Dni" INTEGER NOT NULL,

    CONSTRAINT "Visita_pkey" PRIMARY KEY ("idVisita")
);

-- CreateIndex
CREATE UNIQUE INDEX "Visita_NroBoleta_key" ON "Visita"("NroBoleta");

-- AddForeignKey
ALTER TABLE "Visita" ADD CONSTRAINT "Visita_Dni_fkey" FOREIGN KEY ("Dni") REFERENCES "User"("Dni") ON DELETE RESTRICT ON UPDATE CASCADE;
