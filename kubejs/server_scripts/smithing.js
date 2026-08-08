ServerEvents.tags("item", (event) => {
  event.add("c:dusts/carbon", "cgs:charcoal_dust");
  event.add("c:dusts/carbon", "petrochem:petroleum_coke");
  event.add("c:dusts/carbon", "createmetallurgy:coke");

  event.remove("createmetallurgy:graphite_molds", "createmetallurgy:graphite_rod_mold");
  event.remove("createmetallurgy:graphite_molds", "createmetallurgy:graphite_gear_mold");
});

ServerEvents.recipes((event) => {
  // Remove create big cannons meltting
  event.remove({ type: "createbigcannons:melting" });
  event.remove({ output: "createbigcannons:basin_foundry_lid" });

  // Remove crude steel recipes
  event.remove({ input: "overgeared:crude_steel" });
  event.remove({ output: "overgeared:crude_steel" });
  event.remove({ input: "overgeared:heated_crude_steel" });
  event.remove({ output: "overgeared:heated_crude_steel" });

  // Remove netherite alloy recipes
  event.remove({ input: "overgeared:netherite_alloy" });
  event.remove({ output: "overgeared:netherite_alloy" });
  event.remove({ input: "overgeared:heated_netherite_alloy" });
  event.remove({ output: "overgeared:heated_netherite_alloy" });

  // Remove overgeared alloying + casting recipes
  event.remove({ type: "overgeared:alloy_smelting" });
  event.remove({ output: "overgeared:alloy_furnace" });
  event.remove({ output: "overgeared:nether_alloy_furnace" });
  event.remove({ type: "overgeared:casting" });
  event.remove({ output: "overgeared:casting_furnace" });

  // Hammering/Sheet
  event.remove({ output: "createdieselgenerators:hammer" });
  event.remove({ type: "createdieselgenerators:hammering" });

  [
    ['minecraft:gold_ingot', 'create:golden_sheet', 3, 'stone'],
    ['create:andesite_alloy', 'createdeco:andesite_sheet', 3, 'stone'],
    ['create:zinc_ingot', 'createdeco:zinc_sheet', 3, 'stone'],
    ['createdeco:industrial_iron_ingot', 'createdeco:industrial_iron_sheet', 3, 'stone'],
    ['create:brass_ingot', 'create:brass_sheet', 4, 'iron'],
    ['createbigcannons:bronze_ingot', 'petrochem:bronze_sheet', 4, 'iron'],
  ].forEach(([ingot, plate, count, tier]) => {
    event.custom({
      type: "overgeared:forging",
      hammering: count,
      has_quality: false,
      key: {
        "#": {
          item: ingot,
        },
      },
      need_quenching: false,
      pattern: ["#"],
      result: {
        count: 1,
        id: plate,
      },
      show_notification: false,
      tier: tier,
    });
  });

  // Replace coal with charcoal dust in the mixin recipe
  event.replaceInput(
    { type: "createmetallurgy:alloying", input: "createmetallurgy:coke" },
    "createmetallurgy:coke",
    Ingredient.of("#c:dusts/carbon"),
  );
  event.remove({
    type: "createmetallurgy:alloying",
    output: Fluid.of("createmetallurgy:molten_steel"),
  });
  event.remove({
    type: "create:compacting",
    output: "createbigcannons:cast_iron_ingot",
  });
  event.remove({
    type: "create:mixing",
    output: "createbigcannons:steel_ingot",
  });
  event.remove({
    type: "create:mixing",
    output: "createbigcannons:nethersteel_ingot",
  });

  event.custom({
    type: "createmetallurgy:alloying",
    heat_requirement: "heated",
    ingredients: [
      {
        tag: "c:dusts/carbon",
      },
      {
        type: "neoforge:single",
        fluid: "createmetallurgy:molten_iron",
        amount: 270,
      },
    ],
    processing_time: 40,
    results: [
      {
        id: "createbigcannons:molten_cast_iron",
        amount: 270,
      },
    ],
  });
  event.custom({
    type: "createmetallurgy:alloying",
    heat_requirement: "heated",
    ingredients: [
      {
        tag: "c:dusts/carbon",
      },
      {
        type: "neoforge:single",
        fluid: "createbigcannons:molten_cast_iron",
        amount: 270,
      },
    ],
    processing_time: 40,
    results: [
      {
        id: "createbigcannons:molten_steel",
        amount: 270,
      },
    ],
  });
  event.custom({
    type: "createmetallurgy:alloying",
    heat_requirement: "superheated",
    ingredients: [
      {
        item: "minecraft:netherite_scrap",
      },
      {
        type: "neoforge:single",
        fluid: "createbigcannons:molten_cast_iron",
        amount: 720,
      },
    ],
    processing_time: 40,
    results: [
      {
        id: "createbigcannons:molten_nethersteel",
        amount: 720,
      },
    ],
  });

  // Brass
  event.remove({
    type: "create:mixing",
    output: "create:brass_ingot",
  });

  // Bronze
  event.remove({
    type: "create:mixing",
    output: "createbigcannons:bronze_ingot",
  });
  event.remove({
    type: "createmetallurgy:alloying",
    output: "createmetallurgy:molten_bronze",
  });
  event.custom({
    type: "createmetallurgy:alloying",
    heat_requirement: "heated",
    ingredients: [
      {
        item: "create:cinder_flour",
      },
      {
        type: "neoforge:single",
        fluid: "createmetallurgy:molten_copper",
        amount: 30,
      },
      {
        type: "neoforge:single",
        fluid: "createmetallurgy:molten_zinc",
        amount: 10,
      },
    ],
    processing_time: 40,
    results: [
      {
        id: "createbigcannons:molten_bronze",
        amount: 40,
      },
    ],
  });

  // Cast iron casting
  event.custom({
    type: "createmetallurgy:casting_in_basin",
    processing_time: 480,
    ingredients: [
      {
        type: "neoforge:single",
        fluid: "createbigcannons:molten_cast_iron",
        amount: 810,
      },
    ],
    result: {
      item: {
        id: "createbigcannons:cast_iron_block",
        count: 1,
      },
    },
  });
  event.custom({
    type: "createmetallurgy:casting_in_table",
    processing_time: 60,
    ingredients: [
      {
        type: "neoforge:single",
        fluid: "createbigcannons:molten_cast_iron",
        amount: 90,
      },
      {
        item: "createmetallurgy:graphite_ingot_mold",
      },
    ],
    result: {
      item: {
        id: "createbigcannons:cast_iron_ingot",
        count: 1,
      },
    },
  });
  event.custom({
    type: "createmetallurgy:casting_in_table",
    processing_time: 6,
    ingredients: [
      {
        type: "neoforge:single",
        fluid: "createbigcannons:molten_cast_iron",
        amount: 10,
      },
      {
        item: "createmetallurgy:graphite_nugget_mold",
      },
    ],
    result: {
      item: {
        id: "createbigcannons:cast_iron_nugget",
        count: 1,
      },
    },
  });

  // Nethersteel casting
  event.custom({
    type: "createmetallurgy:casting_in_basin",
    processing_time: 480,
    ingredients: [
      {
        type: "neoforge:single",
        fluid: "createbigcannons:molten_nethersteel",
        amount: 810,
      },
    ],
    result: {
      item: {
        id: "createbigcannons:nethersteel_block",
        count: 1,
      },
    },
  });
  event.custom({
    type: "createmetallurgy:casting_in_table",
    processing_time: 60,
    ingredients: [
      {
        type: "neoforge:single",
        fluid: "createbigcannons:molten_nethersteel",
        amount: 90,
      },
      {
        item: "createmetallurgy:graphite_ingot_mold",
      },
    ],
    result: {
      item: {
        id: "createbigcannons:nethersteel_ingot",
        count: 1,
      },
    },
  });
  event.custom({
    type: "createmetallurgy:casting_in_table",
    processing_time: 6,
    ingredients: [
      {
        type: "neoforge:single",
        fluid: "createbigcannons:molten_nethersteel",
        amount: 10,
      },
      {
        item: "createmetallurgy:graphite_nugget_mold",
      },
    ],
    result: {
      item: {
        id: "createbigcannons:nethersteel_nugget",
        count: 1,
      }
    },
  });

  // Remove packing recipes
  event.remove({
    type: "create:compacting",
    output: "createbigcannons:bronze_ingot",
  });
  event.remove({
    type: "create:compacting",
    output: "createbigcannons:bronze_block",
  });
  event.remove({
    type: "create:compacting",
    output: "createbigcannons:steel_ingot",
  });
  event.remove({
    type: "create:compacting",
    output: "createbigcannons:steel_block",
  });
  event.remove({
    type: "create:compacting",
    output: "createbigcannons:cast_iron_ingot",
  });
  event.remove({
    type: "create:compacting",
    output: "createbigcannons:cast_iron_block",
  });
  event.remove({
    type: "create:compacting",
    output: "createbigcannons:nethersteel_ingot",
  });
  event.remove({
    type: "create:compacting",
    output: "createbigcannons:nethersteel_block",
  });

  // Uniformize molds
  event.remove({ type: "createdieselgenerators:casting" });
  event.remove({ output: "createdieselgenerators:mold" });
  event.remove({ output: "createmetallurgy:graphite_rod_mold" });
  event.remove({ output: "createmetallurgy:graphite_gear_mold" });
  event.stonecutting(
    Item.of("createdieselgenerators:mold[createdieselgenerators:mold_type='createdieselgenerators:bowl']"),
    "#createmetallurgy:graphite_molds",
  );
  event.stonecutting(
    Item.of("createdieselgenerators:mold[createdieselgenerators:mold_type='createdieselgenerators:lines']"),
    "#createmetallurgy:graphite_molds",
  );
  event.stonecutting(
    Item.of("createdieselgenerators:mold[createdieselgenerators:mold_type='createdieselgenerators:chain']"),
    "#createmetallurgy:graphite_molds",
  );

  // Casing recipes
  event.custom({
    type: "createmetallurgy:casting_in_basin",
    processing_time: 70,
    ingredients: [
      {
        type: "neoforge:single",
        fluid: "createmetallurgy:molten_zinc",
        amount: 90,
      },
      {
        item: "create:andesite_casing",
      }
    ],
    result: {
      item: {
        id: "powergrid:conductive_casing",
        count: 1,
      },
    },
  });
});

// Hide items from recipe viewers
RecipeViewerEvents.removeEntriesCompletely("item", (event) => {
  event.remove("createbigcannons:basin_foundry_lid");
  event.remove("overgeared:crude_steel");
  event.remove("overgeared:heated_crude_steel");
  event.remove("overgeared:netherite_alloy");
  event.remove("overgeared:heated_netherite_alloy");

  event.remove("overgeared:alloy_furnace");
  event.remove("overgeared:nether_alloy_furnace");
  event.remove("overgeared:casting_furnace");

  event.remove("createdieselgenerators:hammer");

  event.remove("createdieselgenerators:mold[createdieselgenerators:mold_type='createdieselgenerators:bar']");
  event.remove("createmetallurgy:graphite_rod_mold");
  event.remove("createmetallurgy:graphite_gear_mold");
});
