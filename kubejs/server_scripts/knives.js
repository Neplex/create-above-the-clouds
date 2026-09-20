const knives = [
  {
    metal: "overgeared:heated_iron_ingot",
    blade: "kubejs:iron_knife_blade",
    knife: "farmersdelight:iron_knife",
    tier: "stone",
    casting_input: {
      iron: 9,
    },
  },
  {
    metal: "minecraft:gold_ingot",
    blade: "kubejs:golden_knife_blade",
    knife: "farmersdelight:golden_knife",
    tier: "stone",
    casting_input: {
      gold: 9,
    },
  },
  {
    metal: "overgeared:heated_copper_ingot",
    blade: "kubejs:copper_knife_blade",
    knife: "kubejs:copper_knife",
    tier: "stone",
    casting_input: {
      copper: 9,
    },
  },
  {
    metal: "overgeared:heated_steel_ingot",
    blade: "kubejs:steel_knife_blade",
    knife: "kubejs:steel_knife",
    tier: "iron",
    casting_input: {
      steel: 9,
    },
  },
];

ServerEvents.tags("item", (event) => {
  knives.forEach((crafting) => {
    event.add("overgeared:tool_parts", crafting.blade);
  });
});

ServerEvents.recipes((event) => {
  knives.forEach((crafting) => {
    event.remove({ output: crafting.knife });

    event.custom({
      type: "overgeared:crafting_shapeless",
      category: "equipment",
      ingredients: [
        {
          item: crafting.blade,
        },
        {
          item: "minecraft:stick",
        },
      ],
      result: {
        count: 1,
        id: crafting.knife,
      },
    });

    event.custom({
      type: "overgeared:forging",
      blueprint: ["knife"],
      category: "TOOL_HEADS",
      hammering: 3,
      key: {
        "#": {
          item: crafting.metal,
        },
      },
      pattern: ["#"],
      result: {
        count: 1,
        id: crafting.blade,
      },
      show_notification: true,
      tier: crafting.tier,
    });

    event.custom({
      type: "overgeared:cast_blasting",
      cookingtime: 75,
      experience: 0.5,
      group: "misc",
      input: crafting.casting_input,
      need_polishing: true,
      result: {
        count: 1,
        id: crafting.blade,
      },
      tool_type: "knife",
    });

    event.custom({
      type: "overgeared:cast_smelting",
      cookingtime: 150,
      experience: 0.5,
      group: "misc",
      input: crafting.casting_input,
      need_polishing: true,
      result: {
        count: 1,
        id: crafting.blade,
      },
      tool_type: "knife",
    });
  });

  event.remove({ output: "farmersdelight:diamond_knife" });
  event.smithing(
    "farmersdelight:diamond_knife",
    "overgeared:diamond_upgrade_smithing_template",
    "kubejs:steel_knife",
    "minecraft:diamond",
  );

  event.shaped(
    "overgeared:unfired_tool_cast[overgeared:cast_data={max_amount:9,tool_type:'knife'}]",
    [" C ", "CBC", " C "],
    {
      C: "minecraft:clay_ball",
      B: /(farmersdelight:flint_knife)|(kubejs:.*_knife_blade)/,
    },
  );
});
