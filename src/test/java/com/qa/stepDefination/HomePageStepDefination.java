package com.qa.stepDefination;

import org.apache.log4j.Logger;
import org.junit.Assert;

import com.qa.po.poHomePage;
import com.qa.util.TestBase;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class HomePageStepDefination extends TestBase {

	Logger log = Logger.getLogger(getClass().getSimpleName());
	poHomePage homepage;

	@Given("^User is on Kayak Search page$")
	public void user_is_on_Kayak_Search_page() throws Throwable {
		TestBase.intialisation();
		homepage = new poHomePage();
	}

	@When("^User Verify the PageTitle \"([^\"]*)\"$")
	public void user_Verify_the_PageTitle(String expectedTitle) throws Throwable  {
		homepage.verifyHomePageTitle();
	}

	@When("^User Closes Defualt Selection and Enters From Location \"([^\"]*)\"$")
	public void user_Closes_Defualt_Selection_and_Enters_From_Location(String fromLocation) throws Throwable {
		homepage.setFromLocation(fromLocation);
	}

	@Then("^User Enters To Location \"([^\"]*)\"$")
	public void user_Enters_To_Location(String toLocation) throws Throwable {
		homepage.setToLocation(toLocation);
	}

	@Then("^User Enter Start Date \"([^\"]*)\"$")
	public void user_Enter_Start_Date(String sDate) throws Throwable {
		homepage.setStartDate(sDate);
	}

	@Then("^User Enter End Date \"([^\"]*)\"$")
	public void user_Enter_End_Date(String eDate) throws Throwable {
		homepage.setEndDate(eDate);
		homepage.closePopUpAlert();   
	}

	@When("^User Selects Row in Search Selection$")
	public void User_Selects_Row_in_Search_Selection(){
		homepage.selectRow(1);
	}

	@Then("^Close the Browser$")
	public void close_the_Browser() throws Throwable {
		homepage.closeBrowser();
	}


}
