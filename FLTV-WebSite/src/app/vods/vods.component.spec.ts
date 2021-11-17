import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VodsComponent } from './vods.component';

describe('VodsComponent', () => {
  let component: VodsComponent;
  let fixture: ComponentFixture<VodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VodsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
