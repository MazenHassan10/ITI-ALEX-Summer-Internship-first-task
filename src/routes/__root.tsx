import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
let routes = [
  { routeName: "Services", routePath: "/services" },
  { routeName: "Blog", routePath: "/blog" },
  { routeName: "Shop Now", routePath: "/shopnow" },
];

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="flex justify-between items-center px-14 h-24">
        <div>
          <Link to="/" className="text-2xl font-bold">
            S P A C E <span className="text-purple-800">Y</span>
          </Link>
        </div>
        <div className="flex gap-6">
          {routes.map((route) => {
            return (
              <Link to={route.routePath} className="[&.active]:font-bold">
                {route.routeName}
              </Link>
            );
          })}
          {/* <Link to="/services" className="[&.active]:font-bold">
            Services
          </Link>
          <Link to="/blog" className="[&.active]:font-bold">
            Blog
          </Link>
          <Link to="/shopnow" className="[&.active]:font-bold">
            Shop Now
          </Link> */}
        </div>
      </div>
      <hr />
      <Outlet />
    </>
  ),
});
