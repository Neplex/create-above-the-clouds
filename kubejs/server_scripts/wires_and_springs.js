ServerEvents.recipes((event) => {
  // Remove the old recipes
  event.remove({ output: "createbigcannons:spring_wire" });

  // Wire cutting
  event.custom({
    type: "createdieselgenerators:wire_cutting",
    ingredients: [
      {
        tag: "c:plates/copper",
      },
    ],
    results: [
      {
        id: "powergrid:wire",
        count: 2,
      },
    ],
  });

  event.custom({
    type: "createdieselgenerators:wire_cutting",
    ingredients: [
      {
        tag: "c:plates/iron",
      },
    ],
    results: [
      {
        id: "powergrid:iron_wire",
        count: 2,
      },
    ],
  });

  event.custom({
    type: "createdieselgenerators:wire_cutting",
    ingredients: [
      {
        tag: "c:plates/gold",
      },
    ],
    results: [
      {
        id: "powergrid:golden_wire",
        count: 2,
      },
    ],
  });

  event.shaped("createbigcannons:spring_wire", [" W ", "W W", " W "], {
    W: "powergrid:iron_wire",
  });

  event.replaceInput(
    { output: "simulated:spring" },
    "minecraft:iron_nugget",
    "createbigcannons:spring_wire",
  );
});
