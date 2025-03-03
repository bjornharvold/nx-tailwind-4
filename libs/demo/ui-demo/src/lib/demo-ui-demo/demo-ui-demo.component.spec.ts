import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DemoUiDemoComponent } from './demo-ui-demo.component';

describe('DemoUiDemoComponent', () => {
  let component: DemoUiDemoComponent;
  let fixture: ComponentFixture<DemoUiDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoUiDemoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DemoUiDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
