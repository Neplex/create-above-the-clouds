ServerEvents.tags("item", (event) => {
  event.add(
    "burnt_additions:breathing_equipment",
    "create:copper_diving_helmet",
  );
  event.add(
    "burnt_additions:breathing_equipment",
    "create:netherite_diving_helmet",
  );
  event.add(
    "burnt_additions:breathing_equipment",
    "radiologistics:pilot_helmet",
  );
});

ServerEvents.recipes((event) => {
  event.replaceInput(
    { output: "create:elevator_pulley" },
    "minecraft:dried_kelp_block",
    "create:belt_connector",
  );
  event.replaceInput(
    { output: "create:hose_pulley" },
    "minecraft:dried_kelp_block",
    "create:belt_connector",
  );

  event.replaceInput(
    { output: "createbigcannons:block_armor_inspection_tool" },
    "create:precision_mechanism",
    "minecraft:compass",
  );
  event.replaceInput(
    { output: "createbigcannons:block_armor_inspection_tool" },
    "minecraft:iron_bars",
    Ingredient.of("#cgs:nails"),
  );

  event.remove({output: 'createdieselgenerators:basin_lid'});
    event.shaped('createdieselgenerators:basin_lid', ["AAA"], {
    A: "create:andesite_alloy",
  });
});

RecipeViewerEvents.removeEntriesCompletely("item", (event) => {
  event.remove(/create:creative_/);
  event.remove("create:handheld_worldshaper");
  event.remove("createlazytick:clock");
});
