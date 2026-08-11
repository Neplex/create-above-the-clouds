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

const MIN_Y = -32;
const MAX_Y = 320;
const GAP_Y = 20

ServerEvents.tick((event) => {
  const server = event.server;
  const container = SubLevelContainer.getContainer(
    event.server.getLevel("minecraft:overworld"),
  );

  for (const subLevel of container.getAllSubLevels()) {
    if (subLevel.isRemoved()) continue;

    const uuid = subLevel.getUniqueId().toString();
    const pos = subLevel.logicalPose().position();

    if (pos.y < MIN_Y) {
      server.runCommandSilent(
        `execute in minecraft:overworld positioned ${pos.x} ${pos.y} ${pos.z} run sable dimension_set @n[limit=1,distance=..2] minecraft:the_nether ${pos.x} ${MAX_Y - GAP_Y} ${pos.z}`,
      );
    }
  }
});

ServerEvents.tick((event) => {
  const server = event.server;
  const container = SubLevelContainer.getContainer(
    event.server.getLevel("minecraft:the_nether"),
  );
  for (const subLevel of container.getAllSubLevels()) {
    if (subLevel.isRemoved()) continue;

    const uuid = subLevel.getUniqueId().toString();
    const pos = subLevel.logicalPose().position();

    if (pos.y > MAX_Y) {
      server.runCommandSilent(
        `execute in minecraft:the_nether positioned ${pos.x} ${pos.y} ${pos.z} run sable dimension_set @n[limit=1,distance=..2] minecraft:overworld ${pos.x} ${MIN_Y + GAP_Y} ${pos.z}`,
      );
    }
  }
});
