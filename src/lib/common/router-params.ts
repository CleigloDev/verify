import { ActivatedRouteSnapshot } from '@angular/router';

/**
 * Aggregate all params and queryParams found in the current Angular Route Snapshot.
 *
 * Starting from root and then divie into each child.
 */
export function computeRouterParams(
  activeSnapshot: ActivatedRouteSnapshot,
): Record<string, string> {
  const params: Record<string, string> = {};
  let snapshot: ActivatedRouteSnapshot | null = activeSnapshot;

  while (snapshot) {
    Object.assign(params, snapshot.params, snapshot.queryParams);
    snapshot = snapshot.firstChild;
  }

  return params;
}
