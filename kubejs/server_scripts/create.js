ServerEvents.recipes((event) => {
  event.replaceInput(
    { output: "create:elevator_pulley" },
    "minecraft:dried_kelp_block",
    "create:belt_connector",
  );
  event.replaceInput(
    { output: "create:hose_pulley" },
    "minecraft:dried_kelp_block",
    "create:belt_connector",
  );
});

RecipeViewerEvents.removeEntriesCompletely("item", (event) => {
  event.remove(/create:creative_/);
  event.remove("create:handheld_worldshaper");
  event.remove("createlazytick:clock");
});
