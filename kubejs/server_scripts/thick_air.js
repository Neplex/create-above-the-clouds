ServerEvents.recipes((event) => {
  event.remove({mod: "thick_air"})
});

RecipeViewerEvents.removeEntriesCompletely("item", (event) => {
  event.remove(/thick_air/);
});
