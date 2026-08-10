ServerEvents.tags("block", (event) => {
  event.add("createbigcannons:drill_can_pass_through", /quark:hollow/);
});

ServerEvents.recipes((event) => {
  event.remove({ output: /warped/ });
  event.remove({ output: /crimson/ });
  event.remove({ output: /quark:hollow/ });

  event.recipes.create.crushing(
    [
      "10x createdieselgenerators:wood_chip",
      CreateItem.of("2x createdieselgenerators:wood_chip", 0.5),
    ],
    Ingredient.of("#quark:hollow_logs"),
  );
});

RecipeViewerEvents.removeEntriesCompletely("item", (event) => {
  event.remove(/warped/);
  event.remove(/crimson/);
});
