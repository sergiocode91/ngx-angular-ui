import { Component, Input } from '@angular/core';

interface Props {
  header: string[];
  columns: PropsColumn[];
}

interface PropsColumn {
  property: string;
  type: string;
  default: string;
}

@Component({
  selector: 'app-props',
  standalone: true,
  imports: [],
  templateUrl: './props.component.html',
  styles: ``
})
export class PropsComponent {
  @Input() props!: Props;
}
