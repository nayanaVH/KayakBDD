package com.qa.po;


import java.util.List;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import com.qa.util.TestBase;

public class poHomePage extends TestBase {
	Logger log = Logger.getLogger(getClass().getSimpleName());

	@FindBy(xpath="//button[contains(@class,'js-remove-selection')]")
	List<WebElement> dismissDefault;

	@FindBy(xpath="//input[contains(@id,'origin-airport')]")
	List<WebElement> fLocation;


	@FindBy(xpath="(//button[@aria-label='Search flights'])[1]") 
	WebElement searchFlightIcon;

	@FindBy(xpath="(//div[@class=\"viewport\"])[13]/div/button")
	WebElement closePopUp;

	@FindBy(xpath="//span[contains(text(),'Save price alert')]") 
	WebElement popUp_Save_price_alert;

	@FindBy(xpath="//*[contains(@id,'booking-link')][@role='button'][contains(@aria-label,'View Deal')]/span[@class='custom-text']")
	List<WebElement> sRow;

	public poHomePage() {
		PageFactory.initElements(driver, this);
	}

	// verify title of page
	public String verifyHomePageTitle() {
		return driver.getTitle();
	}


	public void setFromLocation(String fromLocation) throws InterruptedException {


		List <WebElement> cancelList=dismissDefault;
		for(WebElement cancel : cancelList) {
			if(cancel.isDisplayed()) {
				cancel.click();
				System.out.println("Clicked on Cancel Button !!!");
				break;
			}
		}

		List <WebElement> webTextBoxList=fLocation;
		for(WebElement textBox : webTextBoxList) {
			if(textBox.isDisplayed()) {
				textBox.click();
				System.out.println("Clicked on Text Box !!!");
				textBox.sendKeys(fromLocation);
				textBox.sendKeys(Keys.ENTER);

			}
		}
	}	

	public void setToLocation(String toLocation) throws InterruptedException {
		List <WebElement> webTextBoxList2=driver.findElements(By.xpath("//div[contains(@id,'destination-airport-display-inner')]"));
		System.out.println("Number of Elements in the List for Destination is : "+webTextBoxList2.size());
		for(WebElement textBox : webTextBoxList2) {
			if(textBox.isDisplayed()) {
				textBox.click();
				System.out.println("Clicked on Text Box Destination  !!!");
				WebElement Destination=driver.findElement(By.xpath("//input[contains(@id,'destination-airport')]"));

				Destination.sendKeys(toLocation);
				try {
					Thread.sleep(1000);
				} catch (InterruptedException e) {
					e.printStackTrace();
				}
				Destination.sendKeys(Keys.TAB);


			}
		}


	}


	public void setStartDate(String arrivalDate) {
		WebElement startTime=driver.findElement(By.xpath("//div[contains(@id,'depart-input')]"));
		startTime.click();
		startTime.clear();
		startTime.sendKeys(arrivalDate);
	}

	public void setEndDate(String destDate) {
		WebElement returnTime=driver.findElement(By.xpath("//div[contains(@id,'return-input')]"));
		returnTime.click();
		returnTime.clear();
		returnTime.sendKeys(destDate);
		returnTime.sendKeys(Keys.TAB);
		searchFlightIcon.sendKeys(Keys.ENTER);

	}

	public void closePopUpAlert()   throws Exception{
		try {
			oBroUtil.waitForElementVisible(driver, popUp_Save_price_alert, 20);	
			oBroUtil.ufClick(closePopUp);
		}catch(Exception ea) {
		}
	}


	public void selectRow(int rowNumber) {
		try {
			Thread.sleep(1000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		List<WebElement> viewList=sRow;
		if(viewList.size() <= rowNumber) {
			System.out.println("Your input is Less than Actual Search result ! please Try with another lesser Value ");
		}else {

			viewList.get(rowNumber-1).click();
		}
	}
	public void closeBrowser()throws Exception{

		driver.close();
	}





}
