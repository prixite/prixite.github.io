---
title: 'Integrating Scrapy with Django'
date: 'June 20, 2023'
excerpt: "In today's data-driven world, web scraping plays a crucial role in gathering information from various websites."
cover_image: '/images/posts/integratingscrapy/cover.png'
author: 'Aiza Tariq'
---

<div className="integrating_scrapy">
<div className="blog-heading" >Integrating Scrapy with Django: A Powerful Combination for Web Scraping and Web Application Development</div>

<div className="first-paragraph">In today's data-driven world, web scraping plays a crucial role in gathering information from various websites. Data ranging from contacts and emails to anything versatile like property details or product Information can be scrapped to build custom solutions

Simultaneously, web application development using frameworks like Django allows us to build robust and scalable applications. Integrating Scrapy; a powerful web scraping framework, with Django, can provide a seamless workﬂow for extracting and integrating data into web applications. Let’s explore the process of integrating Scrapy with Django.</div>

<h6>Step 1: Create and activate the virtual environment</h6>

<div className="code-block">
    <p className="p">python3 -m venv myenv</p>
    <p className="p">source myenv/bin/activate</p>
</div>

where myenv is the name of the virtual environment

<h6>Step 2: Install Django</h6>

You can install Django using the following command:

<div className="code-block"><p className="p">pip install django</p></div>

<h6>Step 3: Create a Django Project</h6>

Run the following command to create a new Django project:

<div className="code-block"><p className="p">django-admin startproject project</p></div>

Replace "project" with the desired name for your Django project.

<h6>Step 4: Create a new Django App</h6>

Navigate into the project directory using the command:

<div className="code-block"><p className="p">cd project</p></div>

Run the following command to create a new Django app:

<div className="code-block"><p className="p">python3 manage.py startapp app</p></div>

Replace "app" with the desired name for your app.

<h6>Step 5: Configure Django Settings</h6>

- Open the settings.py file located inside the project directory.
- In the INSTALLED_APPS list, add the name of your app (e.g., 'app') to include it in the project.
- Configure other project settings such as database connection, and static files, according to your requirements.

<h6>Step 6: Install Scrapy</h6>

To begin, ensure that Scrapy is installed in your Python environment. You can install it using the following command:

<div className="code-block"><p className="p">pip install scrapy</p></div>

<h6>Step 7: Create a Scrapy Project</h6>

Navigate to the root folder of your Django project and create a Scrapy project. Run the following command:

<div className="code-block"><p className="p">scrapy startproject scraper</p></div>

Replace "scraper" with the desired name for your Scrapy project.

Remove the top-level scraper directory so the structure is as follows:

- manage.py
- scrapy.cfg
- scraper

<h6>Step 8: Generate a Spider</h6>

You can start your ﬁrst spider with the command:

<div className="code-block">
    <p className="p">cd scraper</p>
    <p className="p">scrapy genspider website_crawler domain</p>
</div>

Replace "website_crawler" with the desired name for your spider, and "domain" with the target website's domain.

Our folder structure will somehow look like this:

<div className="image">
    <img src="/images/posts/integratingscrapy/photo1.png" alt="folder structure"/>
</div>

As seen, ** project ** is the name of our django project, ** app ** is the name of our django app, ** scraper ** is the name of our scrapy project and ** website_crawler ** is the name of our spider.

<h6>Step 9: Connect Scrapy to Django</h6>

To access Django models from Scrapy, establish a connection between the two frameworks. Open the "settings.py" ﬁle within the "scraper" folder and add the following code snippet:

<div className="code-block">
    <p className="p">import os</p>
    <p className="p">import sys</p>
    <p className="p">import django</p>
</div>

<p>\# Django Integration</p>

<div className="code-block">
    <p className="p">sys.path.append(os.path.dirname(os.path.abspath(".")))</p>
    <p className="p">os.environ["DJANGO_SETTINGS_MODULE"] = "project.settings"</p>
    <p className="p">django.setup()</p>
</div>

<h6>Step 10: Uncomment Pipeline Configuration:</h6>

To enable the pipeline for processing scraped items and interacting with Django models, uncomment the following lines in the "settings.py" ﬁle within the "scraper" folder:

<div className="code-block">
    <p className="p">ITEM_PIPELINES = {</p>
    <p className="p">"scraper.pipelines.ScraperPipeline": 300,</p>
    <p className="p">}</p>
</div>

<h6>Step 11: Start the Spider</h6>

You can now run your Scrapy spider from the root directory of your django project with the following command:

<div className="code-block"><p className="p">scrapy crawl scraper</p></div>

Replace "scraper" with the name of your Scrapy spider.

Following these steps will successfully integrate Scrapy with your Django project. Your Scrapy Spider can now access and interact with Django models, enabling seamless data extraction and integration into your Django application. Test it out and leave a comment about how it went for you! Happy Scraping!

</div>
