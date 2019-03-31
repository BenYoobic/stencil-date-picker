import { Component, State, Element } from "@stencil/core";

@Component({
    tag: 'ben-date-picker',
    styleUrl: './date-picker.css',
    shadow: true
})
export class DatePicker {
    dateInput: HTMLInputElement;

    @Element() el: HTMLElement;
    
    @State() pickedDate: any;


    onSelectDate(event: Event) {
        console.log(event);
        console.log(this.pickedDate)
    }

    parseDate(s) {
        var b = s.split(/\D/);
        return new Date(b[0], --b[1], b[2]);
      }


    render() {
        let dataContent;
        if (this.pickedDate) {
            dataContent = this.pickedDate;
        }
        return [
            <div>
                <div id="selection-div">
                    <h3 class="date-title">Pick a date:</h3>
                    <input 
                        type="date"
                        onInput={this.onSelectDate.bind(this)}
                        ref={el => (this.dateInput = el)}
                        value={this.pickedDate}
                        name="" 
                        id="date-picker-input" 
                        class="date-picker-input" />
                </div>
                <h2>Picked date: { dataContent }</h2>
                <div id="select-button-div">
                    <button>Confirm Selection</button>
                </div>
            </div>
        ]
    }
}