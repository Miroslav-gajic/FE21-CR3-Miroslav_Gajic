import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KorbComponent } from './korb.component';

describe('KorbComponent', () => {
  let component: KorbComponent;
  let fixture: ComponentFixture<KorbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KorbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KorbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
