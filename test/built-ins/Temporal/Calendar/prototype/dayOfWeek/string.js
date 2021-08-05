// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-temporal.calendar.prototype.dayofweek
description: Temporal.Calendar.prototype.dayOfWeek will take ISO8601 string
  and return the day of week.
info: |
  4. Let temporalDate be ? ToTemporalDate(temporalDateLike).
  5. Return 𝔽(! ToISODayOfWeek(temporalDate.[[ISOYear]], temporalDate.[[ISOMonth]], temporalDate.[[ISODay]])).
features: [Temporal]
---*/
let cal = new Temporal.Calendar("iso8601");

assert.sameValue(5, cal.dayOfWeek("2019-01-18"));
assert.sameValue(1, cal.dayOfWeek("2019-03-18"));
assert.sameValue(6, cal.dayOfWeek("2019-05-18"));
assert.sameValue(7, cal.dayOfWeek("2019-08-18"));
