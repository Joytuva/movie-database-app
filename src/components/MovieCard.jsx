export default function MovieCard({ movie, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
    >
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300"}
        alt={movie.Title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-900">{movie.Title}</h3>
        <p className="text-gray-500">{movie.Year}</p>
      </div>
    </div>
  );
}
