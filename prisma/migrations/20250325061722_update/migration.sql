-- AlterTable
ALTER TABLE "User" ADD COLUMN     "Eliminado" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Visita" ALTER COLUMN "FechaVisita" SET DEFAULT CURRENT_TIMESTAMP;
