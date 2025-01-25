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
    description:
      "The Royal Canin Medium Adult Dry Dog Food is specially formulated with the nutritional needs of your medium-sized adult dog in mind and is suitable for dogs aged 1-7 years that weigh between 11kg-25kg. It contains an exclusive antioxidant complex, as well as nutrients like manno-oligo-saccharides, to help support your dog’s natural defences, allowing it to maintain a healthy lifestyle. Thanks to an exclusive formula that includes top-grade protein, also help to support optimal digestibility, this allows your dog to effectively absorb nutrients. What’s more, the balanced supply of dietary fibre further supports healthy digestibility for your dog.",
  },
  {
    id: 2,
    name: "Royal Canin Hair & Skin Adult Dry Cat Food",
    price: 40,
    image: royal2,
    category: "Royal Canin",
    description:
      "Royal Canin Hair & Skin Care is an exclusive complex of nutrients that benefit and support the skin's barrier role. It contains high-quality proteins, including specific amino acids, to keep healthy hair growth and skin renewal. It also includes an essential combination of omega-3 and omega-6 fatty acids for helpful effects on skin health and coat condition. The formula also contains soya and borage oil (rich in gamma-linolenic acids) as well as fish oil to help your cat maintain a healthy, glossy coat. Additionally, has been designed with a number of other key nutrients, such as B-vitamins, amino acids, zinc, and copper.",
  },
  {
    id: 3,
    name: "Royal Canin Feline Care Nutrition Hair & Skin in Gravy Adult Wet Cat Food 12x85g",
    price: 35.55,
    image: royal3,
    category: "Royal Canin",
    description:
      "ROYAL CANIN Hair & Skin Care in Gravy is a nutritionally complete and balanced formula specially designed to support your cat’s skin and coat health. This formula contains omega-3 fatty acids – including EPA and DHA – and omega-6 fatty acids to help support and nourish your cat’s skin and coat from the inside out. ROYAL CANIN Hair & Skin Care has proven results. Our study* showed that over 90% of owners observed good skin and coat quality after just 3 weeks of being fed with the Hair & Skin Care nutritional programme (combining both the dry kibble and wet food formulas).",
  },
  {
    id: 4,
    name: "Royal Canin Savour Exigent Adult Dry Cat Food",
    price: 20.99,
    image: royal4,
    category: "Royal Canin",
    description:
      "Royal Canin Savour Exigent will continue to stimulate your cat's craving and provide it with all the nutrients it needs to remain active and healthy. Some cats have fussy appetites and might refuse to eat the food you give them. However, this behaviour is not an inherent trait in cats and can, therefore, be rectified by selecting food that not only contains healthy nutrients, but that also appeals to your cat's particular appetite. Also, some cats that exhibit signs of fussiness are attracted by diversity in the food bowl.",
  },
  {
    id: 5,
    name: "Royal Canin Indoor Sterilised in Jelly Cat Wet Food 85G",
    price: 5.55,
    image: royal5,
    category: "Royal Canin",
    description:
      "Royal Canin Indoor Sterilised in Jelly is intended for adult cats who have completed the first year of life, sterilised, staying mainly at home.",
  },
  {
    id: 6,
    name: "Royal Canin Mother & Babycat Adult Wet Cat Food 195g",
    price: 10.99,
    image: royal6,
    category: "Royal Canin",
    description:
      "Royal Canin Mother & Babycat Loaf is formulated with the nutritional needs of the mother and her kittens in mind. This food is suitable for gestating or lactating queens as well as 1 to 4-month-old kittens during their 1st age. Between 4 and 12 weeks after birth, the natural immunity acquired from the mother's colostrum (a milky secretion rich in protective antibodies) gradually decreases.",
  },
  {
    id: 7,
    name: "Lily's Kitchen Pate Selection Multipack Wet Cat Food 8X85G",
    price: 25.99,
    image: lily1,
    category: "Lily's Kitchen",
    description:
      "Our Smooth Paté recipes are an old favourite, always guaranteed to be a kitty crowd-pleaser.A soft, smooth texture that makes them extra-lickable, they’re packed full of proper meat and fish that cats can’t help but devour. With no added sugars (unusual for cat food), these grain-free recipes are nutritionally complete - so they’re not only delicious, they’re the full package.We also have Smooth Paté recipes for kittens and, ahem, more ‘mature’ cats - tailored to keep them young at heart.",
  },
  {
    id: 8,
    name: "Lily's Kitchen Woofbrush Dental Dog Chews Bulk Pack",
    price: 35.6,
    image: lily2,
    category: "Lily's Kitchen",
    description:
      "Dental chew with a difference - made with a clever spongey texture, this chew gets right down to the gumline to wipe away plaque and it's all thanks to natural ingredients.The Woofbrush has been carefully crafted in Lily's Kitchen with help from their pet dental expert to make sure it works and tastes great, Using top-notch natural ingredients like parsley, coconut oil, and fennel for a proper clean without the added nonsense. We recommend a Woofbrush a day to help support your dog’s dental health and this pack of 7 dental chews is just right for larger dogs (over 26kg) to have one each day of the week. Suitable from 6 months old.",
  },
  {
    id: 9,
    name: "Lily's Kitchen Senior Recipe Dog Wet Food",
    price: 70.99,
    image: lily3,
    category: "Lily's Kitchen",
    description:
      "Lily's Kitchen believes pets deserve to eat proper food that is full of nourishing ingredients, which is even more important for dogs in their golden years. That's why Lily works closely with vets and nutritionists to create exceptional recipes, tailored to each dog's needs. This recipe is made with freshly prepared meat, healthy fruit and vegetables as well as a special blend of botanical herbs to produce delicious, digestible food. Lily's Kitchen recipes only contain real meat, with no rendered animal parts, carcass, or derivatives, nothing genetically modified, and no artificial preservatives, colors, or sweeteners. No wheat, corn, or soya.",
  },
  {
    id: 10,
    name: "Lily's Kitchen Chicken Casserole Dry Cat Food",
    price: 23.99,
    image: lily4,
    category: "Lily's Kitchen",
    description:
      "Made with 67% freshly prepared chicken, packed with tasty goodness that your kitty will adore. Grain free formula suitable for all cats above 12 month of age. Lily's Kitchen Delicious Chicken Complete Dry Food for Cats recipe has absolutely no grains, meat meal or artificial additives, just wonderful meaty goodness. In fact, Lily's Kitchen only use top tasty ingredients that are natural, which means they are naturally healthy for your cat too.With triangle-shaped kibble and seaweed to help reduce plaque and parsley, this recipe also helps your cat have healthier teeth and fresher breath.As cats like to graze, this complete and balanced dry food is perfect for your cat to snack on throughout the day. Its also a brilliant every day recipe to feed alongside our wet food and is full of goodness to help nourish them inside and out.",
  },
  {
    id: 11,
    name: "Lily's Kitchen Tasty Cuts in Gravy for Kittens Multipack 8X85G",
    price: 19.99,
    image: lily5,
    category: "Lily's Kitchen",
    description:
      "Give your kitten the best start to their nine lives with the Lily's Kitchen Tasty Cuts in Gravy for Kittens Multipack. With these tasty cats recipes, your little furry friend will love tucking into these firm favourites.This wet kitten food is nutritionally complete and made with proper, freshly prepared meat and offal, and responsibly sourced fish. These recipes will fill your kitten’s tummy with all the vitamins and minerals they need to help them cause some serious mischief.",
  },
  {
    id: 12,
    name: "Lily's Kitchen Organic Fish Pate Wet Cat Food",
    price: 15.99,
    image: lily6,
    category: "Lily's Kitchen",
    description:
      "This recipe was previously called 'Organic Fish Dinner'. If your cat loves a smooth paté, but prefers to tuck into Organic ingredients, then this is exactly what they’re waiting for you to bring them. A soft, smooth texture that makes them extra-lickable, our organic patés are packed full of proper meat and fish that cats can’t help but devour. Made with 100% certified organic ingredients, this Organic Fish Paté is an especially delicious mix of 60% organic fish, pork, chicken and beef this is the perfect recipe to entice them off your seat in the house. And with no added sugars (unusual for cat food), these grain-free recipes are nutritionally complete - so they’re not only delicious, they’re the full package.",
  },
  {
    id: 13,
    name: "Taste of the Wild Wetlands Canine Formula Dry Dog Food",
    price: 21.99,
    image: wild1,
    category: "Taste of the Wild",
    description:
      "Grain-free diet based on duck, sweet potatoes, peas and potato. With 32% protein, this recipe is packed with highly digestible energy from duck, quail and turkey, along with nutrient-packed vegetables, legumes and fruits. This unique combination of fowl gives dogs the taste of wild game they can’t resist and the balanced nutrition they need.",
  },
  {
    id: 14,
    name: "Taste of the Wild Pacific Stream Canine Salmon in Gravy Wet Dog Food 390G",
    price: 17.55,
    image: wild2,
    category: "Taste of the Wild",
    description:
      "The Pacific Stream Canine Recipe with Salmon in Gravy will satisfy even the most finicky dogs. This complete and balanced formula can also be fed as your pet’s sole diet. Made with a high meat content of Whitefish, fish broth, turkey broth, salmon, and dried egg whites; mixed with sweet potatoes, peas, blueberries, raspberries great sources of nutrient-rich energy. Supplemented with nutritional additives such as iron amino acid, vitamin E, manganese, vitamin D3, and more. This formula delivers antioxidants to help give your canine friend a healthy lifestyle, a great tasting complement to the dry Taste of the Wild recipes!",
  },
  {
    id: 15,
    name: "Taste of the Wild Lamb with Fruit & Vegetables Tray Wet Dog Food 390G",
    price: 9.99,
    image: wild3,
    category: "Taste of the Wild",
    description:
      "Taste of the Wild Lamb with Fruit & Vegetables Tray is a premium, grain-free, complete wet food for dogs. This dog food contains lamb and chicken with fruit and vegetables, and all the proper ingredients and nutrition your dog needs to grow well and vigorously.",
  },
  {
    id: 16,
    name: "Taste of the Wild PREY Trout Dry Dog Food",
    price: 43.99,
    image: wild4,
    category: "Taste of the Wild",
    description:
      "Complete Grain Free diet from Taste of the Wild - PREY. Blended to closely resemble the diet that nature intended for your dog. May be easier for some dogs to digest with guaranteed probiotics to help support digestion.We believe everyone deserves to experience the benefits of simpler and cleaner eating. And that includes our pets. Limited ingredient diets may also be easier for some dogs to digest. In this simplified, limited ingredient recipe, spring-fed trout is the first of just four key ingredients. Along with sunflower oil, trout also provides omega fatty acids that help maintain skin and coat health. Species-specific probiotics further support digestion, while guaranteed levels of antioxidants and DHA help support overall well-being. Finally, carefully selected vitamins and minerals ensure your dog is getting the balanced nutrition he requires with the unique taste of trout he’ll crave.",
  },
  {
    id: 17,
    name: "Taste of the Wild Pacific Stream Adult Canine Formula (2 x 12.70kg) + FREE DOG BED",
    price: 39.99,
    image: wild5,
    category: "Taste of the Wild",
    description:
      "A fish protein, grain-free formula with sweet potatoes provides highly digestible energy for your sensitive dog.",
  },
  {
    id: 18,
    name: "Taste of The Wild Rocky Mountain Feline Recipe Wet Cat Food 85G",
    price: 12.99,
    image: wild6,
    category: "Taste of the Wild",
    description:
      "A great-tasting complement to the Rocky Mountain Feline dry formula, or a stand-alone diet for your special cat. The combination of animal proteins will provide your cat with ideal protein nutrition for a lean body and optimal amino acid nutrition. Veterinarians recommend feeding wet food as part of your cat’s diet to lower carbohydrate intake and increase water intake, both important features in feline nutrition. Satisfy your cat’s nutritional needs by feeding Rocky Mountain Feline Formula in Gravy.",
  },
];

export default products;
