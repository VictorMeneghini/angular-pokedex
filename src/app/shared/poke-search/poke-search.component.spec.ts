import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeSearchComponent } from './poke-search.component';

describe('PokeSearchComponent', () => {
  let component: PokeSearchComponent;
  let fixture: ComponentFixture<PokeSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit input text with right value', () => {
    const componenteSpy = spyOn(component.emmitSearch, 'emit')
    
    const inputValue = 'hello world';
    component.search(inputValue);

    expect(componenteSpy).toHaveBeenCalledWith("hello world")
  });
});
