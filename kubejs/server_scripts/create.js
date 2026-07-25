ServerEvents.recipes(event => {
    event.replaceInput({output: 'create:elevator_pulley'}, 'minecraft:dried_kelp_block', 'create:belt_connector')
    event.replaceInput({output: 'create:hose_pulley'}, 'minecraft:dried_kelp_block', 'create:belt_connector')
})
