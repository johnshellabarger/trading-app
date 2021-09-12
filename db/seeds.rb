puts "destroying data"

SavedItem.destroy_all
User.destroy_all
Item.destroy_all

puts "seeding"

john = User.create(email: "johnwilliamshellabarger@gmail.com", name: "John", zipcode: 80204, password: "password")
arleth = User.create(email: "arleth@gmail.com", name: "John", zipcode: 80204, password: "password")
evan = User.create(email: "evan@gmail.com", name: "John", zipcode: 80204, password: "password")
em = User.create(email: "em@gmail.com", name: "John", zipcode: 80204, password: "password")
kyle = User.create(email: "kyle@gmail.com", name: "John", zipcode: 80204, password: "password")




item1 = Item.create(photo: "https://images.offerup.com/W_UImraGS5HS0t2hXQf8J89bYm0=/1920x1920/fd42/fd42f4ae721c41c987621dae4cf794be.jpg", title: "Womens Vans Tan/Peach checkered", description: "Tan/Peach checkered Women’s Slip on Vans. Barely Worn. Size 7.5. Willing to take offers.", category:"Clothing", condition: "Used", user_id: john.id, sold: false)
item2 = Item.create(photo: "https://images.offerup.com/REUAojGnOdNGjczHQ20s-d-1VyA=/1864x1864/d662/d66231640be04b7eb1a0dd91d5799011.jpg", title: "King Killmonger Funko POP! 878", description: "Marvel Studios What If…? King Killmonger Black Panther # 878", category:"Other", condition: "New", user_id: john.id, sold: false)
item3 = Item.create(photo: "https://images.offerup.com/Hil7gRxEgOMgs6-TXp_6w7gPNyg=/1440x1920/467a/467a1b5cd92f475883ab482701d9c6b3.jpg", title: "North Face XL Jacket", description: "Basically brand new, only worn a few times and in perfect condition.", category:"Other", condition: "Used", user_id: john.id, sold: false)
item4 = Item.create(photo: "https://images.offerup.com/sjFk8sLiTLAJN6yf0-vC3XHqYk4=/1920x1920/ad2d/ad2df12972d346c08d552fef1e7a99df.jpg", title: "AirPods 2nd Generation", description: "Used but still in good condition, will be disinfected upon request. Can negotiate price.", category:"Other", condition: "Used", user_id: john.id, sold: false)
item5 = Item.create(photo: "https://images.offerup.com/QgsYH6ljstIIY4wpeWCeUjLgCuU=/1440x1920/3fcb/3fcb04491e5d45448e6f213e58f223e0.jpg", title: "Cool 24” Vintage Coffee Table", description: "Cute little table", category:"Clothing", condition: "Used", user_id: john.id, sold: false)
item7 = Item.create(photo: "https://images.offerup.com/PLMi8nPNlo2N90cFXCIaf5v0r9A=/1920x1920/b110/b1104f33a3ae48908a3c394a8e139425.jpg", title: "Tall Mirror", description: "Upright mirror. Nothing wrong with it just don’t need it.", category:"Clothing", condition: "New", user_id: john.id, sold: false)
item6 = Item.create(photo: "https://images.offerup.com/JcgoGReE6js0Fgf658XczFUVV8g=/780x1040/92d4/92d4429011784f1b929233d6b54321e9.jpg", title: "Little Tykes Slide", description: "My son had so much fun with this slide! Can be used inside or outside too!", category:"Outdoor", condition: "Used", user_id: john.id, sold: false)

