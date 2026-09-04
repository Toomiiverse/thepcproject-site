/** Where the configurator iframe should load for this page's host. */
export function builderFrameSrc(
  loc: { protocol: string; hostname: string; port: string },
  q = '?embed=1&poster=1',
): string {
  if (loc.port === '8090') {
    return `${loc.protocol}//${loc.hostname}:8091/${q}`;
  }
  const portPart = loc.port ? `:${loc.port}` : '';
  return `${loc.protocol}//${loc.hostname}${portPart}/builder/${q}`;
}
