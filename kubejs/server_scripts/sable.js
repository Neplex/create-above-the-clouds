ServerEvents.tags("block", (event) => {
  event.add("sable:heavy", "overgeared:stone_anvil");

  event.add("sable:super_heavy", "overgeared:smithing_anvil");

  event.add("bits_n_bobs:heavy", "#sable:heavy");
  event.add("sable:heavy", "#bits_n_bobs:heavy");
});

RecipeViewerEvents.removeEntriesCompletely("item", (event) => {
  event.remove(/simulated:creative_/);
  event.remove(/aeronautics_uttility_objects:creative_/);
});
