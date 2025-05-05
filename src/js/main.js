import { setupMenuToggle } from './menu.js';
import { setupForm } from './form.js';
import { setupInfoPopups } from './info_popups.js';

$(document).ready(function () {
    setupMenuToggle();
    setupForm();
    setupInfoPopups();
  });