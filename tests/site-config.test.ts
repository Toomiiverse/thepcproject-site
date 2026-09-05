import assert from 'node:assert/strict';
import { test } from 'node:test';
import { aud, site } from '../src/data/site-config.ts';

test('build fee is $50', () => {
  assert.equal(site.fees.build, 50);
  assert.equal(aud(site.fees.build), '$50');
});

test('lounge rates match §2.8', () => {
  assert.equal(site.lounge.casualHour, 9);
  assert.equal(site.lounge.standardWeek, 20);
  assert.equal(site.lounge.premiumWeek, 25);
  assert.equal(site.lounge.ultimateWeek, 30);
});

test('interim service rates match §2.7', () => {
  assert.equal(site.services.diagnostics, 49);
  assert.equal(site.services.labourHour, 110);
  assert.equal(site.services.osInstall, 99);
  assert.equal(site.services.recoveryFrom, 199);
});

test('contact identity is contact@ and Northbridge', () => {
  assert.equal(site.email, 'contact@thepcproject.com.au');
  assert.equal(site.address.suburb, 'Northbridge');
  assert.equal(site.quoteDays, 7);
});
