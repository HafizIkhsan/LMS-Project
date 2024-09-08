import updateCalendar from './calendar.js';
import profile from './profile-dropdown.js';
import materi from './materi.js'
import tugas from './tugas.js'
import button from './zoomwait.js';
import {form, submit} from '../matkul/file/comment.js'
import { close as importedClose, background as importedBackground, expand as importedExpand } from "../matkul/file/overlay.js";
import hamburger from './sidePanelMobile.js';


updateCalendar();
form( "../assets/Icon/Filled/Send-Active.svg", "../assets/Icon/Curved/Send.svg");
submit( '../assets/Profile-Pict/kwekkwek.jpeg');