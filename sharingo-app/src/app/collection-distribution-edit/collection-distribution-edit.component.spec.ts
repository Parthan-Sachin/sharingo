import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionDistributionEditComponent } from './collection-distribution-edit.component';

describe('CollectionDistributionEditComponent', () => {
  let component: CollectionDistributionEditComponent;
  let fixture: ComponentFixture<CollectionDistributionEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionDistributionEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionDistributionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
