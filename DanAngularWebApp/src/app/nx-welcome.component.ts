import { Component, ViewEncapsulation, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconRegistry, MatIconModule } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-nx-welcome',
  imports: [CommonModule, MatIconModule, MatTreeModule],
  templateUrl: './nx-welcome.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}
