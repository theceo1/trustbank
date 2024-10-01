// src/components/market/NewsFeed.tsx
import React, { useState, useEffect } from 'react';
import { fetchCryptoNews, NewsArticle } from '../../services/api';

const NewsFeed: React.FC = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const news = await fetchCryptoNews(); // This should now work correctly
        setArticles(news.articles); // Access articles from the response
      } catch (error) {
        console.error('Failed to fetch news articles', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading news...</div>;
  }

  return (
    <div className="bg-teal-100 shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">Latest Crypto News</h2>
      <ul>
        {articles.map((article, index) => (
          <li key={index} className="mb-4">
            <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              {article.title}
            </a>
            <p className="text-gray-600 dark:text-gray-400">{article.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsFeed;
