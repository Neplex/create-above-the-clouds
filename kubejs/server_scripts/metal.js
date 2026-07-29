ServerEvents.tags('item', event => {
    event.add('c:nuggets', 'createbigcannons:steel_scrap')
    event.add('c:ingots', 'createbigcannons:steel_ingot')
    event.add('c:storage_blocks', 'createbigcannons:steel_block')
    event.add('c:storage_blocks', 'createbigcannons:steel_block')
    event.add('sable:super_heavy', 'createbigcannons:steel_block')
    event.add('bits_n_bobs:super_heavy', 'createbigcannons:steel_block')
    event.add('c:plates', 'cgs:steel_sheet')
    event.add('c:dusts/carbon', 'cgs:charcoal_dust')
    event.add('c:dusts/carbon', 'petrochem:petroleum_coke')

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
    event.remove('c:ingots', 'petrochem:bronze_ingot')
    event.remove('c:ingots/bronze', 'petrochem:bronze_ingot')
    event.remove('c:nuggets', 'petrochem:tin_nugget')
    event.remove('c:nuggets/tin', 'petrochem:tin_nugget')

    event.remove('c:plates', 'powergrid:zinc_sheet')
    event.remove('c:plates/zinc', 'powergrid:zinc_sheet')
})

ServerEvents.recipes(event => {
    // Replace all inputs by tags
    event.replaceInput({input: 'createbigcannons:steel_scrap'}, 'createbigcannons:steel_scrap', Ingredient.of('#c:nuggets/steel'))
    event.replaceInput({input: 'createbigcannons:steel_ingot'}, 'createbigcannons:steel_ingot', Ingredient.of('#c:ingots/steel'))
    event.replaceInput({input: 'createbigcannons:steel_block'}, 'createbigcannons:steel_block', Ingredient.of('#c:storage_blocks/steel'))
    event.replaceInput({input: 'cgs:steel_nugget'}, 'cgs:steel_nugget', Ingredient.of('#c:nuggets/steel'))
    event.replaceInput({input: 'cgs:steel_ingot'}, 'cgs:steel_ingot', Ingredient.of('#c:ingots/steel'))
    event.replaceInput({input: 'cgs:steel_sheet'}, 'cgs:steel_sheet', Ingredient.of('#c:plates/steel'))
    event.replaceInput({input: 'cgs:steel_block'}, 'cgs:steel_block', Ingredient.of('#c:storage_blocks/steel'))
    event.replaceInput({input: 'petrochem:steel_ingot'}, 'petrochem:steel_ingot', Ingredient.of('#c:ingots/steel'))

    event.replaceInput({input: 'createbigcannons:bronze_ingot'}, 'createbigcannons:bronze_ingot', Ingredient.of('#c:ingots/bronze'))
    event.replaceInput({input: 'petrochem:bronze_ingot'}, 'petrochem:bronze_ingot', Ingredient.of('#c:ingots/bronze'))

    // Remove the old recipes
    event.remove({output: 'cgs:steel_nugget'})
    event.remove({output: 'cgs:steel_ingot'})
    event.remove({output: 'cgs:steel_block'})
    event.remove({output: 'cgs:steel_sheet'})
    event.remove({output: 'petrochem:steel_ingot'})
    event.remove({output: 'petrochem:steel_block'})
    event.remove({output: 'petrochem:bronze_ingot'})
    event.remove({output: 'petrochem:tin_nugget'})
    event.remove({output: 'powergrid:zinc_sheet'})

    // Replace coal with charcoal dust in the mixin recipe
    event.replaceInput({type: 'create:mixing', output: '#c:ingots/steel' }, '#minecraft:coals', '#c:dusts/carbon')
    event.replaceInput({type: 'create:compacting', output: '#c:ingots/cast_iron' }, '#minecraft:coals', '#c:dusts/carbon')
})

// Hide items from recipe viewers
RecipeViewerEvents.removeEntriesCompletely('item', event => {
    event.remove('cgs:steel_nugget')
    event.remove('cgs:steel_ingot')
    event.remove('cgs:steel_block')
    event.remove('cgs:steel_sheet')
    event.remove('petrochem:steel_ingot')
    event.remove('petrochem:steel_block')
    event.remove('petrochem:bronze_ingot')
    event.remove('petrochem:tin_nugget')
    event.remove('powergrid:zinc_sheet')
})
