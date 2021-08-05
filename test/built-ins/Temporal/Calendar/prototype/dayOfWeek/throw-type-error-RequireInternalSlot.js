// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-temporal.calendar.prototype.dayOfWeek
description: Temporal.Calendar.prototype.dayOfWeek throws TypeError
  when the internal lot is not presented.
info: |
  2. Perform ? RequireInternalSlot(calendar, [[InitializedTemporalCalendar]]).
features: [Temporal]
---*/
let cal = new Temporal.Calendar("iso8601");

let badCal = { dayOfWeek: cal.dayOfWeek }
assert.throws(TypeError, () => badCal.dayOfWeek("2021-03-04"),
    "Throw TypeError if no internal slot");
