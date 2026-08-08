ServerEvents.tags("item", (event) => {
  event.add("c:rubber", ["minecraft:dried_kelp", "createpolymer:rubber"]);
});

ServerEvents.recipes((event) => {
  event.remove({
    input: "createpolymer:rubber",
    mod: "createpolymer",
  });

  event.replaceInput(
    {
      input: "minecraft:dried_kelp",
      not: [{ output: "#c:foods" }, { output: "minecraft:dried_kelp_block" }],
    },
    "minecraft:dried_kelp",
    "#c:rubber",
  );
});
