ServerEvents.tags("fluid", (event) => {
  event.add("c:kerosene", "petrochem:kerosene");
  event.add("c:fuel_oil", "petrochem:fuel_oil");
  event.add("c:heavy_gas_oil", "petrochem:heavy_gas_oil");

  event.remove("c:crude_oil", "petrochem:petroleum");
  event.remove("c:diesel", "createdieselgenerators:diesel");

  event.add('create:bottomless/deny', 'createdieselgenerators:plant_oil');
  event.add('create:bottomless/deny', 'createdieselgenerators:crude_oil');
  event.add('create:bottomless/deny', 'createdieselgenerators:biodiesel');
  event.add('create:bottomless/deny', 'createdieselgenerators:ethanol');
  event.add('create:bottomless/deny', 'createdieselgenerators:white_cement');
  event.add('create:bottomless/deny', 'createdieselgenerators:orange_cement');
  event.add('create:bottomless/deny', 'createdieselgenerators:magenta_cement');
  event.add('create:bottomless/deny', 'createdieselgenerators:light_blue_cement');
  event.add('create:bottomless/deny', 'createdieselgenerators:yellow_cement');
  event.add('create:bottomless/deny', 'createdieselgenerators:lime_cement');
  event.add('create:bottomless/deny', 'createdieselgenerators:pink_cement');
  event.add('create:bottomless/deny', 'createdieselgenerators:gray_cement');
  event.add('create:bottomless/deny', 'createdieselgenerators:light_gray_cement');
  event.add('create:bottomless/deny', 'createdieselgenerators:cyan_cement');
  event.add('create:bottomless/deny', 'createdieselgenerators:purple_cement');
  event.add('create:bottomless/deny', 'createdieselgenerators:blue_cement');
  event.add('create:bottomless/deny', 'createdieselgenerators:brown_cement');
  event.add('create:bottomless/deny', 'createdieselgenerators:green_cement');
  event.add('create:bottomless/deny', 'createdieselgenerators:red_cement');
  event.add('create:bottomless/deny', 'createdieselgenerators:black_cement');
  event.add('create:bottomless/deny', 'petrochem:oil');
  event.add('create:bottomless/deny', 'petrochem:lpg');
  event.add('create:bottomless/deny', 'petrochem:light_naphtha');
  event.add('create:bottomless/deny', 'petrochem:heavy_naphtha');
  event.add('create:bottomless/deny', 'petrochem:kerosene');
  event.add('create:bottomless/deny', 'petrochem:diesel');
  event.add('create:bottomless/deny', 'petrochem:gasoline');
  event.add('create:bottomless/deny', 'petrochem:oil_residue');
  event.add('create:bottomless/deny', 'petrochem:fuel_oil');
  event.add('create:bottomless/deny', 'petrochem:heavy_gas_oil');
  event.add('create:bottomless/deny', 'petrochem:heavy_oil_residue');
  event.add('create:bottomless/deny', 'petrochem:plastic');
  event.add('create:bottomless/deny', 'petrochem:lubricant');
  event.add('create:bottomless/deny', 'createbigcannons:molten_nethersteel');
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
  event.remove({ output: Fluid.of("petrochem:petroleum") });
  event.remove({ output: "petrochem:petroleum_bucket" });
  event.remove({ output: Fluid.of("petrochem:desalted_oil") });
  event.remove({ output: "petrochem:desalted_oil_bucket" });
  event.remove({ output: Fluid.of("petrochem:steam") });
  event.remove({ output: Fluid.of("createdieselgenerators:diesel") });
  event.remove({ output: "createdieselgenerators:diesel_bucket" });
  event.remove({ output: Fluid.of("createdieselgenerators:gasoline") });
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
  
  // Remove fuilds
  event.remove({output: Fluid.of('petrochem:sulfuric_acid')})
  event.remove({output: 'petrochem:sulfuric_acid_bucket'})
  event.remove({input: 'petrochem:sulfuric_acid_bucket'})
  event.remove({output: Fluid.of('petrochem:nitrogen')})
  event.remove({output: 'petrochem:nitrogen_bucket'})
  event.remove({input: 'petrochem:nitrogen_bucket'})
  event.remove({output: Fluid.of('petrochem:oxygen')})
  event.remove({output: 'petrochem:oxygen_bucket'})
  event.remove({input: 'petrochem:oxygen_bucket'})
  event.remove({output: Fluid.of('petrochem:hydrogen')})
  event.remove({output: 'petrochem:hydrogen_bucket'})
  event.remove({input: 'petrochem:hydrogen_bucket'})
  event.remove({output: Fluid.of('petrochem:chlorine')})
  event.remove({output: 'petrochem:chlorine_bucket'})
  event.remove({input: 'petrochem:chlorine_bucket'})
  event.remove({output: Fluid.of('petrochem:hydrogen_sulfide')})
  event.remove({output: 'petrochem:hydrogen_sulfide_bucket'})
  event.remove({input: 'petrochem:hydrogen_sulfide_bucket'})
  event.remove({output: Fluid.of('petrochem:volatile_gas')})
  event.remove({output: 'petrochem:volatile_gas_bucket'})
  event.remove({input: 'petrochem:volatile_gas_bucket'})
  event.remove({output: Fluid.of('petrochem:butane')})
  event.remove({output: 'petrochem:butane_bucket'})
  event.remove({input: 'petrochem:butane_bucket'})
  event.remove({output: Fluid.of('petrochem:propane')})
  event.remove({output: 'petrochem:propane_bucket'})
  event.remove({input: 'petrochem:propane_bucket'})
  event.remove({output: Fluid.of('petrochem:ethylene')})
  event.remove({output: 'petrochem:ethylene_bucket'})
  event.remove({input: 'petrochem:ethylene_bucket'})
  event.remove({output: Fluid.of('petrochem:oil_brine')})
  event.remove({output: 'petrochem:oil_brine_bucket'})
  event.remove({input: 'petrochem:oil_brine_bucket'})
  event.remove({output: Fluid.of('petrochem:desulfurized_heavy_naphta')})
  event.remove({output: 'petrochem:desulfurized_heavy_naphta_bucket'})
  event.remove({input: 'petrochem:desulfurized_heavy_naphta_bucket'})
  event.remove({output: Fluid.of('petrochem:hydrocracked_gasoline')})
  event.remove({output: 'petrochem:hydrocracked_gasoline_bucket'})
  event.remove({input: 'petrochem:hydrocracked_gasoline_bucket'})
  event.remove({output: Fluid.of('petrochem:untreated_gasoline')})
  event.remove({output: 'petrochem:untreated_gasoline_bucket'})
  event.remove({input: 'petrochem:untreated_gasoline_bucket'})
  event.remove({output: Fluid.of('petrochem:desulfurized_kerosene')})
  event.remove({output: 'petrochem:desulfurized_kerosene_bucket'})
  event.remove({input: 'petrochem:desulfurized_kerosene_bucket'})
  event.remove({output: Fluid.of('petrochem:light_diesel')})
  event.remove({output: 'petrochem:light_diesel_bucket'})
  event.remove({input: 'petrochem:light_diesel_bucket'})
  event.remove({output: Fluid.of('petrochem:heavy_diesel')})
  event.remove({output: 'petrochem:heavy_diesel_bucket'})
  event.remove({input: 'petrochem:heavy_diesel_bucket'})
  event.remove({output: Fluid.of('petrochem:light_gas_oil')})
  event.remove({output: 'petrochem:light_gas_oil_bucket'})
  event.remove({input: 'petrochem:light_gas_oil_bucket'})
  event.remove({output: Fluid.of('petrochem:hydrotreated_gas_oil')})
  event.remove({output: 'petrochem:hydrotreated_gas_oil_bucket'})
  event.remove({input: 'petrochem:hydrotreated_gas_oil_bucket'})
  event.remove({output: Fluid.of('petrochem:desulfurized_heavy_diesel')})
  event.remove({output: 'petrochem:desulfurized_heavy_diesel_bucket'})
  event.remove({input: 'petrochem:desulfurized_heavy_diesel_bucket'})
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

  event.remove("petrochem:sulfuric_acid_bucket");
  event.remove("petrochem:nitrogen_bucket");
  event.remove("petrochem:oxygen_bucket");
  event.remove("petrochem:hydrogen_bucket");
  event.remove("petrochem:chlorine_bucket");
  event.remove("petrochem:hydrogen_sulfide_bucket");
  event.remove("petrochem:volatile_gas_bucket");
  event.remove("petrochem:butane_bucket");
  event.remove("petrochem:propane_bucket");
  event.remove("petrochem:ethylene_bucket");
  event.remove("petrochem:oil_brine_bucket");
  event.remove("petrochem:desulfurized_heavy_naphta_bucket");
  event.remove("petrochem:hydrocracked_gasoline_bucket");
  event.remove("petrochem:untreated_gasoline_bucket");
  event.remove("petrochem:desulfurized_kerosene_bucket");
  event.remove("petrochem:light_diesel_bucket");
  event.remove("petrochem:heavy_diesel_bucket");
  event.remove("petrochem:light_gas_oil_bucket");
  event.remove("petrochem:hydrotreated_gas_oil_bucket");
  event.remove("petrochem:desulfurized_heavy_diesel_bucket");
});

