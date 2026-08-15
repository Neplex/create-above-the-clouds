ServerEvents.tags("block", (event) => {
  event.add("createbigcannons:drill_can_pass_through", /quark:hollow/);
});

ServerEvents.tags("item", (event) => {
  event.add("burnt:burnt_logs", "burnt:burnt_log");
  event.add("burnt:burnt_logs", "burnt:stripped_burnt_log");
  event.add("burnt:burnt_logs", "burnt:burnt_wood");
  event.add("burnt:burnt_logs", "burnt:stripped_burnt_wood");
  event.add("c:bookshelves", "burnt:burnt_bookshelf");
  event.add(
    "c:bookshelves",
    "everycomp:q/burnt_additions/soul_tempered_bookshelf",
  );
  event.add("quark:revertable_chests", "burnt:burnt_chest");
});

ServerEvents.recipes((event) => {
  event.remove({ output: /warped/ });
  event.remove({ output: /crimson/ });
  event.remove({ output: /quark:hollow/ });
  event.remove({ output: /everycomp:q\/.*\/hollow/ });

  event.remove({ output: "everycomp:q/burnt_additions/soul_tempered_chest" });
  event.remove({
    output: "everycomp:q/burnt_additions/trapped_soul_tempered_chest",
  });

  event.remove({ type: "minecraft:smoking", output: "burnt:burnt_log" });
  event.remove({
    type: "minecraft:smoking",
    output: "burnt:stripped_burnt_log",
  });
  event.remove({ type: "minecraft:smoking", output: "burnt:burnt_wood" });
  event.remove({
    type: "minecraft:smoking",
    output: "burnt:stripped_burnt_wood",
  });
  event.remove({ type: "minecraft:smoking", output: "burnt:burnt_bookshelf" });

  event.smoking(
    "burnt:burnt_log",
    Ingredient.of("#minecraft:logs_that_burn")
      .except(/wood/)
      .except(/stripped/)
      .except(/burnt/),
  );
  event.smoking(
    "burnt:stripped_burnt_log",
    Ingredient.of("#minecraft:logs_that_burn")
      .except(/wood/)
      .and(/stripped/)
      .except(/burnt/),
  );
  event.smoking(
    "burnt:burnt_wood",
    Ingredient.of("#minecraft:logs_that_burn")
      .and(/wood/)
      .except(/stripped/)
      .except(/burnt/),
  );
  event.smoking(
    "burnt:stripped_burnt_wood",
    Ingredient.of("#minecraft:logs_that_burn")
      .and(/wood/)
      .and(/stripped/)
      .except(/burnt/),
  );
  event.smoking(
    "burnt:burnt_bookshelf",
    Ingredient.of("#c:bookshelves").except("/burnt/"),
  );
  event.smoking("burnt:burnt_ladder", "minecraft:ladder");
  event.smoking("burnt:burnt_scaffolding", "minecraft:scaffolding");
  event.smoking(
    "everycomp:q/burnt/burnt_chest",
    Ingredient.of("#c:chests/wooden")
      .except("#c:chests/trapped")
      .except(/burnt/),
  );
  event.smoking(
    "everycomp:q/burnt/trapped_burnt_chest",
    Ingredient.of("#c:chests/wooden").and("#c:chests/trapped").except(/burnt/),
  );
  event.smoking(
    "everycomp:fd/burnt/burnt_cabinet",
    Ingredient.of("#farmersdelight:cabinets/wooden").except(/burnt/),
  );
  event.smoking(
    "everycomp:q/burnt/hollow_burnt_log",
    Ingredient.of("#quark:hollow_logs").except(
      "everycomp:q/burnt/hollow_burnt_log",
    ),
  );

  event.recipes.create.haunting(
    "burnt_additions:soul_tempered_log",
    Ingredient.of("#minecraft:logs_that_burn")
      .except(/wood/)
      .except(/stripped/)
      .except(/burnt/),
  );
  event.recipes.create.haunting(
    "burnt_additions:soul_tempered_planks",
    Ingredient.of("#minecraft:planks").except(/burnt/),
  );
  event.shaped("4x burnt_additions:soul_tempered_planks", ["A"], {
    A: "burnt_additions:soul_tempered_log",
  });

  event.recipes.create.haunting(
    "burnt_additions:soul_tempered_planks_stairs",
    Ingredient.of("#minecraft:wooden_stairs").except(/burnt/),
  );
  event.shaped(
    "4x burnt_additions:soul_tempered_planks_stairs",
    ["A  ", "AA ", "AAA"],
    { A: "burnt_additions:soul_tempered_planks" },
  );
  event.recipes.create.cutting(
    "burnt_additions:soul_tempered_planks_stairs",
    "burnt_additions:soul_tempered_planks",
  );

  event.recipes.create.haunting(
    "burnt_additions:soul_tempered_planks_slab",
    Ingredient.of("#minecraft:wooden_slabs").except(/burnt/),
  );
  event.shaped("6x burnt_additions:soul_tempered_planks_slab", ["AAA"], {
    A: "burnt_additions:soul_tempered_planks",
  });
  event.recipes.create.cutting(
    "2x burnt_additions:soul_tempered_planks_slab",
    "burnt_additions:soul_tempered_planks",
  );

  event.recipes.create.haunting(
    "burnt_additions:soul_tempered_button",
    Ingredient.of("#minecraft:wooden_buttons").except(/burnt/),
  );
  event.shaped("burnt_additions:soul_tempered_button", ["A"], {
    A: "burnt_additions:soul_tempered_planks",
  });
  event.recipes.create.cutting(
    "burnt_additions:soul_tempered_button",
    "burnt_additions:soul_tempered_planks",
  );

  event.recipes.create.haunting(
    "everycomp:q/burnt_additions/soul_tempered_bookshelf",
    Ingredient.of("#c:bookshelves").except("/burnt/"),
  );

  event.recipes.create.haunting(
    "burnt_additions:soul_tempered_fence",
    Ingredient.of("#c:fences/wooden").except(/burnt/),
  );
  event.shaped("3x burnt_additions:soul_tempered_fence", ["ABA", "ABA"], {
    A: "burnt_additions:soul_tempered_planks",
    B: "minecraft:stick",
  });

  event.recipes.create.haunting(
    "burnt_additions:soul_tempered_fence_gate",
    Ingredient.of("#c:fence_gates/wooden").except(/burnt/),
  );
  event.shaped("3x burnt_additions:soul_tempered_fence_gate", ["ABA", "ABA"], {
    A: "minecraft:stick",
    B: "burnt_additions:soul_tempered_planks",
  });

  event.recipes.create.haunting(
    "burnt_additions:soul_tempered_pressure_plate",
    Ingredient.of("#minecraft:wooden_pressure_plates").except(/burnt/),
  );
  event.shaped("3x burnt_additions:soul_tempered_pressure_plate", ["AA"], {
    A: "burnt_additions:soul_tempered_planks",
  });

  event.recipes.create.crushing(
    [
      "10x createdieselgenerators:wood_chip",
      CreateItem.of("2x createdieselgenerators:wood_chip", 0.5),
    ],
    Ingredient.of("#quark:hollow_logs").except(
      "everycomp:q/burnt/hollow_burnt_log",
    ),
  );

  event.recipes.create.crushing(
    ["5x burnt:soot", CreateItem.of("2x supplementaries:ash", 0.5)],
    Ingredient.of("#burnt:wood_type/burnt"),
  );
});

RecipeViewerEvents.removeEntriesCompletely("item", (event) => {
  event.remove(/warped/);
  event.remove(/crimson/);

  event.remove("everycomp:q/burnt_additions/soul_tempered_chest");
  event.remove("everycomp:q/burnt_additions/trapped_soul_tempered_chest");
});
