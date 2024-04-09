import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidepannelComponent } from './sidepannel.component';

describe('SidepannelComponent', () => {
  let component: SidepannelComponent;
  let fixture: ComponentFixture<SidepannelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidepannelComponent]
    });
    fixture = TestBed.createComponent(SidepannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
