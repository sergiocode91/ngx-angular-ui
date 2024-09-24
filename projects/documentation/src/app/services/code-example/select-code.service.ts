import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectCodeService {
  public codeExamples = {
  codeUseTs: `
  import { 
    SelectContentElement,
    SelectElement,
    SelectItemElement,
    SelectTriggerElement,
    SelectValueElement,
  } from 'ngx-angular-ui';

  @Component({
    standalone: true,
    imports: [
      SelectContentElement,
      SelectElement,
      SelectItemElement,
      SelectTriggerElement,
      SelectValueElement,
    ],
  })
  `,
  codeUseHtml: `
  <div uiSelect>
    <div uiSelectTrigger>
      <div uiSelectValue [placeholder]="'Select a language'"></div>
    </div>
    <div uiSelectContent>
      <div uiSelectItem value="javascript">JavaScript</div>
      <div uiSelectItem value="python">Python</div>
      <div uiSelectItem value="java">Java</div>
      <div uiSelectItem value="csharp">C#</div>
    </div>
  </div>
  `,
  code1: `
  import { 
    SelectContentElement,
    SelectElement,
    SelectItemElement,
    SelectTriggerElement,
    SelectValueElement,
  } from 'ngx-angular-ui';

  @Component({
    standalone: true,
    imports: [
      SelectContentElement,
      SelectElement,
      SelectItemElement,
      SelectTriggerElement,
      SelectValueElement,
    ],
    template: \`
      <div uiSelect>
        <div uiSelectTrigger class="w-[230px]">
          <div uiSelectValue [placeholder]="'Select a language'"></div>
        </div>
        <div uiSelectContent>
          <div uiSelectItem value="javascript">JavaScript</div>
          <div uiSelectItem value="python">Python</div>
          <div uiSelectItem value="java">Java</div>
          <div uiSelectItem value="csharp">C#</div>
        </div>
      </div>
    \`
  })
  `,
  code2: `
  import { 
    SelectContentElement,
    SelectElement,
    SelectItemElement,
    SelectTriggerElement,
    SelectValueElement,
  } from 'ngx-angular-ui';

  @Component({
    standalone: true,
    imports: [
      SelectContentElement,
      SelectElement,
      SelectItemElement,
      SelectTriggerElement,
      SelectValueElement,
    ],
    template: \`
      <div uiSelect [multiple]="true">
        <div uiSelectTrigger class="w-[230px]">
          <div uiSelectValue [placeholder]="'Select a car'"></div>
        </div>
        <div uiSelectContent>
          <div uiSelectItem value="audi">Audi</div>
          <div uiSelectItem value="bmw">BMW</div>
          <div uiSelectItem value="mercedes">Mercedes</div>
          <div uiSelectItem value="porsche">Porsche</div>
        </div>
      </div>
    \`
  })
  `,
  code3: `
  import { 
    SelectContentElement,
    SelectElement,
    SelectItemElement,
    SelectTriggerElement,
    SelectValueElement,
  } from 'ngx-angular-ui';

  @Component({
    standalone: true,
    imports: [
      SelectContentElement,
      SelectElement,
      SelectItemElement,
      SelectTriggerElement,
      SelectValueElement,
    ],
    template: \`
      <div uiSelect>
        <div uiSelectTrigger class="w-[230px]">
          <div uiSelectValue [placeholder]="'Select a user'"></div>
        </div>
        <div uiSelectContent>
          <div uiSelectItem value="1">
            <img src="https://d2u8k2ocievbld.cloudfront.net/memojis/male/1.png" alt="John Doe" class="w-[22px] h-[22px] mr-3">
            John Doe
          </div>
          <div uiSelectItem value="2">
            <img src="https://d2u8k2ocievbld.cloudfront.net/memojis/male/2.png" alt="Michael Smith" class="w-[22px] h-[22px] mr-3">
            Michael Smith
          </div>
          <div uiSelectItem value="3">
            <img src="https://d2u8k2ocievbld.cloudfront.net/memojis/male/3.png" alt="David Johnson" class="w-[22px] h-[22px] mr-3">
            David Johnson
          </div>
          <div uiSelectItem value="4">
            <img src="https://d2u8k2ocievbld.cloudfront.net/memojis/male/4.png" alt="William Brown" class="w-[22px] h-[22px] mr-3">
            William Brown
          </div>
        </div>
      </div>
    \`
  })
  `,
  code4: `
  import { 
    SelectContentElement,
    SelectElement,
    SelectItemElement,
    SelectTriggerElement,
    SelectValueElement,
  } from 'ngx-angular-ui';

  @Component({
    standalone: true,
    imports: [
      SelectContentElement,
      SelectElement,
      SelectItemElement,
      SelectTriggerElement,
      SelectValueElement,
    ],
    template: \`
      <div uiSelect [disabled]="true">
        <div uiSelectTrigger class="w-[230px]">
          <div uiSelectValue [placeholder]="'Select a fruit'"></div>
        </div>
        <div uiSelectContent>
          <div uiSelectItem value="apple">Apple</div>
          <div uiSelectItem value="banana">Banana</div>
          <div uiSelectItem value="blueberry">Blueberry</div>
          <div uiSelectItem value="cherry">Cherry</div>
        </div>
      </div>
    \`
  })
  `,
  };

  getExamples() {
    return this.codeExamples;
  }
}

