import NewsReader from "../components/NewsReader";

const Index = () => {
  return (
    <div className="h-screen w-full p-4 flex flex-col">
      <h1 className="text-2xl font-bold text-center mb-6">News Reader</h1>
      <div className="flex-1 flex flex-col">
        <NewsReader />
      </div>
    </div>
  );
};

export default Index;
