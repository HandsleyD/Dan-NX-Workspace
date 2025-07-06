import { TestBed } from '@angular/core/testing';
import { PensionBasicsComponent } from './pensionBasics.component';
import { RouterModule } from '@angular/router';

describe('PensionBasicsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PensionBasicsComponent, RouterModule.forRoot([])],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(PensionBasicsComponent);
    fixture.detectChanges();
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
