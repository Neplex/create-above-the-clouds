RecipeViewerEvents.removeEntriesCompletely("item", (event) => {
  event.remove("powergrid:debug");
  event.remove(/powergrid:creative_/);
});
