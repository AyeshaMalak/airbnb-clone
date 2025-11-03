import React from "react";

const Footer = () => {
  const rentalLinks = [
    { city: "San Jose", type: "House rentals" },
    { city: "Pittsburgh", type: "House rentals" },
    { city: "Santo Domingo De Guzmán", type: "Condo rentals" },
    { city: "Memphis", type: "Monthly rentals" },
    { city: "Mount Pocono", type: "Cabin rentals" },
    { city: "Nashville", type: "Monthly rentals" },
    { city: "San Antonio", type: "House rentals" },
    { city: "Madrid", type: "Condo rentals" },
    { city: "St. Petersburg", type: "House rentals" },
    { city: "Barcelona", type: "Apartment rentals" },
    { city: "Athens", type: "Condo rentals" },
    { city: "San Juan", type: "Vacation rentals" },
    { city: "Kyoto", type: "Condo rentals" },
    { city: "Charleston", type: "Apartment rentals" },
    { city: "Raleigh", type: "Monthly rentals" },
    { city: "Portland", type: "Apartment rentals" },
    { city: "Minneapolis", type: "Condo rentals" },
  ];

  return (
    <footer className="bg-gray-100 text-gray-700 mt-16">
     
      <div className="max-w-7xl mx-auto px-6 py-10 border-b border-gray-300">
        <h2 className="text-xl font-semibold mb-4">Popular rentals</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {rentalLinks.map((item, index) => (
            <div key={index} className="cursor-pointer hover:underline">
              <p className="font-semibold text-gray-900">{item.city}</p>
              <p className="text-sm text-gray-600">{item.type}</p>
            </div>
          ))}
        </div>

        <button className="mt-4 text-gray-600 hover:underline font-medium">
          Show more
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-sm">
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Support</h3>
          <ul className="space-y-2">
            <li>Help Center</li>
            <li>Get help with a safety issue</li>
            <li>AirCover</li>
            <li>Anti-discrimination</li>
            <li>Disability support</li>
            <li>Cancellation options</li>
            <li>Report neighborhood concern</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Hosting</h3>
          <ul className="space-y-2">
            <li>Airbnb your home</li>
            <li>Airbnb your experience</li>
            <li>Airbnb your service</li>
            <li>AirCover for Hosts</li>
            <li>Hosting resources</li>
            <li>Community forum</li>
            <li>Hosting responsibly</li>
            <li>Airbnb-friendly apartments</li>
            <li>Join a free Hosting class</li>
            <li>Find a co-host</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Airbnb</h3>
          <ul className="space-y-2">
            <li>2025 Summer Release</li>
            <li>Newsroom</li>
            <li>Careers</li>
            <li>Investors</li>
            <li>Gift cards</li>
            <li>Airbnb.org emergency stays</li>
          </ul>
        </div>
      </div>

   
      <div className="border-t border-gray-300 py-6 text-center text-sm text-gray-500">
        © 2025 Airbnb Clone — Developed by <span className="font-medium text-gray-700">Ayesha Malak</span>
      </div>
    </footer>
  );
};

export default Footer;
