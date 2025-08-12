import type { NextApiRequest, NextApiResponse } from "next";
import { NextRequest } from "next/server";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const timestamp = new Date().toLocaleString('ja-JP');
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data: Post[] = await response.json()

    res.status(200).json({data, timestamp})
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: 'failed to load data', timestamp})
  }
}
