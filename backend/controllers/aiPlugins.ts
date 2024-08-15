import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createAiPlugin = async (req: Request, res: Response) => {
  try {
    const { name, category, description, url, price } = req.body;
    const aiPlugin = await prisma.plugin.create({
      data: {
        name,
        category,
        description,
        url,
        price,
      },
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getAllAIPlugins = async (req: Request, res: Response) => {
  try {
    const aiPlugins = await prisma.plugin.findMany();
    res.status(200).json(aiPlugins);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
