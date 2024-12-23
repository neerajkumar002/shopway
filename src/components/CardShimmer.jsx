const CardShimmer = () => {
  return (
    <div className="w-full h-[250px] shadow flex flex-col gap-4 items-center py-3 rounded">
      <div className="bg-gray-200 w-[300px] h-[150px] rounded animate-pulse">
        {" "}
      </div>
      <div className="bg-gray-200 w-[300px] h-[60px] rounded animate-pulse">
        {" "}
      </div>
    </div>
  );
};

export default CardShimmer;
