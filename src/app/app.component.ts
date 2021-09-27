import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from './user.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // servis koji vraca array user[0:ime,1:pw]
  user;
  constructor(service: UserService) {
    this.user = service.getUser();
  }

  name = 'Hash&Go';
  username: string;
  password: string;

  msg_1: string = 'Uspesno!';
  msg_2: string = 'Greska!';

  // provera da li je servis vracen
  ngOnInit() {
    console.log(this.user[1]);
  }

  // klikom na LogIn se proverava predeterminisana sifra
  LogInUser() {
    if (this.username == this.user[0] && this.password == this.user[1]) {
      console.log('Uspesno!');
      alert(this.msg_1);
      //this.router.navigate(['/login']);
    } else {
      alert(this.msg_2);
    }
  }
}
// Posto sam naisao na problem routinga (kako bih povezivao stranice zapravo) i bez temeljnog prelazenja nisam uspeo
// na "brzak" da resim , imao sam gresku za greskom, odlucio sam da predstavim sta sam naucio do sad, a ostalo vreme
// iskoristim za dalje ucenje i pripremu za intervju.

// Kako je Angular most koji spaja UI prezentaciju sa JS kodom, to sam pokusao da simuliram na ovoj stranici i time
// pokusam da pokrijem znanje, koje bi se preslikalo na ostale stranice.

// Povezao sam par tipova direktiva, koristio servise koji komuniciraju neki array sa korisnikom, takodje pozivanje eventa
// za login sa alertom.
// CSS je jednsotavan ali je responsive, i takodje sam pokusao da predstavim komponente koje mogu da budu reusable, jer
// verujem da su to neke osnove i glavne karakteristike ovog frameworka.

// informisao sam se kako bih odradio ostale delove, kao i project tour i isplanirao, pa bih o tome diskutovao sa vama.
