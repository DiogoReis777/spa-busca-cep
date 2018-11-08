import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaCepComponent } from './busca-cep.component';

describe('BuscaCepComponent', () => {
  let component: BuscaCepComponent;
  let fixture: ComponentFixture<BuscaCepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BuscaCepComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscaCepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

describe('BuscaCepComponent', () => {

  let component: BuscaCepComponent;
  let fixture: ComponentFixture<BuscaCepComponent>;

  it('should make mask', () => {
    var valorInput = '05274-070';
    var campoHtml = 'nameCepInput';
    const campo = document.getElementsByName(campoHtml)[0];
    const result = component.mascaraCep(valorInput, campo);

    valorInput = valorInput.replace(/\D/g, "");
    valorInput = valorInput.replace(/(\d{5})(\d)/, "$1-$2");
    expect(result).toBe(valorInput);

  });

});

