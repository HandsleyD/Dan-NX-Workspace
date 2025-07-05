import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WhatIsADbPensionComponent } from './what-is-a-db-pension.component';

describe('WhatIsADbPensionComponent', () => {
  let component: WhatIsADbPensionComponent;
  let fixture: ComponentFixture<WhatIsADbPensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatIsADbPensionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WhatIsADbPensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
