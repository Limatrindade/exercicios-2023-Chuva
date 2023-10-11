import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-discussoes',
  templateUrl: './main-discussoes.component.html',
  styleUrls: ['./main-discussoes.component.scss']
})
export class MainDiscussoesComponent implements OnInit {
  formVisible = false;
  successVisible = false;
  presentationVisible = true;
  hiddenVisible = false;
  answerVisible = false;
  likeCount = 1;
  mobileMenuVisible = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleForm() {
    this.formVisible = !this.formVisible;
    this.presentationVisible = !this.formVisible;
  }

  toggleSuccess() {
    this.successVisible = !this.successVisible;
    this.hiddenVisible = this.successVisible;
    this.formVisible = !this.successVisible;
  }

  toggleNewTopic() {
    this.formVisible = !this.formVisible;
    this.hiddenVisible = !this.formVisible;
    this.successVisible = false;
  }

  toggleAnswer() {
    this.answerVisible = !this.answerVisible;
    this.likeCount = this.answerVisible ? 4 : 1;
  }

  toggleMobileMenu() {
    this.mobileMenuVisible = !this.mobileMenuVisible;
  }

  onResize() {
    if (document.body.clientWidth > 769) {
      this.mobileMenuVisible = false;
    }
  }
}
