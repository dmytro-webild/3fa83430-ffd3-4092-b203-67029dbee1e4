import AboutTextSplit from '@/components/sections/about/AboutTextSplit';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqTabbedAccordion from '@/components/sections/faq/FaqTabbedAccordion';
import FeaturesImageBento from '@/components/sections/features/FeaturesImageBento';
import FeaturesTaggedCards from '@/components/sections/features/FeaturesTaggedCards';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import TestimonialMarqueeOverlayCards from '@/components/sections/testimonial/TestimonialMarqueeOverlayCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroOverlay
      tag="Collingwood Park"
      title="Exquisite Nails for Your Unique Style"
      description="Experience professional nail care and pampering in a clean, friendly, and relaxing environment. We bring your vision to life."
      primaryButton={{
        text: "Book an Appointment",
        href: "#contact",
      }}
      secondaryButton={{
        text: "View Our Services",
        href: "#services",
      }}
      imageSrc="https://storage.googleapis.com/webild/users/user_3FZeKCStq50zFJWSlLQU8JAzf1F/tmp/nails-1782627736532-450c2921.png"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutTextSplit
      title="Dedicated to Nail Excellence"
      descriptions={[
        "Located in the heart of Collingwood Park, Lisa's Nails offers top-tier manicures, pedicures, and nail art. We are committed to using high-quality products and maintaining a sterile, relaxing environment for every guest.",
        "Our owner-operated studio takes pride in delivering precise results, ensuring your nails are not only beautiful but also healthy. We listen to your preferences to create the perfect look for your day or a special event.",
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="services" data-section="services">
    <SectionErrorBoundary name="services">
          <FeaturesImageBento
      tag="Our Services"
      title="Beauty in Every Detail"
      description="From classic manicures to intricate nail art designs, our range of services caters to all tastes."
      items={[
        {
          title: "Classic Manicure",
          description: "Perfectly shaped and polished.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-beauty-nail-art_23-2149250070.jpg",
        },
        {
          title: "Pedicure Spa",
          description: "Refreshing treat for tired feet.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-young-girl-with-beauty-blender_23-2148272497.jpg",
        },
        {
          title: "Acrylic Extensions",
          description: "Durable and beautiful extensions.",
          imageSrc: "http://img.b2bpic.net/free-photo/make-up-artist-work-her-beauty-visage-studio-salon-woman-professional-make-up-master-beauty-club-concept_627829-9034.jpg",
        },
        {
          title: "Gel Polish",
          description: "Long-lasting high-shine color.",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-nail-art-with-tools_23-2150455868.jpg",
        },
        {
          title: "Custom Nail Art",
          description: "Unique designs for your personality.",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-receiving-relaxing-facial-massage_23-2148176883.jpg",
        },
        {
          title: "Nail Repair",
          description: "Restoring your natural nail health.",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-getting-manicure-top-view_23-2149975501.jpg",
        },
        {
          title: "Express Nails",
          description: "Quick prep and refresh for busy days.",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-wellness-accessories-relaxation_23-2148439312.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="features" data-section="features">
    <SectionErrorBoundary name="features">
          <FeaturesTaggedCards
      tag="Why Us"
      title="Experience the Lisa’s Nails Difference"
      description="We blend skill, care, and quality to ensure you leave satisfied and glowing."
      items={[
        {
          tag: "Expertise",
          title: "Pro-Owner Care",
          description: "Personalized service by our expert team.",
          primaryButton: {
            text: "Contact Us",
            href: "#contact",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/decorative-spa-presentation-top-view_23-2147684503.jpg",
        },
        {
          tag: "Hygiene",
          title: "Sterilized Tools",
          description: "Your safety and comfort is our priority.",
          primaryButton: {
            text: "Learn More",
            href: "#about",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/woman-showing-hands-form-support_23-2150693573.jpg",
        },
        {
          tag: "Variety",
          title: "Diverse Colors",
          description: "A wide range of high-quality polishes.",
          primaryButton: {
            text: "View Gallery",
            href: "#services",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/master-manicure-african-woman-beauty-salon_1157-48318.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="reviews" data-section="reviews">
    <SectionErrorBoundary name="reviews">
          <TestimonialMarqueeOverlayCards
      tag="Client Feedback"
      title="Hear What Our Clients Say"
      description="We are proud of the feedback we receive from our lovely Collingwood Park community."
      testimonials={[
        {
          name: "Aylah",
          role: "Visitor",
          company: "Local Client",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-beautiful-surprised-woman-looking-with-hands-near-mouth-trendy-girl-casual-summer-clothes-hat-female-posing-near-gray-wall_158538-1431.jpg",
        },
        {
          name: "Sara Hooper",
          role: "Guide",
          company: "Local Client",
          rating: 4,
          imageSrc: "http://img.b2bpic.net/free-photo/woman-getting-treatment-hairdresser-shop_23-2149229812.jpg",
        },
        {
          name: "Emma R.",
          role: "Regular",
          company: "Local Client",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/studio-portrait-smiling-attractive-european-woman-posing-isolated-pink-wall_291650-995.jpg",
        },
        {
          name: "Grace L.",
          role: "New Client",
          company: "Local Client",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-blonde-caucasian-girl-shirt-jeans-sits-by-window-has-conversation-with-friend-concept-rest-recovery_197531-31505.jpg",
        },
        {
          name: "Chloe B.",
          role: "Frequent",
          company: "Local Client",
          rating: 4,
          imageSrc: "http://img.b2bpic.net/free-photo/cheerful-woman-visagiste-smiling-camera_23-2148113183.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqTabbedAccordion
      tag="Helpful Info"
      title="Frequently Asked Questions"
      description="Answers to commonly asked questions about our salon services."
      categories={[
        {
          name: "General",
          items: [
            {
              question: "Where are you located?",
              answer: "We are at Shop 3/157, Collingwood Park QLD 4301.",
            },
            {
              question: "What are your hours?",
              answer: "We are open daily and close at 4:00 PM. We recommend booking in advance.",
            },
            {
              question: "Do I need to book?",
              answer: "Booking is recommended to ensure your preferred time slot.",
            },
          ],
        },
        {
          name: "Services",
          items: [
            {
              question: "Do you do nail art?",
              answer: "Yes, we specialize in modern nail art and custom designs.",
            },
            {
              question: "What polish brands do you use?",
              answer: "We use high-quality salon-standard brands for lasting results.",
            },
          ],
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Book Now"
      text="Ready to get beautiful nails? Reach out to schedule your appointment today."
      primaryButton={{
        text: "Call (07) 3418 5709",
        href: "tel:0734185709",
      }}
      secondaryButton={{
        text: "Visit Us",
        href: "https://maps.google.com",
      }}
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
