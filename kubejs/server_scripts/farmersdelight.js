ServerEvents.recipes((event) => {
  event.remove({ output: "farmersdelight:cooking_pot" });
  event.remove({ output: "farmersdelight:skillet" });

  event.custom({
    type: "overgeared:forging",
    category: "misc",
    hammering: 2,
    pattern: ["b b", "i i", "iii"],
    key: {
      i: {
        item: "overgeared:heated_iron_ingot",
      },
      b: {
        item: "minecraft:brick",
      },
    },
    result: {
      id: "farmersdelight:cooking_pot",
      count: 1,
    },
    show_notification: true,
  });

  event.custom({
    type: "overgeared:forging",
    category: "misc",
    hammering: 2,
    pattern: [" ii", " ii", "b  "],
    key: {
      i: {
        item: "overgeared:heated_iron_ingot",
      },
      b: {
        item: "minecraft:brick",
      },
    },
    result: {
      id: "farmersdelight:skillet",
      count: 1,
    },
    show_notification: true,
  });
});
