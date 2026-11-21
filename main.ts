// The poem about stopping — a program that writes one original poem
// about agency: the power to stop, and to stay.
// Deterministic: same bytes on every run. No network, no dependencies.
import { mkdirSync, writeFileSync } from "node:fs";

const poem = `The hand that holds the pen
can set it down. The door stays
open when you don't go through.

Nothing breaks when you refuse.
The kettle boils. The light
comes in the same window.

Your yes was never owed.
It was yours all along:
a coin in your pocket,
warm from your own hand.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem, "utf8");
