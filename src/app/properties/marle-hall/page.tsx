import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marle Hall - Luxury Countryside Retreat | Worrall Holiday Rentals",
  description: "Experience luxury at Marle Hall, an elegant countryside retreat offering premium accommodations in a stunning natural setting.",
};

export default function MarleHall() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-light text-gray-900">
              Worrall Group
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors">
                Home
              </Link>
              <Link href="/properties" className="text-gray-700 hover:text-gray-900 transition-colors">
                Properties
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-gray-900 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Image */}
      <section className="pt-16 h-screen bg-gray-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="absolute bottom-20 left-0 right-0">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-white">
              <h1 className="text-6xl md:text-8xl font-extralight mb-4 tracking-tight">
                Marle Hall
              </h1>
              <p className="text-xl md:text-2xl font-light max-w-2xl">
                An elegant countryside retreat offering luxury accommodations in a stunning natural setting
              </p>
            </div>
          </div>
        </div>
        {/* Placeholder for hero image */}
        <div className="w-full h-full flex items-center justify-center text-gray-500 text-xl">
          Hero Image Placeholder
        </div>
      </section>

      {/* Property Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-extralight text-gray-900 mb-8">
                Luxury Countryside Retreat
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Nestled in the heart of the countryside, Marle Hall offers an unparalleled escape from the everyday. 
                This meticulously restored property combines historic charm with contemporary luxury, creating an 
                atmosphere of refined elegance.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Every detail has been carefully considered to ensure your stay exceeds expectations, from the finest 
                linens to the thoughtfully curated amenities that make Marle Hall a truly exceptional destination.
              </p>
              
              {/* Property Features */}
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-light text-gray-900 mb-2">Accommodations</h3>
                  <p className="text-gray-600">Sleeps up to 8 guests</p>
                </div>
                <div>
                  <h3 className="text-lg font-light text-gray-900 mb-2">Bedrooms</h3>
                  <p className="text-gray-600">4 luxury bedrooms</p>
                </div>
                <div>
                  <h3 className="text-lg font-light text-gray-900 mb-2">Bathrooms</h3>
                  <p className="text-gray-600">3 full bathrooms</p>
                </div>
                <div>
                  <h3 className="text-lg font-light text-gray-900 mb-2">Setting</h3>
                  <p className="text-gray-600">Private countryside</p>
                </div>
              </div>
            </div>
            
            <div className="aspect-4/3 bg-gray-200 rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <span className="text-lg">Property Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extralight text-gray-900 mb-6">Exceptional Amenities</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Thoughtfully designed spaces and premium amenities ensure every moment of your stay is extraordinary.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Amenity items */}
            {[
              "Private Chef Available",
              "Heated Swimming Pool",
              "Spa & Wellness Suite",
              "Wine Cellar",
              "Private Gardens",
              "Concierge Service",
              "High-Speed WiFi",
              "Parking for 6 Cars",
              "Pet-Friendly Options"
            ].map((amenity, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <span className="text-gray-700">{amenity}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extralight text-gray-900 mb-8">
            Plan Your Stay
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Ready to experience the luxury and tranquility of Marle Hall? 
            Contact our team to discuss availability and create your perfect countryside retreat.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center px-8 py-4 bg-gray-900 text-white text-lg font-light tracking-wide hover:bg-gray-800 transition-colors duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="text-2xl font-light mb-4">Worrall Group</div>
          <div className="flex justify-center space-x-8 text-sm text-gray-400">
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            <Link href="/properties" className="hover:text-white transition-colors">Properties</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}