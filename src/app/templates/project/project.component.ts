import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    function resizeWraps() {
      $('.wrap').height($('.wrap').width() * (2 / 3));
      $('.wrap').each(function() {
        var width = $(this).width();
        var height = $(this).height();
        var that = this;
        var path = $(this).find('img').attr('src');
        $('<img src="' + path + '" />').on('load', function() {
          var imgWidth = $(this)[0].width;
          var imgHeight = $(this)[0].height;
          if (imgHeight > height) {
            imgHeight = imgHeight / (imgWidth / width);
            imgWidth = width;
            $(this).css('margin-top', -1 * (imgHeight - height) / 2);
          } else {
            imgWidth = imgWidth / (imgHeight / height);
            imgHeight = height;
            $(this).css('margin-left', -1 * (imgWidth - width) / 2);
          }
          $(that).empty();
          $(this).width(imgWidth).height(imgHeight).appendTo(that);
        });
      });
    }
    resizeWraps();
    $(window).on('resize', resizeWraps);
    $(window).on('load', resizeWraps);
  }

}
