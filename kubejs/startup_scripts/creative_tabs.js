StartupEvents.modifyCreativeTab('cgs:mod_items', event => {
    event.remove('cgs:steel_nugget')
    event.remove('cgs:steel_ingot')
    event.remove('cgs:steel_block')
})

StartupEvents.modifyCreativeTab('powergrid:main', event => {
    event.remove('powergrid:zinc_sheet')
})
