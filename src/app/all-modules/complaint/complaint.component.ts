import { Component, OnInit, HostListener, NgZone } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-complaint",
  templateUrl: "./complaint.component.html",
  styleUrls: ["./complaint.component.css"],
})
export class ComplaintComponent implements OnInit {
  public innerHeight: any;

  constructor(private ngZone: NgZone, private router: Router) {
    window.onresize = (e) => {
      this.ngZone.run(() => {
        this.innerHeight = window.innerHeight + "px";
      });
    };
    this.getScreenHeight();
  }

  getScreenHeight() {
    this.innerHeight = window.innerHeight + "px";
  }

  ngOnInit() {
    // Page Content Height

    if ($(".page-wrapper").length > 0) {
      var height = $(window).height();
      $(".page-wrapper").css("min-height", height);
    }

    // Page Content Height Resize

    $(window).resize(function () {
      if ($(".page-wrapper").length > 0) {
        var height = $(window).height();
        $(".page-wrapper").css("min-height", height);
      }
    });
  }
  onResize(event) {
    this.innerHeight = event.target.innerHeight + "px";
  }
}
