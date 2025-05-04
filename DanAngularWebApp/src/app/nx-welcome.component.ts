import { Component, ViewEncapsulation, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconRegistry, MatIconModule } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-nx-welcome',
  imports: [CommonModule, MatIconModule, MatTreeModule],
  template: `
    <style>
      html {
        -webkit-text-size-adjust: 100%;
        font-family: Roboto, ui-sans-serif, system-ui, -apple-system,
          BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, 'Noto Sans',
          sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
          'Noto Color Emoji';
        line-height: 1.5;
        tab-size: 4;
        scroll-behavior: smooth;
      }
      body {
        font-family: inherit;
        line-height: inherit;
        margin: 0;
      }
      h1,
      h2,
      p,
      pre {
        margin: 0;
      }
      *,
      ::before,
      ::after {
        box-sizing: border-box;
        border-width: 0;
        border-style: solid;
        border-color: currentColor;
      }
      h1,
      h2 {
        font-size: inherit;
        font-weight: inherit;
      }
      a {
        color: inherit;
        text-decoration: inherit;
      }
      pre {
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          'Liberation Mono', 'Courier New', monospace;
      }
      svg {
        display: block;
        vertical-align: middle;
      }
      svg {
        shape-rendering: auto;
        text-rendering: optimizeLegibility;
      }
      pre {
        background-color: rgba(55, 65, 81, 1);
        border-radius: 0.25rem;
        color: rgba(229, 231, 235, 1);
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          'Liberation Mono', 'Courier New', monospace;
        overflow: auto;
        padding: 0.5rem 0.75rem;
      }
      .shadow {
        box-shadow: 0 0 #0000, 0 0 #0000, 0 10px 15px -3px rgba(0, 0, 0, 0.1),
          0 4px 6px -2px rgba(0, 0, 0, 0.05);
      }
      .rounded {
        border-radius: 1.5rem;
      }
      .wrapper {
        width: 100%;
      }
      .container {
        margin-left: auto;
        margin-right: auto;
        max-width: 768px;
        padding-bottom: 3rem;
        padding-left: 1rem;
        padding-right: 1rem;
        color: rgba(55, 65, 81, 1);
        width: 100%;
      }
      #welcome {
        margin-top: 2.5rem;
      }
      #welcome h1 {
        font-size: 3rem;
        font-weight: 500;
        letter-spacing: -0.025em;
        line-height: 1;
      }
      #welcome span {
        display: block;
        font-size: 1.875rem;
        font-weight: 300;
        line-height: 2.25rem;
        margin-bottom: 0.5rem;
      }
      #learning-materials {
        padding: 2.5rem 2rem;
      }
      #learning-materials h2 {
        font-weight: 500;
        font-size: 1.25rem;
        letter-spacing: -0.025em;
        line-height: 1.75rem;
        padding-left: 1rem;
        padding-right: 1rem;
      }
      .list-item-link {
        align-items: center;
        border-radius: 0.75rem;
        display: flex;
        margin-top: 1rem;
        padding: 1rem;
        transition-property: background-color, border-color, color, fill, stroke,
          opacity, box-shadow, transform, filter, backdrop-filter,
          -webkit-backdrop-filter;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
        width: 100%;
      }
      .list-item-link svg:first-child {
        margin-right: 1rem;
        height: 1.5rem;
        transition-property: background-color, border-color, color, fill, stroke,
          opacity, box-shadow, transform, filter, backdrop-filter,
          -webkit-backdrop-filter;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
        width: 1.5rem;
      }
      .list-item-link > span {
        flex-grow: 1;
        font-weight: 400;
        transition-property: background-color, border-color, color, fill, stroke,
          opacity, box-shadow, transform, filter, backdrop-filter,
          -webkit-backdrop-filter;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      }
      .list-item-link > span > span {
        color: rgba(107, 114, 128, 1);
        display: block;
        flex-grow: 1;
        font-size: 0.75rem;
        font-weight: 300;
        line-height: 1rem;
        transition-property: background-color, border-color, color, fill, stroke,
          opacity, box-shadow, transform, filter, backdrop-filter,
          -webkit-backdrop-filter;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      }
      .list-item-link svg:last-child {
        height: 1rem;
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
        width: 1rem;
      }
      .list-item-link:hover {
        color: rgba(255, 255, 255, 1);
        background-color: hsla(162, 55%, 33%, 1);
      }

      .list-item-link:hover > span > span {
        color: rgba(243, 244, 246, 1);
      }
      .list-item-link:hover svg:last-child {
        transform: translateX(0.25rem);
      }

      .button-pill {
        padding: 1.5rem 2rem;
        margin-bottom: 2rem;
        transition-duration: 300ms;
        transition-property: background-color, border-color, color, fill, stroke,
          opacity, box-shadow, transform, filter, backdrop-filter,
          -webkit-backdrop-filter;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        align-items: center;
        display: flex;
      }
      .button-pill svg {
        transition-property: background-color, border-color, color, fill, stroke,
          opacity, box-shadow, transform, filter, backdrop-filter,
          -webkit-backdrop-filter;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
        flex-shrink: 0;
        width: 3rem;
      }
      .button-pill > span {
        letter-spacing: -0.025em;
        font-weight: 400;
        font-size: 1.125rem;
        line-height: 1.75rem;
        padding-left: 1rem;
        padding-right: 1rem;
      }
      .button-pill span span {
        display: block;
        font-size: 0.875rem;
        font-weight: 300;
        line-height: 1.25rem;
      }
      .button-pill:hover svg,
      .button-pill:hover {
        color: rgba(255, 255, 255, 1) !important;
      }
      #commands {
        padding: 2.5rem 2rem;
        margin-top: 3.5rem;
      }
      #commands h2 {
        font-size: 1.25rem;
        font-weight: 400;
        letter-spacing: -0.025em;
        line-height: 1.75rem;
        padding-left: 1rem;
        padding-right: 1rem;
      }
      #commands p {
        font-size: 1rem;
        font-weight: 300;
        line-height: 1.5rem;
        margin-top: 1rem;
        padding-left: 1rem;
        padding-right: 1rem;
      }
      details {
        align-items: center;
        display: flex;
        margin-top: 1rem;
        padding-left: 1rem;
        padding-right: 1rem;
        width: 100%;
      }
      details pre > span {
        color: rgba(181, 181, 181, 1);
      }
      summary {
        border-radius: 0.5rem;
        display: flex;
        font-weight: 400;
        padding: 0.5rem;
        cursor: pointer;
        transition-property: background-color, border-color, color, fill, stroke,
          opacity, box-shadow, transform, filter, backdrop-filter,
          -webkit-backdrop-filter;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
      }
      summary:hover {
        background-color: rgba(243, 244, 246, 1);
      }
      summary svg {
        height: 1.5rem;
        margin-right: 1rem;
        width: 1.5rem;
      }

      @media screen and (min-width: 768px) {
        #hero {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        #hero .logo-container {
          display: flex;
        }
        #middle-content {
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 4rem;
        }
      }
    </style>
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
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}
