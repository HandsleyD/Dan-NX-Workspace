import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistoryOfPensionsComponent } from './history-of-pensions.component';

describe('HistoryOfPensionsComponent', () => {
  let component: HistoryOfPensionsComponent;
  let fixture: ComponentFixture<HistoryOfPensionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoryOfPensionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HistoryOfPensionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
