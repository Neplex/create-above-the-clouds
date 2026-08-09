ServerEvents.recipes((event) => {
  event.shapeless("create:mechanical_piston", [
    "create:sticky_mechanical_piston",
    "supplementaries:soap",
  ]);

  event.shapeless("create:copper_valve_handle", [
    "#create:valve_handles",
    "supplementaries:soap",
  ]);

  event.shapeless("simulated:iron_handle", [
    "#simulated:handle_variants",
    "supplementaries:soap",
  ]);

  event.shapeless("create:placard", [
    "#createdeco:placards",
    "supplementaries:soap",
  ]);

  event.shapeless('create:item_vault', [
    /createdeco:.*_shipping_container/,
    "supplementaries:soap",
  ]);
});
