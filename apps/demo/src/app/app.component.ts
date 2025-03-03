import { Component } from '@angular/core';
import { DemoUiDemoComponent } from '@wink/demo/ui-demo';

@Component({
  imports: [
    DemoUiDemoComponent
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'demo';
}
