import { Component } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

 
  styleUrls: ['./app.component.scss'],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})
export class AppComponent {
  title = 'text-editor';
}
