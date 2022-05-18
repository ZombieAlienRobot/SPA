-- CreateTable
CREATE TABLE "Shoe" (
    "shoe_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "description" TEXT NOT NULL,
    "img" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Shoesize" (
    "shoesize_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "shoe_id" INTEGER NOT NULL,
    "size" INTEGER NOT NULL,
    CONSTRAINT "Shoesize_shoe_id_fkey" FOREIGN KEY ("shoe_id") REFERENCES "Shoe" ("shoe_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
