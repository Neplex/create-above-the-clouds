ServerEvents.tags("item", (event) => {
  event.add("powergrid:wire_cutters", "createdieselgenerators:wire_cutters");
});

ServerEvents.recipes((event) => {
  event.remove({ output: "powergrid:wire_cutter" });
});

RecipeViewerEvents.removeEntriesCompletely("item", (event) => {
  event.remove("powergrid:debug");
  event.remove(/powergrid:creative_/);
  event.remove("powergrid:wire_cutter");
});
