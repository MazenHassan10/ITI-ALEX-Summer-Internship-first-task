import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  component: Services,
});

function Services() {
  return (
    <div className="h-[calc(100vh-6rem)] flex justify-center items-center bg-[url('src/assets/HomeBackground.jpg')] bg-center bg-cover">
      <h3 className="text-8xl font-bold text-white">Services here</h3>
    </div>
  );
}
