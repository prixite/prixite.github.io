---
title: 'Web Scraping with Chrome Extensions'
date: 'June 20, 2023'
excerpt: 'Web scraping is the automated extraction of data from websites. No technical knowledge is required when scraping with chrome extensions.'
cover_image: '/images/posts/scrapingchromeextensions/thumbnail.png'
author: 'Umair Jameel'
---

#### What is Web Scraping?

Web scraping is the automated extraction of data from websites. It involves writing software or using tools to gather information from web pages and store it in a structured format for further analysis or use.

Typically, web scraping involves sending HTTP requests to a website and then parsing the HTML or XML content of the web page to extract the desired data. This can be done using programming languages like Python, Node, chrome extensions etc.

#### Chrome extensions for web scraping

There are a lot of extensions in chrome store for scraping data, but we will be using 2 very useful and highest rated extensions as shared below:

1. [Scraper](https://chrome.google.com/webstore/detail/scraper/mbigbapnjcgaffohmbkdlecaccepngjd)
2. [Web Scraper](https://chrome.google.com/webstore/detail/web-scraper-free-web-scra/jnhgnonknehpejjnehehllkliplmbmhn)

<div style="padding: 10px; margin: 30px; border: 2px solid #e7e7e7; border-radius: 8px;">
  <img src="/images/posts/scrapingchromeextensions/scraper.png#image-70" alt="Photo 1" style="width: 30%;">
</div>
<div style="padding: 10px; margin: 30px; border: 2px solid #e7e7e7; border-radius: 8px;">
  <img src="/images/posts/scrapingchromeextensions/web-scraper.png#image-70" alt="Photo 1" style="width: 30%;">
</div>

#### Let's work with Scraper

Scraper is a very simple data scraping extension for facilitating online research when you need to get data into spreadsheet with very few clicks and steps. It saves a lot of time when you need to quickly fetch similar kinds of data from a page.

Once you install this extension in chrome. Open any web page which You want to scrape. Let's try it with [imdb](https://www.imdb.com/search/title/?title_type=feature&year=2023-01-01,2023-12-31) for getting the title of movies in 2023.

So, currenlty there are 50 movies show on first page. We need to select the title of first movie card (make sure you don't select the empty white spaces from start or end of title text). Once it is selected, right click on it and click <b>scrape similar</b> link. It will open up a window with all the results.

##### Movies:

<div style="padding: 10px; margin: 30px; border: 2px solid #e7e7e7; border-radius: 8px;">
  <img src="/images/posts/scrapingchromeextensions/movies.png#image-70" alt="Photo 1" style="width: 40%;">
</div>

##### Results:

<div style="padding: 10px; margin: 30px; border: 2px solid #e7e7e7; border-radius: 8px;">
  <img src="/images/posts/scrapingchromeextensions/results.png#image-70" alt="Photo 1" style="width: 60%;">
</div>
In the text box, you can see that it selected the inner text of all elements create using <b>//h3/a</b> tags. If you have any idea about HTML, you can modify it as per your requirements.

You can select any element from any web page. It will find out all other similar elements within that page and make it a part of results, even if there are 1000s of similar data exists on that page.
From the results window, you can copy the results or export the results to Google Drive.

Now let's talk about some advance scraping using 2nd extension <b>Web Scraper</b>

#### Let's work with Web Scraper now

Download and install Web Scraper from the link. [Web Scraper](https://chrome.google.com/webstore/detail/web-scraper-free-web-scra/jnhgnonknehpejjnehehllkliplmbmhn)

Once it is installed in your chrome browser, right click on any web page and click on inspect. Where you will see a new tab with name <b> Web Scraper </b>.

<div style="padding: 10px; margin: 30px; border: 2px solid #e7e7e7; border-radius: 8px;">
  <img src="/images/posts/scrapingchromeextensions/scrapertab.png" alt="Photo 1" style="width: 80%;">
</div>

So, the website which we will be scraping is https://www.whatmobile.com.pk/.
First, we will fetch the links of all the phone brands from home page and then navigate into each of the brands page one by one to get the title and price of each mobile phone.

Before starting using it, go to the <b>Manage Extension</b> page by right clicking on the extension icon. On this page, add the url of website which you want to scrape and turn the toggles ON as shown in the image below.

<div style="padding: 10px; margin: 30px; border: 2px solid #e7e7e7; border-radius: 8px;">
  <img src="/images/posts/scrapingchromeextensions/manageextension.png" alt="Photo 1" style="width: 60%;">
</div>

Now come back to Web Scraper tab in the inspect window. Click on <b>create new sitemap</b> dropdown and create a new sitemap by entering the url of web page and give it any meaningful name you want. Finally click on <b>Create Sitemap</b> button.

<div style="padding: 10px; margin: 30px; border: 2px solid #e7e7e7; border-radius: 8px;">
  <img src="/images/posts/scrapingchromeextensions/createsitemap.png" alt="Photo 1" style="width: 40%;">
</div>

Once a new sitemap is created, it will show a table with rows of all sitemaps are created. It will show only 1 row as we are just starting using it. If we click on its row, it will take us to another page, showing <b>\_root</b> link (representing root url of web page).

It will also show a button <b>Add new selector</b> which we need to click on and create a new selector.

<div style="padding: 10px; margin: 30px; border: 2px solid #e7e7e7; border-radius: 8px;">
  <img src="/images/posts/scrapingchromeextensions/selector.png" alt="Photo 1" style="width: 60%;">
</div>

In the form for creating a new selector, add an id (which I have given the name <b>brands</b>), select Link from dropdown (since we need to navigate to each brands page), click on <b>Multiple</b> checkbox and then click on <b>select</b> button.

Once you do this, it will show a toolbar over the web page. You will then need to click at least 2 (similar) elements (I have clicked on top 2 brand names). It will then analyse the whole page and automatically select all other similar elements by itself.

Finally, click on green button <b>Done selecting</b>.

Once you do perform these steps, it will show the selector for brands as shown below.

<div style="padding: 10px; margin: 30px; border: 2px solid #e7e7e7; border-radius: 8px;">
  <img src="/images/posts/scrapingchromeextensions/css.png" alt="Photo 1" style="width: 60%;">
</div>

Finally, click on <b>Save Selector</b> button. It will show a table with all the selector we have created so far (currently only one).

Before moving forward and add more selectors for the products title and price. Let's try to scrape the brands links which we already setup.
So now, click on the <b>Sitemap Whatmobile</b> dropdown and click on <b>Scrape</b> link.

<div style="padding: 10px; margin: 30px; border: 2px solid #e7e7e7; border-radius: 8px;">
  <img src="/images/posts/scrapingchromeextensions/scrapebutton.png#image-70" alt="Photo 1" style="width: 40%;">
</div>

It will take you to next screen, where you can keep the values 2000 in both the textboxes. Click on <b>Start Scraping</b> button. It will open up chrome windows and start scraping the data. You will see the following page containing a table of all brand titles, urls and links toward each page are visible.

<div style="padding: 10px; margin: 30px; border: 2px solid #e7e7e7; border-radius: 8px;">
  <img src="/images/posts/scrapingchromeextensions/brandresults.png" alt="Photo 1" style="width: 70%;">
</div>

Note that if you see any error asking you to use their cloud space. Just click on "Refresh Data" button.
If you want to export this sitemap or the data, click on Sitemap Whatmobile dropdown and it will show you the options.

Note, let's scrape the titles and prices of each mobile phone in each brands url that you have already scraped.

Click on <b>Sitemap</b> tab from top, it will show you a table with columns ID and Domain. Click on its table first row (currently only 1) and it will take you to next table where you will see the already created brands selector. Click on this row and it will take you to next page, where we need to create the selectors for each brand.

This is what you will see inside brands page.

<div style="padding: 10px; margin: 30px; border: 2px solid #e7e7e7; border-radius: 8px;">
  <img src="/images/posts/scrapingchromeextensions/secondselector.png" alt="Photo 1" style="width: 30%;">
</div>

The reason, we will be creating selectors in this window for each mobile product's title is because each mobile product belongs to separate brand and brands selector will be the parent of each product selector.

Now first click on any of the brand (e.g. Samsung mobile) from the web page, so we should be able to select the titles of mobile phone while creating the selector in Web Scraper window.

Now follow the same steps that we have discussed above (when we created selector for brands) in order to select the titles of each mobile phone as shown in image below. Finally click on "Save selector" button.

<div style="padding: 10px; margin: 30px; border: 2px solid #e7e7e7; border-radius: 8px;">
  <img src="/images/posts/scrapingchromeextensions/producttitle.png" alt="Photo 1" style="width: 60%;">
</div>
In the above image, you can see that I have set the type to Text, because we don't want to navigate inside each product, but only want to fetch the title text. You can also see that we have set the parent of this selector to <b>brands</b> but not \_root as before.

Now when we will run the scraper, it will take around 3-4 minutes to scrape the titles of all the products inside each brands page. Click on <b>Refresh Data</b> button to see the updated results.

<div style="padding: 10px; margin: 30px; border: 2px solid #e7e7e7; border-radius: 8px;">
  <img src="/images/posts/scrapingchromeextensions/producttitles.png#image-70" alt="Photo 1" style="width: 60%;">
</div>

This is awesome 🎉

In the above image, you can see that it has appended the product's title column as well, belongs to its brand title.

##### Your Task:

Now go to the brands page inside <b>Web Scraper</b> where we have created the selector for product title. Create another selector for each mobile <b>product price</b> parallel to product's title following the same steps we have followed for product's title. Finally run the scraper again and see the results.

This is how the brands page should look like.

<div style="padding: 10px; margin: 30px; border: 2px solid #e7e7e7; border-radius: 8px;">
  <img src="/images/posts/scrapingchromeextensions/productprice.png#image-70" alt="Photo 1" style="width: 70%;">
</div>

If we click on "Selector Graph" from the dropdown "Sitemap Whatmobile". We can also see the graph like this:

<div style="padding: 10px; margin: 30px; border: 2px solid #e7e7e7; border-radius: 8px;">
  <img src="/images/posts/scrapingchromeextensions/graph.png#image-70" alt="Photo 1" style="width: 60%;">
</div>

This is how we can use these awesome chrome extensions to scrape the data from any website we want and navigate to any page with respect to its parent selectors. Same way, we can add selectors for pagination numbers inside any page and set the parent of it.

There can be few schnerios on some web pages or some times webpages UI is quite complex that these chrome extension can't fullfil our requirements. This is when we have to manually write scripts (in node or python) to scrape the data from web pages. But mostly, I think these extensions fulfill the purpose.

Happy learning 🎉
