import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const apiKey = process.env.NEWS_API_KEY
  
  try {
    const response = await axios.get(`https://newsapi.org/v2/everything`, {
      params: {
        q: 'cryptocurrency',
        apiKey: apiKey,
        language: 'en',
        pageSize: 5
      }
    })
    
    res.status(200).json(response.data)
  } catch (error) {
    res.status(500).json({ error: 'Error fetching news' })
  }
}