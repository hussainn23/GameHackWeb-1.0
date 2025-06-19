import React from 'react';

export const About = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-6 lg:p-16">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-indigo-700 mb-4">About Us</h1>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            We're passionate about delivering high-quality earning apps, games, and experiences that empower our users to explore, earn, and enjoy.
          </p>
        </div>

        {/* Company Mission */}
        <section className="mb-16 grid lg:grid-cols-2 gap-10 items-center">
          <img
            src="https://t4.ftcdn.net/jpg/05/86/32/93/240_F_586329308_vrzIxluc5VjkQL5PyMkD9rZS4UpKAA2t.jpg"
            alt="Our Mission"
            className="rounded-2xl shadow-lg"
          />
          <div>
            <h2 className="text-2xl font-semibold text-[#8700BA] mb-4">Our Mission</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our mission is to revolutionize the digital earning experience by offering fun, fair, and secure apps. We strive to blend entertainment and opportunities, ensuring our users always have something exciting and beneficial to explore.
            </p>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-[#8700BA] mb-6 text-center">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-[#6E00D9] mb-2">Reliable Apps</h3>
              <p className="text-gray-600">Each app is tested and trusted to provide the best user experience and seamless performance.</p>
            </div>
            <div className="p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-[#6E00D9] mb-2">Daily Updates</h3>
              <p className="text-gray-600">We frequently update our catalog to bring you the latest apps and features.</p>
            </div>
            <div className="p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-[#6E00D9] mb-2">User Focused</h3>
              <p className="text-gray-600">We listen to our users and constantly improve the platform based on your feedback.</p>
            </div>
          </div>
        </section>

        {/* Meet the Team */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#8700BA] mb-6 text-center">Meet the Team</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {['John', 'Ayesha', 'Kumar'].map((name, index) => (
              <div key={index} className="text-center">
                <img
                  src={`https://source.unsplash.com/100x100/?person,${index}`}
                  alt={name}
                  className="w-24 h-24 rounded-full mx-auto mb-2"
                />
                <h4 className="text-lg font-medium text-gray-800">{name}</h4>
                <p className="text-sm text-gray-500">Developer</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer Quote */}
        <div className="text-center mt-16">
          <blockquote className="italic text-xl text-gray-600 max-w-2xl mx-auto">
            "Empowering your earnings with entertainment – one app at a time."
          </blockquote>
        </div>
      </div>
    </div>
  );
};
