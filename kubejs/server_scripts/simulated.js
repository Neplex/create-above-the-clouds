ServerEvents.recipes((event) => {
  event.remove({ output: "simulated:redstone_magnet" });

  event.shaped("simulated:redstone_magnet", [" A ", "BCB", " D "], {
    A: "#c:plates/copper",
    B: "powergrid:magnet",
    C: "powergrid:conductive_casing",
    D: "minecraft:redstone",
  });
});
