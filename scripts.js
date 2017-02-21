/**
 * @author Irem Karakaya
 */
	/*  I want to look at the number of Bosnians ho made claims for asylum in the European Union between the years of 1995-2004*
			 /* More than 71,000 people from Bosnia Herzegovina made claims for asylum in the eu countries. */
			var number = 71000;
			/* My string will be Bosnians*/
			var citizens = "Bosnians";
			/*My boolean is on the features of coutries where Bosnians applied for asylum*/
			var assylum_countries_muslim = false;
			/*My list contains coutries where Bosnians applied for asylum */
			var assylum_countries = ["Germany", "Austria", "Belgium", "UK", "Denmark", "Italy"];
			/*These are the properties of countries received asylum from Bosnians */
			/*If I got the assigmemt's second part of e(at least one of which must be a list, and another of which must be an object)*/
			var features_assylum_countries = {
				"location" : "Europe",
				"economicstatus" : "wealthy",
				"religion" : "Christian",
				"population" : "slow growing"
			}
			Christian = ["Orthodox", "Protestant", {
				"Catholic" : "Germans"
			}]

			console.log(assylum_countries[0]);

			console.log(features_assylum_countries.location);

			/* The below is actualy a list of objects; each object is an article */

			var my_articles = [{

				"title" : "The Scale of the Migrant Crisis, From 160 to Millions",

				"source" : "nytimes",

				"url" : "https://www.nytimes.com/interactive/2015/09/10/world/europe/scale-of-migrant-crisis-in-europe.html",

				"image" : "https://blog.webkid.io/refugee-crisis-visualization-collection/1442402221_e3cd2e19d79a4aa7baac8bf878d95080.png",

				"summary" : "Summary here."

			}, {

				"title" : "Comprendre la crise des migrants en Europe en cartes, graphiques et vidéos",

				"source" : "lemonde",

				"url" : "https://www.nytimes.com/interactive/2015/09/10/world/europe/scale-of-migrant-crisis-in-europe.html",

				"image" : "https://blog.webkid.io/refugee-crisis-visualization-collection/1442402221_e3cd2e19d79a4aa7baac8bf878d95080.png",

				"summary" : "Summary here."

			}, {

				"title" : "Comprendre la crise des migrants en Europe en cartes, graphiques et vidéos",

				"source" : "lemonde",

				"url" : "https://www.nytimes.com/interactive/2015/09/10/world/europe/scale-of-migrant-crisis-in-europe.html",

				"image" : "https://blog.webkid.io/refugee-crisis-visualization-collection/1442402221_e3cd2e19d79a4aa7baac8bf878d95080.png",

				"summary" : "Summary here."

			}, {

				"title" : "Going Home to Falluja, a City Slipping Back Into Turmoil",

				"source" : "nytimes",

				"url" : "https://www.nytimes.com/2017/02/10/world/middleeast/falluja-iraq-isis.html?rref=collection%2Ftimestopic%2FRefugees%20and%20Displaced%20People&action=click&contentCollection=timestopics&region=stream&module=stream_unit&version=latest&contentPlacement=6&pgtype=collection",

				"image" : "",

				"summary" : "Summary here."

			}];

			/*Goal: sort through my list of articles and console.log only the ones that come from the new york times. */
			/*If it's not from the nytimes, console.log "Not NYTimes"

			 /*To go through th list, create a for loop! */

			function IDNYTimes(listOfArticles) {

				for (var counter = 0; counter < listOfArticles.length; counter++) {
					/*everything that I want to do each item, must be between these brackets*/

					var currentArticle = listOfArticles[counter];

					if (currentArticle.source == "nytimes") {
						console.log(listOfArticles[counter]);
					} else {
						console.log("Not NYTimes");
					}
				}
			}

			/*Call the newly-created function.*/
			IDNYTimes(my_articles);
			/*Calling it with my first list.*/
			/*IDNYTimes(my_articles_2);*/
			
			/* My list of object is about the related studies and reports about the topic I am planning to report for my first story.
			 * That’s why I called my list as related_reports. My first object is a report from UNICEF.
			 * I decided to include the report headline, source and link, the basics to reach out the report.
			 * I have to start and end my list with brackets and my objects needs to be in curly brackets*/
			var related_reports = [{
				"headline" : "Uprooted: The growing crisis for refugee and migrant children",
				"publication" : "UNICEF",
				"article_link" : "https://www.unicef.org/publications/index_92710.html",

			},
			/*My second object is again a UNICEF report on Central American children.
			 * I again ave the basic properties to reach out the report
			 * I didn't close my bracket because I am not done with my list. Instead I closed the curly bracket and open a new one to define new properties*/
			{
				"headline" : "Broken Dreams: Central American minors' dangerous journey to the United States",
				"publication" : "UNICEF",
				"link" : "http://reliefweb.int/report/honduras/broken-dreams-central-american-children-s-dangerous-journey-united-states",

			},
			/* My third object is an opinion piece by Amnesty International.
			 * Properties are key elements about the piece.
			 * I again close and open only curly brackets. I am not done with my list yet.*/
			{
				"headline" : "How President Trump’s spat with Mexico will crush Central American refugees",
				"_publication" : "Amnesty International",
				"link" : "https://www.amnesty.org/en/latest/news/2017/02/how-president-trump-s-spat-with-mexico-will-crush-central-american-refugees",

			},
			/* My last object is an academic paper on Central African children.
			 * Its headline and link gives a general idea and I believe giving credit to source is important.
			 * I will close my list after adding new properties.*/
			{
				"headline" : "Unaccompanied migrant children from Central America: Context, Causes, and Responses",
				"publication" : "CLALS Working Paper Series",
				"link" : "https://papers.ssrn.com/sol3/papers2.cfm?abstract_id=2524001",

			}];
			/*I sort through my list of related reports to see which ones mention aboout children in the headline and illustrate them in console.
			 * That's why I am creating a loop and make my coding to count it from the 0 and countinue counting by adding one as this is the number comoputers starts to count with */
			for (var counter = 0; counter < related_reports.length; counter++) {
				var camArticle = related_reports[counter];

				/*Here goes my if statement. I tell console that if the headlines includes the word "children" show them to me.
				 If not just print a message saying these ones doesn't talk about the children specifically*/
				if (camArticle.headline.includes("children")) {
					console.log(related_reports[counter]);
				} else {
					console.log("Not focusing on children");
				}
			}
