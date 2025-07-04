// characterdata.js
// List of available characters for Wombat Adventures
// Add new characters or properties as needed

// Redirect to login if not logged in (for all pages that use character data)
(function ensureLoggedIn() {
    if (typeof localStorage !== 'undefined' && !localStorage.getItem('currentUser')) {
        window.location.href = 'login.html';
    }
})();

const characters = [
    {
        characterclass: 'Archer',
        img: '../assets/characters/archer.jpg',
        description: 'A skilled ranged attacker.',
        health: 80,
        attack: 70,
        elementalattack: 50,
        defense: 40,
        xp: 0,
        gold: 0,
        level: 1,
        statpoints: 0,
        skillpoints: 0,
        starterItems: ['sword_001'],
        inventory: [] // inventory for saving/loading items
    },
    {
        characterclass: 'Mage',
        img: '../assets/characters/mage.jpg',
        description: 'A master of elemental magic.',
        health: 60,
        attack: 90,
        elementalattack: 50,
        defense: 30,
        xp: 0,
        gold: 0,
        level: 1,
        statpoints: 0,
        skillpoints: 0,
        starterItems: ['amulet_001'],
        inventory: []
    },
    {
        characterclass: 'Warrior',
        img: '../assets/characters/warrior.jpg',
        description: 'A strong melee fighter.',
        health: 100,
        attack: 60,
        elementalattack: 50,
        defense: 60,
        xp: 0,
        gold: 0,
        level: 1,
        statpoints: 0,
        skillpoints: 0,
        starterItems: ['armor_001'],
        inventory: []
    }
];
