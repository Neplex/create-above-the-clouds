ServerEvents.tags('item', event => {
    event.add('c:nuggets', 'createbigcannons:steel_scrap')
    event.add('c:ingots', 'createbigcannons:steel_ingot')
    event.add('c:storage_blocks', 'createbigcannons:steel_block')
    event.add('c:storage_blocks', 'createbigcannons:steel_block')
    event.add('sable:super_heavy', 'createbigcannons:steel_block')
    event.add('bits_n_bobs:super_heavy', 'createbigcannons:steel_block')

    event.remove('c:plates', 'create:iron_sheet')
    event.remove('c:plates/iron', 'create:iron_sheet')
    event.remove('c:plates', 'create:copper_sheet')
    event.remove('c:plates/copper', 'create:copper_sheet')

    event.remove('c:nuggets', 'createbigcannons:steel_scrap')
    event.remove('c:nuggets/steel', 'createbigcannons:steel_scrap')
    event.remove('c:ingots', 'createbigcannons:steel_ingot')
    event.remove('c:ingots/steel', 'createbigcannons:steel_ingot')

    event.remove('c:nuggets', 'cgs:steel_nugget')
    event.remove('c:nuggets/steel', 'cgs:steel_nugget')
    event.remove('c:ingots', 'cgs:steel_ingot')
    event.remove('c:ingots/steel', 'cgs:steel_ingot')
    event.remove('c:storage_blocks', 'cgs:steel_block')
    event.remove('c:storage_blocks/steel', 'cgs:steel_block')
    event.remove('c:plates', 'cgs:steel_sheet')
    event.remove('c:plates/steel', 'cgs:steel_sheet')

    event.remove('c:ingots', 'petrochem:steel_ingot')
    event.remove('c:ingots/steel', 'petrochem:steel_ingot')
    event.remove('c:storage_blocks', 'petrochem:steel_block')
    event.remove('c:storage_blocks/steel', 'petrochem:steel_block')
    event.remove('c:plates', 'petrochem:steel_sheet')
    event.remove('c:plates/steel', 'petrochem:steel_sheet')
    event.remove('c:ingots', 'petrochem:bronze_ingot')
    event.remove('c:ingots/bronze', 'petrochem:bronze_ingot')
    event.remove('c:nuggets', 'petrochem:tin_nugget')
    event.remove('c:nuggets/tin', 'petrochem:tin_nugget')

    event.remove('c:ingots', 'createmetallurgy:steel_ingot')
    event.remove('c:ingots/steel', 'createmetallurgy:steel_ingot')
    event.remove('c:storage_blocks', 'createmetallurgy:steel_block')
    event.remove('c:storage_blocks/steel', 'createmetallurgy:steel_block')

    event.remove('c:storage_blocks', 'overgeared:steel_block')
    event.remove('c:storage_blocks/steel', 'overgeared:steel_block')
    event.remove('c:nuggets', 'overgeared:copper_nugget')
    event.remove('c:nuggets/copper', 'overgeared:copper_nugget')

    event.remove('c:plates', 'powergrid:zinc_sheet')
    event.remove('c:plates/zinc', 'powergrid:zinc_sheet')

    // Heated ingots
    event.remove('overgeared:heated_metals', 'overgeared:heated_crude_steel')
    event.remove('overgeared:heated_metals', 'overgeared:heated_netherite_alloy')
    event.remove('overgeared:heated_metals', 'overgeared:heated_silver_ingot')

    // Molten metals
    event.add('c:fluids/molten_bronze', 'createbigcannons:molten_bronze')
    event.add('c:fluids/molten_steel', 'createbigcannons:molten_steel')
    event.add('c:fluids/molten_cast_iron', 'createbigcannons:molten_cast_iron')
    event.add('c:fluids/molten_nethersteel', 'createbigcannons:molten_nethersteel')

    event.add('c:fluids/molten_iron', 'createmetallurgy:molten_iron')
    event.add('c:fluids/molten_copper', 'createmetallurgy:molten_copper')
    event.add('c:fluids/molten_bronze', 'createmetallurgy:molten_bronze')
    event.add('c:fluids/molten_steel', 'createmetallurgy:molten_steel')
    event.add('c:fluids/molten_gold', 'createbigcannons:molten_gold')
    event.add('c:fluids/molten_zinc', 'createmetallurgy:molten_zinc')
})

