// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.compare
description: >
  Appropriate error thrown when a calendar property from a property bag cannot
  be converted to a calendar object or string
features: [BigInt, Symbol, Temporal]
---*/

const datetime = new Temporal.ZonedDateTime(0n, new Temporal.TimeZone("UTC"));

const rangeErrorTests = [
  [null, "null"],
  [true, "boolean"],
  ["", "empty string"],
  [1, "number that doesn't convert to a valid ISO string"],
  [1n, "bigint"],
];

for (const [calendar, description] of rangeErrorTests) {
  const arg = { year: 2019, monthCode: "M11", day: 1, calendar };
  assert.throws(RangeError, () => Temporal.ZonedDateTime.compare(arg, datetime), `${description} does not convert to a valid ISO string (first argument)`);
  assert.throws(RangeError, () => Temporal.ZonedDateTime.compare(datetime, arg), `${description} does not convert to a valid ISO string (second argument)`);
}

const typeErrorTests = [
  [Symbol(), "symbol"],
  [{}, "plain object that doesn't implement the protocol"],
  [new Temporal.TimeZone("UTC"), "time zone instance"],
  [Temporal.Calendar, "Temporal.Calendar, object"],
  [Temporal.Calendar.prototype, "Temporal.Calendar.prototype, object"],  // fails brand check in dateFromFields()
];

for (const [calendar, description] of typeErrorTests) {
  const arg = { year: 2019, monthCode: "M11", day: 1, calendar };
  assert.throws(TypeError, () => Temporal.ZonedDateTime.compare(arg, datetime), `${description} is not a valid property bag and does not convert to a string (first argument)`);
  assert.throws(TypeError, () => Temporal.ZonedDateTime.compare(datetime, arg), `${description} is not a valid property bag and does not convert to a string (second argument)`);
}
