import { Component, OnInit } from '@angular/core';
import { Theme } from '../../../shared/models/theme.model';
import { ThemeService } from '../../../core/services/theme.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-theme-page',
  templateUrl: './theme-page.component.html',
  styleUrls: ['./theme-page.component.css', '../events.component.css']
})
export class ThemePageComponent implements OnInit {

  form: FormGroup;

  filteredThemes: Theme[];
  themes: Theme[];

  title: string = "Create Theme";

  constructor(private formBuilder: FormBuilder,
    private themeService: ThemeService
    ) {
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
        "Id": [0],
        "Name": ["", Validators.maxLength(255)],
        "Description": ["", Validators.maxLength(500)]
      });

  }

  ngOnInit() {
    this.getThemes();
  }

  createNewTheme() {
    this.title = "Create Theme";
    this.initForm();
  }

  createUpdateTheme(theme: Theme) {
    this.title = "Update Theme";
    this.form = this.formBuilder.group({
      "Id": [theme.Id],
      "Name": [theme.Name, Validators.maxLength(255)],
      "Description": [theme.Description, Validators.maxLength(500)]
    });
  }

  saveTheme() {
    if (this.form.controls.Name.pristine || this.form.controls.Description.pristine) {
      return;
    }

    let theme: Theme = this.form.value;
    if (theme.Name.length === 0 || theme.Description.length === 0) {
      return;
    }
    this.themeService.saveTheme(theme).subscribe(x => {
      this.getThemes();
    });
  }

  deleteTheme(theme: Theme) {
    this.themeService.deleteTheme(theme).subscribe(x => {
      this.getThemes();
    });
  }

  getThemes() {
    this.themeService.getAllLocations().subscribe(x => {
      this.themes = x;
      this.filteredThemes = this.themes;
    });
  }

  search(searchValue) {
    this.filteredThemes = this.themes.filter(x => x.Name.toLowerCase().includes(searchValue.toLowerCase())
      || x.Description.toLowerCase().includes(searchValue.toLowerCase()));
  }

}
