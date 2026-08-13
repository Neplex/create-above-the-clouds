ServerEvents.tags("block", (event) => {
  event.add("createbigcannons:drill_can_pass_through", /quark:hollow/);
});

ServerEvents.recipes((event) => {
  event.remove({ output: /warped/ });
  event.remove({ output: /crimson/ });
  event.remove({ output: /quark:hollow/ });
  event.remove({ output: /everycomp:q\/.*\/hollow/ });

  event.recipes.create.crushing(
    [
      "10x createdieselgenerators:wood_chip",
      CreateItem.of("2x createdieselgenerators:wood_chip", 0.5),
    ],
    Ingredient.of("#quark:hollow_logs").except('everycomp:q/burnt/hollow_burnt_log'),
  );

  event.recipes.create.crushing(
    [
      "5x burnt:soot",
      CreateItem.of("2x supplementaries:ash", 0.5),
    ],
    Ingredient.of("#burnt:wood_type/burnt"),
  );
});

RecipeViewerEvents.removeEntriesCompletely("item", (event) => {
  event.remove(/warped/);
  event.remove(/crimson/);
});
