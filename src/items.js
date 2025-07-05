// src/items.js
// Item definitions for Wombat Adventures
// Add/remove items here to update the item system

const items = [
  {
    id: "sword_001",
    name: "Iron Sword",
    type: "weapon",
    rarity: "common",
    properties: { attack: 5 },
    icon: "../assets/sprites/sword.png",
    description: "A basic iron sword.",
    price: 50
  },
  {
    id: "sword_002",
    name: "Mana Sword",
    type: "weapon",
    rarity: "common",
    properties: { attack: 7 },
    icon: "../assets/sprites/sword2.png",
    description: "A basic mana sword.",
    price: 80
  },
  {
    id: "armor_001",
    name: "Leather Armor",
    type: "body",
    rarity: "common",
    properties: { defense: 3 },
    icon: "../assets/sprites/armor.png",
    description: "Simple leather armor.",
    price: 40
  },{
    id: "armor_002",
    name: "Iron Armor",
    type: "body",
    rarity: "common",
    properties: { defense: 8 },
    icon: "../assets/sprites/armor2.png",
    description: "Simple Iron armor.",
    price: 90
  },
  {
    id: "amulet_001",
    name: "Amulet of Luck",
    type: "amulet",
    rarity: "rare",
    properties: { luck: 2 },
    icon: "../assets/sprites/amulet.png",
    description: "Increases your luck.",
    price: 120
  },{
    id: "amulet_002",
    name: "Amulet of Restoration",
    type: "amulet",
    rarity: "rare",
    properties: { health: 20 },
    icon: "../assets/sprites/amulet2.png",
    description: "Increases your Health.",
    price: 150
  },
  {
    id: "potion_hp_small",
    name: "Small Health Potion",
    type: "consumable",
    rarity: "common",
    properties: { heal: 50 },
    icon: "../assets/sprites/potion2.png",
    description: "Restores 50 HP.",
    price: 20
  },{
    id: "potion_hp_mana",
    name: "Small Mana Potion",
    type: "consumable",
    rarity: "common",
    properties: { Mana: 50 },
    icon: "../assets/sprites/potion.png",
    description: "Restores 50 Mana.",
    price: 20
  },
  // Add more items as needed
];
window.items = items;
