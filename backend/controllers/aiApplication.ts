import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createAiApplication = async (req: Request, res: Response) => {
  const { name, description, status, url, category, price } = req.body;

  try {
    const aiApplication = await prisma.application.create({
      data: {
        name,
        description,
        url,
        status,
        category,
        price,
      },
    });

    res.status(201).json(aiApplication);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getAllAIapplications = async (req: Request, res: Response) => {
  try {
    const aiApplications = await prisma.application.findMany();
    res.status(200).json(aiApplications);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