item9 = Item.create(photo: "https://images.offerup.com/96Rxa9hCDhei8Tqb_W-8mDghuos=/1920x1920/ebe5/ebe58b752992415f9efd548c399c44cb.jpg", title: "Cuisinart Knife Set", description: "Works great. All the steak knives has barely been used!", category:"Other", condition: "Used", user_id: john.id, sold: false)
item10 = Item.create(photo: "https://images.offerup.com/5mX37nAAgUD1DpgwBV_3jLFUcTY=/1440x1920/f030/f030be25f8b3464caa1f7fe1fba64550.jpg", title: "Decorative Rustic Lantern With Battery Candle", description: "Lovely", category:"Clothing", condition: "New", user_id: john.id, sold: false)
item11 = Item.create(photo: "https://images.offerup.com/E8i6nKoV-a0VNflnHXZwwYJ_xqw=/1920x1920/1187/1187ea3287b64572b6c77306741e01fd.jpg", title: "Kitchen Sign", description: "Hangs or stands", category:"Clothing", condition: "New", user_id: john.id, sold: false)
item12 = Item.create(photo: "https://images.offerup.com/hm65HYeza0S6IWKOqo7_0IfUxyk=/750x776/0a1d/0a1dea78e9a2481396b353181fd551ac.jpg", title: "Bronco Shirt #18 Manning", description: "Offical NFL Jersey", category:"Clothing", condition: "New", user_id: john.id, sold: false)
item13 = Item.create(photo: "https://images.offerup.com/8U_RcIPDF0udiHhHNtxo2xrJqz4=/1920x1920/2f7c/2f7cfb0647374a52b39cd749ba44ba5a.jpg", title: "Lego", description: "Lego City Car Set", category:"Clothing", condition: "New", user_id: john.id, sold: false)
item8 = Item.create(photo: "https://images.offerup.com/Lm--faE5zxehVWoLZsKapTg58Kg=/1440x1920/0f86/0f867fa218b04ce48a5a47d7fe64484f.jpg", title: "Nightstand Small Dresser Side Table", description: "2 Drawers Dovetailed 14”d 22”w 28”t", category:"Clothing", condition: "New", user_id: john.id, sold: false)
item14 = Item.create(photo: "https://images.offerup.com/Qy5D3qSrhgp0wL9tXxW0XOCfRdc=/1920x1920/915b/915b4dabd3ab4ea8b70cdc9e2e169916.jpg", title: "the legend of zelda skyward sword", description: "Nintendo Switch Game", category:"Clothing", condition: "New", user_id: john.id, sold: false)
item15 = Item.create(photo: "https://images.offerup.com/dXUrhAzK62x9EpJtBJ6qp_zW3-M=/1440x1920/3f7f/3f7fff58a0e0414ea428414489d86317.jpg", title: "Salomon Skis Boots Size 27", description: "Still in awesome condition", category:"Clothing", condition: "New", user_id: john.id, sold: false)
item16 = Item.create(photo: "https://images.offerup.com/7h6Yw0ZYJoQF3y24MRjWjLVm3uU=/1440x1920/5928/5928277fdf9d41389bbc8ec37987e3e2.jpg", title: "Small Silver Platter", description: "Silverplate small dish/catch all.", category:"Clothing", condition: "New", user_id: john.id, sold: false)
item17 = Item.create(photo: "https://images.offerup.com/dD1-ZjKqzaAQYaDpc257ASNPs6w=/1440x1920/cfca/cfcac09a5789466e84db8ff89e4738d8.jpg", title: "Fake Plant", description: "Just A Fake Plant", category:"Clothing", condition: "New", user_id: john.id, sold: false)
item18 = Item.create(photo: "https://images.offerup.com/FEJKlfGphvKUAR20nOf3JxS66jA=/756x1008/cf16/cf16231361434918a50471bdacd51d82.jpg", title: "Kitchen Set", description: "Nice set of veggies", category:"Clothing", condition: "New", user_id: john.id, sold: false)
item19 = Item.create(photo: "https://images.offerup.com/p37ShFZ2mv-5xWkAIERjRmOMawU=/606x727/e92a/e92a3da66d2440debf1e8b60d91fcbd1.jpg", title: "Spiegelau Stemmed Wine Glasses", description: "Set of four stemmed Spiegelau wine glasses.", category:"Clothing", condition: "New", user_id: john.id, sold: false)
item20 = Item.create(photo: "https://images.offerup.com/a1zWs1Csus0BBElSzERCDyUJCUM=/1920x1920/46cd/46cd8b0af4424bd88caf6f4f4fe675c5.jpg", title: "Black Skull Dragon 1st Edition 1999 Card", description: "Not graded, near mint condition, negotiable.", category:"Clothing", condition: "New", user_id: john.id, sold: false)

messages = ["hello", "how are you?", "great"]
messages.each do |m|
    Message.create(content: m)
end
puts "done seeding"