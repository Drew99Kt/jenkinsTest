$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/AP_HomePageSearch.feature");
formatter.feature({
  "name": "Verify HomePage Search Functionalities",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is already on automation practice homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "AP_Login_StepDefinition.user_is_already_on_automation_practice_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify search term on home page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "User enters a search term",
  "keyword": "When "
});
formatter.match({
  "location": "AP_HomePageSearch_StepDefinition.user_enters_a_search_term()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on search button",
  "keyword": "And "
});
formatter.match({
  "location": "AP_HomePageSearch_StepDefinition.user_clicks_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Search box should contain the search term",
  "keyword": "Then "
});
formatter.match({
  "location": "AP_HomePageSearch_StepDefinition.search_box_should_contain_the_search_term()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "safheihgrs",
  "keyword": "And "
});
formatter.match({
  "location": "AP_HomePageSearch_StepDefinition.safheihgrs()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is already on automation practice homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "AP_Login_StepDefinition.user_is_already_on_automation_practice_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search dresses and verify Blouse is an option",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "User enters \"dresses\" in search engine",
  "keyword": "When "
});
formatter.match({
  "location": "AP_HomePageSearch_StepDefinition.user_enters_in_search_engine(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on search button",
  "keyword": "And "
});
formatter.match({
  "location": "AP_HomePageSearch_StepDefinition.user_clicks_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be on Search - My Store page",
  "keyword": "Then "
});
formatter.match({
  "location": "AP_HomePageSearch_StepDefinition.user_should_be_on_Search_My_Store_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Blouse option should be displayed",
  "keyword": "And "
});
formatter.match({
  "location": "AP_HomePageSearch_StepDefinition.blouse_option_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/AP_Login.feature");
formatter.feature({
  "name": "Verify Login/Sign up functionalities",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Create/register four accounts successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@practice_scenario_outline"
    }
  ]
});
formatter.step({
  "name": "User enters \"\u003cemail_address\u003e\"  in email Address Text Box",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks on Create an Account button",
  "keyword": "And "
});
formatter.step({
  "name": "User should be on Create an Account Page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email_address"
      ]
    },
    {
      "cells": [
        "park@gmail.com"
      ]
    },
    {
      "cells": [
        "sim@gmail.com"
      ]
    },
    {
      "cells": [
        "me@gmail.com"
      ]
    },
    {
      "cells": [
        "moose@gmail.com"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is already on automation practice homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "AP_Login_StepDefinition.user_is_already_on_automation_practice_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on sign in button",
  "keyword": "When "
});
formatter.match({
  "location": "AP_Login_StepDefinition.user_clicks_on_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"mustakil@gmail.com\" in Email Address Text Box",
  "keyword": "And "
});
formatter.match({
  "location": "AP_Login_StepDefinition.user_enters_in_Email_Address_Text_Box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Create an Account button",
  "keyword": "And "
});
formatter.match({
  "location": "AP_Login_StepDefinition.user_clicks_on_Create_an_Account_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be on Create an Account Page",
  "keyword": "Then "
});
formatter.match({
  "location": "AP_Login_StepDefinition.user_should_be_on_Create_an_Account_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Create/register four accounts successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@practice_scenario_outline"
    }
  ]
});
formatter.step({
  "name": "User enters \"park@gmail.com\"  in email Address Text Box",
  "keyword": "When "
});
formatter.match({
  "location": "AP_HomePageSearch_StepDefinition.user_enters_in_email_Address_Text_Box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Create an Account button",
  "keyword": "And "
});
formatter.match({
  "location": "AP_Login_StepDefinition.user_clicks_on_Create_an_Account_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be on Create an Account Page",
  "keyword": "Then "
});
formatter.match({
  "location": "AP_Login_StepDefinition.user_should_be_on_Create_an_Account_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is already on automation practice homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "AP_Login_StepDefinition.user_is_already_on_automation_practice_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on sign in button",
  "keyword": "When "
});
formatter.match({
  "location": "AP_Login_StepDefinition.user_clicks_on_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"mustakil@gmail.com\" in Email Address Text Box",
  "keyword": "And "
});
formatter.match({
  "location": "AP_Login_StepDefinition.user_enters_in_Email_Address_Text_Box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Create an Account button",
  "keyword": "And "
});
formatter.match({
  "location": "AP_Login_StepDefinition.user_clicks_on_Create_an_Account_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be on Create an Account Page",
  "keyword": "Then "
});
formatter.match({
  "location": "AP_Login_StepDefinition.user_should_be_on_Create_an_Account_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Create/register four accounts successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@practice_scenario_outline"
    }
  ]
});
formatter.step({
  "name": "User enters \"sim@gmail.com\"  in email Address Text Box",
  "keyword": "When "
});
formatter.match({
  "location": "AP_HomePageSearch_StepDefinition.user_enters_in_email_Address_Text_Box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Create an Account button",
  "keyword": "And "
});
formatter.match({
  "location": "AP_Login_StepDefinition.user_clicks_on_Create_an_Account_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be on Create an Account Page",
  "keyword": "Then "
});
formatter.match({
  "location": "AP_Login_StepDefinition.user_should_be_on_Create_an_Account_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is already on automation practice homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "AP_Login_StepDefinition.user_is_already_on_automation_practice_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on sign in button",
  "keyword": "When "
});
formatter.match({
  "location": "AP_Login_StepDefinition.user_clicks_on_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"mustakil@gmail.com\" in Email Address Text Box",
  "keyword": "And "
});
formatter.match({
  "location": "AP_Login_StepDefinition.user_enters_in_Email_Address_Text_Box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Create an Account button",
  "keyword": "And "
});
formatter.match({
  "location": "AP_Login_StepDefinition.user_clicks_on_Create_an_Account_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be on Create an Account Page",
  "keyword": "Then "
});
formatter.match({
  "location": "AP_Login_StepDefinition.user_should_be_on_Create_an_Account_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Create/register four accounts successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@practice_scenario_outline"
    }
  ]
});
formatter.step({
  "name": "User enters \"me@gmail.com\"  in email Address Text Box",
  "keyword": "When "
});
formatter.match({
  "location": "AP_HomePageSearch_StepDefinition.user_enters_in_email_Address_Text_Box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Create an Account button",
  "keyword": "And "
});
formatter.match({
  "location": "AP_Login_StepDefinition.user_clicks_on_Create_an_Account_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be on Create an Account Page",
  "keyword": "Then "
});
formatter.match({
  "location": "AP_Login_StepDefinition.user_should_be_on_Create_an_Account_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is already on automation practice homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "AP_Login_StepDefinition.user_is_already_on_automation_practice_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on sign in button",
  "keyword": "When "
});
formatter.match({
  "location": "AP_Login_StepDefinition.user_clicks_on_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"mustakil@gmail.com\" in Email Address Text Box",
  "keyword": "And "
});
formatter.match({
  "location": "AP_Login_StepDefinition.user_enters_in_Email_Address_Text_Box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Create an Account button",
  "keyword": "And "
});
formatter.match({
  "location": "AP_Login_StepDefinition.user_clicks_on_Create_an_Account_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be on Create an Account Page",
  "keyword": "Then "
});
formatter.match({
  "location": "AP_Login_StepDefinition.user_should_be_on_Create_an_Account_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Create/register four accounts successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@practice_scenario_outline"
    }
  ]
});
formatter.step({
  "name": "User enters \"moose@gmail.com\"  in email Address Text Box",
  "keyword": "When "
});
formatter.match({
  "location": "AP_HomePageSearch_StepDefinition.user_enters_in_email_Address_Text_Box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Create an Account button",
  "keyword": "And "
});
formatter.match({
  "location": "AP_Login_StepDefinition.user_clicks_on_Create_an_Account_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be on Create an Account Page",
  "keyword": "Then "
});
formatter.match({
  "location": "AP_Login_StepDefinition.user_should_be_on_Create_an_Account_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is already on automation practice homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "AP_Login_StepDefinition.user_is_already_on_automation_practice_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on sign in button",
  "keyword": "When "
});
formatter.match({
  "location": "AP_Login_StepDefinition.user_clicks_on_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"mustakil@gmail.com\" in Email Address Text Box",
  "keyword": "And "
});
formatter.match({
  "location": "AP_Login_StepDefinition.user_enters_in_Email_Address_Text_Box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Create an Account button",
  "keyword": "And "
});
formatter.match({
  "location": "AP_Login_StepDefinition.user_clicks_on_Create_an_Account_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be on Create an Account Page",
  "keyword": "Then "
});
formatter.match({
  "location": "AP_Login_StepDefinition.user_should_be_on_Create_an_Account_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Create/register an account successfully (preferred way to write scenario)",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User enters Personal Information",
  "keyword": "When "
});
formatter.match({
  "location": "AP_Login_StepDefinition.user_enters_Personal_Information()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Address Information",
  "keyword": "And "
});
formatter.match({
  "location": "AP_Login_StepDefinition.user_enters_Address_Information()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Register button",
  "keyword": "And "
});
formatter.match({
  "location": "AP_Login_StepDefinition.user_clicks_on_Register_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should successfully be landed on My Account page",
  "keyword": "Then "
});
formatter.match({
  "location": "AP_Login_StepDefinition.user_should_successfully_be_landed_on_My_Account_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is already on automation practice homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "AP_Login_StepDefinition.user_is_already_on_automation_practice_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on sign in button",
  "keyword": "When "
});
formatter.match({
  "location": "AP_Login_StepDefinition.user_clicks_on_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"mustakil@gmail.com\" in Email Address Text Box",
  "keyword": "And "
});
formatter.match({
  "location": "AP_Login_StepDefinition.user_enters_in_Email_Address_Text_Box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Create an Account button",
  "keyword": "And "
});
formatter.match({
  "location": "AP_Login_StepDefinition.user_clicks_on_Create_an_Account_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be on Create an Account Page",
  "keyword": "Then "
});
formatter.match({
  "location": "AP_Login_StepDefinition.user_should_be_on_Create_an_Account_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Create/register an account successfully (practice way to write scenario)",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoketests"
    }
  ]
});
formatter.step({
  "name": "User clicks on Mr. radio button",
  "keyword": "When "
});
formatter.match({
  "location": "AP_HomePageSearch_StepDefinition.user_clicks_on_Mr_radio_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Mustakil\" in First Name Text Box",
  "keyword": "And "
});
formatter.match({
  "location": "AP_HomePageSearch_StepDefinition.user_enters_in_First_Name_Text_Box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Ali\" in Last Name Text Box",
  "keyword": "And "
});
formatter.match({
  "location": "AP_HomePageSearch_StepDefinition.user_enters_in_Last_Name_Text_Box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"mustakil.ali@gmail.com\" in Email Address Text Box in Personal Information",
  "keyword": "And "
});
formatter.match({
  "location": "AP_HomePageSearch_StepDefinition.user_enters_in_Email_Address_Text_Box_in_Personal_Information(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"123\" in Password Text Box",
  "keyword": "And "
});
formatter.match({
  "location": "AP_HomePageSearch_StepDefinition.user_enters_in_Password_Text_Box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects D.O.B in dropdowns",
  "keyword": "And "
});
formatter.match({
  "location": "AP_HomePageSearch_StepDefinition.user_selects_D_O_B_in_dropdowns()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Sign up for our newsletter! checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "AP_HomePageSearch_StepDefinition.user_clicks_on_Sign_up_for_our_newsletter_checkbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Rrecieve special offers from our partners! checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "AP_HomePageSearch_StepDefinition.user_clicks_on_Rrecieve_special_offers_from_our_partners_checkbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Mustakil\" in First Name Text Box under Address",
  "keyword": "And "
});
formatter.match({
  "location": "AP_HomePageSearch_StepDefinition.user_enters_in_First_Name_Text_Box_under_Address(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Ali\" in Last Name Text Box under Address",
  "keyword": "And "
});
formatter.match({
  "location": "AP_HomePageSearch_StepDefinition.user_enters_in_Last_Name_Text_Box_under_Address(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"TEchCircle\" in Company Text Box",
  "keyword": "And "
});
formatter.match({
  "location": "AP_HomePageSearch_StepDefinition.user_enters_in_Company_Text_Box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"14631 Lee Hw\" in Address line one text box",
  "keyword": "And "
});
formatter.match({
  "location": "AP_HomePageSearch_StepDefinition.user_enters_in_Address_line_one_text_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"#301\" in Address line two text box",
  "keyword": "And "
});
formatter.match({
  "location": "AP_HomePageSearch_StepDefinition.user_enters_in_Address_line_two_text_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Centreville\" in City text box",
  "keyword": "And "
});
formatter.match({
  "location": "AP_HomePageSearch_StepDefinition.user_enters_in_City_text_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects own state",
  "keyword": "And "
});
formatter.match({
  "location": "AP_HomePageSearch_StepDefinition.user_selects_own_state()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selencts own country",
  "keyword": "And "
});
formatter.match({
  "location": "AP_HomePageSearch_StepDefinition.user_selencts_own_country()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"7034555353\" in Mobile Phone textbox",
  "keyword": "And "
});
formatter.match({
  "location": "AP_HomePageSearch_StepDefinition.user_enters_in_Mobile_Phone_textbox(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Register button",
  "keyword": "And "
});
formatter.match({
  "location": "AP_Login_StepDefinition.user_clicks_on_Register_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should successfully be landed on My Account page",
  "keyword": "Then "
});
formatter.match({
  "location": "AP_Login_StepDefinition.user_should_successfully_be_landed_on_My_Account_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/AP_verifyDressesPageFeatures.feature");
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
  "status": "passed"
});
formatter.step({
  "name": "User is already on automation practice homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "AP_Login_StepDefinition.user_is_already_on_automation_practice_homepage()"
});
formatter.result({
  "status": "passed"
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
  "status": "passed"
});
formatter.step({
  "name": "successfully verifies three sub category buttons exist",
  "keyword": "Then "
});
formatter.match({
  "location": "AP_verifyDressesPageFeatures.successfully_verifies_three_sub_category_buttons_exist()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});