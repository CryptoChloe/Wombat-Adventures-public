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
    description: "A basic iron sword."
  },
  {
    id: "armor_001",
    name: "Leather Armor",
    type: "body",
    rarity: "common",
    properties: { defense: 3 },
    icon: "../assets/sprites/armor.png",
    description: "Simple leather armor."
  },
  {
    id: "amulet_001",
    name: "Amulet of Luck",
    type: "amulet",
    rarity: "rare",
    properties: { luck: 2 },
    icon: "../assets/sprites/amulet.png",
    description: "Increases your luck."
  },
  {
    id: "potion_hp_small",
    name: "Small Health Potion",
    type: "consumable",
    rarity: "common",
    properties: { heal: 50 },
    icon: "../assets/sprites/potion.png",
    description: "Restores 50 HP."
  },
  // Add more items as needed
];
window.items = items;
