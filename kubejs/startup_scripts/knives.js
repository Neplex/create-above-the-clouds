const new_knives = [
  { name: "copper_knife", tier: "copper", displayName: "Copper Knife" },
  { name: "steel_knife", tier: "steel", displayName: "Steel Knife" },
];

const knife_blades = [
  { name: "copper_knife_blade", displayName: "Copper Knife Blade" },
  { name: "steel_knife_blade", displayName: "Steel Knife Blade" },
  { name: "iron_knife_blade", displayName: "Iron Knife Blade" },
  { name: "golden_knife_blade", displayName: "Golden Knife Blade" },
];

StartupEvents.registry("item", (event) => {
  new_knives.forEach((knife) => {
    event
      .create(knife.name, "farmersdelight:knife")
      .displayName(knife.displayName)
      .tier(knife.tier)
      .texture(`kubejs:item/${knife.name}`);
  });

  knife_blades.forEach((blade) => {
    event
      .create(blade.name)
      .displayName(blade.displayName)
      .texture(`kubejs:item/${blade.name}`);
  });
});
