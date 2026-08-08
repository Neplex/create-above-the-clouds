ServerEvents.recipes((event) => {
  event.remove({ output: "get_creative:fluid_barrel" });
  event.remove({ output: "get_creative:fluid_barrel" });
  event.shaped("get_creative:fluid_barrel", ["P P", "P P", "PSP"], {
    P: "#minecraft:planks",
    S: "#minecraft:wooden_slabs",
  });

  event.remove({ output: "get_creative:empty_breeze_whirler" });
  event.remove({ output: "get_creative:breeze_whirler" });
  event.remove({ output: "get_creative:hinge_bearing" });

  event.remove({ output: "get_creative:oak_handle" });
  event.remove({ output: "get_creative:spruce_handle" });
  event.remove({ output: "get_creative:birch_handle" });
  event.remove({ output: "get_creative:jungle_handle" });
  event.remove({ output: "get_creative:acacia_handle" });
  event.remove({ output: "get_creative:dark_oak_handle" });
  event.remove({ output: "get_creative:mangrove_handle" });
  event.remove({ output: "get_creative:cherry_handle" });
  event.remove({ output: "get_creative:bamboo_handle" });
  event.remove({ output: "get_creative:crimson_handle" });
  event.remove({ output: "get_creative:warped_handle" });
  event.remove({ output: "get_creative:copper_handle" });
  event.remove({ output: "get_creative:exposed_copper_handle" });
  event.remove({ output: "get_creative:weathered_copper_handle" });
  event.remove({ output: "get_creative:oxidized_copper_handle" });
  event.remove({ output: "get_creative:iron_handle" });
  event.remove({ output: "get_creative:industrial_iron_handle" });
  event.remove({ output: "get_creative:brass_handle" });
});

// Hide items from recipe viewers
RecipeViewerEvents.removeEntriesCompletely("item", (event) => {
  event.remove("get_creative:empty_breeze_whirler");
  event.remove("get_creative:breeze_whirler");
  event.remove("get_creative:hinge_bearing");

  event.remove("get_creative:oak_handle");
  event.remove("get_creative:spruce_handle");
  event.remove("get_creative:birch_handle");
  event.remove("get_creative:jungle_handle");
  event.remove("get_creative:acacia_handle");
  event.remove("get_creative:dark_oak_handle");
  event.remove("get_creative:mangrove_handle");
  event.remove("get_creative:cherry_handle");
  event.remove("get_creative:bamboo_handle");
  event.remove("get_creative:crimson_handle");
  event.remove("get_creative:warped_handle");
  event.remove("get_creative:copper_handle");
  event.remove("get_creative:exposed_copper_handle");
  event.remove("get_creative:weathered_copper_handle");
  event.remove("get_creative:oxidized_copper_handle");
  event.remove("get_creative:iron_handle");
  event.remove("get_creative:industrial_iron_handle");
  event.remove("get_creative:brass_handle");
});
