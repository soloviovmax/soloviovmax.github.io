import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopSectionComponent } from './top-section/top-section.component';
import { LogoComponent } from './components/logo/logo.component';
import { ButtonComponent } from './components/button/button.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContainerComponent } from './components/container/container.component';
import { AboutUsCardComponent } from './about-us/about-us-card/about-us-card.component';
import { FeaturesComponent } from './features/features.component';
import { ServicesSectionComponent } from './services-section/services-section.component';
import { ServicesComponent } from './services/services.component';
import { ServicesIconComponent } from './components/services-icon/services-icon.component';
import { TeamComponent } from './team/team.component';
import { TeamCardComponent } from './components/team-card/team-card.component';
import { AboutPersonComponent } from './about-person/about-person.component';
import { FooterComponent } from './footer/footer.component';
import { GetInTouchComponent } from './get-in-touch/get-in-touch.component';
import { DragScrollModule } from 'ngx-drag-scroll';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopSectionComponent,
    LogoComponent,
    ButtonComponent,
    AboutUsComponent,
    ContainerComponent,
    AboutUsCardComponent,
    FeaturesComponent,
    ServicesSectionComponent,
    ServicesComponent,
    ServicesIconComponent,
    TeamComponent,
    TeamCardComponent,
    AboutPersonComponent,
    FooterComponent,
    GetInTouchComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    DragScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
