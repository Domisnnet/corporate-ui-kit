import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateUiKit } from './corporate-ui-kit';

describe('CorporateUiKit', () => {
  let component: CorporateUiKit;
  let fixture: ComponentFixture<CorporateUiKit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorporateUiKit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorporateUiKit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
