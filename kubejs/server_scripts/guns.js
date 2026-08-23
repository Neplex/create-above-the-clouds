ServerEvents.tags("item", (event) => {
  event.add("cgs:nails", "cgs:nail");
  event.add("cgs:nails", "cgs:nail_steel");
});

RecipeViewerEvents.removeEntriesCompletely("item", (event) => {
  event.remove("@ntgl");
  event.remove(/createbigcannons:creative_/);
});
