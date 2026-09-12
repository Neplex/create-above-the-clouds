ServerEvents.recipes((event) => {
  event.remove({ output: "craftingstation:crafting_station" });
  event.replaceOutput(
    { output: "minecraft:crafting_table" },
    "minecraft:crafting_table",
    "craftingstation:crafting_station",
  );
  event.replaceInput(
    { input: "minecraft:crafting_table" },
    "minecraft:crafting_table",
    "craftingstation:crafting_station",
  );
});
