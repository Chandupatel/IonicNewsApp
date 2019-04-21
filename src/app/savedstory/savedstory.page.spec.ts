import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedstoryPage } from './savedstory.page';

describe('SavedstoryPage', () => {
  let component: SavedstoryPage;
  let fixture: ComponentFixture<SavedstoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedstoryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedstoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
