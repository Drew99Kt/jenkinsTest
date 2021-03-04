package step_definitions;

import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.AP_HomePage;
import pages.AP_SearchResultsPage;

public class AP_HomePageSearch_StepDefinition {
	
	
	AP_HomePage homepage = new AP_HomePage();
	AP_SearchResultsPage results = new AP_SearchResultsPage();
	
	@When("User enters a search term")
	public void user_enters_a_search_term() {
	 homepage.searchbox.sendKeys("t-shirt");
	}

	@Then("Search box should contain the search term")
	public void search_box_should_contain_the_search_term() {
	
	}
	
	@When("User enters {string} in search engine")
	public void user_enters_in_search_engine(String dress) {
	  
	}

	@When("User clicks on search button")
	public void user_clicks_on_search_button() {
	  
	}

	@Then("User should be on Search - My Store page")
	public void user_should_be_on_Search_My_Store_page() {
	   
	}

	@Then("Blouse option should be displayed")
	public void blouse_option_should_be_displayed() {

	}
	@Then("safheihgrs")
	public void safheihgrs() {
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	@When("User enters {string}  in email Address Text Box")
	public void user_enters_in_email_Address_Text_Box(String string) {
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	@When("User clicks on Mr. radio button")
	public void user_clicks_on_Mr_radio_button() {
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	@When("User enters {string} in First Name Text Box")
	public void user_enters_in_First_Name_Text_Box(String string) {
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	@When("User enters {string} in Last Name Text Box")
	public void user_enters_in_Last_Name_Text_Box(String string) {
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	@When("User enters {string} in Email Address Text Box in Personal Information")
	public void user_enters_in_Email_Address_Text_Box_in_Personal_Information(String string) {
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	@When("User enters {string} in Password Text Box")
	public void user_enters_in_Password_Text_Box(String string) {
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	@When("User selects D.O.B in dropdowns")
	public void user_selects_D_O_B_in_dropdowns() {
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	@When("User clicks on Sign up for our newsletter! checkbox")
	public void user_clicks_on_Sign_up_for_our_newsletter_checkbox() {
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	@When("User clicks on Rrecieve special offers from our partners! checkbox")
	public void user_clicks_on_Rrecieve_special_offers_from_our_partners_checkbox() {
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	@When("User enters {string} in First Name Text Box under Address")
	public void user_enters_in_First_Name_Text_Box_under_Address(String string) {
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	@When("User enters {string} in Last Name Text Box under Address")
	public void user_enters_in_Last_Name_Text_Box_under_Address(String string) {
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	@When("User enters {string} in Company Text Box")
	public void user_enters_in_Company_Text_Box(String string) {
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	@When("User enters {string} in Address line one text box")
	public void user_enters_in_Address_line_one_text_box(String string) {
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	@When("User enters {string} in Address line two text box")
	public void user_enters_in_Address_line_two_text_box(String string) {
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	@When("User enters {string} in City text box")
	public void user_enters_in_City_text_box(String string) {
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	@When("User selects own state")
	public void user_selects_own_state() {
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	@When("User selencts own country")
	public void user_selencts_own_country() {
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	@When("User enters {string} in Mobile Phone textbox")
	public void user_enters_in_Mobile_Phone_textbox(String string) {
	    // Write code here that turns the phrase above into concrete actions
	    
	}

}
