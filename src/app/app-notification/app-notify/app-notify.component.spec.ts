import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNotifyComponent } from './app-notify.component';

describe('AppNotifyComponent', () => {
  let component: AppNotifyComponent;
  let fixture: ComponentFixture<AppNotifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppNotifyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppNotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
