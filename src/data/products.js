import royal1 from "../assets/royal1.webp";
import royal2 from "../assets/royal2.webp";
import royal3 from "../assets/royal3.webp";
import royal4 from "../assets/royal4.webp";
import royal5 from "../assets/royal5.webp";
import royal6 from "../assets/royal6.webp";
import lily1 from "../assets/lily1.webp";
import lily2 from "../assets/lily2.webp";
import lily3 from "../assets/lily3.webp";
import lily4 from "../assets/lily4.webp";
import lily5 from "../assets/lily5.webp";
import lily6 from "../assets/lily6.webp";
import wild1 from "../assets/wild1.webp";
import wild2 from "../assets/wild2.webp";
import wild3 from "../assets/wild3.webp";
import wild4 from "../assets/wild4.webp";
import wild5 from "../assets/wild5.webp";
import wild6 from "../assets/wild6.webp";

const products = [
  {
    id: 1,
    name: "Royal Canin Medium Adult",
    price: 45.99,
    image: royal1,
    category: "Royal Canin",
    shortDescription:
      "Specially formulated for medium-sized adult dogs aged 1-7 years.",
    details: [
      "Supports natural defences with an exclusive antioxidant complex.",
      "Top-grade protein for optimal digestibility.",
      "Balanced dietary fibre for healthy digestion.",
    ],
    specs: {
      Weight: "15kg",
      BreedSize: "Medium (11-25kg)",
      AgeRange: "1-7 years",
    },
  },
  {
    id: 2,
    name: "Royal Canin Hair & Skin Adult Dry Cat Food",
    price: 40.0,
    image: royal2,
    category: "Royal Canin",
    shortDescription:
      "Supports healthy hair and skin with omega-3 and omega-6 fatty acids.",
    details: [
      "Includes specific amino acids for skin renewal.",
      "High-quality proteins for healthy hair growth.",
      "Essential combination of omega-3 and omega-6 fatty acids.",
    ],
    specs: {
      Weight: "10kg",
      Ingredients: "Omega-3, Omega-6, B-vitamins",
      SuitableFor: "Cats with sensitive skin",
    },
  },
  {
    id: 3,
    name: "Royal Canin Feline Care Nutrition Hair & Skin in Gravy Adult Wet Cat Food",
    price: 35.55,
    image: royal3,
    category: "Royal Canin",
    shortDescription:
      "Complete and balanced formula for your cat’s skin and coat health.",
    details: [
      "Contains omega-3 fatty acids – including EPA and DHA.",
      "Proven results: 90% of owners observed good skin quality in 3 weeks.",
      "Balanced nutritional programme combining dry kibble and wet food.",
    ],
    specs: {
      Weight: "12x85g",
      Ingredients: "Omega-3, EPA, DHA",
      ShelfLife: "12 months",
    },
  },
  {
    id: 4,
    name: "Royal Canin Savour Exigent Adult Dry Cat Food",
    price: 20.99,
    image: royal4,
    category: "Royal Canin",
    shortDescription:
      "Specially designed for cats with fussy appetites, providing diversity in the food bowl.",
    details: [
      "Stimulates cats' craving while providing essential nutrients.",
      "Formulated for active and healthy cats.",
      "Diverse and balanced diet.",
    ],
    specs: {
      Weight: "2kg",
      Ingredients: "Chicken, Rice, Antioxidants",
      SuitableFor: "Fussy cats",
    },
  },
  {
    id: 5,
    name: "Royal Canin Indoor Sterilised in Jelly Cat Wet Food 85G",
    price: 5.55,
    image: royal5,
    category: "Royal Canin",
    shortDescription:
      "Ideal for sterilized cats living indoors, providing balanced nutrition.",
    details: [
      "Formulated for adult cats.",
      "Supports urinary health and weight management.",
      "Rich in jelly for easy digestion.",
    ],
    specs: {
      Weight: "85g",
      Ingredients: "Chicken, Fish, Jelly",
      SuitableFor: "Indoor sterilized cats",
    },
  },
  {
    id: 6,
    name: "Royal Canin Mother & Babycat Adult Wet Cat Food 195g",
    price: 10.99,
    image: royal6,
    category: "Royal Canin",
    shortDescription:
      "Designed for gestating queens and kittens aged 1-4 months.",
    details: [
      "Provides essential nutrients for young kittens and mothers.",
      "Supports immunity with colostrum-like properties.",
      "Smooth texture for easy consumption.",
    ],
    specs: {
      Weight: "195g",
      Ingredients: "Chicken, Milk, Antioxidants",
      SuitableFor: "Kittens and mothers",
    },
  },
  {
    id: 7,
    name: "Lily's Kitchen Pate Selection Multipack Wet Cat Food 8X85G",
    price: 25.99,
    image: lily1,
    category: "Lily's Kitchen",
    shortDescription:
      "Packed with proper meat and fish, grain-free recipes for complete nutrition.",
    details: [
      "Smooth paté texture, extra-lickable.",
      "No added sugars, unusual for cat food.",
      "Tailored recipes for kittens and mature cats.",
    ],
    specs: {
      Weight: "8x85g",
      Ingredients: "Meat, Fish, No added sugars",
      GrainFree: "Yes",
    },
  },
  {
    id: 8,
    name: "Lily's Kitchen Woofbrush Dental Dog Chews Bulk Pack",
    price: 35.6,
    image: lily2,
    category: "Lily's Kitchen",
    shortDescription:
      "Dental chew with a spongey texture for effective plaque removal.",
    details: [
      "Crafted with parsley, coconut oil, and fennel.",
      "Supports dental health with natural ingredients.",
      "Recommended for larger dogs (over 26kg).",
    ],
    specs: {
      Quantity: "7 chews",
      SuitableFor: "Dogs over 6 months",
      Ingredients: "Parsley, Coconut oil, Fennel",
    },
  },
  {
    id: 9,
    name: "Lily's Kitchen Senior Recipe Dog Wet Food",
    price: 70.99,
    image: lily3,
    category: "Lily's Kitchen",
    shortDescription:
      "Freshly prepared meat and healthy vegetables for senior dogs.",
    details: [
      "Designed for dogs in their golden years.",
      "No artificial preservatives, colors, or sweeteners.",
      "Grain-free and packed with botanical herbs.",
    ],
    specs: {
      Weight: "400g",
      Ingredients: "Meat, Vegetables, Herbs",
      GrainFree: "Yes",
    },
  },
  {
    id: 10,
    name: "Taste of the Wild Wetlands Canine Formula Dry Dog Food",
    price: 21.99,
    image: wild1,
    category: "Taste of the Wild",
    shortDescription:
      "Grain-free diet packed with highly digestible energy from duck, quail, and turkey.",
    details: [
      "32% protein for energy.",
      "Includes vegetables, legumes, and fruits for balanced nutrition.",
      "Unique combination of fowl for a wild taste.",
    ],
    specs: {
      Weight: "12kg",
      Ingredients: "Duck, Quail, Turkey",
      GrainFree: "Yes",
    },
  },
  {
    id: 11,
    name: "Taste of the Wild Pacific Stream Canine Salmon in Gravy Wet Dog Food",
    price: 17.55,
    image: wild2,
    category: "Taste of the Wild",
    shortDescription:
      "Complete and balanced formula with salmon in gravy for sensitive dogs.",
    details: [
      "Made with high-quality salmon and fish broth.",
      "Supplemented with essential vitamins and minerals.",
      "Supports healthy digestion and coat condition.",
    ],
    specs: {
      Weight: "390g",
      Ingredients: "Salmon, Fish Broth, Vegetables",
      SuitableFor: "Dogs of all ages",
    },
  },
  {
    id: 12,
    name: "Taste of the Wild Lamb with Fruit & Vegetables Tray Wet Dog Food 390G",
    price: 9.99,
    image: wild3,
    category: "Taste of the Wild",
    shortDescription:
      "Premium, grain-free wet food with lamb and chicken, enriched with fruits and vegetables.",
    details: [
      "Lamb and chicken-based wet food.",
      "Includes fruits and vegetables for complete nutrition.",
      "Grain-free for dogs with sensitivities.",
    ],
    specs: {
      Weight: "390g",
      Ingredients: "Lamb, Chicken, Vegetables",
      GrainFree: "Yes",
    },
  },
  {
    id: 13,
    name: "Taste of the Wild PREY Trout Dry Dog Food",
    price: 43.99,
    image: wild4,
    category: "Taste of the Wild",
    shortDescription:
      "Simplified, limited ingredient recipe with spring-fed trout for sensitive dogs.",
    details: [
      "High-protein trout as the primary ingredient.",
      "Guaranteed probiotics for digestion support.",
      "Balanced with essential vitamins and minerals.",
    ],
    specs: {
      Weight: "12kg",
      Ingredients: "Trout, Sunflower Oil, Antioxidants",
      SuitableFor: "Sensitive dogs",
    },
  },
  {
    id: 14,
    name: "Taste of the Wild Pacific Stream Adult Canine Formula (2 x 12.70kg) + FREE DOG BED",
    price: 39.99,
    image: wild5,
    category: "Taste of the Wild",
    shortDescription:
      "Grain-free fish protein formula with sweet potatoes and vegetables.",
    details: [
      "Free dog bed included.",
      "High digestibility with fish-based protein.",
      "Grain-free and rich in antioxidants.",
    ],
    specs: {
      Weight: "25.4kg",
      Ingredients: "Fish, Sweet Potatoes, Vegetables",
      SpecialOffer: "Free dog bed included",
    },
  },
  {
    id: 15,
    name: "Taste of The Wild Rocky Mountain Feline Recipe Wet Cat Food 85G",
    price: 12.99,
    image: wild6,
    category: "Taste of the Wild",
    shortDescription:
      "Great-tasting complement to the Rocky Mountain Feline dry formula.",
    details: [
      "Animal proteins for lean body and optimal nutrition.",
      "Lower carbohydrates for healthier diets.",
      "High water content to improve hydration.",
    ],
    specs: {
      Weight: "85g",
      Ingredients: "Animal Proteins, Fish Broth, Vegetables",
      SuitableFor: "Cats of all ages",
    },
  },
  {
    id: 16,
    name: "Lily's Kitchen Lamb Formula Wet Dog Food",
    price: 22.99,
    image: lily4,
    category: "Lily's Kitchen",
    shortDescription:
      "Lamb-based formula rich in nutrients for dogs of all sizes.",
    details: [
      "Complete formula for adult dogs.",
      "Rich in high-quality lamb protein.",
      "Supplemented with vegetables and herbs for added nutrition.",
    ],
    specs: {
      Weight: "400g",
      Ingredients: "Lamb, Vegetables, Herbs",
      SuitableFor: "Dogs of all sizes",
    },
  },
  {
    id: 17,
    name: "Lily's Kitchen High Prairie Puppy Formula",
    price: 34.99,
    image: lily5,
    category: "Lily's Kitchen",
    shortDescription: "Specially designed formula for growing puppies.",
    details: [
      "Rich in proteins for healthy growth.",
      "Added DHA for brain development.",
      "Grain-free and gentle on sensitive stomachs.",
    ],
    specs: {
      Weight: "12kg",
      Ingredients: "Freshly prepared chicken, Sweet Potato, Pea Protein",
      SuitableFor: "Puppies",
    },
  },
  {
    id: 18,
    name: "Lily's Kitchen Canned Dog Food",
    price: 9.99,
    image: lily6,
    category: "Lily's Kitchen",
    shortDescription:
      "Complete and balanced canned dog food for daily feeding.",
    details: [
      "Supports healthy digestion with natural ingredients.",
      "High-quality protein for strong muscles.",
      "Grain-free and easy to digest.",
    ],
    specs: {
      Weight: "400g",
      Ingredients: "Turkey, Fish Broth, Vegetables",
      SuitableFor: "All dogs",
    },
  },
];

export default products;
