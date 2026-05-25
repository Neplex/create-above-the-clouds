ServerEvents.tags('item', event => {
    event.add('c:nuggets', 'createbigcannons:steel_scrap')
    event.add('c:ingots', 'createbigcannons:steel_ingot')
    event.add('c:storage_blocks', 'createbigcannons:steel_block')
    event.add('c:storage_blocks', 'createbigcannons:steel_block')
    event.add('sable:super_heavy', 'createbigcannons:steel_block')
    event.add('bits_n_bobs:super_heavy', 'createbigcannons:steel_block')
    event.add('c:plates', 'cgs:steel_sheet')

    event.remove('c:nuggets', 'cgs:steel_nugget')
    event.remove('c:nuggets/steel', 'cgs:steel_nugget')
    event.remove('c:ingots', 'cgs:steel_ingot')
    event.remove('c:ingots/steel', 'cgs:steel_ingot')
    event.remove('c:storage_blocks', 'cgs:steel_block')
    event.remove('c:storage_blocks/steel', 'cgs:steel_block')

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

    // Remove the old recipes
    event.remove({output: 'cgs:steel_nugget'})
    event.remove({output: 'cgs:steel_ingot'})
    event.remove({output: 'cgs:steel_block'})
    event.remove({output: 'powergrid:zinc_sheet'})

    // Replace coal with charcoal dust in the mixin recipe
    event.replaceInput({type: 'create:mixing', output: '#c:ingots/steel' }, '#minecraft:coals', '#c:dusts/charcoal_dust')
    event.replaceInput({type: 'create:compacting', output: '#c:ingots/cast_iron' }, '#minecraft:coals', '#c:dusts/charcoal_dust')
})

// Hide items from recipe viewers
RecipeViewerEvents.removeEntriesCompletely('item', event => {
    event.remove('cgs:steel_nugget')
    event.remove('cgs:steel_ingot')
    event.remove('cgs:steel_block')
    event.remove('powergrid:zinc_sheet')
})
