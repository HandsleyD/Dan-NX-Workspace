import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PensionBasicsComponent } from './pensionBasics.component';

describe('PensionBasicsComponent', () => {
  let component: PensionBasicsComponent;
  let fixture: ComponentFixture<PensionBasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PensionBasicsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PensionBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
