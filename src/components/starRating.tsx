type StarRatingProps = {
  rating: number;
  maxStars?: number;
  starSize?: string;
};

const FullStar = ({ size }: { size: string }) => (
  <svg
    className={`${size} text-yellow-400`}
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const HalfStar = ({ size }: { size: string }) => (
  <svg
    className={`${size} text-yellow-400`}
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    <path
      className="text-gray-300"
      fill="currentColor"
      d="M10 15.27L16.18 19l-1.64-7.03L22 7.24l-7.19-.61L12 0l-2.81 6.63L2 7.24l7.46 4.73L7.82 19z"
      style={{ clipPath: "inset(0 0 0 50%)" }}
    />
  </svg>
);

const HalfStarGradient = ({ size }: { size: string }) => (
  <div className={size} style={{ position: "relative" }}>
    <FullStar size={size} />
    <div
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        width: "50%",
        overflow: "hidden",
      }}
    >
      <FullStar size={size} />
    </div>
  </div>
);

const EmptyStar = ({ size }: { size: string }) => (
  <svg
    className={`${size} text-gray-300`}
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const StarRating = ({
  rating,
  maxStars = 5,
  starSize = "w-6 h-6",
}: StarRatingProps) => {
  return (
    <div className="flex items-center">
      {Array.from({ length: maxStars }, (_, i) => {
        const starNumber = i + 1;

        if (starNumber <= rating) {
          return <FullStar key={i} size={starSize} />;
        } else if (starNumber - 0.5 <= rating) {
          return <HalfStar key={i} size={starSize} />;
        } else {
          return <EmptyStar key={i} size={starSize} />;
        }
      })}
    </div>
  );
};

export default StarRating;
