import Component from '@glimmer/component';
import { htmlSafe } from '@ember/template';

interface Args {
    heading: string
}

export default class DemoNoticeComponentComponent extends Component<Args> {
    get fancyHeading(){
        return this.args.heading ? htmlSafe(`&sung; ${this.args.heading} &sung;`) : '';
    }
}
