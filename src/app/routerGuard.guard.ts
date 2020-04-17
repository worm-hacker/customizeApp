import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, PRIMARY_OUTLET, RouterStateSnapshot, UrlTree, Router } from "@angular/router";


@Injectable()
export class DoNotShowSecondaryOnRefreshGuard implements CanActivate {

	private router: Router;
	constructor( router: Router ) {
		this.router = router;
	}
	public canActivate(
		activatedRouteSnapshot: ActivatedRouteSnapshot,
		routerStateSnapshot: RouterStateSnapshot) : boolean {
		if ( this.isPageRefresh() ) {
			console.warn( "Secondary view not allowed on refresh." );
			this.router.navigateByUrl( this.getUrlWithoutSecondary( routerStateSnapshot ) );
			return( false );
		}
		return( true );
	}
	private getUrlWithoutSecondary( routerStateSnapshot: RouterStateSnapshot ) : UrlTree {
		var urlTree = this.router.parseUrl( routerStateSnapshot.url );
		var segment = urlTree.root;
		while ( segment && segment.children ) {
			delete( segment.children.secondary );
			segment = segment.children[ PRIMARY_OUTLET ];
		}
		return( urlTree );
	}

	private isPageRefresh() : boolean {
		return( ! this.router.navigated );

	}

}