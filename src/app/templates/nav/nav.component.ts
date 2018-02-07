import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // navigacija

    $('.toggle-menu').click(function() {
      $('.menu-overlay').fadeIn();
      $('.menu').css('left', '0');
      $('body').addClass('inactive');
    });

    $('.menu-overlay, .fa-close').click(function() {
      $('.menu-overlay').fadeOut();
      $('.menu').css('left', '-110%');
      $('body').removeClass('inactive');
    });

    function close() {
      $('.menu-overlay').fadeOut();
      $('.menu').css('left', '-110%');
      $('body').removeClass('inactive');
      $('.menu li').removeClass('actv');
      $(this).addClass('actv');
    }

      $('.menu li').click(function() {
      $('.menu-overlay').fadeOut();
      $('.menu').css('left', '-110%');
      $('body').removeClass('inactive');
      $('.menu li').removeClass('actv');
      $(this).addClass('actv');
    });

  }




}
