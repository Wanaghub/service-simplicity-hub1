import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center">Contact Us</h1>
          <p className="text-center mt-4 text-lg">
            Get in touch with our team
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-primary mr-4" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-primary mr-4" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">info@sparkleclean.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-primary mr-4" />
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-gray-600">
                      123 Cleaning Street<br />
                      Sparkle City, SC 12345
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;