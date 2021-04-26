import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameTabsComponent } from './game-tabs.component';

describe('GameTabsComponent', () => {
  let component: GameTabsComponent;
  let fixture: ComponentFixture<GameTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
