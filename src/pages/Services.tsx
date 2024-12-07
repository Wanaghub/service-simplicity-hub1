import { Home, Sparkles, Clock, Shield, Building, Star } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";

const Services = () => {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center">Our Services</h1>
          <p className="text-center mt-4 text-lg">
            Professional cleaning solutions for every need
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="Home Cleaning"
              description="Regular cleaning service for homes, including dusting, vacuuming, and sanitizing."
              icon={<Home size={32} />}
            />
            <ServiceCard
              title="Deep Cleaning"
              description="Intensive cleaning service targeting hard-to-reach areas and stubborn dirt."
              icon={<Sparkles size={32} />}
            />
            <ServiceCard
              title="Regular Service"
              description="Scheduled cleaning services on a weekly, bi-weekly, or monthly basis."
              icon={<Clock size={32} />}
            />
            <ServiceCard
              title="Move In/Out Cleaning"
              description="Thorough cleaning service for moving transitions."
              icon={<Building size={32} />}
            />
            <ServiceCard
              title="Office Cleaning"
              description="Professional cleaning services for commercial spaces."
              icon={<Shield size={32} />}
            />
            <ServiceCard
              title="Special Events"
              description="Pre and post-event cleaning services for special occasions."
              icon={<Star size={32} />}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;