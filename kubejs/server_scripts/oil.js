ServerEvents.tags("fluid", (event) => {
  event.add("c:kerosene", "petrochem:kerosene");
  event.add("c:fuel_oil", "petrochem:fuel_oil");
  event.add("c:heavy_gas_oil", "petrochem:heavy_gas_oil");

  event.remove("c:crude_oil", "petrochem:petroleum");
  event.remove("c:diesel", "createdieselgenerators:diesel");
});

ServerEvents.recipes((event) => {
  // Replace all inputs by tags
  event.replaceInput(
    { input: Fluid.of("petrochem:desalted_oil") },
    Fluid.of("petrochem:desalted_oil"),
    "#c:crude_oil",
  );

  // Replace Pterochem asphalt by diesel generator one
  event.replaceOutput(
    { output: "petrochem:asphalt" },
    "petrochem:asphalt",
    "createdieselgenerators:asphalt_block",
  );
  event.remove({ id: "createdieselgenerators:crafting/asphalt_block" });
  event.remove({ id: "createdieselgenerators:mixing/asphalt_block" });

  // Remove the old recipes
  event.remove({ output: "petrochem:turbine" });
  event.remove({ output: "petrochem:pumpjack_arm" });
  event.remove({ output: "petrochem:pumpjack_crank" });
  event.remove({ output: "petrochem:pumpjack_well" });
  event.remove({ output: "petrochem:small_engine" });
  event.remove({ output: "petrochem:medium_engine" });
  event.remove({ output: "petrochem:petroleum" });
  event.remove({ output: "petrochem:petroleum_bucket" });
  event.remove({ output: "petrochem:desalted_oil" });
  event.remove({ output: "petrochem:desalted_oil_bucket" });
  event.remove({ output: Fluid.of("petrochem:steam") });
  event.remove({ output: "createdieselgenerators:diesel" });
  event.remove({ output: "createdieselgenerators:diesel_bucket" });
  event.remove({ output: "createdieselgenerators:gasoline" });
  event.remove({ output: "createdieselgenerators:gasoline_bucket" });
  event.remove({ output: "createdieselgenerators:distillation_controller" });

  // Removes all distillation tower recipes added by Create: Diesel Generators
  event.remove({ type: "createdieselgenerators:distillation" });

  // Remove old pretoleum desalting recipe
  event.remove({ id: "petrochem:electrolyzing/basic_desalting" });

  // Basin Fermenting: Water -> Steam
  event.custom({
    type: "createdieselgenerators:basin_fermenting",
    ingredients: [
      {
        type: "fluid_stack",
        fluid: "minecraft:water",
        amount: 1000,
      },
    ],
    heat_requirement: "heated",
    processing_time: 200,
    results: [
      {
        id: "petrochem:steam",
        amount: 1000,
      },
    ],
  });

  // Bulk Fermenting: Water -> Steam
  event.custom({
    type: "createdieselgenerators:bulk_fermenting",
    ingredients: [
      {
        type: "fluid_stack",
        fluid: "minecraft:water",
        amount: 1000,
      },
    ],
    heat_requirement: "heated",
    processing_time: 200,
    results: [
      {
        id: "petrochem:steam",
        amount: 1000,
      },
    ],
  });

  // Plastic -> Rubber
  event.recipes.create
    .mixing("createpolymer:rubber", [
      Fluid.of("petrochem:plastic", 250),
      Fluid.of("petrochem:lubricant", 100),
      "cgs:sulfur",
    ])
    .heated();
});

// Hide items from recipe viewers
RecipeViewerEvents.removeEntriesCompletely("item", (event) => {
  event.remove("petrochem:turbine");
  event.remove("petrochem:pumpjack_arm");
  event.remove("petrochem:pumpjack_crank");
  event.remove("petrochem:pumpjack_well");
  event.remove("petrochem:small_engine");
  event.remove("petrochem:medium_engine");
  event.remove("petrochem:petroleum_bucket");
  event.remove("petrochem:desalted_oil_bucket");
  event.remove("petrochem:asphalt");
  event.remove("createdieselgenerators:diesel_bucket");
  event.remove("createdieselgenerators:gasoline_bucket");
  event.remove("createdieselgenerators:distillation_controller");
});

// Hide fluids from recipe viewers
RecipeViewerEvents.removeEntriesCompletely("fluid", (event) => {
  event.remove("petrochem:petroleum");
  event.remove("petrochem:desalted_oil");
  event.remove("createdieselgenerators:diesel");
  event.remove("createdieselgenerators:gasoline");
});
