import { useEffect, useState } from "react";

const GoogleReviews = () => {
  const [reviews, setReviews] = useState<any>(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/google-reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  if (!reviews) return null;

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2">Google Reviews</h2>
        <p className="text-muted-foreground mb-6">
          Verified customer feedback from Google.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.reviews.map((r: any, index: number) => (
            <div key={index} className="rounded-xl border p-5 bg-card shadow">
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={r.profile_photo_url}
                  alt={r.author_name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-semibold text-sm">{r.author_name}</p>
                  <p className="text-xs text-muted-foreground">
                    {r.relative_time_description}
                  </p>
                </div>
              </div>

              <div className="text-yellow-400 mb-2">
                {"★".repeat(r.rating)}{" "}
                {"☆".repeat(5 - r.rating)}
              </div>

              <p className="text-sm text-muted-foreground">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
