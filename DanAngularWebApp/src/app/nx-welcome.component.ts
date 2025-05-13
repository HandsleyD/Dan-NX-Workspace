import { Component, ViewEncapsulation, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconRegistry, MatIconModule } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-nx-welcome',
  imports: [CommonModule, MatIconModule, MatTreeModule],
  template: `
    <div class="wrapper">
      <div class="container">
        <div id="welcome">
          <h1>
            <span> Hello there, </span>
            Welcome to DB pensions for dummies 👋
          </h1>
        </div>

        <div id="middle-content">
          <div id="middle-left-content">
            <div id="learning-materials" class="rounded shadow">
              <h2>Contents</h2>
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                class="list-item-link"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Introduction</title>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                <span> Introduction to DB pensions </span>
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                class="list-item-link"
              >
                <mat-icon style="font-size: 24px; width: 48px;"
                  >timeline</mat-icon
                >
                <span
                  >History of DB pensions
                  <span>A timeline of key legislation and events </span>
                </span>
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                class="list-item-link"
              >
                <mat-icon style="font-size: 24px; width: 48px;">event</mat-icon>
                <span>
                  Current day
                  <span> The situation today and what it means for you </span>
                </span>
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                class="list-item-link"
              >
                <mat-icon style="font-size: 24px; width: 48px;"
                  >payment</mat-icon
                >
                <span>
                  Estimate your pension
                  <span>
                    Calculate a very rough estimate of what your DB pension will
                    be worth
                  </span>
                </span>
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>

            <details>
              <summary>
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                View project details
              </summary>
              <pre>nx show project DanAngularWebApp</pre>
            </details>

            <details>
              <summary>
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                View interactive project graph
              </summary>
              <pre>nx graph</pre>
            </details>

            <details>
              <summary>
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Add UI library
              </summary>
              <pre><span># Generate UI lib</span>
nx g &#64;nx/angular:lib ui
<span># Add a component</span>
nx g &#64;nx/angular:component ui/src/lib/button</pre>
            </details>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}
