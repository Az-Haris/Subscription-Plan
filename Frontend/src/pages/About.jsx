import { FaDumbbell, FaUsers, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router";
import ScrollToTop from "../components/ScrollToTop";
import WhyChoose from "../components/WhyChoose";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className=" text-gray-800">
      <ScrollToTop />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8 md:py-16 px-3 text-center">
        <h1 className="text-2xl md:text-3xl font-bold">About Subscription</h1>
        <p className="mt-4 text-xs md:text-lg max-w-xl mx-auto">
          Empowering individuals to achieve their fitness goals through expert
          guidance and an inspiring community.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-3 py-16 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Our Mission</h2>
          <p className="text-lg dark:text-gray-300">
            At TrueFit, we strive to create a fitness platform that makes
            exercise engaging, accessible, and effective. Our expert trainers
            and innovative classes help individuals of all levels reach their
            health and fitness goals.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-purple-600 mb-4">
            Our Vision
          </h2>
          <p className="text-lg dark:text-gray-300">
            We envision a world where everyone has the knowledge, resources, and
            motivation to lead a healthier life. TrueFit is committed to
            building a supportive fitness community that inspires growth and
            transformation.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white dark:bg-gray-800 py-16">
        <WhyChoose></WhyChoose>
      </section>

      {/* Call-to-Action */}
      <section className="text-center pt-16 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-200">
          Ready to Start Your Subscription?
        </h2>
        <a href="https://wa.me/8801784410162?text=Hello!... Can I get more info?" className="px-10 py-3 bg-blue-600 text-white rounded-full text-lg font-semibold cursor-pointer hover:bg-blue-700 transition-colors">
          Subscribe Now
        </a>
      </section>
    </div>
  );
};

export default About;
