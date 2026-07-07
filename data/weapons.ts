export type Weapon = {
  id: string;
  name: string;
};

export const weapons: Weapon[] = [
  // Sidearms（サイドアーム）
  { id: "classic", name: "Classic" },
  { id: "shorty", name: "Shorty" },
  { id: "frenzy", name: "Frenzy" },
  { id: "ghost", name: "Ghost" },
  { id: "sheriff", name: "Sheriff" },

  // SMGs
  { id: "stinger", name: "Stinger" },
  { id: "spectre", name: "Spectre" },

  // Shotguns
  { id: "bucky", name: "Bucky" },
  { id: "judge", name: "Judge" },

  // Rifles
  { id: "bulldog", name: "Bulldog" },
  { id: "guardian", name: "Guardian" },
  { id: "phantom", name: "Phantom" },
  { id: "vandal", name: "Vandal" },

  // Sniper Rifles
  { id: "marshal", name: "Marshal" },
  { id: "operator", name: "Operator" },

  // Machine Guns
  { id: "ares", name: "Ares" },
  { id: "odin", name: "Odin" },

  // Melee
  { id: "melee", name: "Melee" },
];
