import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubfactoryComponent } from './subfactory.component';

describe('SubfactoryComponent', () => {
  let component: SubfactoryComponent;
  let fixture: ComponentFixture<SubfactoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubfactoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubfactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
