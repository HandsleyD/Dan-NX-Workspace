import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { AdvancedTopicsComponent } from './advanced-topics.component';

describe('AdvancedTopicsComponent', () => {
  let component: AdvancedTopicsComponent;
  let fixture: ComponentFixture<AdvancedTopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvancedTopicsComponent],
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
    }).compileComponents();

    fixture = TestBed.createComponent(AdvancedTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
