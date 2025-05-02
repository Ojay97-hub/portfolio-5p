import { useState } from 'react';
import { motion } from 'framer-motion';

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({ name: '', comment: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const comment = {
        ...newComment,
        _id: Date.now().toString(),
        createdAt: new Date().toISOString()
      };
      
      setComments([comment, ...comments]);
      setNewComment({ name: '', comment: '' });
    } catch (error) {
      console.error('Error submitting comment:', error);
      setError('Failed to submit comment');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 px-6 md:px-12 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-background text-center">
          Visitor Comments
        </h2>

        {/* Comment Form */}
        <form onSubmit={handleSubmit} className="mb-12">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-background mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={newComment.name}
                onChange={(e) => setNewComment({ ...newComment, name: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-primary text-background border border-accent focus:outline-none focus:border-light"
                required
              />
            </div>
            <div>
              <label htmlFor="comment" className="block text-background mb-2">
                Comment
              </label>
              <textarea
                id="comment"
                value={newComment.comment}
                onChange={(e) => setNewComment({ ...newComment, comment: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-primary text-background border border-accent focus:outline-none focus:border-light h-32"
                required
              />
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-accent hover:bg-light text-background px-6 py-3 rounded-lg font-bold transition-all duration-200 disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Comment'}
            </button>
          </div>
        </form>

        {/* Comments List */}
        <div className="space-y-6">
          {comments.map((comment) => (
            <motion.div
              key={comment._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-primary rounded-lg p-6"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-background">{comment.name}</h3>
                <span className="text-sm text-light">
                  {new Date(comment.createdAt).toLocaleDateString()}
                </span>
              </div>
              <p className="text-background">{comment.comment}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Comments; 