import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createAiBinaries = async (req: Request, res: Response) => {
  try {
    const { name, description, status, url, category, price } = req.body;
    const aiBinaries = await prisma.binaries.create({
      data: {
        name,
        description,
        status,
        url,
        category,
        price,
      },
    });

    return res.status(201).json(aiBinaries);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getAllAIBinaries = async (req: Request, res: Response) => {
  try {
    const aiBinaries = await prisma.binaries.findMany();
    res.status(200).json(aiBinaries);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
