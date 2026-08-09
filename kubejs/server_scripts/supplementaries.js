ServerEvents.tags('item', event => {
    event.remove('c:ropes', 'supplementaries:rope')
})

ServerEvents.recipes(event => {
    // Replace all inputs by tags
    event.replaceInput({input: 'farmersdelight:rope'}, 'farmersdelight:rope', Ingredient.of('#c:ropes'))
    event.replaceInput({input: 'supplementaries:rope'}, 'supplementaries:rope', Ingredient.of('#c:ropes'))
    event.replaceInput({output: 'simulated:rope_coupling'}, 'minecraft:string', Ingredient.of('#c:ropes'))
    event.replaceInput({output: 'create:rope_pulley'}, '#minecraft:wool', Ingredient.of('#c:ropes'))

    event.replaceInput({output: 'supplementaries:bomb'}, 'minecraft:tnt', 'createbigcannons:packed_guncotton')
    event.replaceInput({output: 'supplementaries:bomb_spiky'}, 'minecraft:tnt', 'createbigcannons:packed_guncotton')

    // Remove recipes
    event.remove({output: 'supplementaries:rope'})
    event.remove({output: 'supplementaries:turn_table'})
    event.remove({output: 'supplementaries:pulley_block'})
    event.remove({output: 'supplementaries:spring_launcher'})
    event.remove({output: 'supplementaries:cannon'})
    event.remove({output: 'create:schematicannon'})

    event.shaped(
        'farmersdelight:rope',
        [
            'A',
            'A'
        ],
        {
            A: 'supplementaries:flax',
        }
    )

    event.shaped(
        'supplementaries:spring_launcher',
        [
            'AAA',
            'BCB',
            'BDB'
        ],
        {
            A: '#minecraft:planks',
            B: 'minecraft:cobblestone',
            C: 'simulated:spring',
            D: 'minecraft:redstone'
        }
    )

    event.shaped(
        'supplementaries:cannon',
        [
            ' B ',
            'ACA',
            'AAA'
        ],
        {
            A: '#minecraft:planks',
            B: 'createbigcannons:wrought_iron_cannon_chamber',
            C: 'createbigcannons:wrought_iron_cannon_end'
        }
    )

    event.shaped(
        'create:schematicannon',
        [
            ' B ',
            'AAA'
        ],
        {
            A: 'minecraft:smooth_stone',
            B: 'supplementaries:cannon'
        }
    )
})

// Hide items from recipe viewers
RecipeViewerEvents.removeEntriesCompletely('item', event => {
    event.remove('supplementaries:rope')
    event.remove('supplementaries:turn_table')
    event.remove('supplementaries:pulley_block')
})
