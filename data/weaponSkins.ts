export type Skin = {
  id: string;
  name: string;
};

export type WeaponSkins = {
  weaponId: string;
  skins: Skin[];
};

export const weaponSkins: WeaponSkins[] = [
  {
    weaponId: "vandal",
    skins: [
      { id: "prime_vandal", name: "Prime Vandal" },
      { id: "reaver_vandal", name: "Reaver Vandal" },
      { id: "elderflame_vandal", name: "Elderflame Vandal" },
      { id: "oni_vandal", name: "Oni Vandal" },
      { id: "ion_vandal", name: "Ion Vandal" },
      { id: "rgx_vandal", name: "RGX 11z Pro Vandal" },
      { id: "forsaken_vandal", name: "Forsaken Vandal" },
      { id: "sol_vandal", name: "Sentinels of Light Vandal" },
      { id: "glitchpop_vandal", name: "Glitchpop Vandal" },
      { id: "neptune_vandal", name: "Neptune Vandal" },
      { id: "magepunk_vandal", name: "Magepunk Vandal" },
      { id: "origin_vandal", name: "Origin Vandal" },
      { id: "champions2021_vandal", name: "Champions 2021 Vandal" },
      { id: "champions2023_vandal", name: "Champions 2023 Vandal" },
      { id: "champions2024_vandal", name: "Champions 2024 Vandal" },
      { id: "ruination_vandal", name: "Ruination Vandal" },
      { id: "cryostasis_vandal", name: "Cryostasis Vandal" },
      { id: "kuronami_vandal", name: "Kuronami Vandal" },
      { id: "overdrive_vandal", name: "Overdrive Vandal" },
      { id: "daydreams_vandal", name: "Daydreams Vandal" },
      { id: "soulstrife_vandal", name: "Soulstrife Vandal" },
      { id: "recon_vandal", name: "Recon Vandal" },
      { id: "silvanus_vandal", name: "Silvanus Vandal" },
      { id: "team_ace_vandal", name: "Team Ace Vandal" },
      { id: "delipop_vandal", name: "DeliPop Vandal" },
      { id: "abyssal_vandal", name: "Abyssal Vandal" },
      { id: "chromedek_vandal", name: "Chromedek Vandal" },
      { id: "artemis_vandal", name: "Artemis Vandal" },
      { id: "hivemind_vandal", name: "Hivemind Vandal" },
      { id: "winterwunderland_vandal", name: "Winterwunderland Vandal" },
      { id: "sakura_vandal", name: "Sakura Vandal" },
      { id: "minima_vandal", name: "Minima Vandal" },
      { id: "velocity_vandal", name: "Velocity Vandal" },
      { id: "standard_vandal", name: "Standard Vandal" }
    ],
  },
];
