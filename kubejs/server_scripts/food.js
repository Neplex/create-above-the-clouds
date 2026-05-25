ServerEvents.tags('item', event => {
    event.add('c:dough', 'create:dough')
    event.add('c:dough/wheat', 'create:dough')
    event.add('c:foods/food_poisoning', 'create:dough')

    event.remove('c:dough', 'farmersdelight:wheat_dough')
    event.remove('c:dough/wheat', 'farmersdelight:wheat_dough')
    event.remove('c:foods', 'farmersdelight:wheat_dough')
    event.remove('c:foods/dough', 'farmersdelight:wheat_dough')
    event.remove('c:foods/dough/wheat', 'farmersdelight:wheat_dough')
    event.remove('c:foods/food_poisoning', 'farmersdelight:wheat_dough')
})

ServerEvents.recipes(event => {
    // Remove ddduplicated recipes
    event.remove({id: 'farmersdelight:wheat_dough_from_water'})
    event.remove({type: 'minecraft:smelting', input: 'farmersdelight:wheat_dough'})
    event.remove({type: 'minecraft:smoking', input: 'farmersdelight:wheat_dough'})
    event.remove({mod: 'minecraft', output: 'minecraft:cake'})

    // Replace all inputs by tags
    event.replaceInput({input: 'farmersdelight:wheat_dough'}, 'farmersdelight:wheat_dough', Ingredient.of('#c:foods/dough'))
    event.replaceInput({input: 'minecraft:milk_bucket'}, 'minecraft:milk_bucket', Ingredient.of('#c:drinks/milk'))

    // Remove the old recipes
    event.remove({output: 'farmersdelight:wheat_dough'})
})

// Hide items from recipe viewers
RecipeViewerEvents.removeEntriesCompletely('item', event => {
    event.remove('farmersdelight:wheat_dough')
})
