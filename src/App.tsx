import { useState } from "react";
import {
  MapPin,
  Phone,
  Clock,
  Star,
  Menu,
  X,
  Calendar,
  Users,
  ChefHat,
} from "lucide-react";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image?: string;
  spicy?: boolean;
  vegetarian?: boolean;
  popular?: boolean;
}

interface MenuCategory {
  id: string;
  name: string;
  description: string;
  items: MenuItem[];
}

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("appetizers");

  // Menu data
  const menuCategories: MenuCategory[] = [
    {
      id: "appetizers",
      name: "Appetizers",
      description: "Start your culinary journey with our finest selections",
      items: [
        {
          id: 1,
          name: "Bruschetta Trio",
          description:
            "Three varieties: classic tomato basil, wild mushroom, and ricotta with honey",
          price: "$16",
          image:
            "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=300&h=200&fit=crop",
          vegetarian: true,
          popular: true,
        },
        {
          id: 2,
          name: "Antipasto della Casa",
          description:
            "Chef's selection of cured meats, artisanal cheeses, olives, and roasted vegetables",
          price: "$24",
          image:
            "https://images.unsplash.com/photo-1544024994-f2ad5d7717e2?w=300&h=200&fit=crop",
        },
        {
          id: 3,
          name: "Arancini Siciliani",
          description:
            "Crispy risotto balls stuffed with mozzarella and peas, served with marinara sauce",
          price: "$14",
          vegetarian: true,
        },
        {
          id: 4,
          name: "Calamari Fritti",
          description:
            "Fresh squid rings lightly battered and fried, served with spicy marinara",
          price: "$18",
          spicy: true,
        },
      ],
    },
    {
      id: "pasta",
      name: "Pasta",
      description: "Handmade pasta prepared fresh daily",
      items: [
        {
          id: 5,
          name: "Spaghetti Carbonara",
          description:
            "Classic Roman pasta with pancetta, eggs, pecorino cheese, and black pepper",
          price: "$22",
          popular: true,
        },
        {
          id: 6,
          name: "Fettuccine Alfredo",
          description:
            "Fresh fettuccine in our signature creamy parmesan sauce",
          price: "$20",
          vegetarian: true,
        },
        {
          id: 7,
          name: "Linguine alle Vongole",
          description:
            "Fresh clams sautéed with garlic, white wine, and parsley over linguine",
          price: "$28",
          image:
            "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=300&h=200&fit=crop",
        },
        {
          id: 8,
          name: "Penne Arrabbiata",
          description:
            "Spicy tomato sauce with garlic, red chilies, and fresh basil",
          price: "$18",
          vegetarian: true,
          spicy: true,
        },
        {
          id: 9,
          name: "Ravioli di Spinaci",
          description:
            "Handmade spinach and ricotta ravioli in sage butter sauce",
          price: "$24",
          vegetarian: true,
        },
      ],
    },
    {
      id: "mains",
      name: "Main Courses",
      description: "Hearty dishes crafted with the finest ingredients",
      items: [
        {
          id: 10,
          name: "Osso Buco alla Milanese",
          description: "Braised veal shanks with saffron risotto and gremolata",
          price: "$42",
          popular: true,
          image:
            "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&h=200&fit=crop",
        },
        {
          id: 11,
          name: "Branzino al Sale",
          description:
            "Mediterranean sea bass baked in sea salt crust with lemon and herbs",
          price: "$36",
        },
        {
          id: 12,
          name: "Pollo Parmigiana",
          description:
            "Breaded chicken breast topped with marinara sauce and mozzarella",
          price: "$28",
        },
        {
          id: 13,
          name: "Bistecca alla Fiorentina",
          description:
            "Grilled T-bone steak with rosemary, garlic, and extra virgin olive oil",
          price: "$48",
        },
        {
          id: 14,
          name: "Melanzane Parmigiana",
          description:
            "Layers of eggplant, marinara sauce, and mozzarella baked to perfection",
          price: "$24",
          vegetarian: true,
        },
      ],
    },
    {
      id: "desserts",
      name: "Desserts",
      description: "Sweet endings to your perfect meal",
      items: [
        {
          id: 15,
          name: "Tiramisu",
          description:
            "Classic Italian dessert with espresso-soaked ladyfingers and mascarpone",
          price: "$12",
          popular: true,
          image:
            "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=300&h=200&fit=crop",
        },
        {
          id: 16,
          name: "Panna Cotta",
          description: "Silky vanilla custard topped with mixed berry compote",
          price: "$10",
          vegetarian: true,
        },
        {
          id: 17,
          name: "Cannoli Siciliani",
          description:
            "Crispy shells filled with sweet ricotta and chocolate chips",
          price: "$11",
          vegetarian: true,
        },
        {
          id: 18,
          name: "Gelato Selection",
          description: "Daily selection of artisanal gelato flavors",
          price: "$8",
          vegetarian: true,
        },
      ],
    },
    {
      id: "beverages",
      name: "Beverages",
      description: "Perfect pairings for your meal",
      items: [
        {
          id: 19,
          name: "Espresso",
          description: "Traditional Italian espresso",
          price: "$4",
        },
        {
          id: 20,
          name: "Cappuccino",
          description: "Espresso with steamed milk and foam",
          price: "$5",
        },
        {
          id: 21,
          name: "House Wine Selection",
          description: "Ask your server for our daily wine recommendations",
          price: "$8-$15",
        },
        {
          id: 22,
          name: "San Pellegrino",
          description: "Sparkling or still Italian mineral water",
          price: "$6",
        },
      ],
    },
  ];

  const currentCategory = menuCategories.find(
    (cat) => cat.id === selectedCategory
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary-600 font-serif">
                Bella Vista
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-primary-600 transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-primary-600 transition-colors"
              >
                About
              </a>
              <a
                href="#menu"
                className="text-gray-700 hover:text-primary-600 transition-colors"
              >
                Menu
              </a>
              <a
                href="#gallery"
                className="text-gray-700 hover:text-primary-600 transition-colors"
              >
                Gallery
              </a>
              <a
                href="#reservations"
                className="text-gray-700 hover:text-primary-600 transition-colors"
              >
                Reservations
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-primary-600 transition-colors"
              >
                Contact
              </a>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                Reserve Table
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-primary-600"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-100">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a
                  href="#home"
                  className="block px-3 py-2 text-gray-700 hover:text-primary-600"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="block px-3 py-2 text-gray-700 hover:text-primary-600"
                >
                  About
                </a>
                <a
                  href="#menu"
                  className="block px-3 py-2 text-gray-700 hover:text-primary-600"
                >
                  Menu
                </a>
                <a
                  href="#gallery"
                  className="block px-3 py-2 text-gray-700 hover:text-primary-600"
                >
                  Gallery
                </a>
                <a
                  href="#reservations"
                  className="block px-3 py-2 text-gray-700 hover:text-primary-600"
                >
                  Reservations
                </a>
                <a
                  href="#contact"
                  className="block px-3 py-2 text-gray-700 hover:text-primary-600"
                >
                  Contact
                </a>
                <div className="px-3 py-2">
                  <button className="w-full bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                    Reserve Table
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-16 h-screen relative flex items-center justify-center"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=1080&fit=crop)",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            Authentic Italian Cuisine
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Experience the finest Italian flavors in an elegant atmosphere
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#menu"
              className="bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-colors text-lg font-semibold inline-flex items-center justify-center"
            >
              View Menu
            </a>
            <a
              href="#reservations"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-colors text-lg font-semibold"
            >
              Make Reservation
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold font-serif text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                For over 30 years, Bella Vista has been serving authentic
                Italian cuisine made with love and tradition. Our recipes have
                been passed down through generations, bringing you the true
                taste of Italy.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Using only the finest imported ingredients and traditional
                cooking methods, our expert chefs create dishes that transport
                you to the heart of Italy with every bite.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <ChefHat className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Expert Chefs
                  </h3>
                  <p className="text-gray-600">Trained in Italy</p>
                </div>
                <div className="text-center">
                  <Users className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Family Owned
                  </h3>
                  <p className="text-gray-600">Since 1992</p>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop"
                alt="Restaurant interior"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-serif text-gray-900 mb-4">
              Our Menu
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our carefully crafted dishes made with the finest Italian
              ingredients
            </p>
          </div>

          {/* Menu Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  selectedCategory === category.id
                    ? "bg-primary-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Menu Items */}
          {currentCategory && (
            <div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold font-serif text-gray-900 mb-2">
                  {currentCategory.name}
                </h3>
                <p className="text-gray-600">{currentCategory.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentCategory.items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="text-xl font-semibold text-gray-900">
                            {item.name}
                          </h4>
                          {item.popular && (
                            <span className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full font-medium">
                              Popular
                            </span>
                          )}
                          {item.vegetarian && (
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                              V
                            </span>
                          )}
                          {item.spicy && (
                            <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full font-medium">
                              🌶️
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 text-sm mb-3">
                          {item.description}
                        </p>
                      </div>
                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-lg ml-4"
                        />
                      )}
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-primary-600">
                        {item.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              All dishes are prepared fresh to order. Please inform us of any
              allergies.
            </p>
            <button className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors">
              Download Full Menu (PDF)
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-serif text-gray-900 mb-4">
              Gallery
            </h2>
            <p className="text-xl text-gray-600">
              A glimpse into our culinary artistry and elegant atmosphere
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop",
            ].map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg group"
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservations Section */}
      <section id="reservations" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-serif text-gray-900 mb-4">
              Make a Reservation
            </h2>
            <p className="text-xl text-gray-600">
              Reserve your table for an unforgettable dining experience
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-xl">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date *
                  </label>
                  <input
                    type="date"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Time *
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                    <option>5:00 PM</option>
                    <option>5:30 PM</option>
                    <option>6:00 PM</option>
                    <option>6:30 PM</option>
                    <option>7:00 PM</option>
                    <option>7:30 PM</option>
                    <option>8:00 PM</option>
                    <option>8:30 PM</option>
                    <option>9:00 PM</option>
                    <option>9:30 PM</option>
                    <option>10:00 PM</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Party Size *
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                    <option>1 person</option>
                    <option>2 people</option>
                    <option>3 people</option>
                    <option>4 people</option>
                    <option>5 people</option>
                    <option>6 people</option>
                    <option>7 people</option>
                    <option>8+ people</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Special Requests
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Any dietary restrictions, allergies, or special occasions..."
                ></textarea>
              </div>

              <div className="text-center">
                <button className="bg-primary-600 text-white px-12 py-4 rounded-lg hover:bg-primary-700 transition-colors text-lg font-semibold">
                  <Calendar className="w-5 h-5 mr-2 inline" />
                  Reserve Table
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold font-serif mb-8">Visit Us</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-primary-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Address</h3>
                    <p className="text-gray-300 text-lg">
                      123 Italian Street
                      <br />
                      Little Italy, NY 10013
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-primary-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Phone</h3>
                    <p className="text-gray-300 text-lg">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-primary-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Hours</h3>
                    <div className="text-gray-300 text-lg">
                      <p>Monday - Thursday: 5:00 PM - 10:00 PM</p>
                      <p>Friday - Saturday: 5:00 PM - 11:00 PM</p>
                      <p>Sunday: 4:00 PM - 9:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold font-serif mb-6">
                Get in Touch
              </h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-white placeholder-gray-400"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-white placeholder-gray-400"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-white placeholder-gray-400"
                />
                <textarea
                  placeholder="Your message..."
                  rows={4}
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-white placeholder-gray-400"
                ></textarea>
                <button className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold font-serif text-primary-400 mb-4">
              Bella Vista
            </h3>
            <p className="text-gray-400 text-lg mb-6">
              Authentic Italian Cuisine Since 1992
            </p>
            <div className="flex justify-center space-x-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 text-yellow-400 fill-current"
                />
              ))}
            </div>
            <div className="border-t border-gray-800 pt-8 mt-8">
              <p className="text-gray-500">
                &copy; 2025 Bella Vista. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
