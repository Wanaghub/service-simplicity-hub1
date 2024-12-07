import { Home, Sparkles, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";

const Index = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional Cleaning Services
            </h1>
            <p className="text-xl mb-8">
              Making your space sparkle, one room at a time
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-gray-100"
            >
              <a href="/contact">Get Started</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="Home Cleaning"
              description="Comprehensive cleaning services for your home, tailored to your needs."
              icon={<Home size={32} />}
            />
            <ServiceCard
              title="Deep Cleaning"
              description="Thorough deep cleaning service for those special occasions."
              icon={<Sparkles size={32} />}
            />
            <ServiceCard
              title="Regular Service"
              description="Scheduled cleaning services to keep your space consistently clean."
              icon={<Clock size={32} />}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Sarah Johnson"
              role="Homeowner"
              content="The best cleaning service I've ever used. They're thorough, professional, and always on time."
            />
            <TestimonialCard
              name="Mike Peters"
              role="Office Manager"
              content="SparkleClean has transformed our office space. Their attention to detail is impressive."
            />
            <TestimonialCard
              name="Emily Davis"
              role="Property Manager"
              content="Reliable and trustworthy. They've been cleaning our properties for years with consistent quality."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;