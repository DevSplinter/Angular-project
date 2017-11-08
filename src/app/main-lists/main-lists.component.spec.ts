import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainListsComponent } from './main-lists.component';

describe('MainListsComponent', () => {
  let component: MainListsComponent;
  let fixture: ComponentFixture<MainListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
