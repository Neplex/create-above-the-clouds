ServerEvents.tags("block", (event) => {
  event.add("createbigcannons:drill_can_pass_through", /quark:hollow/);
});

ServerEvents.tags("item", (event) => {
  event.add("burnt:burnt_logs", "burnt:burnt_log");
  event.add("burnt:burnt_logs", "burnt:stripped_burnt_log");
  event.add("burnt:burnt_logs", "burnt:burnt_wood");
  event.add("burnt:burnt_logs", "burnt:stripped_burnt_wood");
  event.add("c:bookshelf", "burnt:burnt_bookshelf");
  event.add("quark:revertable_chests", "burnt:burnt_chest");
});

ServerEvents.recipes((event) => {
  event.remove({ output: /warped/ });
  event.remove({ output: /crimson/ });
  event.remove({ output: /quark:hollow/ });
  event.remove({ output: /everycomp:q\/.*\/hollow/ });

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
      .except(/stripped/),
  );
  event.smoking(
    "burnt:stripped_burnt_log",
    Ingredient.of("#minecraft:logs_that_burn")
      .except(/wood/)
      .and(/stripped/),
  );
  event.smoking(
    "burnt:burnt_wood",
    Ingredient.of("#minecraft:logs_that_burn")
      .and(/wood/)
      .except(/stripped/),
  );
  event.smoking(
    "burnt:stripped_burnt_wood",
    Ingredient.of("#minecraft:logs_that_burn")
      .and(/wood/)
      .and(/stripped/),
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
});
