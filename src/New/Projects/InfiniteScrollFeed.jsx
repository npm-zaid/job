import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal } from 'lucide-react';

const InfiniteScrollFeed = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observerTarget = useRef(null);

  const generatePost = (id) => {
    const topics = ['Technology', 'Design', 'Photography', 'Travel', 'Food', 'Art', 'Music', 'Fitness'];
    const authors = ['Alex Chen', 'Sarah Miller', 'Mike Johnson', 'Emma Davis', 'Chris Lee', 'Lisa Wang', 'David Brown', 'Nina Patel'];
    const content = [
      'Just finished working on an amazing project! The attention to detail really makes a difference.',
      'Sometimes the simplest solutions are the most elegant. Less is definitely more.',
      'Exploring new perspectives today. Every angle tells a different story.',
      'The creative process is messy, but that\'s where the magic happens.',
      'Small improvements compound into remarkable results over time.',
      'Found inspiration in the most unexpected place today.',
      'Collaboration brings out the best in everyone involved.',
      'Taking a moment to appreciate how far we\'ve come.',
    ];

    return {
      id,
      author: authors[Math.floor(Math.random() * authors.length)],
      topic: topics[Math.floor(Math.random() * topics.length)],
      content: content[Math.floor(Math.random() * content.length)],
      likes: Math.floor(Math.random() * 5000),
      comments: Math.floor(Math.random() * 500),
      shares: Math.floor(Math.random() * 200),
      timestamp: `${Math.floor(Math.random() * 24)}h ago`,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${id}`,
      image: Math.random() > 0.3 ? `https://picsum.photos/seed/${id}/800/600` : null,
    };
  };

  const loadMorePosts = useCallback(() => {
    if (loading || !hasMore) return;

    setLoading(true);
    setTimeout(() => {
      const newPosts = Array.from({ length: 5 }, (_, i) =>
        generatePost((page - 1) * 5 + i + 1)
      );
      setPosts((prev) => [...prev, ...newPosts]);
      setPage((prev) => prev + 1);
      setLoading(false);

      if (page >= 10) setHasMore(false);
    }, 800);
  }, [loading, hasMore, page]);

  useEffect(() => {
    loadMorePosts();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          loadMorePosts();
        }
      },
      { threshold: 0.1 }
    );

    if (observerTarget.current) observer.observe(observerTarget.current);
    return () => observer.disconnect();
  }, [hasMore, loading, loadMorePosts]);

  const PostCard = ({ post }) => (
    <div className="bg-[#0f0f15]/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl hover:shadow-purple-700/30 transition-all duration-500 overflow-hidden">
      {/* Header */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={post.avatar}
            alt={post.author}
            className="w-12 h-12 rounded-full border border-purple-500/40"
          />
          <div>
            <h3 className="font-semibold text-white">{post.author}</h3>
            <p className="text-sm text-gray-400">{post.timestamp}</p>
          </div>
        </div>
        <button className="text-gray-400 hover:text-purple-400 transition-colors">
          <MoreHorizontal size={20} />
        </button>
      </div>

      {/* Content */}
      <div className="px-4 pb-3">
        <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-700/40 to-pink-600/40 text-purple-200 text-xs font-medium rounded-full shadow-inner">
          {post.topic}
        </span>
        <p className="mt-3 text-gray-200 leading-relaxed">{post.content}</p>
      </div>

      {post.image && (
        <div className="w-full overflow-hidden">
          <img
            src={post.image}
            alt="Post content"
            className="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-700"
          />
        </div>
      )}

      {/* Footer */}
      <div className="p-4 flex items-center justify-between border-t border-white/10">
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-2 text-gray-400 hover:text-pink-500 transition-colors group">
            <Heart size={20} className="group-hover:fill-pink-500" />
            <span className="text-sm font-medium">{post.likes.toLocaleString()}</span>
          </button>
          <button className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors">
            <MessageCircle size={20} />
            <span className="text-sm font-medium">{post.comments}</span>
          </button>
          <button className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors">
            <Share2 size={20} />
            <span className="text-sm font-medium">{post.shares}</span>
          </button>
        </div>
        <button className="text-gray-400 hover:text-yellow-400 transition-colors">
          <Bookmark size={20} />
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a12] via-[#141428] to-[#0a0a12] text-gray-100">
      <div className="max-w-2xl mx-auto py-10 px-4">
        <div className="mb-10 text-center">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent mb-3 animate-pulse">
            Your Feed
          </h1>
          <p className="text-gray-400 text-lg">Explore creative stories from your world ✨</p>
        </div>

        <div className="space-y-8">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        {/* Loader */}
        <div ref={observerTarget} className="flex justify-center py-8">
          {loading && (
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin"></div>
              <p className="text-purple-300 text-sm font-medium animate-pulse">
                Loading more posts...
              </p>
            </div>
          )}
          {!hasMore && posts.length > 0 && (
            <div className="text-center">
              <p className="text-gray-400 font-medium">You're all caught up! 🎉</p>
              <p className="text-gray-600 text-sm mt-1">Check back later for new vibes</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InfiniteScrollFeed;
