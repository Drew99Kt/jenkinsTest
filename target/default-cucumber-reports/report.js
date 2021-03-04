$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/AP_verifyDressesPageFeatures.feature");
formatter.feature({
  "name": "Verify Dresses page elements and buttons",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "User is already on automation practice homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "AP_Login_StepDefinition.user_is_already_on_automation_practice_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verify thre Subcategory buttons",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Testing"
    }
  ]
});
formatter.step({
  "name": "user clicks on dresses",
  "keyword": "When "
});
formatter.match({
  "location": "AP_verifyDressesPageFeatures.user_clicks_on_dresses()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "successfully verifies three sub category buttons exist",
  "keyword": "Then "
});
formatter.match({
  "location": "AP_verifyDressesPageFeatures.successfully_verifies_three_sub_category_buttons_exist()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
});