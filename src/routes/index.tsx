import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div
      id="root"
      className="flex flex-col justify-between items-center h-[calc(100vh-6rem)] bg-[url('src/assets/HomeBackground.jpg')] bg-center bg-cover"
    >
      <div className="flex  flex-col justify-around items-center gap-10 mt-20">
        <h1 className="text-5xl font-bold text-white text-center  [word-spacing:0.5em]">
          Creativity is the Most
        </h1>
        <h1 className="text-5xl font-bold text-white text-center  [word-spacing:0.5em]">
          Valuable Asset
        </h1>
        <p className="text-white max-w-3xl text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia,
          quibusdam, doloremque molestiae provident ullam, dignissimos aut ad
          harum sed voluptate laborum hic rerum quo! Officiis, molestiae.
          Nesciunt nulla molestias ipsa?
        </p>
        <Link
          to="/services"
          className="bg-transparent text-white font-semibold py-4 px-12 text-2xl rounded-4xl border-[3px] border-white hover:bg-white hover:text-black transition-all duration-300"
        >
          Shop Now
        </Link>
      </div>
      <div className="flex justify-around items-center bg-white p-2 py-6 rounded-t-3xl w-3/4">
        <div className="flex flex-col items-center">
          <p className="text-gray-600">Clients</p>
          <h2 className="text-4xl font-semibold">3K+</h2>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-gray-600">Projects</p>
          <h2 className="text-4xl font-semibold">10K+</h2>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-gray-600">Employees</p>
          <h2 className="text-4xl font-semibold">500+</h2>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-gray-600">Years</p>
          <h2 className="text-4xl font-semibold">10+</h2>
        </div>
      </div>
    </div>
  );
}
