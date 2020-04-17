import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSettingComponent } from './custom-setting.component';

describe('CustomSettingComponent', () => {
  let component: CustomSettingComponent;
  let fixture: ComponentFixture<CustomSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