// Hide fluids from recipe viewers
RecipeViewerEvents.removeEntriesCompletely("fluid", (event) => {
  event.remove("petrochem:petroleum");
  event.remove("petrochem:desalted_oil");
  event.remove("createdieselgenerators:diesel");
  event.remove("createdieselgenerators:gasoline");

  event.remove("petrochem:sulfuric_acid");
  event.remove("petrochem:nitrogen");
  event.remove("petrochem:oxygen");
  event.remove("petrochem:hydrogen");
  event.remove("petrochem:chlorine");
  event.remove("petrochem:hydrogen_sulfide");
  event.remove("petrochem:volatile_gas");
  event.remove("petrochem:butane");
  event.remove("petrochem:propane");
  event.remove("petrochem:ethylene");
  event.remove("petrochem:oil_brine");
  event.remove("petrochem:desulfurized_heavy_naphta");
  event.remove("petrochem:hydrocracked_gasoline");
  event.remove("petrochem:untreated_gasoline");
  event.remove("petrochem:desulfurized_kerosene");
  event.remove("petrochem:light_diesel");
  event.remove("petrochem:heavy_diesel");
  event.remove("petrochem:light_gas_oil");
  event.remove("petrochem:hydrotreated_gas_oil");
  event.remove("petrochem:desulfurized_heavy_diesel");
});
