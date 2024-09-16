import React, { useMemo } from 'react';
import Layout from "@/components/Layout";
import { Star, CheckCircle } from 'lucide-react';
import Image from 'next/image';


const StarRating = ({ rating }) => (
  <div className="flex">
    {[...Array(5)].map((_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-yellow-300' : 'text-gray-300'}`} 
        fill="currentColor" 
      />
    ))}
  </div>
);

// Set display name for ReviewBar component
const ReviewBar = React.memo(({ stars, count, total }) => {
  const percentage = (count / total) * 100;
  return (
    <div className="flex items-center gap-2">
      <p className="w-2 shrink-0 text-sm font-medium">{stars}</p>
      <Star className="h-4 w-4 text-yellow-300" fill="currentColor" />
      <div className="h-1.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
        <div 
          className="h-1.5 rounded-full bg-yellow-300" 
          style={{ width: `${percentage}%` }} 
        />
      </div>
      <span className="text-sm font-medium text-purple-700 dark:text-purple-500">
        {count}
      </span>
    </div>
)});
ReviewBar.displayName = "ReviewBar";

const Review = React.memo(({ rating, author, date, verified, content, helpfulYes, helpfulNo }) => (
  <div className="gap-3 py-6 sm:flex sm:items-start">
    <div className="shrink-0 space-y-2 sm:w-48 md:w-72">
      <StarRating rating={rating} />
      <div className="space-y-0.5">
        <p className="text-base font-semibold text-gray-900 dark:text-white">{author}</p>
        <p className="text-sm font-normal text-gray-500 dark:text-gray-400">{date}</p>
      </div>
      {verified && (
        <div className="inline-flex items-center gap-1">
          <CheckCircle className="h-5 w-5 text-purple-700 dark:text-purple-500" />
          <p className="text-sm font-medium text-gray-900 dark:text-white">Перевірена покупка</p>
        </div>
      )}
    </div>
    <div className="mt-4 min-w-0 flex-1 space-y-4 sm:mt-0">
      <p className="text-base font-normal text-gray-500 dark:text-gray-400">{content}</p>
      <div className="flex items-center gap-4">
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Чи було це корисно для вас?</p>
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <input 
              id={`helpful-yes-${author}`} 
              type="radio" 
              name={`helpful-${author}`} 
              className="h-4 w-4 border-gray-300 bg-gray-100 text-purple-600 focus:ring-2 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-purple-600" 
            />
            <label htmlFor={`helpful-yes-${author}`} className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Так: {helpfulYes}</label>
          </div>
          <div className="flex items-center">
            <input 
              id={`helpful-no-${author}`} 
              type="radio" 
              name={`helpful-${author}`} 
              className="h-4 w-4 border-gray-300 bg-gray-100 text-purple-600 focus:ring-2 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-purple-600" 
            />
            <label htmlFor={`helpful-no-${author}`} className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Ні: {helpfulNo}</label>
          </div>
        </div>
      </div>
    </div>
  </div>
));
Review.displayName = "Review"; // Set display name

const Reviews = ({ reviews, ratingCounts }) => {
  const { totalReviews, averageRating } = useMemo(() => {
    const total = Object.values(ratingCounts).reduce((a, b) => a + b, 0);
    const avg = Object.entries(ratingCounts).reduce((acc, [stars, count]) => acc + Number(stars) * count, 0) / total;
    return { totalReviews: total, averageRating: avg };
  }, [ratingCounts]);

  return (
    <Layout>
      <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16 m-5 rounded-3xl shadow">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Відгуки</h2>
            <div className="mt-2 flex items-center gap-2 sm:mt-0">
              <StarRating rating={Math.round(averageRating)} />
              <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">({averageRating.toFixed(1)})</p>
              <span className="text-sm font-medium leading-none text-gray-900 dark:text-white">{totalReviews} відгуків</span>
            </div>
          </div>

          <div className="my-6 gap-8 sm:flex sm:items-start md:my-8">
            <div className="mt-6 min-w-0 flex-1 space-y-3 sm:mt-0">
              {Object.entries(ratingCounts)
                .sort((a, b) => Number(b[0]) - Number(a[0]))
                .map(([stars, count]) => (
                  <ReviewBar key={stars} stars={stars} count={count} total={totalReviews} />
                ))
              }
            </div>
          </div>

          <div className="mt-6 divide-y divide-gray-200 dark:divide-gray-700">
            {reviews.map((review, index) => (
              <Review key={index} {...review} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Reviews;
