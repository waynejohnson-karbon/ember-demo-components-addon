import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

interface Args {
    numberList: string;
}

interface Marker {
    num: number;
    bookEnd: number;
}

export default class DemoNumbersComponentComponent extends Component<Args> {
    
    @tracked markers: Marker[] = [];
    
    constructor(owner: unknown, args: Args) {
        super(owner, args);
        this.listOfNumbers.forEach((item, index) => {
            this.markers.push(
                {
                    num: +item, 
                    bookEnd: (index % 3)
                }
            );
        });
    }

    get listOfNumbers() {
        return this.args.numberList ? this.args.numberList.split(',') : [];
    }
}
