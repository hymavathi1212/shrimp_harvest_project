import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { FuseMediaWatcherService } from '@fuse/services/media-watcher';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from 'app/shared/shared.module';

@Component({
    selector     : 'example',
    templateUrl  : './example.component.html',
    encapsulation: ViewEncapsulation.None,
    standalone:true,
    imports:[    MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatSidenavModule,
        MatTabsModule,
        SharedModule,
      ]
})
export class ExampleComponent implements OnInit, OnDestroy
{
    /**
     * Constructor
     */
    drawerMode: 'over' | 'side' = 'side';
    drawerOpened: boolean = true;
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    constructor(private _fuseMediaWatcherService: FuseMediaWatcherService)
    {
    }
    ngOnDestroy(): void {
        throw new Error('Method not implemented.');
    }
    ngOnInit(): void
    {
        // Subscribe to media changes
    //     this._fuseMediaWatcherService.onMediaChange$
    //         .pipe(takeUntil(this._unsubscribeAll))
    //         .subscribe(({matchingAliases}) => {

    //             // Set the drawerMode and drawerOpened if
    //             if ( matchingAliases.includes('lg') )
    //             {
    //                 this.drawerMode = 'side';
    //                 this.drawerOpened = true;
    //             }
    //             else
    //             {
    //                 this.drawerMode = 'over';
    //                 this.drawerOpened = false;
    //             }
    //         });
    // }

    /**
     * On destroy
     */
    // ngOnDestroy(): void
    // {
    //     // Unsubscribe from all subscriptions
    //     this._unsubscribeAll.next(null);
    //     this._unsubscribeAll.complete();
    // }
}
}