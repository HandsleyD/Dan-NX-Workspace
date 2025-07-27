import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistoryOfPensionsComponent } from './history-of-pensions.component';
import { ActivatedRoute } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('HistoryOfPensionsComponent', () => {
  let component: HistoryOfPensionsComponent;
  let fixture: ComponentFixture<HistoryOfPensionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoryOfPensionsComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { params: {} },
            params: { subscribe: jest.fn() },
            queryParams: { subscribe: jest.fn() },
          },
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(HistoryOfPensionsComponent);
    component = fixture.componentInstance;
    // Don't call detectChanges() to avoid chart rendering issues in tests
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
