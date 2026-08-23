ServerEvents.recipes((event) => {
  event.remove({ output: "create_nomad:track_pack" });
  event.remove({ output: "create_nomad:constructinator" });
  event.remove({ output: "create_nomad:grappling_hook" });
  event.remove({ output: "create_nomad:chainsaw" });
  event.remove({ output: "create_nomad:jackhammer" });
  event.remove({ output: "create_nomad:harpoon_gun" });
  event.remove({ output: "create_nomad:harpoon_item" });
});

ServerEvents.recipes((event) => {
  event.replaceInput(
    { output: "create_nomad:magnet_upgrade" },
    "minecraft:iron_ingot",
    "powergrid:magnet",
  );
});

RecipeViewerEvents.removeEntriesCompletely("item", (event) => {
  event.remove("create_nomad:track_pack");
  event.remove("create_nomad:constructinator");
  event.remove("create_nomad:grappling_hook");
  event.remove("create_nomad:chainsaw");
  event.remove("create_nomad:jackhammer");
  event.remove("create_nomad:harpoon_gun");
  event.remove("create_nomad:harpoon_item");
});
