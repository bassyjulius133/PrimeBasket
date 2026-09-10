import babyDiapersImage from "../assets/Images/baby-diapers.png";
const products = [
  // == GROCERIES ==
  {
    id: 1,
    name: "Premium Basmati Rice",
    category: "Groceries",
    price: 45000,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c",
    rating: 4.8,
    description: "Premium quality basmati rice perfect for everyday meals."
  },
  {
    id: 2,
    name: "Golden Parboiled Rice",
    category: "Groceries",
    price: 38000,
    image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6",
    rating: 4.7,
    description: "High-quality parboiled rice with excellent texture."
  },
  {
    id: 3,
    name: "Premium Spaghetti",
    category: "Groceries",
    price: 1800,
    image: "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0",
    rating: 4.6,
    description: "Quality spaghetti perfect for delicious pasta meals."
  },
  {
    id: 4,
    name: "Macaroni",
    category: "Groceries",
    price: 1700,
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141",
    rating: 4.5,
    description: "Premium macaroni for family meals."
  },
  {
    id: 5,
    name: "Premium Cooking Oil",
    category: "Groceries",
    price: 8500,
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5",
    rating: 4.8,
    description: "Pure cooking oil suitable for frying and cooking."
  },
  {
    id: 6,
    name: "Tomato Paste",
    category: "Groceries",
    price: 1200,
    image: "https://images.unsplash.com/photo-1547592180-85f173990554",
    rating: 4.5,
    description: "Rich tomato paste for soups, sauces and stews."
  },
  {
    id: 7,
    name: "Brown Beans",
    category: "Groceries",
    price: 7500,
    image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14",
    rating: 4.7,
    description: "Clean and nutritious brown beans."
  },
  {
    id: 8,
    name: "White Sugar",
    category: "Groceries",
    price: 5000,
    image: "https://images.unsplash.com/photo-1581268490004-5c4d4b2b3a1e",
    rating: 4.6,
    description: "Fine white sugar for beverages and baking."
  },
  {
    id: 9,
    name: "Premium Flour",
    category: "Groceries",
    price: 6000,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff",
    rating: 4.7,
    description: "Fine quality flour suitable for baking."
  },
  {
    id: 10,
    name: "Corn Flakes",
    category: "Groceries",
    price: 5500,
    image: "https://images.unsplash.com/photo-1521483451569-e33803c0330c",
    rating: 4.6,
    description: "Crunchy corn flakes for a delicious breakfast."

  },

  // == FRUITS & VEGETABLES ==
  {
    id: 11,
    name: "Fresh Red Apples",
    category: "Fruits & Vegetables",
    price: 6500,
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6",
    rating: 4.7,
    description: "Fresh and naturally sweet red apples."
  },
  {
    id: 12,
    name: "Fresh Bananas",
    category: "Fruits & Vegetables",
    price: 3500,
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e",
    rating: 4.8,
    description: "Fresh ripe bananas packed with natural nutrients."
  },
  {
    id: 13,
    name: "Fresh Oranges",
    category: "Fruits & Vegetables",
    price: 4500,
    image: "https://images.unsplash.com/photo-1547514701-42782101795e",
    rating: 4.7,
    description: "Juicy and refreshing fresh oranges."
  },
  {
    id: 14,
    name: "Fresh Pineapple",
    category: "Fruits & Vegetables",
    price: 3000,
    image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba",
    rating: 4.8,
    description: "Sweet and juicy fresh pineapple."
  },
  {
    id: 15,
    name: "Fresh Watermelon",
    category: "Fruits & Vegetables",
    price: 4000,
    image: "https://images.unsplash.com/photo-1563114773-84221bd62daa",
    rating: 4.7,
    description: "Fresh and refreshing watermelon."
  },
  {
    id: 16,
    name: "Fresh Strawberries",
    category: "Fruits & Vegetables",
    price: 5500,
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6",
    rating: 4.9,
    description: "Sweet and fresh premium strawberries."
  },
  {
    id: 17,
    name: "Fresh Tomatoes",
    category: "Fruits & Vegetables",
    price: 3000,
    image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337",
    rating: 4.6,
    description: "Fresh ripe tomatoes for cooking."
  },
  {
    id: 18,
    name: "Fresh Carrots",
    category: "Fruits & Vegetables",
    price: 2500,
    image: "https://images.unsplash.com/photo-1447175008436-054170c2e979",
    rating: 4.7,
    description: "Fresh crunchy carrots rich in nutrients."
  },
  {
    id: 19,
    name: "Fresh Broccoli",
    category: "Fruits & Vegetables",
    price: 3500,
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc",
    rating: 4.8,
    description: "Fresh green broccoli perfect for healthy meals."
  },
  {
    id: 20,
    name: "Fresh Potatoes",
    category: "Fruits & Vegetables",
    price: 5000,
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655",
    rating: 4.7,
    description: "Fresh quality potatoes for cooking and frying."
  },

  // ==================== BEVERAGES ====================
  {
    id: 21,
    name: "Coca-Cola",
    category: "Beverages",
    price: 1200,
    image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e",
    rating: 4.6,
    description: "Refreshing Coca-Cola soft drink."
  },
  {
    id: 22,
    name: "Pepsi",
    category: "Beverages",
    price: 1200,
    image: "https://images.unsplash.com/photo-1629203849820-fdd70d49c38e",
    rating: 4.5,
    description: "Refreshing Pepsi soft drink."
  },
  {
    id: 23,
    name: "Orange Juice",
    category: "Beverages",
    price: 2800,
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba",
    rating: 4.8,
    description: "Refreshing natural orange juice."
  },
  {
    id: 24,
    name: "Apple Juice",
    category: "Beverages",
    price: 2800,
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba",
    rating: 4.7,
    description: "Delicious refreshing apple juice."
  },
  {
    id: 25,
    name: "Energy Drink",
    category: "Beverages",
    price: 1800,
    image: "https://images.unsplash.com/photo-1622543925917-763c34d1a86e",
    rating: 4.5,
    description: "Refreshing energy drink for an active lifestyle."
  },
  {
    id: 26,
    name: "Bottled Water",
    category: "Beverages",
    price: 700,
    image: "https://images.unsplash.com/photo-1564419320461-6870880221ad",
    rating: 4.8,
    description: "Pure and refreshing bottled drinking water."
  },
  {
    id: 27,
    name: "Malt Drink",
    category: "Beverages",
    price: 1500,
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e",
    rating: 4.7,
    description: "Rich and refreshing malt drink."
  },
  {
    id: 28,
    name: "Ginger Drink",
    category: "Beverages",
    price: 2200,
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e",
    rating: 4.6,
    description: "Refreshing ginger-flavoured beverage."
  },
  {
    id: 29,
    name: "Iced Tea",
    category: "Beverages",
    price: 1800,
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc",
    rating: 4.7,
    description: "Cool and refreshing iced tea."
  },
  {
    id: 30,
    name: "Premium Coffee",
    category: "Beverages",
    price: 6500,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
    rating: 4.9,
    description: "Premium roasted coffee with a rich aroma."
  },

  // ==================== DAIRY ====================
  {
    id: 31,
    name: "Full Cream Milk",
    category: "Dairy",
    price: 3500,
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b",
    rating: 4.8,
    description: "Fresh full cream milk with a rich and creamy taste."
  },
  {
    id: 32,
    name: "Greek Yogurt",
    category: "Dairy",
    price: 3000,
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777",
    rating: 4.8,
    description: "Creamy Greek yogurt perfect for breakfast."
  },
  {
    id: 33,
    name: "Natural Yogurt",
    category: "Dairy",
    price: 2500,
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777",
    rating: 4.7,
    description: "Smooth and delicious natural yogurt."
  },
  {
    id: 34,
    name: "Cheddar Cheese",
    category: "Dairy",
    price: 5500,
    image: "https://images.unsplash.com/photo-1452195100486-9cc805987862",
    rating: 4.9,
    description: "Premium cheddar cheese with a rich flavour."
  },
  {
    id: 35,
    name: "Butter",
    category: "Dairy",
    price: 3500,
    image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d",
    rating: 4.7,
    description: "Creamy butter perfect for cooking and spreading."
  },
  {
    id: 36,
    name: "Chocolate Milk",
    category: "Dairy",
    price: 2800,
    image: "https://images.unsplash.com/photo-1576186726115-4d51596775d1",
    rating: 4.8,
    description: "Delicious creamy chocolate milk."
  },
  {
    id: 37,
    name: "Evaporated Milk",
    category: "Dairy",
    price: 1800,
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b",
    rating: 4.6,
    description: "Rich evaporated milk for beverages and cooking."
  },
  {
    id: 38,
    name: "Cream Cheese",
    category: "Dairy",
    price: 4500,
    image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d",
    rating: 4.7,
    description: "Smooth cream cheese for bread and snacks."
  },
  {
    id: 39,
    name: "Mozzarella Cheese",
    category: "Dairy",
    price: 6000,
    image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d",
    rating: 4.8,
    description: "Premium mozzarella cheese for pizzas and meals."
  },
  {
    id: 40,
    name: "Vanilla Yogurt",
    category: "Dairy",
    price: 2500,
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777",
    rating: 4.6,
    description: "Smooth vanilla-flavoured yogurt."
  },

  // == BAKERY ==
  {
    id: 41,
    name: "Premium Bread",
    category: "Bakery",
    price: 1800,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff",
    rating: 4.7,
    description: "Freshly baked soft bread."
  },
  {
    id: 42,
    name: "French Baguette",
    category: "Bakery",
    price: 2500,
    image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73",
    rating: 4.8,
    description: "Fresh French-style baguette with a crispy crust."
  },
  {
    id: 43,
    name: "Croissants",
    category: "Bakery",
    price: 3500,
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a",
    rating: 4.9,
    description: "Buttery and freshly baked croissants."
  },
  {
    id: 44,
    name: "Chocolate Cake",
    category: "Bakery",
    price: 8500,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
    rating: 4.9,
    description: "Rich and delicious chocolate cake."
  },
  {
    id: 45,
    name: "Vanilla Cake",
    category: "Bakery",
    price: 7500,
    image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d",
    rating: 4.8,
    description: "Soft and delicious vanilla cake."
  },
  {
    id: 46,
    name: "Blueberry Muffins",
    category: "Bakery",
    price: 4500,
    image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa",
    rating: 4.7,
    description: "Freshly baked blueberry muffins."
  },
  {
    id: 47,
    name: "Cinnamon Rolls",
    category: "Bakery",
    price: 4000,
    image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812",
    rating: 4.8,
    description: "Soft cinnamon rolls with delicious icing."
  },
  {
    id: 48,
    name: "Donuts",
    category: "Bakery",
    price: 3000,
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b",
    rating: 4.7,
    description: "Fresh and delicious glazed donuts."
  },
  {
    id: 49,
    name: "Meat Pie",
    category: "Bakery",
    price: 1800,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
    rating: 4.6,
    description: "Freshly baked meat pie with a tasty filling."
  },
  {
    id: 50,
    name: "Sausage Roll",
    category: "Bakery",
    price: 1500,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
    rating: 4.6,
    description: "Delicious sausage roll with crispy pastry."
  },

  // == SNACKS ==
  {
    id: 51,
    name: "Chocolate Cookies",
    category: "Snacks",
    price: 2500,
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e",
    rating: 4.5,
    description: "Delicious crunchy chocolate cookies."
  },
  {
    id: 52,
    name: "Potato Chips",
    category: "Snacks",
    price: 1800,
    image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b",
    rating: 4.6,
    description: "Crunchy and delicious potato chips."
  },
  {
    id: 53,
    name: "Popcorn",
    category: "Snacks",
    price: 1500,
    image: "https://images.unsplash.com/photo-1585647347384-2593bc35786b",
    rating: 4.7,
    description: "Crunchy popcorn perfect for movie nights."
  },
  {
    id: 54,
    name: "Chocolate Bar",
    category: "Snacks",
    price: 2000,
    image: "https://images.unsplash.com/photo-1548907040-4d42e2a0b4e1",
    rating: 4.8,
    description: "Rich and creamy chocolate bar."
  },
  {
    id: 55,
    name: "Mixed Nuts",
    category: "Snacks",
    price: 4500,
    image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32",
    rating: 4.8,
    description: "Healthy mixture of premium nuts."
  },
  {
    id: 56,
    name: "Cashew Nuts",
    category: "Snacks",
    price: 5000,
    image: "https://images.unsplash.com/photo-1536591375667-3c7c5a7d0b3b",
    rating: 4.7,
    description: "Premium roasted cashew nuts."
  },
  {
    id: 57,
    name: "Granola Bar",
    category: "Snacks",
    price: 3000,
    image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52",
    rating: 4.6,
    description: "Healthy and nutritious granola snack."
  },
  {
    id: 58,
    name: "Peanut Butter",
    category: "Snacks",
    price: 4500,
    image: "https://images.unsplash.com/photo-1555216564-7a3c7b9b1c5f",
    rating: 4.8,
    description: "Creamy peanut butter perfect for bread and snacks."
  },
  {
    id: 59,
    name: "Gummy Candy",
    category: "Snacks",
    price: 1800,
    image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f",
    rating: 4.5,
    description: "Colourful and delicious gummy candies."
  },
  {
    id: 60,
    name: "Wafer Biscuits",
    category: "Snacks",
    price: 2000,
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35",
    rating: 4.6,
    description: "Light and crunchy wafer biscuits."
  },

  // ==================== HOUSEHOLD ====================
  {
    id: 61,
    name: "Laundry Detergent",
    category: "Household",
    price: 5500,
    image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c",
    rating: 4.7,
    description: "Powerful laundry detergent for clean and fresh clothes."
  },
  {
    id: 62,
    name: "Dishwashing Liquid",
    category: "Household",
    price: 2500,
    image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f",
    rating: 4.6,
    description: "Effective dishwashing liquid for sparkling dishes."
  },
  {
    id: 63,
    name: "Kitchen Paper Towels",
    category: "Household",
    price: 3000,
    image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f",
    rating: 4.5,
    description: "Soft and absorbent kitchen paper towels."
  },
  {
    id: 64,
    name: "Toilet Cleaner",
    category: "Household",
    price: 2800,
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a",
    rating: 4.7,
    description: "Powerful toilet cleaner for a fresh and hygienic bathroom."
  },
  {
    id: 65,
    name: "Floor Cleaner",
    category: "Household",
    price: 3500,
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952",
    rating: 4.7,
    description: "Fresh-scented floor cleaner for sparkling floors."
  },
  {
    id: 66,
    name: "Air Freshener",
    category: "Household",
    price: 3000,
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59",
    rating: 4.6,
    description: "Long-lasting fragrance for your home."
  },
  {
    id: 67,
    name: "Garbage Bags",
    category: "Household",
    price: 2200,
    image: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9",
    rating: 4.5,
    description: "Strong and durable garbage bags."
  },
  {
    id: 68,
    name: "Kitchen Sponge",
    category: "Household",
    price: 1200,
    image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f",
    rating: 4.4,
    description: "Durable kitchen cleaning sponge."
  },
  {
    id: 69,
    name: "Liquid Hand Wash",
    category: "Household",
    price: 2500,
    image: "https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f",
    rating: 4.8,
    description: "Gentle liquid hand wash with a refreshing fragrance."
  },
  {
    id: 70,
    name: "Laundry Softener",
    category: "Household",
    price: 4500,
    image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c",
    rating: 4.7,
    description: "Fabric softener that leaves clothes soft and fresh."
  },

  // == PERSONAL CARE ==
  {
    id: 71,
    name: "Bathing Soap",
    category: "Personal Care",
    price: 1200,
    image: "https://images.unsplash.com/photo-1607006483225-7e9d6e5c4c8d",
    rating: 4.6,
    description: "Gentle bathing soap for clean and healthy skin."
  },
  {
    id: 72,
    name: "Shampoo",
    category: "Personal Care",
    price: 3500,
    image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8",
    rating: 4.7,
    description: "Nourishing shampoo for clean and healthy hair."
  },
  {
    id: 73,
    name: "Conditioner",
    category: "Personal Care",
    price: 3500,
    image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8",
    rating: 4.6,
    description: "Moisturizing conditioner for smooth hair."
  },
  {
    id: 74,
    name: "Body Lotion",
    category: "Personal Care",
    price: 4500,
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b",
    rating: 4.8,
    description: "Moisturizing body lotion for soft and smooth skin."
  },
  {
    id: 75,
    name: "Toothpaste",
    category: "Personal Care",
    price: 2200,
    image: "https://images.unsplash.com/photo-1559591937-e1f8f5d1c1b6",
    rating: 4.7,
    description: "Fresh mint toothpaste for healthy teeth."
  },
  {
    id: 76,
    name: "Toothbrush",
    category: "Personal Care",
    price: 1500,
    image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04",
    rating: 4.6,
    description: "Soft-bristle toothbrush for effective cleaning."
  },
  {
    id: 77,
    name: "Deodorant",
    category: "Personal Care",
    price: 3500,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be",
    rating: 4.7,
    description: "Long-lasting deodorant with a fresh fragrance."
  },
  {
    id: 78,
    name: "Hand Cream",
    category: "Personal Care",
    price: 2800,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03",
    rating: 4.6,
    description: "Moisturizing hand cream for soft hands."
  },
  {
    id: 79,
    name: "Face Wash",
    category: "Personal Care",
    price: 4000,
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883",
    rating: 4.8,
    description: "Gentle face wash for clean and refreshed skin."
  },
  {
    id: 80,
    name: "Hair Oil",
    category: "Personal Care",
    price: 3000,
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
    rating: 4.7,
    description: "Nourishing hair oil for healthy-looking hair."
  },

  // == FROZEN FOODS ==
  {
    id: 81,
    name: "Frozen Chicken",
    category: "Frozen Foods",
    price: 12500,
    image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791",
    rating: 4.8,
    description: "Quality frozen chicken suitable for different meals."
  },
  {
    id: 82,
    name: "Frozen Fish",
    category: "Frozen Foods",
    price: 9500,
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2",
    rating: 4.7,
    description: "Freshly frozen quality fish."
  },
  {
    id: 83,
    name: "Frozen French Fries",
    category: "Frozen Foods",
    price: 5000,
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877",
    rating: 4.8,
    description: "Crispy frozen French fries ready to cook."
  },
  {
    id: 84,
    name: "Frozen Mixed Vegetables",
    category: "Frozen Foods",
    price: 4500,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    rating: 4.6,
    description: "Healthy frozen mixed vegetables."
  },
  {
    id: 85,
    name: "Frozen Chicken Wings",
    category: "Frozen Foods",
    price: 8500,
    image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2",
    rating: 4.8,
    description: "Quality frozen chicken wings perfect for frying or grilling."
  },
  {
    id: 86,
    name: "Frozen Sausages",
    category: "Frozen Foods",
    price: 6000,
    image: "https://images.unsplash.com/photo-1612392062631-94dd858cba88",
    rating: 4.7,
    description: "Delicious frozen sausages for quick meals."
  },
  {
    id: 87,
    name: "Frozen Meatballs",
    category: "Frozen Foods",
    price: 6500,
    image: "https://images.unsplash.com/photo-1529042410759-befb1204b468",
    rating: 4.7,
    description: "Tasty frozen meatballs ready to cook."
  },
  {
    id: 88,
    name: "Frozen Pizza",
    category: "Frozen Foods",
    price: 7500,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    rating: 4.8,
    description: "Delicious frozen pizza ready for the oven."
  },
  {
    id: 89,
    name: "Frozen Shrimp",
    category: "Frozen Foods",
    price: 11000,
    image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47",
    rating: 4.9,
    description: "Premium frozen shrimp for delicious seafood meals."
  },
  {
    id: 90,
    name: "Frozen Sweet Corn",
    category: "Frozen Foods",
    price: 3500,
    image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076",
    rating: 4.6,
    description: "Sweet frozen corn perfect for meals and salads."
  },

  // == MEAT & PROTEIN ==
  {
    id: 91,
    name: "Fresh Beef",
    category: "Meat & Protein",
    price: 12000,
    image: "https://images.unsplash.com/photo-1603048297172-c92544798d5a",
    rating: 4.8,
    description: "Fresh quality beef suitable for different meals."
  },
  {
    id: 92,
    name: "Fresh Chicken",
    category: "Meat & Protein",
    price: 10000,
    image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791",
    rating: 4.8,
    description: "Fresh quality chicken for delicious meals."
  },
  {
    id: 93,
    name: "Fresh Goat Meat",
    category: "Meat & Protein",
    price: 13500,
    image: "https://images.unsplash.com/photo-1603048297172-c92544798d5a",
    rating: 4.7,
    description: "Fresh premium goat meat."
  },
  {
    id: 94,
    name: "Fresh Turkey",
    category: "Meat & Protein",
    price: 15000,
    image: "https://images.unsplash.com/photo-1574672280600-4accfa5b6f98",
    rating: 4.8,
    description: "Quality fresh turkey meat."
  },
  {
    id: 95,
    name: "Fresh Eggs",
    category: "Meat & Protein",
    price: 6500,
    image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f",
    rating: 4.9,
    description: "Fresh farm eggs perfect for breakfast and baking."
  },

  // == BABY PRODUCTS ==
  {
    id: 96,
    name: "Baby Diapers",
    category: "Baby Care",
    price: 8500,
    image: babyDiapersImage,
    rating: 4.8,
    description: "Soft and comfortable diapers for babies."
  },
  {
    id: 97,
    name: "Baby Wipes",
    category: "Baby Care",
    price: 3000,
    image: "https://images.unsplash.com/photo-1584839404042-8bc5c5d4b7b1",
    rating: 4.7,
    description: "Gentle baby wipes for everyday care."
  },
  {
    id: 98,
    name: "Baby Powder",
    category: "Baby Care",
    price: 2500,
    image: "https://images.unsplash.com/photo-1608258120887-7b1b6a4d1e6a",
    rating: 4.6,
    description: "Gentle baby powder for soft and comfortable skin."
  },
  {
    id: 99,
    name: "Baby Shampoo",
    category: "Baby Care",
    price: 3500,
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883",
    rating: 4.8,
    description: "Gentle shampoo specially designed for babies."
  },
  {
    id: 100,
    name: "Baby Lotion",
    category: "Baby Care",
    price: 4000,
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b",
    rating: 4.8,
    description: "Gentle moisturizing lotion for baby's delicate skin."
  }
];

export default products;

