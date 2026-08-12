ServerEvents.tags('item', event => {
    event.add('curios:belt', 'dashpanels:key')
    event.add('trinkets:legs/key', 'dashpanels:key')
    event.add('supplementaries:keys', 'dashpanels:key')
})

ServerEvents.recipes((event) => {
  event.remove({ output: "dashpanels:wrench" });
  event.remove({ output: "dashpanels:key" });

  event.shaped("dashpanels:key", ["A", "B", "B"], {
    A: "minecraft:iron_ingot",
    B: "iron_nugget",
  });
});

RecipeViewerEvents.removeEntriesCompletely("item", (event) => {
  event.remove("dashpanels:wrench");
});
