// on load event
function StartPage() {
  $('#page-container-after-click').hide();
  $("#tabs3").hide();
}

/* -------------------------------------- */
/* plus dropDown Menu */

// toggle between hiding and showing the dropdown plus content
function DropDownFuncAdd() {
  document.getElementById("add-app-dropdown").classList.toggle("show");
}

// Close the plus dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.plus')) {
    var dropdowns = document.getElementsByClassName("dropdown-plus-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

//Dialog
$(function () {
  $("#plus-dialg").dialog({
    autoOpen: false,
    title: "New App Wizard",
    resizeable: false,
  });
  $("#open-plus-dialog").click(function () {
    $("#plus-dialg").dialog("open");
    // $("div.ui-dialog").show();
  });
});

//Dialog tabs
$(function () {
  $("#tabs").tabs();
});

/* -------------------------------------- */
/* Dialog Content */

//add team func 
let team_counter = 0;
$(document).ready(function () {
  $("#btn-add-team-mem").click(function () {
    if (team_counter == 0) {
      $("table#add-team-mem")
        .append("<tr id='head-tr'><th>Email</th><th>Can edit</th><th>Remove</th></tr>");
    }
    if (team_counter < 6) {
      $("table#add-team-mem")
        .append("<tr id='t" + team_counter + "'><td class='center-mid'><input class='code-input-w3 code-input-w1' type='text'id='team-email' name='team-email' placeholder='Enter Email address'></td><td class='center-mid'><input type='checkbox' class='chck-bx' name='can-edit'></td><td  id='trash-td" + team_counter + "'  class='center-mid'><button class='no-border , remv-btn-team' onclick='removeFunc(" + team_counter + ")'><span class='fas fa-trash-alt trash no-border'></span></button></td></tr>");
    }
    team_counter++;
    if (team_counter == 7) {
      alert("Sorry, you have reached the maximum number of team member!");
    }
  });
});

//remove team func
function removeFunc(team_counter2) {
  $("#t" + team_counter2).remove();
  team_counter = team_counter - 1;
};

/* -------------------------------------- */
//Theme tabs func
$(function () {
  $("#tabs2").tabs();
});

/* -------------------------------------- */
//next - back
inx = 0
if (inx == -1) {
  inx = 0
}

//next btn
$(document).ready(function () {
  $("#btn-next").click(function () {
    let x = document.forms["form-name"]["name"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
    if (x != "") {
      $('.dialog-main-tabs-width')[inx + 1].click();
      inx++;
    }
  });
});

//back btn
$(document).ready(function () {
  $("#btn-back").click(function () {
    $('.dialog-main-tabs-width')[inx - 1].click();
    inx--;
  });
});

/* -------------------------------------- */
//when user click on Create The App Now to Add App
let counterAddApp = 1;
$(document).ready(function () {
  $("#btn-create-app").click(function () {
    $("div#app-left").append(
      `<p class='left-para' id='app` + counterAddApp + `'>
      <i id='app-arrow` + counterAddApp + `' onclick='arrow_click(` + counterAddApp + `)' class='fas fa-caret-right'></i> 
      <i class='fa-solid fa-atom'></i>
      <button
      onclick='btnExpChangeFunc(` + counterAddApp + `)' id='btn-app-exp` + counterAddApp + `'
      class='app-exp-btn'> App` + counterAddApp + `</button>
      <br>
      </p>`
    );
    counterAddApp++;
    $(".ui-dialog").hide();

  });
});

/* -------------------------------------- */
//arrow app click
function arrow_click(arrowcont) {
  $('#btn-app-exp' + arrowcont).click();
}


/* -------------------------------------- */
//when user click on APP
let btn_click = true;
let arrowmodcont = 1;
function btnExpChangeFunc(counterAddApp2) {

  if (btn_click == true) {
    $("#app-arrow" + counterAddApp2).css({ "transform": "rotate(90deg)" });
    $("#btn-app-exp" + counterAddApp2).css({ "background-color": "blue", "color": "white" });
    $("p#app" + counterAddApp2).append(
      `<span class='app-module-btn-container' id='btn-module-exp` + counterAddApp2 + `'> <i onclick='arrow_module_click(`+ counterAddApp2 +`)' id='module-arrow` + counterAddApp2 + `' class='fas fa-caret-right'></i> <i
        class='fas fa-box'></i><button id="btna-module-exp`+ counterAddApp2 +`" onclick='btnModuleChangeFunc(`+ counterAddApp2 +`)' class='app-module-btn'>
        Default Module</button></span>`
    )
    $('#page-container-after-click').hide();
    $("#tabs3").show();
    btn_click = false;
    stop;
  }
  else {
    $("#btn-app-exp" + counterAddApp2).css({ "background": "none", "color": "black" });
    $("#tabs3").hide();
    $('#page-container-after-click').hide();
    $("#btn-module-exp" + counterAddApp2).remove();
    $("#app-arrow" + counterAddApp2).css({ "transform": "rotate(0deg)" });
    $("div.group-grid-item").remove();
    x = 1;
    counterAddpage = 1;
    counterAddgroup = 1;
    arrowmodcont = 1;
    btn_click = true;
    stop;
  }
};

/* -------------------------------------- */
//when user click on Default Module
let btn_module_click = true;
function btnModuleChangeFunc(counterModule2) {

  if (btn_module_click == true) {
    $("#module-arrow" + counterModule2).css({ "transform": "rotate(0deg)" });
    $('.app-group-btn-container').hide();
    btn_module_click = false;
    stop;
  }
  else {
    $('.app-group-btn-container').show();
    $("#module-arrow" + counterModule2).css({ "transform": "rotate(90deg)" });
    btn_module_click = true;
    stop;
  }
};

//Default Module arrow click
function arrow_module_click(arrowcont) {
  $('#btna-module-exp'+ arrowcont).click();
}

/* -------------------------------------- */
//when user click on new group to Add Group
let counterAddgroup = 1;
let counterAddpage = 1;
$(document).ready(function () {
  $("#add-new-group").click(function () {
    $("div#group-grid-container").prepend(
      `<div class="group-grid-item" id="group-` + counterAddgroup + `">
      <div class="group-container">
          <div class="group-header-flex-container">
              <i class="fa-solid fa-arrow-left arrow-left"></i> 
              <p class="group-header-name ">Group `+ counterAddgroup + `</p>
              <i class="fa-solid fa-arrow-right arrow-right"></i>
          </div>
          <hr>
          <div class="page-grid-container" id="page-container`+ counterAddpage + `"></div>
          <button id="add-new-page`+ counterAddpage + `" class="new-page-btn" onclick="AddPageFunc(` + counterAddpage + `)"> <i
                  class="fa-solid fa-2xl circle-plus-page fa-circle-plus"></i> New
              Page</button>
          <hr>
          <div><button class='no-border , remv-btn-group' onclick='removeGroupFunc(` + counterAddgroup + `)'><span
                      class='fas fa-trash-alt trash no-border'></span></button></div>
      </div>
  </div>`
    );
    $("span.app-module-btn-container").append(
      `<br id='br-group-exp` + counterAddgroup + `'>
      <span id='container-group-exp` + counterAddgroup + `' class='app-group-btn-container'>
      <i onclick='arrow_group_click(` + counterAddgroup + `)' id='group-arrow` + counterAddgroup + `' class='fas fa-caret-right'></i> 
      <i class='fas fa-project-diagram'></i><button onclick='btngroupChangeFunc(`+ counterAddgroup + `)' id='btn-group-exp` + counterAddgroup + `'class='app-group-btn'>
    Groupe`+ counterAddgroup + `</button>
    <span id='container-all-pages-exp` + counterAddgroup + `'></span>
    </span>`
    );
    $("#module-arrow" + counterAddgroup).css({ "transform": "rotate(90deg)" });
    counterAddgroup++;
    counterAddpage++;
  });

});

//remove group func
function removeGroupFunc(counterAddgroup2) {
  $("#group-" + counterAddgroup2).remove();
  $("#container-group-exp" + counterAddgroup2).remove();
  $("br#br-group-exp" + counterAddgroup2).remove();
  // counterAddgroup = counterAddgroup - 1;
}

/* -------------------------------------- */
//group arrow click
function arrow_group_click(arrowcont) {
  $('#btn-group-exp' + arrowcont).click();
}

/* -------------------------------------- */
//When User Click on new page to Add Page
let pageNumbers = 1;
function AddPageFunc(counterAddpage2) {
  $("div#page-container" + counterAddpage2).append(
    `<div class="page-grid-item">page</div>`
  )
  $("span#container-all-pages-exp" + counterAddpage2).append(
    `<br id='br-page-exp` + pageNumbers + `'> 
    <span id='container-page-exp` + pageNumbers + `' class='app-page-btn-container'>
    <i onclick='arrow_page_click(` + pageNumbers + `)' id='page-arrow` + pageNumbers + `' class='fas fa-caret-right'></i>
    <i class="fas fa-pager"></i>
    <button onclick='btnPageChangeFunc(` + pageNumbers + `)' id='btn-page-exp` + pageNumbers + `' class='app-group-btn'>Page</button>
    </span>
    <span id='container-page-content` + pageNumbers + `'></span>
    `
  );
  $("#group-arrow" + counterAddpage2).css({ "transform": "rotate(90deg)" });
  pageNumbers = pageNumbers + 1;
}

/* -------------------------------------- */
//page arrow click
function arrow_page_click(arrowcont) {
  $('#btn-page-exp' + arrowcont).click();
}

/* -------------------------------------- */
//when user click on Group
let btn_group_click = true;
function btngroupChangeFunc(counterGroupExp) {

  if (btn_group_click == true) {
    $("#group-arrow" + counterGroupExp).css({ "transform": "rotate(0deg)" });
    $("#container-all-pages-exp" + counterGroupExp).hide();
    $('#page-container-after-click').hide();
    // $('#tabs3').hide();
    btn_group_click = false;
    stop;
  }
  else {
    $("#group-arrow" + counterGroupExp).css({ "transform": "rotate(90deg)" });
    $("#container-all-pages-exp" + counterGroupExp).show();
    // $('#page-container-after-click').show();
    $('#tabs3').show();
    btn_group_click = true;
    stop;
  }
};

/* -------------------------------------- */
//When user Click on page
let btn_page_click = true;
let table_click = true;
let pagesIDcont = 1;
// let pagecolcont = 1;
function btnPageChangeFunc(counterPageExp) {
  $("#tabs3").hide();
  $('#container-page-content' + counterPageExp).show();
  if (btn_page_click == true) {



    if (table_click == true) {
      $('div#tabs5').append(
        `
      <div id="pages-id`+ pagesIDcont + ` ">
      <div id="tabs-1Fields" class="" aria-hidden="false">
      <table class="page-fields-table">
          <tr class="background-grey">
              <th id="field-page-first" colspan="5">
                  <form action="">
                      <fieldset class="no-border"><label id="page-field-label">Fields</label>
                      </fieldset>
                      <fieldset class="no-border"><input class="code-input-w2" id="page-field-input"
                              type="text" value="Page"></fieldset>
                  </form>
              </th>
          </tr>
          <tr id="field-page-secound" class="background-white">
              <th class="th-page">Name</th>
              <th class="th-page">DataType</th>
              <th class="th-page">Required</th>
              <th class="th-page">Reorder</th>
              <th class="th-page">Delete</th>
          </tr>
          <tr class="background-white">
              <td id="field-record" colspan="5">No records found.</td>
          </tr>



          <tfoot>
              <tr class="background-grey">
                  <td id="add-field" colspan="5"> <button
                          class="footer-plus-btn no-border add-field-btn" id="btn-add-field"
                          onclick="addfieldleft(`+ counterPageExp + `)"><i
                              class="plus-white fas fa-plus"></i>Add
                          Field</button></td>
              </tr>
          </tfoot>
      </table>
  </div>

  <div id="tabs-2Design" aria-hidden="true" style="display: none;">
      <div>
      <table class="page-rec-table">
              <thead>
              <tr>
                  <th id="data-header-table" class="background-grey page-rec-data-t" colspan="4">Page Record</th>
              </tr>
              </thead>
              <tr>
                <td class="table-td-field">Field</th>
                <td><input class="table-input-field" type="text" id="" name="icon-background"></th>
                <td class="table-td-field">Field</th>
                <td><input class="table-input-field" type="text" id="" name="icon-background"></th>
              </tr>
              <tr>
                <td class="table-td-field">Field</th>
                <td><input class="table-input-field" type="text" id="" name="icon-background"></th>
                <td class="table-td-field">Field</th>
                <td></th>
              </tr>
          </table>
 
          <table class="page-data-table" >
          <thead>
              <tr>
                  <th colspan='100' id="data-header-table" class="background-grey page-rec-data-t">Page Data</th>
              </tr>
          </thead>
              <tr id="page-data-table-tr">
                  <td id="data-data-table" class="background-white page-rec-data-t">#</td>
              </tr>
              <tr></tr>
          </table>
          <div id="right-field-tool">
              <table id="basic-teble-design">
                  <tr id="tr-header-design-page-record">
                      <th colspan="2">Basic</th>
                  </tr>
                  <tr class="icon-name-contaner-page-rec">
                      <td class="center-mid"><img src="images/icon/txt.png" height="40"> <br>Text</td>
                      <td class="center-mid"><img src="images/icon/pass.png" height="40"><br> Password
                      </td>
                  </tr>
                  <tr class="icon-name-contaner-page-rec">
                      <td class="center-mid"><img src="images/icon/txtarea.png"
                              height="40"><br>TextArea</td>
                      <td class="center-mid"><img src="images/icon/num.png" height="40"><br>Number
                      </td>
                  </tr>
                  <tr class="icon-name-contaner-page-rec">
                      <td class="center-mid"><img src="images/icon/phone.png" height="40"><br>Phone
                      </td>
                      <td class="center-mid"><img src="images/icon/email.png" height="40"><br>Email
                      </td>
                  </tr>
                  <tr class="icon-name-contaner-page-rec">
                      <td class="center-mid"><img src="images/icon/url.png" height="40"><br>URL</td>
                      <td class="center-mid"><img src="images/icon/chcbox.png"
                              height="40"><br>Checkbox</td>
                  </tr>
                  <tr class="icon-name-contaner-page-rec">
                      <td class="center-mid"><img src="images/icon/filestamp.png" height="40"><br>File
                      </td>
                      <td class="center-mid"><img src="images/icon/date.png" height="40"><br>Date</td>
                  </tr>
                  <tr class="icon-name-contaner-page-rec">
                      <td class="center-mid"><img src="images/icon/timestamp.png"
                              height="40"><br>TimeStamp</td>
                      <td class="center-mid"><img src="images/icon/time.png" height="40"><br>Time</td>
                  </tr>
                  <br>
              </table>
          </div>
      </div>
  </div>

  <div id="tabs-3Source-Code" aria-hidden="true" style="display: none;">
      <select class="tech-source-code" name="tech-source-code" id="tech-source-code">
          <option value="-" selected="selected">-</option>
          <option value="Java-SE" disabled="disabled">Java SE</option>
          <option value="spring-boot" disabled="disabled">Spring Boot</option>
          <option value="spring-mvc" disabled="disabled">ui.jQuery.js</option>
          <option value="Spring-MVC" disabled="disabled">Spring MVC</option>
          <option value="SmartCloud-Web">SmartCloud Web</option>
      </select>
      <button class="footer-plus-btn no-border copy-btn" id="copy-btn" onclick="">Copy</button>
      <hr>
  </div>

  <div id="tabs-4Page-Properties" aria-hidden="true" style="display: none;">
      <div id="tabs-page-properties" class="page-properties-container">
          <nav class="properties-accordion arrows code-input-w3">
              <input type="radio" name="accordion" id="c1" />
              <section class="prop-accordion-box">
                  <label class="prop-accordion-box-title" for="c1">Main</label>
                  <label class="prop-accordion-box-close" for="acc-close"></label>
                  <div class="prop-accordion-box-content">
                      <table class="page-prop-table">
                          <form name="form-name3" action="" class="styl-form" method="post">
                              <tr>
                                  <th><label for="name3">Name</label></th>
                                  <td><input type="text" id="name3" name="name3" value="page"
                                          required>
                                  </td>
                                  <th> <label for="icon-page">Icon</label></th>
                                  <td> <input type="text" id="icon-page" name="icon-page"
                                          placeholder=""></td>
                                  <th> <label for="index-page">Index</label></th>
                                  <td> <input type="text" id="index-page" name="index-page" value="0">
                                  </td>
                              </tr>
                          </form>
                      </table>
                  </div>
              </section>
              <input type="radio" name="accordion" id="c2" />
              <section class="prop-accordion-box">
                  <label class="prop-accordion-box-title" for="c2">Theme</label>
                  <label class="prop-accordion-box-close" for="acc-close"></label>
                  <div class="prop-accordion-box-content">
                      <table class="page-prop-table">
                          <form name="form-page-data" action="" class="styl-form" method="post">
                              <tr>
                                  <th><label for="max-rec-count">Max Record Count</label></th>
                                  <td><input type="text" id="max-rec-count" name="max-rec-count"
                                          value="0">
                                  </td>
                                  <th> <label for="view-col-count">View Columns Count</label></th>
                                  <td> <input type="text" id="view-col-count" name="view-col-count"
                                          value="4"></td>
                              </tr>
                          </form>
                      </table>
                  </div>
              </section>
              <input type="radio" name="accordion" id="c3" />
              <section class="prop-accordion-box">
                  <label class="prop-accordion-box-title" for="c3">Advance</label>
                  <label class="prop-accordion-box-close" for="acc-close"></label>
                  <div class="prop-accordion-box-content">
                      <table>
                          <form action="" class="styl-form">
                              <tr>
                                  <th><label for="">Include Template</label></th>
                                  <td> <input type="checkbox" class="chck-bx" name=""></td>
                                  <th><label for="">Include Form</label></th>
                                  <td> <input type="checkbox" class="chck-bx" name=""></td>
                                  <th><label for="">Include Actions</label></th>
                                  <td> <input type="checkbox" class="chck-bx" name=""></td>
                              </tr>
                              <tr>
                                  <th><label for="">Include Table</label></th>
                                  <td> <input type="checkbox" class="chck-bx" name=""></td>
                                  <th><label for="">Include Binding</label></th>
                                  <td> <input type="checkbox" class="chck-bx" name=""></td>
                                  <th><label for="">Include In Menu</label></th>
                                  <td> <input type="checkbox" class="chck-bx" name=""></td>
                              </tr>
                              <tr>
                                  <th><label for="">Include View</label></th>
                                  <td> <input type="checkbox" class="chck-bx" name=""></td>
                                  <th><label for="">Include Controller</label></th>
                                  <td> <input type="checkbox" class="chck-bx" name=""></td>
                                  <th><label for="">Include Model</label></th>
                                  <td> <input type="checkbox" class="chck-bx" name=""></td>
                              </tr>
                              <tr>
                                  <th><label for="">Allow Delete</label></th>
                                  <td> <input type="checkbox" class="chck-bx" name=""></td>
                                  <th><label for="">Allow Add</label></th>
                                  <td> <input type="checkbox" class="chck-bx" name=""></td>
                                  <th><label for="">Allow Update</label></th>
                                  <td> <input type="checkbox" class="chck-bx" name=""></td>
                              </tr>
                              <tr>
                                  <th><label for="">Allow Manage</label></th>
                                  <td colspan="5"> <input type="checkbox" class="chck-bx" name="">
                                  </td>
                              </tr>
                          </form>
                      </table>
                  </div>
              </section>
              <input type="radio" name="accordion" id="c4" />
              <section class="prop-accordion-box">
                  <label class="prop-accordion-box-title" for="c4">General</label>
                  <label class="prop-accordion-box-close" for="acc-close"></label>
                  <div class="prop-accordion-box-content">
                      <table class="page-prop-table">
                          <form action="" class="styl-form">
                              <tr>
                                  <th><label for="">UID</label></th>
                                  <td> <input class="code-input-w1" type="text" id="" name=""
                                          value="bhd3-dh5j5-5gbnk5twdl9"></td>
                                  <th><label for="">Name</label></th>
                                  <td><input class="code-input-w1" type="text" id="" name=""
                                          value="App1">
                                  </td>
                              </tr>
                              <tr>
                                  <th><label for="">Display Name</label></th>
                                  <td><input class="code-input-w1" type="text" id="" name=""></td>
                                  <th rowspan="2"><label for="">Discreption</label> </th>
                                  <td rowspan="2"><textarea id="" name="" rows="4"
                                          cols="20"></textarea></td>
                              </tr>
                              <tr>
                                  <th><label for="">Summary</label></th>
                                  <td><textarea id="" name="" rows="4" cols="20"></textarea></td>
                              </tr>
                          </form>
                      </table>
                  </div>
              </section>

              <input type="radio" name="accordion" id="acc-close" />
          </nav>
      </div>
  </div>
  </div>
      `
      );
      table_click = false;
    }
    pagesIDcont++;
    $('#page-container-after-click').show();
    $("#page-arrow" + counterPageExp).css({ "transform": "rotate(90deg)" });
    btn_page_click = false;
    stop;
  }
  else if (btn_page_click == false) {
    $('#container-page-content' + counterPageExp).hide();
    $('#page-container-after-click').hide();
    $("#page-arrow" + counterPageExp).css({ "transform": "rotate(0deg)" });
    $("#tabs3").show();
    btn_page_click = true;
    stop;
  }
  counterPageExp++;
};

/* -------------------------------------- */
//app main tabs func
$(function () {
  $("#tabs3").tabs();
});

//properties-collapsible
var coll = document.getElementsByClassName("properties-collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

/* -------------------------------------- */
//
$(function () {
  $("#tabs4").tabs();
});

/* -------------------------------------- */
//page after click
$(function () {
  $("#tabs5").tabs();
});

/* -------------------------------------- */
//when user click on add field to add field
let pagefieldidcont = 1;
function addfieldleft(fieldcounter2) {
  $('#field-record').hide();
  $('.page-fields-table').append(
    `
    <tr id= "tr-pagefield`+ fieldcounter2 + `">
            <th class="th-page "><input class="put-tab-header3 code-input-w50 put-tab-header2"
                    type="text" id="" name=""></th>
            <th class="th-page">
                <select class="field-page" name="field-page" id="field-page">
                    <option value="Binary" selected="selected">Binary</option>
                    <option value="Boolean">Boolean</option>
                    <option value="Byte">Byte</option>
                    <option value="Date">Date</option>
                    <option value="Double">Double</option>
                    <option value="Email">Email</option>
                    <option value="Float">Float</option>
                    <option value="Integer">Integer</option>
                    <option value="Month">Month</option>
                    <option value="Password">Password</option>
                    <option value="String">String</option>
                    <option value="Telephone">Telephone</option>
                    <option value="Text">Text</option>
                    <option value="Time">Time</option>
                    <option value="Timestamp">Timestamp</option>
                    <option value="URL">URL</option>
                </select>
            </th>
            <th class="th-page"><input type="checkbox" class="chck-bx" name="Required"></th>
            <td id='arrow-up-down-td` + fieldcounter2 + `' class='center-mid'><button
                    class='no-border , remv-btn-team'
                    onclick=''><span
                        class='fas fa-arrow-up blue-arrow no-border'></span><span
                        class='fas fa-arrow-down blue-arrow no-border'></span></button></td>
            <td id='trash-td` + fieldcounter2 + `' class='center-mid'><button
                    class='no-border , remv-btn-team'
                    onclick='removeFieldFunc(` + fieldcounter2 + `)'><span
                        class='fas fa-trash-alt trash no-border'></span></button></td>
     </tr>
    `
  );
  $("span#container-page-content" + fieldcounter2).append(
    `<span id='field-left` + pagefieldidcont + `'>
    <br><i class='fas fa-list red-list app-field-btn-container'></i>
    <button onclick='' id='btn-field`+ pagefieldidcont + `' class='app-group-btn'>Field</button></span>`
  );
  $('#page-data-table-tr').append(
    `
    <td id="data-data-table" class="background-white page-rec-data-t">Field<br>
                  <input class="table-input-field" type="text" id="" name="">
                  </td>
    `
  );
  fieldcounter++;
  pagefieldidcont = pagefieldidcont + 1;
}

//remove field btn
function removeFieldFunc(pagefield2) {
  $("#tr-pagefield" + pagefield2).remove();
  $('#field-left' + pagefield2).remove();
  pagefield2 = pagefield2 - 1;
}
/* -------------------------------------- */
//when user click on field
let btn_field_click = true;
function btnfieldChangeFunc(counterGroupExp) {

  if (btn_field_click == true) {

    btn_field_click = false;
    stop;
  }
  else {

    btn_field_click = true;
    stop;
  }
};


/* -------------------------------------- */
//dialog 2 import YAML
$(function () {
  $("#wrapper-yaml-dialog").dialog({
      modal: true,
      autoOpen: false,
      title: "Import YAML",
      width: 300,
      height: 150
  });
  $("#open-yaml-dialog").click(function () {
      $('#wrapper-yaml-dialog').dialog('open');
  });
});

/* -------------------------------------- */
//file new app
function app2click() {
  $('#open-plus-dialog').click();
}
