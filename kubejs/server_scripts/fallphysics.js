ServerEvents.recipes(event => {
    event.remove({mod: 'fallphysics'});
});

RecipeViewerEvents.removeEntriesCompletely('item', event => {
    event.remove('fallphysics:parachute');
    event.remove('fallphysics:reserve_parachute');
    event.remove('fallphysics:flare_red');
    event.remove('fallphysics:flare_green');
    event.remove('fallphysics:flare_blue');
    event.remove('fallphysics:flare_white');
})
