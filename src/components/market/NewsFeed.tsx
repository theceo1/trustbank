//src/components/market/NewsFeed.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface NewsItem {
  title: string;
  url: string;
  source: string;
  publishedAt: string;
}

interface NewsApiResponse {
  articles: Array<{
    title: string;
    url: string;
    source: {
      name: string;
    };
    publishedAt: string;
  }>;
}

const NewsFeed: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get<NewsApiResponse>('/api/news');
        setNews(response.data.articles.map((article) => ({
          title: article.title,
          url: article.url,
          source: article.source.name,
          publishedAt: new Date(article.publishedAt).toLocaleDateString(),
        })));
      } catch (error) {
        console.error('Failed to fetch news:', error);
        setError('Failed to fetch news. Please try again later.');
      }
    };

    fetchNews();
  }, []);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <h2 className="text-2xl font-bold p-4 bg-gray-100">Crypto News</h2>
      {news.length === 0 ? (
        <p className="p-4">Loading news...</p>
      ) : (
        <ul className="divide-y divide-gray-200">
          {news.map((item, index) => (
            <li key={index} className="p-4">
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="block hover:bg-gray-50">
                <h3 className="text-lg font-semibold text-blue-600">{item.title}</h3>
                <p className="text-sm text-gray-500 mt-1">
                  {item.source} - {item.publishedAt}
                </p>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NewsFeed;
