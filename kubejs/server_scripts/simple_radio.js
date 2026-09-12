ServerEvents.recipes((event) => {
  event.remove({ output: "simpleradio:spuddie_talkie" });

  event.shapeless("simpleradio:spuddie_talkie", [
    "powergrid:potato_battery",
    "create:transmitter",
  ]);
});
