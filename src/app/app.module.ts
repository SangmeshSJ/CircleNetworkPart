import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvitationsComponent } from './Component/invitations/invitations.component';
import { FriendlistComponent } from './Component/friendlist/friendlist.component';
import { FooterComponent } from './Component/footer/footer.component';
import { RecommendationComponent } from './Component/recommendation/recommendation.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    InvitationsComponent,
    FriendlistComponent,
    FooterComponent,
    RecommendationComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