ServerEvents.recipes(event => {
    // Replace all inputs by tags
    event.replaceInput({input: 'create:iron_sheet'}, 'create:iron_sheet', Ingredient.of('#c:plates/iron'))
    event.replaceInput({input: 'overgeared:iron_plate'}, 'overgeared:iron_plate', Ingredient.of('#c:plates/iron'))

    event.replaceInput({input: 'create:copper_sheet'}, 'create:copper_sheet', Ingredient.of('#c:plates/copper'))
    event.replaceInput({input: 'overgeared:copper_plate'}, 'overgeared:copper_plate', Ingredient.of('#c:plates/copper'))
  
    event.replaceInput({input: 'createbigcannons:steel_scrap'}, 'createbigcannons:steel_scrap', Ingredient.of('#c:nuggets/steel'))
    event.replaceInput({input: 'createbigcannons:steel_ingot'}, 'createbigcannons:steel_ingot', Ingredient.of('#c:ingots/steel'))
    event.replaceInput({input: 'createbigcannons:steel_block'}, 'createbigcannons:steel_block', Ingredient.of('#c:storage_blocks/steel'))
    event.replaceInput({input: 'cgs:steel_nugget'}, 'cgs:steel_nugget', Ingredient.of('#c:nuggets/steel'))
    event.replaceInput({input: 'cgs:steel_ingot'}, 'cgs:steel_ingot', Ingredient.of('#c:ingots/steel'))
    event.replaceInput({input: 'cgs:steel_sheet'}, 'cgs:steel_sheet', Ingredient.of('#c:plates/steel'))
    event.replaceInput({input: 'cgs:steel_block'}, 'cgs:steel_block', Ingredient.of('#c:storage_blocks/steel'))
    event.replaceInput({input: 'petrochem:steel_ingot'}, 'petrochem:steel_ingot', Ingredient.of('#c:ingots/steel'))
    event.replaceInput({input: 'petrochem:steel_sheet'}, 'petrochem:steel_sheet', Ingredient.of('#c:plates/steel'))
    event.replaceInput({input: 'petrochem:steel_block'}, 'petrochem:steel_block', Ingredient.of('#c:storage_blocks/steel'))
    event.replaceInput({input: 'createmetallurgy:steel_ingot'}, 'createmetallurgy:steel_ingot', Ingredient.of('#c:ingots/steel'))
    event.replaceInput({input: 'createmetallurgy:steel_block'}, 'createmetallurgy:steel_block', Ingredient.of('#c:storage_blocks/steel'))
    event.replaceInput({input: 'overgeared:steel_nugget'}, 'overgeared:steel_nugget', Ingredient.of('#c:nuggets/steel'))
    event.replaceInput({input: 'overgeared:steel_ingot'}, 'overgeared:steel_ingot', Ingredient.of('#c:ingots/steel'))
    event.replaceInput({input: 'overgeared:steel_block'}, 'overgeared:steel_block', Ingredient.of('#c:storage_blocks/steel'))
    event.replaceInput({input: 'overgeared:steel_plate'}, 'overgeared:steel_plate', Ingredient.of('#c:plates/steel'))

    event.replaceInput({input: 'createbigcannons:bronze_ingot'}, 'createbigcannons:bronze_ingot', Ingredient.of('#c:ingots/bronze'))
    event.replaceInput({input: 'petrochem:bronze_ingot'}, 'petrochem:bronze_ingot', Ingredient.of('#c:ingots/bronze'))
    
    event.replaceInput({input: 'createmetallurgy:tungsten_wire_spool'}, 'createmetallurgy:tungsten_wire_spool', 'powergrid:iron_wire')

    // Replace all fluid inputs by tags
    event.replaceInput({input: Fluid.of('createbigcannons:molten_bronze')}, Fluid.of('createbigcannons:molten_bronze'), '#c:fluids/molten_bronze')
    event.replaceInput({input: Fluid.of('createbigcannons:molten_steel')}, Fluid.of('createbigcannons:molten_steel'), '#c:fluids/molten_steel')
    event.replaceInput({input: Fluid.of('createbigcannons:molten_cast_iron')}, Fluid.of('createbigcannons:molten_cast_iron'), '#c:fluids/molten_cast_iron')
    event.replaceInput({input: Fluid.of('createbigcannons:molten_nethersteel')}, Fluid.of('createbigcannons:molten_nethersteel'), '#c:fluids/molten_nethersteel')

    // Replace outputs
    event.replaceOutput(
      { output: "create:iron_sheet"},
      "create:iron_sheet",
      "overgeared:iron_plate",
    );
    event.replaceOutput(
      { output: "create:copper_sheet"},
      "create:copper_sheet",
      "overgeared:copper_plate",
    );
    event.replaceOutput(
      { output: "petrochem:steel_sheet"},
      "petrochem:steel_sheet",
      "overgeared:steel_plate",
    );
    event.replaceOutput(
      {
        type: "createmetallurgy:casting_in_table",
        output: "createmetallurgy:steel_ingot",
      },
      "createmetallurgy:steel_ingot",
      "overgeared:steel_ingot",
    );
    event.replaceOutput(
      {
        type: "createmetallurgy:casting_in_basin",
        output: "createmetallurgy:steel_block",
      },
      "createmetallurgy:steel_block",
      "createbigcannons:steel_block",
    );

    // Remove the old recipes
    event.remove({output: 'create:copper_sheet'})
    event.remove({output: 'createbigcannons:steel_scrap'})
    event.remove({output: 'createbigcannons:steel_ingot'})
    event.remove({output: 'createbigcannons:steel_plate'})
    event.remove({output: 'cgs:steel_nugget'})
    event.remove({output: 'cgs:steel_ingot'})
    event.remove({output: 'cgs:steel_block'})
    event.remove({output: 'cgs:steel_sheet'})
    event.remove({output: 'petrochem:steel_ingot'})
    event.remove({output: 'petrochem:steel_block'})
    event.remove({output: 'createmetallurgy:steel_ingot'})
    event.remove({output: 'createmetallurgy:steel_block'})
    event.remove({output: 'petrochem:bronze_ingot'})
    event.remove({output: 'petrochem:tin_nugget'})
    event.remove({output: 'overgeared:copper_nugget'})
    event.remove({output: 'powergrid:zinc_sheet'})

    // Remove materials
    event.remove({output: 'overgeared:heated_silver_ingot'})
    event.remove({input: 'overgeared:heated_silver_ingot'})
    event.remove({output: 'createmetallurgy:tungsten_wire'})
    event.remove({input: 'createmetallurgy:tungsten_wire'})

    //  Remove old fluid recipes
    event.remove({output: Fluid.of('createbigcannons:molten_bronze')})
    event.remove({output: Fluid.of('createbigcannons:molten_steel')})
    event.remove({output: Fluid.of('createmetallurgy:molten_tin')})
    event.remove({output: Fluid.of('createmetallurgy:molten_nickel')})
    event.remove({output: Fluid.of('createmetallurgy:molten_silver')})
    event.remove({output: Fluid.of('createmetallurgy:molten_aluminum')})
    event.remove({output: Fluid.of('createmetallurgy:molten_osmium')})
    event.remove({output: Fluid.of('createmetallurgy:molten_lithium')})
    event.remove({output: Fluid.of('createmetallurgy:molten_invar')})
    event.remove({output: Fluid.of('createmetallurgy:molten_constantan')})
    event.remove({output: Fluid.of('createmetallurgy:molten_electrum')})
    event.remove({output: Fluid.of('createmetallurgy:molten_necromium')})

    // Remove buckets
    event.remove({output: 'createbigcannons:molten_bronze_bucket'})
    event.remove({input: 'createbigcannons:molten_bronze_bucket'})
    event.remove({output: 'createbigcannons:molten_steel_bucket'})
    event.remove({input: 'createbigcannons:molten_steel_bucket'})
    event.remove({output: 'createmetallurgy:molten_tin_bucket'})
    event.remove({input: 'createmetallurgy:molten_tin_bucket'})
    event.remove({output: 'createmetallurgy:molten_nickel_bucket'})
    event.remove({input: 'createmetallurgy:molten_nickel_bucket'})
    event.remove({output: 'createmetallurgy:molten_silver_bucket'})
    event.remove({input: 'createmetallurgy:molten_silver_bucket'})
    event.remove({output: 'createmetallurgy:molten_aluminum_bucket'})
    event.remove({input: 'createmetallurgy:molten_aluminum_bucket'})
    event.remove({output: 'createmetallurgy:molten_osmium_bucket'})
    event.remove({input: 'createmetallurgy:molten_osmium_bucket'})
    event.remove({output: 'createmetallurgy:molten_lithium_bucket'})
    event.remove({input: 'createmetallurgy:molten_lithium_bucket'})
    event.remove({output: 'createmetallurgy:molten_invar_bucket'})
    event.remove({input: 'createmetallurgy:molten_invar_bucket'})
    event.remove({output: 'createmetallurgy:molten_constantan_bucket'})
    event.remove({input: 'createmetallurgy:molten_constantan_bucket'})
    event.remove({output: 'createmetallurgy:molten_electrum_bucket'})
    event.remove({input: 'createmetallurgy:molten_electrum_bucket'})
    event.remove({output: 'createmetallurgy:molten_necromium_bucket'})
    event.remove({input: 'createmetallurgy:molten_necromium_bucket'})
})

