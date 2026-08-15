ServerEvents.tags("item", (event) => {
  event.add("overgeared:heated_metals", "burnt_additions:liquid_magma_bucket");
});

ServerEvents.tags("fluid", (event) => {
  event.add("create:bottomless/deny", "burnt_additions:liquid_magma");
});

ServerEvents.recipes((event) => {
  event.replaceInput(
    { input: "burnt_additions:sulphur" },
    "burnt_additions:sulphur",
    Ingredient.of("#c:dusts/sulfur"),
  );

  event.remove({ output: "burnt_additions:gas_mask" });
  event.remove({ output: "burnt_additions:sulphur" });
});

RecipeViewerEvents.removeEntriesCompletely("item", (event) => {
  event.remove("burnt_additions:gas_mask");
  event.remove("burnt_additions:sulphur");
});
