import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // kode od SKILLS bara

    $(window).scroll(function () {
        bar();
    });
    bar();

    function bar() {

        var wh = $(window).height();
        var scroll = $(window).scrollTop();

        $('.blue-bar').each(function () {
            var position = $(this).offset().top;

            if (position < wh + scroll - 100) {

                $('.blue-bar').each(function () {
                    var skill = $(this).attr('data-skill');
                    $(this).find('.white-bar').css({'width': skill + '%'});
                });
            }
        });
    }


  }

}
