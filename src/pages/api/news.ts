import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const apiKey = process.env.NEWS_API_KEY

  if (!apiKey) {
    return res.status(500).json({ error: 'News API key is not configured' })
  }

  try {
    const response = await axios.get('https://newsapi.org/v2/everything', {
      params: {
        q: 'cryptocurrency',
        apiKey: apiKey,
        language: 'en',
        pageSize: 5,
      },
    })
    
    res.status(200).json(response.data)
  } catch (error) {
    console.error('Error fetching news:', error)
    res.status(500).json({ error: 'Failed to fetch news' })
  }
}