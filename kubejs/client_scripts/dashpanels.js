const panelItems = [
  "dashpanels:control_panel",
  "dashpanels:wall_control_panel",
  "dashpanels:ceiling_control_panel",
  "dashpanels:cable",
  "dashpanels:panel_link",
  "dashpanels:cable_stripper",
];

Ponder.tags((event) => {
  event.createTag(
    "kubejs:dashpanels",
    "dashpanels:control_panel",
    "Control panel",
    "Simplify the management of large factories with a control panel",
    panelItems,
  );
});

Ponder.registry((event) => {
  event
    .create(panelItems)
    .tag("kubejs:dashpanels")
    .scene("control_panel", "Control panel", (scene, util) => {
      scene.showBasePlate();
      scene.world.showSection([1, 1, 1, 3, 2, 3], Facing.DOWN);

      // 1. Control Panel
      scene.world.setBlock(
        [3, 1, 1],
        "dashpanels:control_panel[facing=north]",
        true,
      );
      scene.idle(10);
      scene
        .text(
          30,
          "The Control Panel is the heart of your system.",
          util.vector.topOf(3, 1, 1),
        )
        .placeNearTarget();
      scene.idle(40);

      scene.addKeyframe();

      // 2. Modules
      scene
        .text(
          60,
          "You can add multiple modules on the panel like buttons or lights.",
          util.vector.topOf(3, 1, 1),
        )
        .placeNearTarget();
      scene
        .showControls(20, util.vector.topOf(3, 1, 1), "down")
        .rightClick()
        .withItem("dashpanels:push_button");
      scene.idle(30);
      scene
        .showControls(20, util.vector.topOf(3, 1, 1), "down")
        .rightClick()
        .withItem("dashpanels:indicator_bulb");
      scene.idle(40);

      scene.addKeyframe();

      // 3. Cables
      scene.world.setBlock(
        [3, 1, 2],
        "dashpanels:cable[east=false,west=false,up=false]",
        true,
      );
      scene.idle(5);
      scene.world.setBlock(
        [3, 1, 3],
        "dashpanels:cable[south=false,east=false,up=false]",
        true,
      );
      scene.idle(5);
      scene.world.setBlock(
        [2, 1, 3],
        "dashpanels:cable[north=false,south=false,up=false]",
        true,
      );
      scene.idle(5);
      scene
        .text(
          30,
          "Connect wires to route signals.",
          util.vector.centerOf(2, 1, 3),
        )
        .placeNearTarget();
      scene.idle(40);

      scene.addKeyframe();

      // 4. Cable Stripper
      scene.idle(10);
      scene
        .showControls(30, util.vector.topOf(2, 1, 3), "down")
        .rightClick()
        .withItem("dashpanels:cable_stripper");
      scene.world.setBlock(
        [2, 1, 3],
        "dashpanels:stripped_cable[facing=west]",
        false,
      );
      scene
        .text(
          30,
          "Strip the wire using the Cable Stripper to get a redstone signal.",
          util.vector.centerOf(2, 1, 3),
        )
        .placeNearTarget();
      scene.idle(40);
      scene
        .showControls(30, util.vector.topOf(2, 1, 3), "down")
        .rightClick()
        .withItem("dashpanels:cable_stripper");
      scene
        .text(
          30,
          "Use the cable stripper on the end of the cable to select the module to connect.",
          util.vector.centerOf(2, 1, 3),
        )
        .placeNearTarget();
      scene.idle(40);

      scene.addKeyframe();

      // 5. Redstone Powering Lamp
      scene.world.setBlock([1, 1, 3], "minecraft:redstone_lamp", true);
      scene
        .text(
          60,
          "The wire can power connected targets.",
          util.vector.topOf(1, 1, 3),
        )
        .placeNearTarget();
      scene.idle(20);
      scene.showControls(40, util.vector.topOf(3, 1, 1), "down").rightClick();
      scene.world.setBlock(
        [1, 1, 3],
        "minecraft:redstone_lamp[lit=true]",
        false,
      );
      scene.idle(50);

      scene.addKeyframe();

      // 6. Panel Link & Wireless Redstone Link
      scene.world.setBlock([2, 1, 3], "minecraft:air", false);
      scene.world.setBlock([3, 1, 3], "dashpanels:panel_link", false);
      scene.world.setBlock(
        [1, 1, 3],
        "minecraft:redstone_lamp[lit=false]",
        false,
      );
      scene.idle(20);
      scene.world.setBlock(
        [1, 2, 3],
        "create:redstone_link[facing=up,receiver=true]",
        true,
      );
      scene.idle(10);
      scene
        .text(
          40,
          "You can use a Panel Link for long-distance signals with redstone links.",
          util.vector.topOf(3, 1, 3),
        )
        .placeNearTarget();
      scene.idle(10);
      scene.showControls(20, util.vector.topOf(3, 1, 1), "down").rightClick();
      scene.world.setBlock(
        [1, 1, 3],
        "minecraft:redstone_lamp[lit=true]",
        false,
      );
      scene.idle(30);
    });
});
