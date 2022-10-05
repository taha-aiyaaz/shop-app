import { TestBed } from '@angular/core/testing';
import { bcd } from './shared.service';
import { abcde } from './shared.service';
import { SharedService } from './shared.service';

describe('SharedService', () => {
  let service: SharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

describe('abcde', () => {
  let a: abcde;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    a = TestBed.inject(abcde);
  });

  it('should be created', () => {
    expect(a).toBeTruthy();
  });
});

describe('bcd', () => {
  let b: bcd;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    b = TestBed.inject(bcd);
  });

  it('should be created', () => {
    expect(b).toBeTruthy();
  });
});
