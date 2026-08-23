ItemEvents.modifyTooltips((event) => {
  event.add(
    "createdieselgenerators:wire_cutters",
    { shift: true },
    [
      Text.translatable("kubejs.tooltip.some_item.condition2").gray(),
      Text.translatable("kubejs.tooltip.some_item.behaviour2").gold(),
    ]
  );
});

ClientEvents.lang("en_us", (event) => {
  event.add(
    "item.createdieselgenerators.wire_cutters.tooltip.condition2",
    "When R-Clicked on a wire",
  );
  event.add(
    "item.createdieselgenerators.wire_cutters.tooltip.behaviour2",
    "Removes the wire.",
  );
});

ClientEvents.lang("fr_fr", (event) => {
  event.add(
    "item.createdieselgenerators.wire_cutters.tooltip.condition2",
    "Lors d'un clique droit sur un cable",
  );
  event.add(
    "item.createdieselgenerators.wire_cutters.tooltip.behaviour2",
    "Enleve le cable.",
  );
});
