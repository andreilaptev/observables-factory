import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgcontentTestComponent } from './ngcontent-test.component';

describe('NgcontentTestComponent', () => {
  let component: NgcontentTestComponent;
  let fixture: ComponentFixture<NgcontentTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgcontentTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgcontentTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
