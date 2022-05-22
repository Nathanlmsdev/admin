import { Component, OnInit } from "@angular/core";

declare var $: any;

@Component({
  selector: "app-trainer-profile",
  templateUrl: "./trainer-profile.component.html",
  styleUrls: ["./trainer-profile.component.css"],
})
export class TrainerProfileComponent implements OnInit {
  constructor() {}
  ngOnInit() {
    $(document).ready(function () {
      $(".select2").select2();
    });
    function readURL(input) {
      if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
          $("#blah").attr("src", e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
      }
    }

    $("#imgInp").change(function () {
      readURL(this);
    });
  }
}
