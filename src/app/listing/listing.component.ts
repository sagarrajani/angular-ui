import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../app/shared/data/data.service';
import { Application } from '../../app/shared/data/application.model';
import { LoadingSpinnerComponent } from '../ui/loading-spinner/loading-spinner.component';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/share';
import {Observable} from 'rxjs/Rx';
import {SearchfilterPipe} from '../../app/searchfilter.pipe'
import {merge} from 'rxjs/observable/merge';
import {of} from 'rxjs/observable/of';
import {mergeMap, map}from'rxjs/operators';
import { OnChanges,SimpleChanges } from '@angular/core';
import {AnonymousSubscription} from "rxjs/Subscription";

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {
   items: any;
  private sub: any;
  private selectedItem: any;
  private selectedItemId: string;
  private timerSubscription: AnonymousSubscription;
  private search: string;
  private showSpinner: boolean =true;
  constructor(private router: Router, private route: ActivatedRoute, private data: DataService) {
        this.router.events.subscribe(ev => {
        this.sub = this.route.queryParams.subscribe(params => {
        let {order} = params;
        if(order && order != this.selectedItemId) {
          this.selectedItemId = order;
          this.loadItemDetails(this.selectedItemId);
        } else {
          this.selectedItemId = undefined;
          this.selectedItem = undefined;
        }
      });
      this.sub.unsubscribe();
    });
    this.search=undefined;
    this.items = this.data.fetchApplicationsList();
   
    this.data.getSearchTerm.subscribe((res) => {
      this.search = res; 
    });

    this.data.add.subscribe(((ev)=> {
      try {
       this.showSpinner=true;
       let item=this.data.fetchApplicationsDetails(ev);
       this.items=item.mergeMap(res1 => {
         const res = this.items.map(res2 => [res1,...res2]);
         return merge(of(res1,res));
       });
      }
      catch(err) {
         console.log(err);
      }
      finally {
        console.log("hello")
        this.items=this.data.fetchApplicationsList();
        this.items.subscribe(result => {console.log(result.length)}, ()=>this.showSpinner=false);
      }
       
  }));
  }

 
   
  loadItemDetails(id) {
    this.selectedItem = this.data.fetchApplicationsDetails(id).map(data => {
      return {
        ...data,
        ORDER_ID: id,
      };
    }).share();
    console.log(this.selectedItem)
  }

  ngOnInit() {
    
    this.items = this.data.fetchApplicationsList();
    this.items.subscribe(result => {console.log(result.length)});
    this.items.subscribe(result=>{this.refreshData()});
    console.log("after")
    this.items.subscribe(()=>this.showSpinner=false);
  }

  private refreshData(): void {
    this.showSpinner=true;
    this.items = this.data.fetchApplicationsList();
    this.items.subscribe(()=>this.showSpinner=false,this.subscribeToData());
}

private subscribeToData(): void {
    this.timerSubscription = Observable.timer(60000).first().subscribe(() => this.refreshData());
}

}
