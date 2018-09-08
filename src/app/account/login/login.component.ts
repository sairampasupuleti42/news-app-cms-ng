import { Component, OnInit, Inject, ElementRef, Renderer2 } from '@angular/core';
import { DOCUMENT, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  customLayout: boolean;
  constructor(@Inject(DOCUMENT) private dom: Document,
    private meta: Meta,
    private hostElement: ElementRef,
    private renderer: Renderer2
  ) {
    this.meta.addTag({ name: 'description', content: 'PSLV TV - Admin area' });
    this.meta.addTag({ name: 'author', content: 'sairam' });
    this.meta.addTag({ name: 'keywords', content: 'PSLV Live TV,PSLV TV' });
    this.dom.body.classList.add('login-page');
    this.dom.title = "Login to account | PSLV TV";
    const header = this.renderer.selectRootElement('.main-header');
    const footer = this.renderer.selectRootElement('footer');

    const sidebar = this.renderer.selectRootElement('.main-sidebar');
    const wrap = this.dom.querySelector('mk-layout-wrapper');
    wrap.classList.add('sidebar-collapse');
    wrap.classList.remove('sidebar-mini');
    this.dom.body.style.overflowY = 'hidden';
    //this.dom.body.removeChild(header);
    // this.dom.body.removeChild(sidebar);
    // this.dom.body.removeChild(footer);
  }

  ngOnInit() {
    this.customLayout = true;


  }

}
