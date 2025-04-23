import React from "react";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-white text-black min-h-screen flex items-center px-4 sm:px-6 md:px-12">
        <div className="max-w-screen-md mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
            Stay Organized &<br className="block sm:hidden" />
            Achieve Your Goals
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 px-2 sm:px-0">
            Plan, track, and boost your productivity with our intelligent
            academic planner.
          </p>
          <a
            href="#features"
            className="inline-block bg-yellow-400 text-gray-900 font-semibold py-3 px-8 rounded-full text-base sm:text-lg transition duration-300 hover:bg-yellow-500"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gray-50"
      >
        <div className="w-full max-w-screen-xl mx-auto py-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16 text-center text-yellow-400">
            Key Features
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Smart Scheduling",
                desc: "Let our AI suggest the best study slots to maximize your productivity.",
              },
              {
                title: "Timetable Creation",
                desc: "Easily create and manage your class, assignment, and exam schedules.",
              },
              {
                title: "Deadline Reminders",
                desc: "Receive timely reminders for upcoming assignments and exams.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white shadow-lg hover:shadow-2xl transition duration-300 rounded-2xl p-8 h-full min-h-[280px] flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-base mb-6">{feature.desc}</p>
                </div>
                <a
                  href="#"
                  className="text-purple-600 hover:underline text-sm sm:text-base"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Color Palette Panel */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-screen-lg mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-800">
            🎨 Color Palette Used
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 justify-items-center">
            {[
              { name: "Primary Blue", code: "#3B82F6" },
              { name: "Accent Purple", code: "#8B5CF6" },
              { name: "Highlight Yellow", code: "#FACC15" },
              { name: "Light Background", code: "#F9FAFB" },
              { name: "Dark Text", code: "#1F2937" },
              { name: "Muted Text", code: "#4B5563" },
            ].map((color, index) => (
              <div key={index} className="text-center">
                <div
                  className="w-16 h-16 rounded-full mx-auto shadow-md"
                  style={{ backgroundColor: color.code }}
                ></div>
                <p className="mt-2 text-sm font-medium text-gray-700">
                  {color.name}
                </p>
                <p className="text-xs text-gray-500">{color.code}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
