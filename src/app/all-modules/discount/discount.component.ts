import { Component, OnInit, HostListener, NgZone } from "@angular/core";
import { Router } from "@angular/router";

@HostListener("window: resize", ["$event"])
@Component({
  selector: "app-discount",
  templateUrl: "./discount.component.html",
  styleUrls: ["./discount.component.css"],
})
export class DiscountComponent implements OnInit {
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
    this.router.navigateByUrl("/discount/discount-generate-code");
  }
  onResize(event) {
    this.innerHeight = event.target.innerHeight + "px";
  }
}