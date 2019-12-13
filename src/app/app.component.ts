import { 
    ServService, 
    ConfigService, 
    getSingleValueObservableAsync,
    getDelayedValueObservableAsync,
    getMultiValueObservableAsync
  } from './serv.service';
  
import { Observable, Subscription, forkJoin, combineLatest, from } from 'rxjs';
import { map, filter, takeUntil, takeLast, take } from 'rxjs/operators';
import { InjectionToken, Component, ValueProvider, ViewChild, ViewContainerRef, ComponentFactoryResolver, OnInit, AfterViewInit } from '@angular/core';
import { Person } from './person';
import { FactoryComponent } from './factory/factory.component';
import { SubfactoryComponent } from './subfactory/subfactory.component';
// import { ChildTestComponent } from './child-test/child-test.component';
// import { NgcontentTest } from './ngcontent-test/ngcontent-test.component';


export const APP_TOKEN = new InjectionToken<ConfigService>('ConfigToken');


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ ConfigService ]
})

//const fiveEvenNumbers = evenNumberCount.pipe(filter(val => val > 5));

export class AppComponent implements OnInit, AfterViewInit{

  @ViewChild('parent', {read: ViewContainerRef, static: true})
  parent: ViewContainerRef;
  title = 'observables';

  //forkjoinValues$: Observable<{ first: string; second: string; third: number; }>;

  message: string;
  myObject: Person;

  person: Person = {
    name: "john",
    age: 30
  }  
  
  constructor(
    private service1: ServService,
    //@Inject(APP_TOKEN) public service2: ConfigService
    private componentFactoryResolver: ComponentFactoryResolver,    
    ) { 
      
    } 

    

    static configure(service2?: ServService): ValueProvider {
      return {
        provide: APP_TOKEN,
        useValue: service2 
      };
    }

  // regular observables
  manual1: any;
  manual2: any;
  manual3: number[] = [];
  multiSubscription: Subscription;
  combineLatestSubscription: Subscription;  

  // Async pipe
  pipe1$ = getSingleValueObservableAsync();
  pipe2$ = getDelayedValueObservableAsync();
  pipe3$  = getMultiValueObservableAsync()
              // .pipe(
              //   map(val => {
              //     if (val > 5) this.thirdObs$.unsubscribe();
              //   })
              // );

    // Forkjoin pipe
  forkjoinValues$ = combineLatest(
    getSingleValueObservableAsync(),
    getDelayedValueObservableAsync(),
     getMultiValueObservableAsync()
  )
  .pipe(
    map(([first, second, third]) => { 
        return { first, second, third };
    }),
    take(4)
  );

  // combineLatest pipe 

  combineLatestValues$ = combineLatest(
    getSingleValueObservableAsync(),
    getDelayedValueObservableAsync(),
    getMultiValueObservableAsync()
  )
  .pipe(
    map(([first, second, third]) => { 
      console.log(first, second, third)
      return { first, second, third };
    }),
    take(3)
  );       

  

    /////////////////////////////////

  ngOnInit(){
    console.log(this.service1.value);

    //let ser = 

    this.service1.getSingleValueObservable()
    .subscribe((val) => this.manual1 = val)

    this.service1.getDelayedValueObservable()
    .subscribe((val) => this.manual2 = val)

    this.multiSubscription = this.service1.getMultiValueObservable()
    .pipe(
      map(x => x * 2 )
    )
    .subscribe((val) => {
      val <= 10 ? this.manual3.push(val) : this.multiSubscription.unsubscribe()
    })

    ////////////////////////////////////


  
  }

  ngAfterViewInit(){

    /// THIS METHOD REQUIRED FOR FACTORY FUNCTIONALITY, EVEN THOUGH IT MIGHT NOT CONTAIN ANY CODE
    const factoryComponent = this.componentFactoryResolver.resolveComponentFactory(FactoryComponent);
    this.parent.createComponent(factoryComponent)
  }

  ngOnDestroy(){
    this.multiSubscription.unsubscribe();
  }

  reset(){

    //console.log('reset')
    //this.combineLatestValues$ = null;
  }

  generateComponent(){    
    const subFactoryComponent = this.componentFactoryResolver.resolveComponentFactory(SubfactoryComponent);
    const newComponentRef = this.parent.createComponent(subFactoryComponent);

    newComponentRef.instance.someFunction('New comp')
  }

}
