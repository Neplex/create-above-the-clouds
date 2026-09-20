ServerEvents.tags("item", (event) => {
  event.add("overgeared:heated_metals", "burnt_additions:liquid_magma_bucket");
});

ServerEvents.tags("fluid", (event) => {
  event.add("create:bottomless/deny", "burnt_additions:liquid_magma");
  event.add("create:bottomless/deny", "burnt_additions:tar");
});

ServerEvents.recipes((event) => {
  event.replaceInput(
    { input: "burnt_additions:sulphur" },
    "burnt_additions:sulphur",
    Ingredient.of("#c:dusts/sulfur"),
  );

  event.remove({ output: "burnt_additions:gas_mask" });
  event.remove({ output: "burnt_additions:sulphur" });
  event.remove({ output: "burnt_additions:soul_charge" });
  event.remove({ output: "burnt_additions:soul_ice" });

  event.recipes.create.haunting(
    "burnt_additions:soul_charge",
    "minecraft:fire_charge",
  );
  event.recipes.create.haunting(
    "burnt_additions:soul_ice",
    "minecraft:packed_ice",
  );

  event.shaped("burnt_additions:pitch_block", ["AAA", "AAA", "AAA"], {
    A: "burnt_additions:pitch_resin",
  });

  event.recipes.create.filling("burnt_additions:tar_bottle", [
    Fluid.of("burnt_additions:tar", 250),
    "minecraft:glass_bottle",
  ]);

  event.recipes.create.emptying(
    [Fluid.of("burnt_additions:tar", 250), "minecraft:glass_bottle"],
    "burnt_additions:tar_bottle",
  );
  event.recipes.create.emptying(
    [Fluid.of("burnt_additions:tar"), "minecraft:bucket"],
    "burnt_additions:tar_bucket",
  );

  event.custom({
    type: "createdieselgenerators:basin_fermenting",
    ingredients: [
      {
        tag: "minecraft:logs_that_burn",
      },
    ],
    heat_requirement: "heated",
    processing_time: 200,
    results: [
      {
        id: "burnt_additions:tar",
        amount: 100,
      },
    ],
  });
});

RecipeViewerEvents.removeEntriesCompletely("item", (event) => {
  event.remove("burnt_additions:gas_mask");
  event.remove("burnt_additions:sulphur");
  event.remove("burnt:tar_bucket");
  event.remove("burnt:tar_bottle");
  event.remove("burnt:tar_barrel");
  event.remove("burnt:tar_block");
  event.remove("burnt:pitch_resin");
  event.remove("burnt:black_ice");
});
