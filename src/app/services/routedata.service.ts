import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, DetachedRouteHandle} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RoutedataService {
  private routeCache = new Map<string, DetachedRouteHandle>();

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    // Return true if the route should be cached (e.g., only cache specific routes)
    return true;
  }

  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    // Store the route handle in the cache
    this.routeCache.set(route.routeConfig?.path || '', handle);
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    // Check if the route should be reattached (e.g., only reattach specific routes)
    return this.routeCache.has(route.routeConfig?.path || '');
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    // Retrieve the route handle from the cache
    return this.routeCache.get(route.routeConfig?.path || '') || null;
  }

  shouldReuseRoute(future: ActivatedRouteSnapshot, current: ActivatedRouteSnapshot): boolean {
    // Determine whether to reuse a route based on your logic
    return future.routeConfig === current.routeConfig;
  }
}
