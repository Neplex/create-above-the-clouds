ServerEvents.recipes((event) => {
  event.remove({ output: "quark:gold_bars" });
});

RecipeViewerEvents.removeEntriesCompletely("item", (event) => {
  event.remove("quark:gold_bars");
});