// Hide items from recipe viewers
RecipeViewerEvents.removeEntriesCompletely('item', event => {
    event.remove('create:iron_sheet')
    event.remove('create:copper_sheet')
    event.remove('createbigcannons:steel_scrap')
    event.remove('createbigcannons:steel_ingot')
    event.remove('cgs:steel_nugget')
    event.remove('cgs:steel_ingot')
    event.remove('cgs:steel_block')
    event.remove('cgs:steel_sheet')
    event.remove('petrochem:steel_ingot')
    event.remove('petrochem:steel_block')
    event.remove('petrochem:steel_sheet')
    event.remove('createmetallurgy:steel_ingot')
    event.remove('createmetallurgy:steel_block')
    event.remove('overgeared:steel_block')
    event.remove('overgeared:heated_silver_ingot')
    event.remove('petrochem:bronze_ingot')
    event.remove('petrochem:tin_nugget')
    event.remove('overgeared:copper_nugget')
    event.remove('powergrid:zinc_sheet')

    event.remove('createmetallurgy:tungsten_wire')
    event.remove('createmetallurgy:tungsten_wire_spool')

    event.remove('createbigcannons:molten_bronze_bucket')
    event.remove('createbigcannons:molten_steel_bucket')
    event.remove('createmetallurgy:molten_tin_bucket')
    event.remove('createmetallurgy:molten_nickel_bucket')
    event.remove('createmetallurgy:molten_silver_bucket')
    event.remove('createmetallurgy:molten_aluminum_bucket')
    event.remove('createmetallurgy:molten_osmium_bucket')
    event.remove('createmetallurgy:molten_lithium_bucket')
    event.remove('createmetallurgy:molten_invar_bucket')
    event.remove('createmetallurgy:molten_constantan_bucket')
    event.remove('createmetallurgy:molten_electrum_bucket')
    event.remove('createmetallurgy:molten_necromium_bucket')
})

RecipeViewerEvents.removeEntriesCompletely('fluid', event => {
    event.remove('createbigcannons:molten_bronze')
    event.remove('createbigcannons:molten_steel')
    event.remove('createmetallurgy:molten_tin')
    event.remove('createmetallurgy:molten_nickel')
    event.remove('createmetallurgy:molten_silver')
    event.remove('createmetallurgy:molten_aluminum')
    event.remove('createmetallurgy:molten_osmium')
    event.remove('createmetallurgy:molten_lithium')
    event.remove('createmetallurgy:molten_invar')
    event.remove('createmetallurgy:molten_constantan')
    event.remove('createmetallurgy:molten_electrum')
    event.remove('createmetallurgy:molten_necromium')
})
