import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() show : Boolean;
  @Output() onClose = new EventEmitter();

  public modalIsVisible : Boolean = this.show;

  constructor() { }

  ngOnInit() {
    window.addEventListener('keydown', e => {
      if (e.keyCode === 27) {
        this.onClose.emit();
      }
    })
  }

  close() {
    this.onClose.emit();
  }

}
