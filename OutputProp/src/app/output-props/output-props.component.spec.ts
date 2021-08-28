import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputPropsComponent } from './output-props.component';

describe('OutputPropsComponent', () => {
  let component: OutputPropsComponent;
  let fixture: ComponentFixture<OutputPropsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputPropsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputPropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
