import { Shield, Users, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center">About Us</h1>
          <p className="text-center mt-4 text-lg">
            Your trusted cleaning partner since 2010
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-8">
              SparkleClean was founded with a simple mission: to provide
              professional, reliable, and high-quality cleaning services to homes
              and businesses. Over the years, we've grown from a small local
              operation to a trusted cleaning service provider, maintaining our
              commitment to excellence and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Trust</h3>
              <p className="text-gray-600">
                We build lasting relationships through reliability and integrity.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">
                We strive for perfection in every cleaning task we undertake.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Care</h3>
              <p className="text-gray-600">
                We treat every space as if it were our own.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;