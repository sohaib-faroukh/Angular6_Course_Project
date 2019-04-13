import { Component, OnInit, OnDestroy } from "@angular/core";
import { LoginServicesService } from "src/app/LoginServices/login-services.service";
import { ActivatedRoute, Router } from "@angular/router";
import { User } from "src/app/LoginServices/User";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  User: User = new User();
  url: string;

  prevUrl: string;
  constructor(
    private service: LoginServicesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(p => {
      this.url = p.get("returnedUrl");
      this.prevUrl = p.get("prevUrl");
    });
  }

  LogIn() {
    let url = this.service.redirectUrl;
    this.service.login(this.User.Username, this.User.password).subscribe(
      data => {
        if (data) {
          this.router.navigate([url]);
        } else {
          this.router.navigate(["/login"]);
        }
      },
      err => {

        alert("connection failed or Invalid username or password ... "+err.statusText);
        this.router.navigate(["/login"]);
      }
    );

    //  this.router.navigate(['/dashboard']);
  }
}
