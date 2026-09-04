import assert from 'node:assert/strict';
import { test } from 'node:test';
import { currentTournament } from '../src/data/tournament.ts';

test('announced tournament weekday matches the calendar', () => {
  if (!currentTournament) return;
  const yearMatch = currentTournament.month.match(/(\d{4})/);
  assert.ok(yearMatch, 'month must include a year, e.g. October 2026');
  const whenMatch = currentTournament.when.match(/^(\w+)\s+(\d+)\s+(\w+)/);
  assert.ok(whenMatch, 'when must start like "Sunday 18 October"');
  const [, weekday, day, monthName] = whenMatch;
  const date = new Date(Date.UTC(Number(yearMatch[1]), monthIndex(monthName), Number(day)));
  const actual = date.toLocaleDateString('en-AU', { weekday: 'long', timeZone: 'UTC' });
  assert.equal(weekday, actual);
});

function monthIndex(name: string): number {
  const months = ['january','february','march','april','may','june','july','august','september','october','november','december'];
  const i = months.indexOf(name.toLowerCase());
  assert.notEqual(i, -1, `unknown month ${name}`);
  return i;
}
